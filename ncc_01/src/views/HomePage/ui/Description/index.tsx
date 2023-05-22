import React, { FC, ReactNode } from "react";
import { ClassNameProps } from "../../../../types";
import Image from "../../../../components/Image";
import styles from './styles.module.scss';

interface DescriptionProps extends Omit<ClassNameProps, 'title'> {
  title?: ReactNode;
  description?: string;
  url: string;
}
const Description: FC<DescriptionProps> = (props) => {
  const { as: Component = "div", title, description, url, ...rest } = props;
  return (
    <Component {...rest}>
      <h6 className={styles.title}>{title}</h6>
      <div>
      <Image className={styles.image} src={url} />
      <p className={styles.content}>
        {description}
      </p>
      </div>
    </Component>
  );
};

export default Description;
