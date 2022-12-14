import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import talkBox from '../../asset/talkBox.png';
import mainImage from '../../asset/page4Main.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../../asset/logo.png';

const Page6 = () => {

    const [userData, setUserData] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        const pageUserSelectValue = JSON.parse(localStorage.getItem('pageUserSelectValue'));
        setUserData(pageUserSelectValue);
        console.log(pageUserSelectValue);
    }, [])


    const userMBTISelect = (page, type) => {
        let makeUserData = userData;
        makeUserData[page] = {'page':page+1, 'value':type};
        localStorage.setItem('pageUserSelectValue', JSON.stringify(makeUserData));
        router.push('/myinterior/7');
    }

    return (
        <div className="relative flex flex-col items-center max-w-screen-sm mx-auto border-2 justify-items-center" >
            <Image src={MainBG} className="w-full" />
            <div className="absolute top-0 left-0 flex items-center w-full h-full text-center text-white bg-black justify-items-center bg-opacity-60">
                <div className='flex flex-col justify-center w-full' >
                    <div className='relative w-[80%] mx-auto mb-2'>
                        <h1 className='py-8 font-[GyeonggiTitleM] text-4xl text-white border-b-4 border-white'>질문 4</h1>
                        {/* <Image src={mainImage} layout={'intrinsic'} /> */}
                    </div>
                    <div className='relative w-[95%] rounded-xl p-5 mx-auto'>
                        <p className='text-center w-full font-[NanumSquareRound] text-2xl mb-2 font-bold leading-7'>
                            마음에 드는 가구 발견!<br />
                            옆에 제품에 대한 설명이 적혀있잖아?
                        </p>
                        <div className="flex flex-col space-y-4 mt-5 pb-4 font-[NanumSquareRound] text-lg">
                            <button onClick={() => userMBTISelect(3, 'S')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center`}>아, 이런용도구나.<br />설명서 읽으니 명확하게 이해가 되네.</button>
                            <button onClick={() => userMBTISelect(3, 'N')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center`}>어 설명서?<br />아... 내일까지 보고서 제출해야 했지.</button>
                        </div>
                    </div>
                    <div className="rrelative flex flex-row justify-between w-full max-w-screen-sm px-8 mt-12 bottom-5 mx-auto w-[80%]">
                        <div className='text-[1.4rem]'>
                            <Link href="/myinterior/5">
                                <button className='font-[NanumSquareRound] text-lg bg-transparent border-solid border-2 border-white text-white px-8 py-1 rounded-2xl'>
                                    이전
                                </button>
                            </Link>
                        </div>
                        <p className="leading-[3rem] font-[NanumSquareRound] text-lg">
                            04 / 12
                        </p>
                    </div>
                </div>  
            </div>
            

            <div className="absolute w-20 bottom-10">
                <Image src={Logo}/>
            </div>

        </div>
    )
}

export default Page6;