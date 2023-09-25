import { Metadata } from 'next';
import { authConfig } from '../configs/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import styles from './Profile.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Profile',
  };
}

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div className={styles.root}>
      <Image src={session?.user?.image} alt="Avatar" width={100} height={100} />
      <p>{session?.user?.name}</p>
    </div>
  );
}
