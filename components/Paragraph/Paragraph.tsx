import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

function Paragraph({
  size = 'md',
  className,
  children,
  ...rest
}: ParagraphProps): JSX.Element {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.l]: size === 'l',
      })}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Paragraph;
