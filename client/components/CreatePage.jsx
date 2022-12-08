import React, { useState, setState, useEffect } from 'react';
import Inputs from './Inputs.jsx';

const CreatePage = () => {

  const [journal, setJournal] = useState([]);
  
  const handleGet = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/climbs', {  
      body: JSON.stringify() 
    })
    .then((data) => data.json())
    .then((data) => {
      setJournal([...data])
    //   console.log('state',journal)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name
    const requestBody = {name}
    console.log(requestBody.name)
    fetch('http://localhost:8080/climbs', {  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "DELETE",  
          mode: 'cors', 
          body: JSON.stringify(requestBody)  
    })
    .then((data) => data)
    .then((data) => {
      setJournal(journal.filter(obj=> obj.name !== requestBody.name ))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  
  return (
    <div class='createPage' >
      <h2>Enter a new journal entry or click the journal entries link to see a list of climbs you've done</h2>
        
        
      <Inputs
        journal={journal}
        setJournal={setJournal}
        handleGet={handleGet}
      />
      <br/>
      <form onSubmit={handleGet} >
          <input type="submit" id="journal" value='Journal' ></input>  
      </form>
        <div class='table'>  
            <table>
                <tr>
                <th>Climb name</th>
                <th>Grade</th>
                <th>Area</th>
                <th>Style</th>
                <th>Send-Style</th>
                <th>Date</th>
                <th>Notes</th>
                </tr>
                {journal.map((val,key) =>{
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.grade}</td>
                        <td>{val.area}</td>
                        <td>{val.style}</td>
                        <td>{val.sendstyle}</td>
                        <td>{val.date}</td>
                        <td>{val.notes}</td>
                        <td>
                          <form  >
                            <input onClick={handleDelete} type="submit" id="delete" value='delete' name={val.name}></input>  
                          </form> 
                        </td>
                    </tr>
                )
                })}
            </table>
        </div> 
    </div>  
  )    
}


export default CreatePage

  