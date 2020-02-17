import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectAnswer as selectAnswerAction } from '../../actions';

import useFetchData from '../../data/useFetchData';
import QuestionItem from './QuestionItem'
import Spinner from '../../layout/Spinner';

const QuestionList = ({ userScores, selectAnswer }) => {

    const [loading, list = []] = useFetchData('/api.php?amount=10');
    const [question, setQuestion] = useState({});
    let [currentQ, setCurrentQ] = useState(0);
    const history = useHistory();

    useEffect(() => {
        setQuestion(list[currentQ]);
    }, [list, currentQ]);


    const answerFn = (s) => {
        selectAnswer(s);

        if (currentQ === list.length - 1) {
            history.push('/score');
        }

        setCurrentQ(currentQ += 1);
    };

    if (loading) {

        return <Spinner />;

    } else {
        return (
            <div>
                <h5 className="my-3">Question {currentQ + 1} / {list.length}:</h5>
                <ol>
                    <QuestionItem
                        item={question}
                        selectAnswer={(s) => answerFn(s)} />
                </ol>
            </div>
        );
    }
};


const mapStateToProps = store => {
    return { userScores: store.score };
}

const mapDispatchToProps = dispatch => {
    return {
        selectAnswer: (index, score) => {
            dispatch(selectAnswerAction(index, score));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
