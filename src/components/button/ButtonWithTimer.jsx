import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import styles from "./Button.module.scss";

export const ButtonWithTimer = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(props.seconds);

  useEffect(() => {
    if (isDisabled) {
      const timer = setInterval(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else {
          setIsDisabled(false);
          clearInterval(timer);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isDisabled, countdown]);

  const handleClick = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      setCountdown(4);
      props.onClick();
    }
  };

  return (
    <button
      className={clsx(styles.button, {[styles.buttonDisabled]:isDisabled})}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isDisabled ? countdown : props.value}
    </button>
  );
};
