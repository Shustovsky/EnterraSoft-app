import { useCallback, useEffect, useRef, useState } from 'react';
import { Block } from '../components/block/Block.jsx';
import { ButtonWithTimer } from '../components/button/ButtonWithTimer.jsx';
import { Circle } from '../components/Circle/Circle.jsx';
import styles from './BlocksPage.module.scss';

export const BlocksPage = () => {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const circleRef = useRef(null);
  const [isStart, setIsStart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const animate = useCallback(() => {
    const circleCoordinate = circleRef.current.getBoundingClientRect();
    const blockCoordinate = block2Ref.current.getBoundingClientRect();
    circleRef.current.style.left = circleCoordinate.x + 7 + 'px';
    if (circleCoordinate.y < blockCoordinate.y) {
      circleRef.current.style.top = circleCoordinate.y + 1 + 'px';
    }
    if (circleCoordinate.y > blockCoordinate.y) {
      circleRef.current.style;
      circleRef.current.style.top = circleCoordinate.y - 1 + 'px';
    }
    if (circleCoordinate.x < blockCoordinate.x) {
      requestAnimationFrame(animate);
    } else {
      setIsStart(false);
    }
  }, [circleRef, block2Ref, setIsStart]);

  const startCircle = () => {
    setIsDisabled(false);
    const block1Position = block1Ref.current.getBoundingClientRect();
    circleRef.current.style.top = block1Position.y + 'px';
    circleRef.current.style.left = block1Position.x + 'px';
    setIsStart(prevState => !prevState);
  };

  useEffect(() => {
    if (isStart) {
      requestAnimationFrame(animate);
    }
  }, [isStart, animate]);

  return (
    <div className={styles.blocksPage}>
      <div className={styles.blocksContainer}>
        <Block
          ref={block1Ref}
          value={'1'}
          active
        />
        <Circle
          disabled={isDisabled}
          ref={circleRef}
        />
        <Block
          ref={block2Ref}
          value={'2'} />
      </div>
      <ButtonWithTimer
        seconds={5}
        onClick={startCircle}
        value={'START'}
      />
    </div>
  );
};

