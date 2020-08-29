import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function HeroHeader() {
  return (
    <Jumbotron>
      <p>
        <h2>Leading Through Learning</h2>
        <p>
          As a self-taught developer I strive to be better every day. Coding is
          part of my growth and I look to improve every time I sit at the keys.
          My goal is to become a leader and coach in the software space. I am
          inspired by the educators I engage with.
        </p>
      </p>
      <p>
        <h2>Driving Innovation</h2>
        <p>
          My professional experience has refined my ability to innovate all
          aspects of my life. From my experience as an industrial engineer in
          the aerospace industry, I grew my abilities to innovate. Leading
          breakthrough projects I was able to discover increased performance
          while cutting costs. My role as a consultant enabled me to teach my
          skills to others. Taking my expertise, I have developed methods to
          push teams to perform better than they thought possible. I lead teams
          to do this every single day.
        </p>
      </p>
      <p>
        <h2>Creative Performance</h2>
        <p>
          With my diverse background, I have a keen ability to solve problems
          from many different angles. I am energized by solution finding. Coding
          has become such a passion of mine for this very reason. Coding gives
          me the ability to be creative with my problem solving resulting in
          measurable increased performance.
        </p>
      </p>

      <p>
        <Button variant='primary'>Resume</Button>
      </p>
    </Jumbotron>
  );
}

export default HeroHeader;
