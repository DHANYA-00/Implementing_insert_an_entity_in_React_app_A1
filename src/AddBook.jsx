import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';


  

function AddBook() {
    const nav=useNavigate();

    const handleSubmit=()=>{
        nav('/')
    }

  return (
    
        <div className='form'>
            <form>
                <input type="text" placeholder='Title'></input><br></br>
                <input type='text' placeholder='Author'></input><br></br>
                <textarea placeholder='Description'></textarea><br></br>
                <input type='file'></input><br></br><br></br>
                <button className='submit-button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>

  
  )
}

export default AddBook