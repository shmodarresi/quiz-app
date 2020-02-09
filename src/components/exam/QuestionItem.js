import React, { useState } from 'react';


const QuestionItem = ({item,selectAnswer,score}) => {

    const [isComplete , setIsComplete] = useState('');
    const [isCorrect , setIsCorrect] = useState('');

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
        selectAnswer(answer);
    }

    return (
        <li className='items'>
            <div dangerouslySetInnerHTML={{__html: item.question}}></div>
                <ul className={isComplete?'disabled' : ''}>
                    {answers().map(a => {
                        return(
                        <li  className={item.correct_answer === a? isCorrect :''}
                            key={answers().indexOf(a)}
                            onClick={(e) => selectFn(a,e)} >
                            <span className="rounded-circle mr-1"></span>
                            <span dangerouslySetInnerHTML={{__html: a}}></span>
                        </li>
                        )
                    })}
                </ul>
        </li>
    );
};

export default QuestionItem;