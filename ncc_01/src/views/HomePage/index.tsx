import RootLayout from "../../layout/RootLayout";
import Logo from "./ui/Logo";
import styles from "./styles.module.scss";
import Content from "./ui/Content";
import Description from "./ui/Description";
import { DESCRIPTION } from "../../constants";

const HomePage = () => {
  return (
    <RootLayout>
      <div className={styles.image}>
        <Logo />
      </div>
      <Content className={styles.content} />
      <div className={styles.description}>
        {DESCRIPTION.map((item) => (
          <Description key={item?.title} {...item} />
        ))}
      </div>
      
    </RootLayout>
  );
};

export default HomePage;
