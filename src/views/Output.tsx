import React, { FC } from "react";

type Answer = {
  answer: Number;
};

export const Output: FC<Answer> = ({ answer }) => {
  return <h2>Result: {answer}</h2>;
};
