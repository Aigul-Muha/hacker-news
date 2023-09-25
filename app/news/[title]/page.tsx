import { Metadata } from 'next';
import axios from 'axios';
import styles from './News.module.css';

type Props = {
  params: {
    title: string;
  };
};

export async function generateMetadata({ params: { title } }: Props): Promise<Metadata> {
  return {
    title: title,
  };
}

async function getData(title: string) {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q="+${title}"&apiKey=d9898103dc804c6fa35419cc5db27a59`,
  );
  return res.data.articles;
}

export default async function News({ params: { title } }: Props) {
  const news = await getData(title);
  return (
    <main className={styles.main}>
      {news.map((post: any) => (
        <div key={post.publishedAt}>
          <h2 className={styles.h2}>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </main>
  );
}
