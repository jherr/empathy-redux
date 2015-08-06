import React from "react/addons";

import { ButtonGroup, Button } from 'react-bootstrap';

import classNames from 'classnames';

export default class Question extends React.Component {
  _setAnswer(answer) {
    this.props.setAnswer(this.props.number, answer);
  }
  _renderAnswerButton(answer, text) {
    return (
      <Button
        className={classNames({active: this.props.answer===answer})}
        onClick={()=>{this._setAnswer(answer)}}>
          {text}
      </Button>
    );
  }
  render() {
    let self = this;
    return (
      <div className="row" style={{padding:5, background:(this.props.number % 2 === 0)?'#eee':'white'}}>
        <div className="col-md-6">
          {this.props.text}
        </div>
        <div className="col-md-6">
          <ButtonGroup>
            {this._renderAnswerButton(2, "Strongly Agree")}
            {this._renderAnswerButton(1, "Agree")}
            {this._renderAnswerButton(0, "Neutral")}
            {this._renderAnswerButton(-1, "Disagree")}
            {this._renderAnswerButton(-2, "Strongly Disagree")}
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
