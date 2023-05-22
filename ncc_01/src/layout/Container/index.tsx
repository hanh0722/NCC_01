import { FC } from 'react';
import { ClassNameProps } from '../../types';
import { classNames } from '../../utils';
import styles from './styles.module.scss';

const Container: FC<ClassNameProps> = (props) => {
  const { as: Component = 'div', className, children, ...rest } = props;

  return (
    <Component {...rest} className={classNames(styles.container, className)}>
      {children}
    </Component>
  )
};

export default Container;
