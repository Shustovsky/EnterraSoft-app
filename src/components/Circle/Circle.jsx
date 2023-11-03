import { forwardRef } from 'react';
import styles from './Circle.module.scss';
import { clsx } from 'clsx';

export const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.circle, { [styles.circleDisabled]: props.disabled })}></div>
  );
});
