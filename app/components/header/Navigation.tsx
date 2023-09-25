'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import styles from './MainHeader.module.css';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {session?.data && (
        <Link className={styles.nav} href="/profile">
          profile
        </Link>
      )}
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? styles['active'] : styles.nav}
            key={link.label}
            href={link.href}>
            {link.label}
          </Link>
        );
      })}
      {session?.data ? (
        <Link
          className={styles.nav}
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: '/',
            })
          }>
          logout
        </Link>
      ) : (
        <Link className={styles.nav} href="/api/auth/signin">
          login
        </Link>
      )}
    </>
  );
};

export { Navigation };
