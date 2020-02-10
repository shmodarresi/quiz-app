import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectAnswer as selectAnswerAction } from '../../actions';

import useFetchData from '../../data/useFetchData';
import QuestionItem from './QuestionItem'
import Spinner from '../../layout/Spinner';
import Score from './Score';

const QuestionList = ({ userAnswers, selectAnswer }) => {

    const [finalScore, setFinalScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [loading, list = []]  = useFetchData('/api.php?amount=10');

    var score = 0;
    const setQScore = (s) => {
        score = score + s;
    }

    var selected = 0;
    const answers = [];
    const answerFn = (index, answer) => {
        selected += 1;
        answers[index] = answer;
        if (selected === list.length) {

            selectAnswer(answers);
            setIsComplete(true);
            setFinalScore(score);
        }

    };

    if (isComplete) {

        return <Score total={list.length} finalScore={finalScore} />;

    } else if(loading) {

        return <Spinner />;

    } else{
        return (
            <div>
                <h3 className="my-3">Question List:</h3>
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
