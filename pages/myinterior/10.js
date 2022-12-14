import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import talkBox from '../../asset/talkBox.png';
import mainImage from '../../asset/page8Main.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../../asset/logo.png';

const Page10 = () => {

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
        router.push('/myinterior/11');
    }

    return (
        <div className="relative flex flex-col items-center max-w-screen-sm mx-auto border-2 justify-items-center" >
            <Image src={MainBG} className="w-full" />   
            <div className="absolute top-0 left-0 flex items-center w-full h-full text-center text-white bg-black justify-items-center bg-opacity-60">
                <div className='flex flex-col justify-center w-full' >
                    <div className='elative w-[80%] mx-auto mb-2'>
                        <h1 className='py-8 font-[GyeonggiTitleM] text-4xl text-white border-b-4 border-white'>질문 8</h1>
                        {/* <Image src={mainImage} layout={'intrinsic'} /> */}
                    </div>
                    <div className='relative w-[100%] rounded-xl p-5 mx-auto'>
                        <p className='text-center w-full font-[NanumSquareRound] text-2xl mb-2 font-bold leading-7'>
                            쇼핑을 마무리하고 계산을 하려고 할 때,<br />
                            파격세일 이벤트존을 발견!
                        </p>
                        <div className="flex flex-col space-y-4 mt-5 pb-4 font-[NanumSquareRound] text-lg">
                            <button onClick={() => userMBTISelect(7, 'P')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center leading-[3]`}>너무 좋다! 빨리 구경해보자</button>
                            <button onClick={() => userMBTISelect(7, 'J')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center leading-[3]`}>이미 사야할 건 다 샀으니 계산하고 집에 가자</button>
                        </div>
                    </div>
                    <div className="relative flex flex-row justify-between max-w-screen-sm px-8 mt-12 bottom-5 mx-auto w-[80%]">
                        <div className='text-lg'>
                            <Link href="/myinterior/9">
                                <button className='font-[NanumSquareRound] text-lg bg-transparent border-solid border-2 border-white text-white px-8 py-1 rounded-2xl'>
                                    이전
                                </button>
                            </Link>
                        </div>
                        <p className="leading-[3rem] font-[NanumSquareRound] text-lg">
                            08 / 12
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

export default Page10;