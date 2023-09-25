import Link from 'next/link';
import styles from './MainHeader.module.css';
import { Navigation } from './Navigation';

const navItems = [
  { label: 'new', href: '#' },
  { label: 'past', href: '#' },
  { label: 'comments', href: '#' },
  { label: 'ask', href: '#' },
  { label: 'show', href: '#' },
  { label: 'jobs', href: '#' },
  { label: 'submit', href: '#' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link href="/">Hacker News</Link>
      </h1>
      <nav className={styles.nav}>
        <Navigation navLinks={navItems} />
      </nav>
    </header>
  );
}
