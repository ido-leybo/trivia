import React, { useState } from "react";
import Star from "./Star";
import { useDispatch } from "react-redux";
import {
  stopBreak,
  getQuestion,
  resetAnswer,
  newQuestion,
  startQuestion,
} from "../../actions";

export default function Rating() {
  const dispatch = useDispatch();
  const [didRate, setDidRate] = useState(false);

  return (
    <div>
      <p>Did you like this question?</p>
      <div>
        {[1, 2, 3, 4, 5].map((rating, i) => (
          <Star
            key={i}
            rating={rating}
            didRate={didRate}
            setDidRate={setDidRate}
          />
        ))}
      </div>
      <p>Rating questions helps us improve the user experience!</p>
      <button
        onClick={() => {
          dispatch(getQuestion());
          dispatch(stopBreak());
          dispatch(resetAnswer());
          dispatch(newQuestion());
          dispatch(startQuestion());
        }}
      >
        Skip to the next question
      </button>
    </div>
  );
}
