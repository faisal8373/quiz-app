import React from 'react';
import { useState } from 'react';
import './Style.css'

function Question(props) {
    const [cor, setCor] = useState(0);
    const [incor, setincor] = useState(0);

    function onChangeHandle(event){
        if(props.finished){
            props.result.setCorrect(cor);
            props.result.setIncorrect(incor)
        }
    if(event.target.value === props.question.options[props.question.correct]){
        setCor(cor+1);
        // console.log('correct', props.question.options[props.question.correct])
    }
    else{
        setincor(incor+1);
    }

    // console.log(props.question.options[0])
    }
   

    
    return (
        <div>
           <h1>{props.question.question}</h1>

           {props.question.options.map((item, index)=>{
  
  return <div className='input' onChange={onChangeHandle}><input type="radio" id={item} name={props.question.question} value={item} />
  <label for={item}>{item}</label> <br />
  </div>
})}
          
        </div>
    )
}

export default Question
