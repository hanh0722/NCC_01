import React, { FC } from "react";
import { ClassNameProps } from "../../types";
// import Container from "../../components/Container";
import styles from "./styles.module.scss";
import Container from "../../components/Container";

interface FooterProps extends ClassNameProps {}
const Footer: FC<FooterProps> = (props) => {
  const { as: Component = "div", ...rest } = props;
  return (
    <Component>
      <div {...rest} className={styles.footer}>
        <Container>Copyright © 2021</Container>
      </div>
    </Component>
  );
};

export default Footer;
