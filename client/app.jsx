import React from "react/addons";

import { Connector } from 'redux/react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import { bindActionCreators } from 'redux';

import QuizApp from './components/quizApp';

import ActionTypes from './constants/actionTypes';
import {setAnswer} from './actions/quizActions';
import quiz from './stores/quizStore';

const redux = createRedux({quiz});

class App extends React.Component {
  renderQuiz( { dispatch, quiz }) {
    return (<QuizApp quiz={quiz}
      {...bindActionCreators({setAnswer}, dispatch)}
      />);
  }
  render() {
  	return (
      <Provider redux={redux}>
        {() =>
          <Connector select={state => state}>
            {this.renderQuiz}
          </Connector>}
      </Provider>
    );
  }
}

React.render(
  <App />,
  document.getElementById('content')
);
