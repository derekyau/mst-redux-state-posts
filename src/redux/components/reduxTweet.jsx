import React from "react";
import { Well } from "react-bootstrap";

export const ReduxTweet = props => {
  const { body } = props.tweet;
  return (
    <li>
      <Well>
        {body}
        <a
          className="pull-right"
          href="#"
          onClick={() => props.onDeleteClicked(props.tweet.id)}
        >
          Delete
        </a>
      </Well>
    </li>
  );
};
