
export const ANSWER_SELECTED = 'ANSWER_SELECTED';


export const selectAnswer = (score) => {
    return {
        type: ANSWER_SELECTED,
        score
    };
}