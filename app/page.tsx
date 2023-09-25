'use client';
import styles from './Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getData } from './services/getNews';
import { Search } from './components/search/Search';

export default function Home() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(setNews)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      <Search onSearch={setNews} />
      <ol className={styles.post}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          news.map((post: any) => (
            <li key={post.publishedAt}>
              <Link href={`/news/${post.title}`} target="_black">
                {post.title}
              </Link>
              <div className={styles.info}>
                <span>by {post.author}</span>
                <span>{post.publishedAt}</span>
              </div>
            </li>
          ))
        )}
      </ol>
    </main>
  );
}
