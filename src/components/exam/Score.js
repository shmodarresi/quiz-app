import React from 'react';

const Score = ({total , finalScore}) => {

    const smile = () =>{
        if(finalScore < total-3){
            return <i class="fa fa-frown display-4 my-3"></i> 
        } else {
            return <i class="fa fa-smile-wink display-4 my-3"></i>
        }
    }

    return (
        <div className="align-C">
            <h1 className="mt-5 mb-3">Your Score Is:</h1>
            <h3>{finalScore} / {total}</h3>
            {smile}
        </div>
    );
};

export default Score;