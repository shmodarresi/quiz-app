import {combineReducers} from 'redux';

import { ANSWER_SELECTED} from './../actions';

/**
 * 
 * state = {
 *      scores : {
 *          questionIndex: score
 *      }
 * }
 * 
 * 
 */

export const appReducer = (state = {scores: []} , action) =>{
    switch(action.type){
        case ANSWER_SELECTED:{
            const newState = Object.assign({}, state ,  {
                scores: [
                  ...state.scores,
                  {
                    score: action.score
                  }
                ]
              });
            //newStore.scores = action.score;
            //debugger;
            return newState;    
        }
        default:
            return state;

    }
}


export default combineReducers ({
    score: appReducer
});