'use client';
import s from './page.module.css';
import Grid from '@/components/Grid';
import Robot from '@/components/Robot';
import { useState } from 'react';
import ControlBar from '@/components/ControlBar';

const ROW_NUM = 5;
const COL_NUM = 5;

type DirectionVector = number[];

const convertDirectionVector = (directionVector: DirectionVector) => {
  if (directionVector[0] === 0 && directionVector[1] === -1) return 0;
  if (directionVector[0] === 1 && directionVector[1] === 0) return 90;
  if (directionVector[0] === 0 && directionVector[1] === 1) return 180;
  if (directionVector[0] === -1 && directionVector[1] === 0) return 270;
  return 0;
};

const Home = () => {
  // Coord system begins with top left cell = [0,0] and bottom right cell = [5,5].
  const [robotCoord, setRobotCoord] = useState([2, 2]);
  const [directionVector, setDirectionVector] = useState([0, -1]);
  const [directionDegrees, setDirectionDegrees] = useState(
    convertDirectionVector(directionVector)
  );

  const robotPosX = robotCoord[0] * 100;
  const robotPosY = robotCoord[1] * 100;

  const moveForward = () => {
    setRobotCoord((state) => {
      let x = state[0] + directionVector[0];
      let y = state[1] + directionVector[1];

      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x >= COL_NUM) x = COL_NUM - 1;
      if (y >= ROW_NUM) y = ROW_NUM - 1;

      return [x, y];
    });
  };

  const rotateLeft = () => {
    setDirectionVector((state) => {
      const newY = state[0] * -1;
      return [state[1], newY];
    });
    setDirectionDegrees((state) => state - 90);
  };

  const rotateRight = () => {
    setDirectionVector((state) => {
      const newX = state[1] * -1;
      return [newX, state[0]];
    });
    setDirectionDegrees((state) => state + 90);
  };

  return (
    <main className={s.main}>
      <div className={s.content}>
        <Grid colNum={COL_NUM} rowNum={ROW_NUM}>
          <Robot
            rotate={directionDegrees}
            style={{
              transform: `translate(${robotPosX}%, ${robotPosY}%)`,
              height: `${100 / ROW_NUM}%`,
              width: `${100 / COL_NUM}%`,
            }}
          />
        </Grid>
        <ControlBar
          onRotateLeft={rotateLeft}
          onRotateRight={rotateRight}
          onMoveForwards={moveForward}
        />
      </div>
    </main>
  );
};

export default Home;
