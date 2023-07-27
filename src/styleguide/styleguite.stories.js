import React from "react";

// import { linkTo } from '@storybook/addon-links';
// import App from '../App';
// import { makeStyles } from '@material-ui/styles';
// import Spacer from 'components/atoms/spacer';
// import Shadow from 'components/atoms/shadow';

import "./styles.scss";

function Colors() {
  return (
    <div className="colors-container">
      <div className="heading">
        <div></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div className="grid">
        <div className="line background">
          <div className="label">Background</div>
          <div className="square s-1"></div>
          <div className="square s-2"></div>
          <div className="square s-3"></div>
          <div className="square s-4"></div>
          <div className="square s-5"></div>
          <div className="square s-6"></div>
        </div>
        <div className="line base">
          <div className="label">Base</div>
          <div className="square b-1"></div>
          <div className="square b-2"></div>
          <div className="square b-3"></div>
          <div className="square b-4"></div>
          <div className="square b-5"></div>
          <div className="square b-6"></div>
        </div>
        <div className="line primary">
          <div className="label">Primary</div>
          <div className="square p-1"></div>
          <div className="square p-2"></div>
          <div className="square p-3"></div>
          <div className="square p-4"></div>
          <div className="square p-5"></div>
          <div className="square p-6"></div>
        </div>
        <div className="line secondary">
          <div className="label">Secondary</div>
          <div className="square sc-1"></div>
          <div className="square sc-2"></div>
          <div className="square sc-3"></div>
          <div className="square sc-4"></div>
          <div className="square sc-5"></div>
          <div className="square sc-6"></div>
        </div>
        <div className="line warning">
          <div className="label">Warning</div>
          <div className="square w-1"></div>
        </div>
        <div className="line danger">
          <div className="label">Danger</div>
          <div className="square d-1"></div>
        </div>
        <div className="line success">
          <div className="label">Success</div>
          <div className="square suc-1"></div>
          <div className="square suc-2"></div>
        </div>
      </div>
    </div>
  );
}

function Texts() {
  return (
    <div>
      <div style={{ padding: "10px" }}>
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Title 3</h3>
        <h4>Headline 4</h4>
        <p>
          <span>Regular text</span>
        </p>
        <p>
          <i>Italic</i>
        </p>
        <p>
          <b>Bold</b>
        </p>
        <p>
          <b>
            <i>Bold &amp; Italic</i>
          </b>
        </p>
      </div>
    </div>
  );
}

const Styleguide = () => {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <h4>Colors</h4>
      <Colors />
      <h4>Texts</h4>
      <Texts />
    </div>
  );
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Assets/Styleguide",
  component: Styleguide,
};

export { Styleguide as All, Colors, Texts };
