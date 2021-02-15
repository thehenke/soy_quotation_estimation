import { useState } from 'react';
import Head from 'next/head';
import SearchForm from '../components/SearchForm/SearchForm';
import SearchResult from '../components/SearchResult/SearchResult';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>CaproAgro</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        <link rel="sortcut icon" href="tt.png" type="image/gif" />
      </Head>
      <SearchForm />
      {/* <SearchResult /> */}
    </div>
  )
}
