import React from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

function Tag({
  size = 'md',
  className,
  color = 'ghost',
  href,
  children,
  ...rest
}: TagProps): JSX.Element {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
}

export default Tag;
