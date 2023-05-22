import React, { FC } from "react";
import { ClassNameProps } from "../../../../types";
import { classNames } from "../../../../utils";
import styles from "./styles.module.scss";

interface ContentProps extends ClassNameProps {}
const Content: FC<ContentProps> = (props) => {
  const { as: Component = "div", className, ...rest } = props;

  return (
    <Component {...rest} className={classNames(styles.container, className)}>
      <h5 className={styles.title}>Lorem ipsum dolor sit asmet?</h5>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat
        hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
        mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut
        mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo.
        Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
        vestibulum. Phasellus congue mollis orci, sit amet luctus augue
        tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque
        a.
      </p>
    </Component>
  );
};

export default Content;
