import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuestion,
  checkAnswer,
  startBreak,
  decreaseQuestionTime,
  resetTimer,
} from "../actions";
import Question from "./Question/Question";
import Rating from "./Rating/Rating";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function Game() {
  const dispatch = useDispatch();
  const { name, score, strikes, error, loading, onBreak } = useSelector(
    (state) => state.user
  );

  const { timerRef } = useSelector((state) => state.timer);

  useEffect(() => {
    dispatch(getQuestion());
  }, [name]);

  return (
    <div>
      <div className="info-user">
        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}
        <span className="info-user-username">{name}</span>
        <span className="info-user-secondrow">
          <span>Score: {score}</span>
          <span>Strikes: {strikes}</span>
        </span>
      </div>
      <Question />

      {onBreak ? (
        <Rating />
      ) : (
        <button
          onClick={() => {
            if (!onBreak) dispatch(checkAnswer());
            dispatch(startBreak());
            clearInterval(timerRef[0]);
            clearTimeout(timerRef[1]);
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
}
