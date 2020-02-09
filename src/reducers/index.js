import {combineReducers} from 'redux';

import { ANSWER_SELECTED} from './../actions';

/**
 * 
 * store = {
 *     
 *      answers : {
 *          questionIndex: answer
 *      }
 * }
 */

export const appReducer = (store = {answers: {} } , action) =>{
    switch(action.type){
        case ANSWER_SELECTED:{
            const newStore = Object.assign({}, store);
            newStore.answers = action.payload.answers;
            return newStore;    
        }
        default:
            return store;

    }
}


export default combineReducers ({
    answer: appReducer
});