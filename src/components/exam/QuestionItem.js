import React, { useState } from 'react';
//import Score from './Score';


const QuestionItem = ({item,selectAnswer}) => {

    const [isComplete , setIsComplete] = useState('');
    const [isCorrect , setIsCorrect] = useState('');
    const [userAnswer, setUserAnswer] = useState('');

    //create array of correct answer and incorrect answer
    const answers = () => {
        var array = [...item.incorrect_answers, item.correct_answer];
        return array;
    }
    
    //calculate score and send it to Quest list component
    const selectFn = (answer) => {
        var s = 0;
        setUserAnswer(answer);
        
        if(answer === item.correct_answer){
            item.ans = 'isCorrect';
            s = 1;
        }else{
            item.ans = 'isWrong';
            setIsCorrect('isCorrect');
        }
        
        setIsComplete(true);
        // selectAnswer(answer,s);
        // score(s);

        setTimeout(()=>{
            selectAnswer(s);
            setIsComplete(false);
            setIsCorrect('');
            setUserAnswer('');
            delete item.ans;
        } , 300);

    }

    return (
        <li className='card p-3'>
            <div dangerouslySetInnerHTML={{__html: item.question}}></div>
                {/* class disabled = doesn't let to answer the question more than one time*/}
                <ul className={isComplete?'disabled' : ''}> 
                    {answers().map(a => {
                        return(
                        <li className={userAnswer === a ? item.ans : (item.correct_answer === a? isCorrect : '')}
                            key={answers().indexOf(a)}
                            onClick={() => selectFn(a)} >
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