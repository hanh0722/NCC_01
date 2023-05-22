import React, { FC } from "react";
import { ClassNameProps } from "../../types";
import styles from './styles.module.scss';
import { classNames } from "../../utils";

interface ContainerProps extends ClassNameProps {

}
const Container: FC<ContainerProps> = (props) => {
  const { as: Component = 'div', children, className, ...rest } = props;
  return (
    <Component className={classNames(styles.container, className)} {...rest}>
      {children}
    </Component>
  )
};

export default Container;
