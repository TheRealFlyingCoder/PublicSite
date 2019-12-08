import React, {useState} from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Theme from "Theme";
import Card from "Components/Card";
import Button from 'Components/Button';
import Logo from "Assets/logo.png";

const Styles = css`
  width: 100%;
  .pipelineItem {
    min-height: 100px;
    h6 {
      text-align: center;
      color: ${Theme.colours.primaryLight};
      margin-bottom: 15px;
    }

    p {
      text-align: left;
    }
  } 

  .buttons {
    display: flex;
    justify-content: center;

    .previous,
    .next {
      width: 50%;
      display: flex;
      justify-content: center;
    }
  }
`;

const pipeline = [
  {
    title: "Not an SPA",
    description: "The core useless concept of this site, a Mono repo of differing framework SPA's",
  },
  {
    title: "Logo redesign",
    description: "I will be sketching my own animated logo! (Lets get creative)",
  },
  {
    title: "FED Test",
    description: "Timed submission with Firestore, creating unique keys for each user, not a quiz though!",
  },
  {
    title: "Personal Blog",
    description: "Do I need to explain this?",
  },
  {
    title: "VSCode CodeGen Extension",
    description: "A helper tool for code gen in projects",
  },
  {
    title: "Make this site good",
    description: "This comes last because the fun stuff above is way more exciting",
  },
];

export default () => {
  const [index, setIndex] = useState(0);

  return (
    <Card title="Project: Eminence" image={Logo} hasBack>
      <h6>A series of interesting activities for the sake of it!</h6>
      <Card OverrideStyles={css`width: 100%;`}>
        <div css={Styles}>
          <div className="pipelineItem">
            <h6>{pipeline[index].title}</h6>
            <p>{pipeline[index].description}</p>
          </div>          
          <div className="buttons">
              <div className="previous">
                {!!index && (
                  <Button className="secondary" onClick={() => setIndex(index - 1)}>Previous</Button>
                )}              
              </div>
              <div className="next">
                {index < pipeline.length - 1 && (
                  <Button className="secondary" onClick={() => setIndex(index + 1)}>Next</Button>
                )}
              </div>            
          </div>
        </div>        
      </Card>
    </Card>
  );
};
