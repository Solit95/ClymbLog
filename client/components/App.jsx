// import React, { Component } from 'react';
import React, {useState} from 'react';
import CreatePage from './CreatePage.jsx'



const App = () => {

  const [journal, setJournal] = useState(['hello i am state']);
  
  
    return (
        <div>
            <h1>ClimbLog</h1>
            <CreatePage
            journal={journal}
            />
        </div>
    )    
  }
export default App