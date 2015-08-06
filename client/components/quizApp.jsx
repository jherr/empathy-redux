import React from "react/addons";

import Question from './question';

import ranges from "../data/ranges";

let rangeText = val => {
  for (var i in ranges) {
    if (val >= ranges[i].min && val <= ranges[i].max) {
      return ranges[i].text;
    }
  }
  return '';
}

export default class QuizApp extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1" style={{fontSize: 20}}>
            {this.props.quiz.score}
          </div>
          <div className="col-md-11">
            {rangeText(this.props.quiz.score)}
          </div>
        </div>
        {this.props.quiz.questions.map((question, index) => {
          return (
            <Question key={index} {... question} setAnswer={this.props.setAnswer} />
          );
        })}
      </div>
    );
  }
}
