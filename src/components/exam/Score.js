import React from 'react';

const Score = ({total , finalScore}) => {

    var smile = finalScore < total-3?':(':':)' ;
    

    return (
        <div className="align-C">
            <h1 className="mt-5 mb-3">Your Score Is {smile}</h1>
            <h3>{finalScore} / {total}</h3>
            
        </div>
    );
};

export default Score;