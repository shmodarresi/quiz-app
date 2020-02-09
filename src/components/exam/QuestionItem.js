import React, { useState } from 'react';


const QuestionItem = ({item,selectAnswer,score}) => {
        
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isComplete , setIsComplete] = useState('');
    const [isCorrect , setIsCorrect] = useState('');

    console.log(selectedAnswer);
      const answers = () => {
        var array = [...item.incorrect_answers , item.correct_answer];
        return array;
      }
      
    const selectFn = (answer , e) => {

        if(answer === item.correct_answer){
            e.target.className = 'isCorrect';
            score(1);
        }else{
            e.target.className = 'isWrong';
            setIsCorrect('isCorrect');
            score(0);
        }

        setIsComplete(true);
        setSelectedAnswer(answer);
        selectAnswer(answer);
    }

    return (
        <li className='qItem'>
            <div dangerouslySetInnerHTML={{__html: item.question}}></div>
                <ul className={isComplete?'disabled' : ''}>
                    {answers().map(a => {
                        return(
                        <li  className={item.correct_answer === a? isCorrect :''}
                            dangerouslySetInnerHTML={{__html: a}} 
                            key={answers().indexOf(a)}
                            onClick={(e) => selectFn(a,e)} >
                        </li>
                        )
                    })}
                </ul>
        </li>
    );
};

export default QuestionItem;