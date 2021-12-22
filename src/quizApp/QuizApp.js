import React from 'react'
import Question from './Question'
import dataSet from './dataset'
import { useState } from 'react';

function QuizApp() {

const [counter, setCounter] = useState(0);
// const [correct, setCorrect] = useState(0);
// const [inCorrect, setIncorrect] = useState(0);

const [finished, setFinished] = useState(false)
const [answer, setAnswer] = useState('');
const [correct, setCorrect] = useState(0);
const [incorrect, setIncorrect] = useState(0);



    
// console.log(props.question.options[0])


function ctaHandler(){
  if(answer){
  if(answer === dataSet[counter].options[dataSet[counter].correct]){
    setCorrect(correct+1);
    // console.log('correct', props.question.options[props.question.correct])
    }
    else{
      setIncorrect(incorrect+1);
    }
if(counter+1 < dataSet.length){
setCounter(counter+1);
}
else{
  setFinished(true);

}

  }

}
    return (
        <div>
          <h1>JavaScript Quiz</h1>
          {/* <Question question={dataSet[counter]} result={[setCorrect, setIncorrect]} finish={finished}/>   */}
          <div>
           <h1>{dataSet[counter].question}</h1>

           {dataSet[counter].options.map((item, index)=>{
  
  return <div className='input' onChange={(event) => {setAnswer(event.target.value)}}><input type="radio" id={item} name={dataSet[counter].question} value={item} />
  <label for={item}>{item}</label> <br />
  </div>
})}
          
        </div>
    

          {finished ? <p>Thank you for completing the test</p> : <></>}
          <button onClick={ctaHandler} disabled={finished}>Submit</button>
          <p>Correct: {correct}</p>
          <p>Incorrect: {incorrect}</p>

        </div>
    )
}

export default QuizApp
