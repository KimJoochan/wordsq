import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../../asset/main_bg.jpg';
import talkBox from '../../../asset/talkBox.png';
import mainImage from '../../../asset/page12Main.png';
import { useEffect, useState } from 'react';
import { mbtiData } from '../../myinterior/MbtiResultContent';
import Logo from '../../../asset/Logo_green.png';
import Again from '../../../asset/again.png';
import OtherTest from '../../../asset/otherTest.png';
import Share from '../../../asset/share.png';
import { useRouter } from 'next/router';

const MBTIResult = () => {

    const [userData, setUserData] = useState(null);
    const router = useRouter();
    const [baseUrl, setBaseUrl] = useState('');

    let makeMBTIResult = router.query.mbti;
    const makeInteriorInfo = mbtiData.filter((data) => { if (data.type === makeMBTIResult){return true}});
   
    
    return (
        <div className="max-w-screen-sm mx-auto max-h-full border-2 flex flex-col justify-items-center items-center " > 
            <div className="w-full text-center pt-12 text-[#325029]">
                <div className='w-full flex flex-col pb-[5%]' >
                    <div className='relative w-[95%] mx-auto'>
                        <Image src={makeInteriorInfo[0]?.InteriorImg} layout={'intrinsic'} alt={"나만의 인테리어 설명 이미지"} />
                    </div>
                    <div className='relative w-[90%] mt-8 rounded-xl p-5 mx-auto bg-white'>
                        <h2 className='font-[GyeonggiTitleM] text-3xl pb-8'>
                            {makeInteriorInfo[0]?.InteriorIntroTextMain}
                        </h2>
                        <p className='text-center w-full font-[GyeonggiTitleM] text-xl pt-6 pb-8'>
                            {makeInteriorInfo[0]?.InteriorIntroTextSub}
                        </p>

                        <p className='text-center w-full font-[GyeonggiTitleM] text-xl pt-6 pb-8'>
                            {makeInteriorInfo[0]?.info}
                        </p>
                        <div className='flex justify-end text-center w-full font-[GyeonggiTitleM] text-xl pt-6 pb-2 cursor-pointer'>
                            <p className="w-1/5">
                                <Link href="https://www.wordsquare.org/">
                                    <Image src={Logo} alt={"말씀광장 로고 이미지"}/>
                                </Link>
                            </p>
                        </div>
                    </div>
                      
                </div>  
            </div>
            <div className="max-w-screen-sm w-full bottom-5 pb-[3rem] flex flex-col space-y-5 justify-between px-8">
                <div>
                    <Link href="/myinterior/1">
                        <button className='font-[GyeonggiTitleM] text-3xl w-full bg-[#325029] text-white px-8 py-3 rounded-2xl flex justify-center'>
                            <div className='w-[2rem] mr-3'>
                                <Image src={Again} alt={"다시하기 이미지"} layout="responsive" />
                            </div>
                            <span>
                                다시하기
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.wordsquare.org/square-crossroads/assessments">
                        <button className='font-[GyeonggiTitleM] text-3xl w-full bg-[#325029] text-white px-8 py-3 rounded-2xl flex justify-center'>
                            <div className='w-[2rem] mr-3'>
                                <Image src={OtherTest} alt={"다시하기 이미지"} layout="responsive" />
                            </div>
                            <span>
                                다른테스트 하러가기
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MBTIResult;