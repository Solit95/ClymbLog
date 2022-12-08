import React, { setState } from 'react';
import Inputs from './Inputs.jsx'

const CreatePage = (props) => {
  
  return (
    <div >
      <h2>Enter a new journal entry or click the journal entries link to see a list of climbs you've done</h2>
        
        
      {/* <a href='#'>Go to Journal Entries </a> */}
      <Inputs
        journal={props.journal}
      />
      <br/>
      <form>
          <input type="submit" id="journal" value='Journal' ></input>  
      </form>
      {props.journal}
    </div>  
  )    
}


export default CreatePage

  