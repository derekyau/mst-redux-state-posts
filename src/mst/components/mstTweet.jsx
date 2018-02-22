import React from "react";
import { Well } from "react-bootstrap";
import { inject, observer } from "mobx-react";

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

// @inject("tweetStore")
// @observer
// export class MSTTweet extends React.Component {
//   render() {
//     const { tweet } = this.props;
//     return (
//       <li>
//         <Well>
//           {tweet.body}
//           <a
//             className="pull-right red"
//             href="#"
//             onClick={() => this.props.tweetStore.removeTweet(tweet)}
//           >
//             Delete
//           </a>
//         </Well>
//       </li>
//     );
//   }
// }
