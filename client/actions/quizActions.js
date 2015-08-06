import ActionTypes from '../constants/actionTypes';

export default {
  setAnswer: (number, answer) => {
    return {
      type: ActionTypes.SET_ANSWER,
      number: number,
      answer: answer
    };
  }
}