import { FC } from 'react';
import styles from './styles.module.scss';
import { ClassNameProps } from '../../types';
import { MENUS } from '../../constants';
import Element from './ui/Element';

const SideBar: FC<ClassNameProps> = (props) => {
  const { as: Component = 'div', ...rest } = props;
  return (
    <Component {...rest} className={styles.container}>
      {MENUS.map((item, index) => <Element active={index === 0} className={styles.element} key={item?.title}>{item?.title}</Element>)}
    </Component>
  )
};

export default SideBar;
