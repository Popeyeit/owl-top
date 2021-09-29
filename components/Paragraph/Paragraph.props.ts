import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'sm' | 'md' | 'l';
  children: ReactNode;
}
