import React, {useState} from 'react';
import './EightBall.css'


const EightBall = ({answers}) =>  {
    const genRand = () => Math.floor(Math.random() * answers.length-1 +1);
    const getRandMsg = () => answers[genRand()];
    const [message, setMessage] = useState("Think of a question");
    const [color, setColor] = useState('black')
    const askQuestion = () =>{
        const answer = getRandMsg()
        setMessage(answer.msg)
        setColor(answer.color)
    }



    return (

         <div onClick={askQuestion} style={
            { 
            height: 300,
            width: 300,
            borderRadius: '50%',
            display: 'inline-Block',
            backgroundColor: `${color}`
            
        }}>
             <h1>{message}</h1>
        </div>
    )


    }

export default EightBall;