import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({}) => {
  return (
    <div className={styles.mainLayout}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
