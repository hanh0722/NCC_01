import { FC, Fragment } from "react";
import { ClassNameProps } from "../../types";
import SideBar from "../SideBar";
import Container from "../Container";
import Footer from "../Footer";
import ContainerCore from "../../components/Container";
import styles from './styles.module.scss';
const RootLayout: FC<ClassNameProps> = (props) => {
  const { as: Component = Fragment, children, ...rest } = props;
  return (
    <Component>
      <SideBar />
      <Container className={styles.container} {...rest}>
        <ContainerCore className={styles.children}>{children}</ContainerCore>
        <Footer />
      </Container>
    </Component>
  );
};

export default RootLayout;
