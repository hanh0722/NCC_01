import React, { FC } from 'react';
import { ClassNameProps } from '../../../../types';
import styles from './styles.module.scss';
import { classNames } from '../../../../utils';

interface ElementProps extends ClassNameProps {
  active?: boolean;
}
const Element: FC<ElementProps> = (props) => {
  const { as: Component = 'div', active, children, className, ...rest } = props;

  return (
    <Component {...rest} className={classNames(styles.container, active && styles.active, className)}>
      {children}
    </Component>
  )
};

export default Element;
