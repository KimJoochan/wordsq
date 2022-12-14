import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../../asset/Logo_green.png';
import { useEffect } from 'react';
const Index = () => {

    const otBalanceGameUserSelectValue = [
        { page: 1, value: '' },
        { page: 2, value: '' },
        { page: 3, value: '' },
        { page: 4, value: '' },
        { page: 5, value: '' },
        { page: 6, value: '' },
        { page: 7, value: '' }
    ]

    useEffect(() => {
        if(localStorage.getItem('otBalanceGameUserSelectValue') === null) {
            localStorage.setItem("otBalanceGameUserSelectValue", JSON.stringify(otBalanceGameUserSelectValue));
        }
    }, [])

    return (
        <div className='bg-[#F5F2EE]'>
            <Head>
                <title>성경 속 당신의 선택(구약편) | 말씀광장</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
            </Head>
            <div className="max-w-screen-sm mx-auto max-h-screen flex flex-col justify-items-center items-center  px-[2rem]" >
                <div className="relative pt-[1rem] w-full text-right mb-14">
                    <div className='w-[5rem] inline-block'>
                        <Image src={Logo} layout="responsive" />
                    </div>
                </div>
                <div className="w-full relative h-screen text-[#000000] text-left">
                    <h1 className='font-Blackhan text-[4rem] mb-[1rem] leading-[4rem]'>성경 속<br />당신의 선택<br /><span className='text-[3rem]'>(신약편)</span></h1>
                    <span className='w-[11rem] border-2 border-[#30BA93] inline-block'></span>
                    <h2 className='font-[DREAM] text-[1rem] sm:text-[1.5rem] pb-8 mt-[1rem]'>성경 속 각 인물의 여러가지 상황을 통해서<br />나라면 어떤선택을 할지,<br />당시의 인물은 어떤 선택을 했는지 알아볼까요?</h2>
                    <Link href="/balancegame2/1">
                        <button className='font-[DREAM] text-[1rem] sm:text-[1.5rem]  bg-[#30BA93] text-white px-[4.5rem] py-3 rounded-xl mt-[2rem] shadow-lg'>
                            시작하기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index;