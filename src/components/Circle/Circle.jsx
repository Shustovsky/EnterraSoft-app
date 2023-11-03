import { forwardRef } from 'react';
import styles from './Circle.module.scss';

export const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={styles.circle}></div>
  );
});
