import { forwardRef } from 'react';
import { clsx } from 'clsx';
import styles from './Block.module.scss';

export const Block = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.block, { [styles.blockActive]: props.active })}
    >
      {props.value}
    </div>
  );
});
