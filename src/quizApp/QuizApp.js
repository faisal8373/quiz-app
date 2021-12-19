import React from 'react'
import Question from './Question'
import dataSet from './dataset'
import { useState } from 'react';

function QuizApp() {

const [counter, setCounter] = useState(0);
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
          <Question question={dataSet[counter]}/>  

          {finished ? <p>Thank you for completing the test</p> : <></>}
          <button onClick={ctaHandler}>Submit</button>
          <p>Correct: 0</p>
          <p>Incorrect: 0</p>

        </div>
    )
}

export default QuizApp
