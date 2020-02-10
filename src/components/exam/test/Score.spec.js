import React from 'react';
import Score from '../Score';
import renderer from 'react-test-renderer';


describe("the Score test",() =>{
    test("renders as expeted",() => {
        const score = renderer.create(<Score total='10' finalScore='8' />);
        score.toJSON();
    })
})