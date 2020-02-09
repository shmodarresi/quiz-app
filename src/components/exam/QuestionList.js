import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectAnswer as selectAnswerAction } from '../../actions';

import useFetchData from '../../data/useFetchData';
import QuestionItem from './QuestionItem'
import Spinner from '../../layout/Spinner';
import Score from './Score';

const QuestionList = ({ userAnswers, selectAnswer }) => {

    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [loading, list = []]  = useFetchData('/api.php?amount=10');

    const setQScore = (s) => {
        setScore(score + s);
    }

    const answers = [];
    const answerFn = (index, answer) => {
        answers[index] = answer;
        if (answers.length === list.length) {

            selectAnswer(answers);
            setIsComplete(true);

        }

    };

    if (isComplete) {

        return <Score total={list.length} finalScore={score} />;

    } else if(loading) {

        return <Spinner />;

    } else{
        return (
            <div>
                <h1 className="mb-2">Question List:</h1>
                <ol>{list.map((q, i) => (
                    <QuestionItem
                        item={q}
                        key={i}
                        score={setQScore}
                        selectAnswer={(a) => answerFn(i, a)}/>
                )
                )}
                </ol>
            </div>
        );
    }
};


const mapStateToProps = store => {
    return { userAnswers: store.answer };
}

const mapDispatchToProps = dispatch => {
    return {
        selectAnswer: (index, answer) => {
            dispatch(selectAnswerAction(index, answer));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
