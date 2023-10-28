import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Question from "./components/Question";

import { useEffect, useReducer } from "react";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],

  // 'loading' ,'active' , 'error', 'finished' , 'ready'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };

    case "startQuiz":
      return { ...state, status: "active" };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    default:
      throw new Error("action is unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numQuestions = state.questions.length;
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {state.status === "active" && (
        <Question
          question={state.questions[state.index]}
          dispatch={dispatch}
          answer={state.answer}
        />
      )}
    </div>
  );
}

export default App;
