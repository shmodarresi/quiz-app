import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Score = ({ userScores }) => {



    const [fScore, setFScore] = useState(0);

    useEffect(() => {

            if(userScores.length === 0){
                return null;
            }
            var s = userScores.reduce((a, b) => {
                (a[b.score] = a[b.score] || []).push(b);
                return a;
            }, {});
    
            setFScore(Object.values(s[1]).length);



    }, [userScores]);

    var smile = fScore < (userScores.length) - 3 ? ':(' : ':)';
    return (
        <div className="align-C">
            <h1 className="mt-5 mb-3">Your Score Is {smile}</h1>
            <h3>{fScore} / {userScores.length}</h3>

        </div>
    );
};


const mapStateToProps = state => {
    return { userScores: state.score.scores };
}

export default connect(mapStateToProps)(Score);
