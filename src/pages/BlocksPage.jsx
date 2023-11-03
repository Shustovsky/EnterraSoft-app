import { useEffect, useRef, useState } from 'react';
import { Block } from '../components/block/Block.jsx';
import { ButtonWithTimer } from '../components/button/ButtonWithTimer.jsx';
import { Circle } from '../components/Circle/Circle.jsx';
import styles from './BlocksPage.module.scss';

export const BlocksPage = () => {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const circleRef = useRef(null);
  const [isStart, setIsStart] = useState(false);

  const animate = () => {
    const circleX = circleRef.current.getBoundingClientRect().x;
    circleRef.current.style.left = circleX + 4 + 'px';
    if (circleX < block2Ref.current.getBoundingClientRect().x) {
      requestAnimationFrame(animate);
    }
  };

  const startCircle = () => {
    const block1Position = block1Ref.current.getBoundingClientRect();
    console.log(block1Position);
    circleRef.current.style.top = block1Position.y;
    circleRef.current.style.left = block1Position.x;
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
        <Circle ref={circleRef} />
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

