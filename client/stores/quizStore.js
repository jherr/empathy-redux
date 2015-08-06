import ActionTypes from '../constants/actionTypes';

import questions from "../data/questions";

let initialQuizState = {
  questions: questions,
  score: 0
}

export default (state = initialQuizState, action) => {
  switch (action.type) {
  case ActionTypes.SET_ANSWER:
    let score = 0;
    let questions = state.questions.map(q => {
      if (q.number === action.number) {
        q.answer = action.answer;
      }
      score += (q.mode === 'agree' && q.answer > 0) ? q.answer : 0;
      score += (q.mode === 'disagree' && q.answer < 0) ? q.answer * -1 : 0;
      return q;
    });
    return {
      questions: questions,
      score: score
    };
  }
  return state;
}
