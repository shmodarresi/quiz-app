import React from 'react';
import QuestionItem from '../QuestionItem';
import renderer from 'react-test-renderer';

let q={question:'test item',correct_answer:'true',incorrect_answers:['false']};

describe("the question item test",() =>{
    test("renders as expeted",() => {
        const question = renderer.create(<QuestionItem item={q} />);
        expect(question.toJSON()).toMatchSnapshot();

    })
})