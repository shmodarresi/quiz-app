
export const ANSWER_SELECTED = 'ANSWER_SELECTED';


export const selectAnswer = (answers) => {
    return {
        type: ANSWER_SELECTED,
        payload: {
            answers
        }
    };
}