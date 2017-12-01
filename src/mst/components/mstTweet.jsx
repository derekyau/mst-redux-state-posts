import React from "react";
import { Well } from "react-bootstrap";

export const MSTTweet = props => {
  const { tweet } = props;
  return (
    <li>
      <Well>
        {tweet.body}
        <a className="pull-right red" href="#" onClick={() => tweet.delete()}>
          Delete
        </a>
      </Well>
    </li>
  );
};
