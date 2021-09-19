import { Navigation } from '../Navigation/Navigation';
import styles from './Appbar.module.css';

function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export { AppBar };
