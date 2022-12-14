import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../asset/logo.png';
import MainBG from '../../asset/main_bg.jpg';
import talkBox from '../../asset/talkBox.png';
import LadyImage from '../../asset/page1Main.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page3 = () => {

    const [userData, setUserData] = useState(null);
    const [userSelectOption, setUserSelectOption] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        const pageUserSelectValue = JSON.parse(localStorage.getItem('pageUserSelectValue'));
        setUserData(pageUserSelectValue);
        
    }, [])


    const userMBTISelect = (page, type) => {
        let makeUserData = userData;
        makeUserData[page] = {'page':page+1, 'value':type};
        localStorage.setItem('pageUserSelectValue', JSON.stringify(makeUserData));
        router.push('/myinterior/4');
    }


    return (
        <div className="relative flex flex-col items-center max-w-screen-sm mx-auto border-2 justify-items-center">
            <Image src={MainBG} className="w-full" />
            <div className="absolute top-0 left-0 flex items-center w-full h-full text-center text-white bg-black justify-items-center bg-opacity-60">
                <div className='flex flex-col justify-center w-full' >
                    <div className='relative w-[80%] mx-auto mb-2'>
                        <h1 className='py-8 font-[GyeonggiTitleM] text-4xl text-white border-b-4 border-white'>질문 1</h1>
                        {/* <Image src={LadyImage} layout={'intrinsic'} /> */}
                    </div>
                    <div className='relative w-[95%] rounded-xl p-5 mx-auto'>
                        <p className='text-center w-full font-[NanumSquareRound] text-2xl mb-2 font-bold leading-7'>
                            인테리어 종류가 생각보다 많잖아?<br />
                            어떤 스타일이 나랑 어울릴까?
                        </p>
                        <div className="flex flex-col space-y-4 mt-5 pb-4 font-[NanumSquareRound] text-lg">
                            <button onClick={() => userMBTISelect(0, 'E')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center leading-[3]`}>여러 사람들에게 이것저것 물어보면 좋을 것 같아!</button>
                            <button onClick={() => userMBTISelect(0, 'I')} className={`bg-transparent border-solid border-2 border-white text-white rounded-2xl py-2 flex item-center justify-center`}>사람들에게 물어보는건 부담스러우니,<br />일단 인터넷으로 찾아보자.</button>
                        </div>
                    </div>
                    <div className="relative flex flex-row justify-between max-w-screen-sm px-8 mt-12 bottom-5 mx-auto w-[80%]">
                        <div className='text-[1.4rem]'>
                            <Link href="/myinterior/2">
                                <button className='font-[NanumSquareRound] text-lg bg-transparent border-solid border-2 border-white text-white px-8 py-1 rounded-lg'>
                                    이전
                                </button>
                            </Link>
                        </div>
                        <p className="leading-[3rem] font-[NanumSquareRound] text-lg">
                            01 / 12
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

export default Page3;