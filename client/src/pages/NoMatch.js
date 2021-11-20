import React from "react";
import Jumbotron from "components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄 <br/>
          </span> Please check the url you have entered and try again!
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
