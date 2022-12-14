import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../../asset/main_bg.jpg';
import talkBox from '../../../asset/talkBox.png';
import mainImage from '../../../asset/page12Main.png';
import { useEffect, useState } from 'react';
import { mbtiData } from '../../myinterior/MbtiResultContent';
import Logo from '../../../asset/logo.png';
import Again from '../../../asset/again.png';
import OtherTest from '../../../asset/otherTest.png';
import Share from '../../../asset/share.png';
import { useRouter } from 'next/router';

const MBTIResult = () => {
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [baseUrl, setBaseUrl] = useState('');
    let resultMBTIType = [{ type: 'IE', value: null}, { type: 'TF', value: null}, { type: 'SN', value: null}, { type: 'JP', value: null}];
    let makeMBTIResult = "";
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
    
    useEffect(() => {
        const pageUserSelectValue = JSON.parse(localStorage.getItem('pageUserSelectValue'));
        setBaseUrl(window.location.href);
        setUserData(pageUserSelectValue);
    }, [])


    userData && userData.map((data, index) => {
        let getIndex = userSelectData.findIndex(arr => arr.type === data['value']);
        userSelectData[`${getIndex}`].value = userSelectData[getIndex].value + 1;
    })

    if (userSelectData[0].value > userSelectData[1].value) {
        resultMBTIType[0].value = "I"
    } else {
        resultMBTIType[0].value = "E"
    }

    if (userSelectData[2].value > userSelectData[3].value) {
        resultMBTIType[1].value = "S"
    } else {
        resultMBTIType[1].value = "N"
    }

    if (userSelectData[4].value > userSelectData[5].value) {
        resultMBTIType[2].value = "T"
    } else {
        resultMBTIType[2].value = "F"
    }

    if (userSelectData[6].value > userSelectData[7].value) {
        resultMBTIType[3].value = "J"
    } else {
        resultMBTIType[3].value = "P"
    }

    resultMBTIType.map(data => {
        makeMBTIResult = makeMBTIResult.concat(data.value);
    })
    
    const makeInteriorInfo = mbtiData.filter((data) => { if (data.type === makeMBTIResult){return true}});
    const shareMakeUrl = `${baseUrl}/${makeMBTIResult}`;


    const copyTextUrl = () => {
        navigator.clipboard.writeText(shareMakeUrl).then(() => {
            alert('링크를 복사했습니다.');
        })
    }

    

    return (
        <div className="relative flex flex-col items-center max-w-screen-sm mx-auto bg-contain border-2 justify-items-center"> 
            <Image layout='fill' objectFit='fill' objectPosition='center' src={MainBG} alt="메인배경이미지"/>
            <div className="top-0 left-0 w-full pt-12 overflow-y-scroll text-center text-black ">
                <div className='w-full flex flex-col pb-[5%]' >
                    <div className='relative w-[90%] mx-auto overflow-hidden rounded-xl'>
                        <Image src={makeInteriorInfo[0]?.InteriorImg} layout={'intrinsic'} alt={"나만의 인테리어 설명 이미지"} />
                    </div>
                    <div className='relative w-[90%] mt-8 rounded-xl p-5 mx-auto bg-white  border-black border-solid bg-opacity-60 border-2 font-bold'>
                        <p className='text-center w-full font-[NanumSquareRound] text-base whitespace-pre-line mb-5'>
                            {makeInteriorInfo[0]?.InteriorIntroTextSub}
                            <span className='text-[#4d7656] text-xl font-[GyeonggiTitleM]'>
                                {makeInteriorInfo[0]?.InteriorIntroTextMain}
                            </span>
                            을 추천합니다.
                        </p>
                        <h2 className='text-2xl py-5 w-[50%] border-solid border-b-4 mx-auto font-[Cafe24Ssurround] border-black'>
                            나의 성향은?
                        </h2>
                        <p className='text-center w-full font-[NanumSquareRound] text-base pt-6 pb-8 whitespace-pre-line'>
                            {makeInteriorInfo[0]?.TendencyInfo}
                        </p>
                        <h2 className='text-2xl py-5 w-[50%] border-solid border-b-4 mx-auto font-[Cafe24Ssurround] border-black'>
                            인테리어 특징
                        </h2>
                        <p className='text-center w-full font-[NanumSquareRound] text-base pt-6 pb-8 whitespace-pre-line'>
                            {makeInteriorInfo[0]?.info}
                        </p>
                        <h2 className='text-2xl py-5 w-[50%] border-solid border-b-4 mx-auto font-[Cafe24Ssurround] border-black'>
                            추천색상
                        </h2>
                        <p className='text-center w-full font-[NanumSquareRound] text-base pt-6 pb-8 whitespace-pre-line'>
                            {makeInteriorInfo[0]?.ColorInfo}
                        </p>
                    </div>
                    
                    <div className="relative w-full pb-[3rem] flex flex-row flex-wrap space-y-5 justify-between items-end px-8 mt-8 text-[1.4rem] font-bold">
                        <div className='w-[48%]'>
                            <Link href="/myinterior">
                                <button className='font-[NanumSquareRound] text-sm w-full bg-white bg-opacity-60 px-8 py-3 rounded-2xl flex justify-center border-black border-solid border-2'>
                                    {/* <div className='w-[2rem] mr-3'>
                                        <Image src={Again} alt={"다시하기 이미지"} layout="responsive" />
                                    </div> */}
                                    <span>
                                        다시하기
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className='w-[48%]'>
                            <button className='font-[NanumSquareRound] text-sm w-full bg-white bg-opacity-60 px-8 py-3 rounded-2xl flex justify-center border-black border-solid border-2'>
                                {/* <div className='w-[2rem] mr-3'>
                                    <Image src={Share} alt={"다시하기 이미지"} layout="responsive" />
                                </div> */}
                                <span onClick={() => copyTextUrl()}>
                                    결과 공유하기
                                </span>
                            </button>
                        </div>
                        <div className='w-[48%]'>
                            <Link href="https://www.wordsquare.org/square-crossroads/assessments">
                                <button className='font-[NanumSquareRound] text-sm w-full bg-white bg-opacity-60 px-8 py-3 rounded-2xl flex justify-center border-black border-solid border-2'>
                                    {/* <div className='w-[2rem] mr-3'>
                                        <Image src={OtherTest} alt={"다시하기 이미지"} layout="responsive" />
                                    </div> */}
                                    <span>
                                        다른테스트 하러가기
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className='w-[48%]'>
                            <Link href="https://wordsquare.org/">
                                <button className='font-[NanumSquareRound] text-sm w-full bg-white bg-opacity-60 px-8 py-3 rounded-2xl flex justify-center border-black border-solid border-2'>
                                    {/* <div className='w-[2rem] mr-3'>
                                        <Image src={OtherTest} alt={"다시하기 이미지"} layout="responsive" />
                                    </div> */}
                                    <span>
                                        말씀광장 가기
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>  
            </div>
            
            <div className="absolute w-20 bottom-4">
                <Image src={Logo}/>
            </div>
        </div>
    )
}

export default MBTIResult;