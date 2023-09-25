'use client';
import { FormEventHandler, useState } from 'react';
import styles from './Search.module.css';
import { searchData } from '../../services/getNews';

type Props = { onSearch: (value: any[]) => void };

const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const news = await searchData(search);
    onSearch(news);
  };

  return (
    <div className={styles.root}>
      <span className={styles.searchText}>Search:</span>
      <form onSubmit={submitHandler}>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
    </div>
  );
};

export { Search };
