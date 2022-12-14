import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import Logo from '../../asset/logo.png';
import talkBox from '../../asset/talkBox.png';
import LadyImage from '../../asset/ladyImage002.png';


const twoPage = () => {
    return (
        <div className="relative flex flex-col items-center max-w-screen-sm max-h-screen mx-auto justify-items-center">
            <Image className='w-full' src={MainBG} />
            <div className="absolute w-full h-screen text-center text-black">
                <div className='flex flex-col justify-center w-full h-screen' >
                    <div className='relative w-[85%] mx-auto mb-10'>    
                        <Image src={talkBox} layout={'intrinsic'} />
                        <p className='absolute top-[9vh] text-center w-full font-[NanumSquareRound] text-xl font-bold'>
                            청소도 하고 가구도 사고<br />
                            인테리어 해서 꾸며보자!<br />
                            그럼 이제 출발~!
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <Link href="/myinterior/3">
                            <button className='font-[NanumSquareRound] text-xl bg-[#465b69] text-white px-14 py-3 rounded-2xl'>
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

export default twoPage;