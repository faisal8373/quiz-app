import React from 'react'
import './Style.css'

function Question(props) {
    console.log('question', props.question) 
    return (
        <div>
           <h1>{props.question.question}</h1>

           {props.question.options.map((item)=>{
  
  return <div className='input'><input type="radio" id={item} name={props.question.question} value={item} />
  <label for={item}>{item}</label> <br />
  </div>
})}
           
        </div>
    )
}

export default Question
