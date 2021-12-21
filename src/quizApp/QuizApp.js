import React from 'react'
import Question from './Question'
import dataSet from './dataset'
import { useState } from 'react';

function QuizApp() {

const [counter, setCounter] = useState(0);
const [correct, setCorrect] = useState(0);
const [inCorrect, setIncorrect] = useState(0);

const [finished, setFinished] = useState(false)

function ctaHandler(){
  
if(counter+1 < dataSet.length){
setCounter(counter+1);
}
else{
  setFinished(true);
}

console.log('counter', counter)
}
    return (
        <div>
          <h1>JavaScript Quiz</h1>
          <Question question={dataSet[counter]} result={[setCorrect, setIncorrect]} finish={finished}/>  

          {finished ? <p>Thank you for completing the test</p> : <></>}
          <button onClick={ctaHandler}>Submit</button>
          <p>Correct: {correct}</p>
          <p>Incorrect: {inCorrect}</p>

        </div>
    )
}

export default QuizApp
