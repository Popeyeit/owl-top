import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

function Button({
  children,
  appearance,
  arrow = 'none',
  className,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...rest}
    >
      {children}
      {arrow !== 'none' && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        />
      )}
    </button>
  );
}

export default Button;
