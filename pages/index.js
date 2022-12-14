import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../asset/Logo_green.png';

export default function Home() {
  const [listView, setListView] = useState([{}]);
  const router = useRouter();

  useEffect(() => {
    // 서브페이지 추가일 때 리스트 목록을 보여주기 위한 FLAG
    setListView([
      {url :'/myinterior', name: '나만의인테리어'},
      {url :'/balancegame', name: '당신의 선택(구약편)'},
      {url :'/balancegame2', name: '당신의 선택(신약편)'},
    ])
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <Head>
        <title>유형테스트 목록 | 말씀광장</title>
        <meta name="description" content="말씀광장 유형테스트 목록보기 페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#F5F2EE]'>
            <Head>
                <title>유형테스트 목록 | 말씀광장</title>
            </Head>
            <div className="max-w-screen-sm mx-auto max-h-screen flex flex-col justify-items-center items-center  px-[2rem]" >
                <div className="relative pt-[1rem] w-full text-right mb-14">
                    <div className='w-[5rem] inline-block'>
                        <Image src={Logo} layout="responsive" />
                    </div>
                </div>
                <div className="w-full relative h-screen text-[#000000] text-left">
                    <h1 className='font-[SANGJU] text-[4rem] mb-[1rem] leading-[4rem]'>유형테스트<br /></h1>
                    <span className='w-[11rem] border-2 border-[#30BA93] inline-block'></span>
                    <h2 className='font-[DREAM] text-[1rem] sm:text-[1.5rem] pb-8 mt-[1rem]'>말씀광장의 다양한 유형테스트를 통해서 성경의 상식과 즐거움을 찾아보세요!</h2>
                    <div className='w-full text-center'>
                      {listView?.map((data, index) => {
                        return (
                          <Link href={`${data.url}`} key={index}>
                            <a>
                              <button className='font-[DREAM] text-[1rem] sm:text-[1.5rem]  bg-[#30BA93] text-white px-[4.5rem] py-3 rounded-xl mt-[1rem] mx-auto'>
                                  {data.name}
                              </button>
                            </a>
                        </Link>
                        )
                      })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
