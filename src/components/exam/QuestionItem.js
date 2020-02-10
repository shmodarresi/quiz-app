import React, { useState } from 'react';


const QuestionItem = ({item,selectAnswer,score}) => {

    const [isComplete , setIsComplete] = useState('');
    const [isCorrect , setIsCorrect] = useState('');


    //create array of correct answer and incorrect answer
    const answers = () => {
        var array = [...item.incorrect_answers , item.correct_answer];
        return array;
    }
    
    //calculate score and send it to Quest list component
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
        <li className='card p-3'>
            <div dangerouslySetInnerHTML={{__html: item.question}}></div>
                {/* class disabled = doesn't let to answer the question more than one time*/}
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