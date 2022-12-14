import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import talkBox from '../../asset/talkBox.png';
import Logo from '../../asset/logo.png';
import LadyImage from '../../asset/ladyImage001.png';
import { useEffect } from 'react';

const onePage = () => {

    return (
        <div className="relative flex flex-col items-center max-w-screen-sm max-h-screen mx-auto justify-items-center" >
            <Image className='w-full' src={MainBG} />
            <div className="absolute w-full h-screen text-center text-black">
                <div className='flex flex-col justify-center w-full h-screen' >
                    <div className='relative w-[85%] mx-auto mb-10'>
                        <Image src={talkBox} layout='responsive'/>
                        <p className='absolute top-[11vh] text-center w-full font-[NanumSquareRound] text-xl font-bold'>
                            집에 변화가 필요한 것 같아. <br />
                            집을 한번 꾸며볼까?
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <Link href="/myinterior/2">
                            <button className='font-[NanumSquareRound] text-xl bg-[#465b69] text-white px-10 py-3 rounded-2xl'>
                                다음 페이지로
                            </button>
                        </Link>
                    </div>
                    
                    {/* <div className='relative w-[20rem] mx-auto'>
                        <Image src={LadyImage} layout={'responsive'} />
                    </div>   */}
                </div>  
            </div>
            <div className="absolute w-20 bottom-10">
                <Image src={Logo}/>
            </div>
        </div>
    )
}

export default onePage;