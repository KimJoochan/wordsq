import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [listView, setListView] = useState([]);
  const router = useRouter();

  const userSelectData = [
    { type: 'I', value: 0 },  
    { type: 'E', value: 0 },  
    { type: 'S', value: 0 },  
    { type: 'N', value: 0 },  
    { type: 'T', value: 0 },  
    { type: 'F', value: 0 },  
    { type: 'J', value: 0 },  
    { type: 'P', value: 0 }, 
  ];

const pageUserSelectValue = [
    { page: 1 , value: null },
    { page: 2 , value: null },
    { page: 3 , value: null },
    { page: 4 , value: null },
    { page: 5 , value: null },
    { page: 6 , value: null },
    { page: 7 , value: null },
    { page: 8 , value: null },
    { page: 9 , value: null },
    { page: 10 , value: null },
    { page: 11 , value: null },
    { page: 12 , value: null },
  ]

  useEffect(() => {
    // 서브페이지 추가일 때 리스트 목록을 보여주기 위한 처리
    setListView('myInterior');


    if(localStorage.getItem('pageUserSelectValue') === null) {
      localStorage.setItem("userSelectData", JSON.stringify(userSelectData));
      localStorage.setItem("pageUserSelectValue", JSON.stringify(pageUserSelectValue));
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
