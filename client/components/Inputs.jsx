import React, { setState, useEffect } from 'react';



const Inputs = (props) => {

  const handleSubmit = (e) => {

    e.preventDefault() 
    
    const name = document.getElementById('name').value
    const grade= document.getElementById('grade').value
    const area = document.getElementById('area').value
    const style = document.getElementById('style').value
    const sendstyle = document.getElementById('send-style').value
    const date = document.getElementById('date').value
    const notes = document.getElementById('notes').value
    
    const requestBody = {name, grade, area, style, sendstyle, date, notes};
    if(name === ''){
      return alert('You must at least enter a name to create a new entry');  
    }
    console.log(requestBody)
    // Send data to the backend via POST
    fetch('http://localhost:8080/', {  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",  
      mode: 'cors', 
      body: JSON.stringify(requestBody) // body data type must match "Content-Type" header
    })
    .then((data) => data.json())
    .then((data) => {
        props.setJournal([...props.journal, ...data])
    })
    .catch((err) => {
        console.log(err)
    })


    e.target.reset()
  }


  return (
    <div class='inputForm' >
      <form name='inputs' onSubmit={handleSubmit}  >
        <label htmlFor='name'>Climb name</label><br/>
        <input type='text' id='name' name='name'/><br/>

        <label htmlFor="grade">Grade</label><br/>
        <input type="text" id="grade" name="grade"></input><br/>

        <label htmlFor="area">Area</label><br/>
        <input type="text" id="area" name="area"></input><br/>

        <label htmlFor="style">Style</label><br/>
        <input type="text" id="style" name="style"></input><br/>

        <label htmlFor="send-style">Send-style</label><br/>
        <input type="text" id="send-style" name="send-style"></input><br/>

        <label htmlFor="date">Date</label><br/>
        <input type="text" id="date" name="date"></input><br/>

        <label htmlFor="notes">Notes</label><br/>
        <input type="text" id="notes" name="notes"></input><br/>

        <input type="submit" id="submit" name="submit" ></input>
      </form>   
    </div>
  ) 
}

export default Inputs;

