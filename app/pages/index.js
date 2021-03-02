import { useState } from 'react';
import Head from 'next/head';
import Axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';
import SearchResult from '../components/SearchResult/SearchResult';
import Loading from '../components/Loading/Loading';
import api from './api.json';

export default function Home() {
  const [homePage, setHomePage] = useState(true);
  const [dataSearch, setDataSearch] = useState({});
  const [content, setContent] = useState();

  function NewSearch(contentSearch) {
    setContent(contentSearch);
    setHomePage('loading');
    
    return Axios({
      method: "POST",
      url: `${api.url}/search`,
      data: contentSearch,
    }).then(response => {
      if(response.data) {
        setHomePage(false);[]
        setDataSearch(response.data.busca);
      } else {
        console.log('Falha ao se comunicar com o servidor');
        setHomePage(true);
      }
    }).catch(err => {
      console.log(err);
      setHomePage(true);
    })
  }
  
  return (
    <div>
      <Head>
        <title>CaproAgro</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        <link rel="sortcut icon" href="tt.png" type="image/gif" />
      </Head>
      {homePage == 'loading' ?
        <Loading /> : homePage ?
        <SearchForm NewSearch={NewSearch}/> :
        <SearchResult
          NewSearch={NewSearch}
          dataSearch={dataSearch}
          content={content}
        />
      }
    </div>
  )
}
