import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import Logo from '../../asset/Logo_green.png';
import LoadingImg from '../../asset/balance/loading.PNG';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { questionList } from './questionList';

const Result = () => {
    const router = useRouter();
    const [userData, setUserData] = useState([{}]);
    const [isViewCommentery, setViewCommentery] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        const pageUserSelectValue = JSON.parse(localStorage.getItem('otBalanceGameUserSelectValue'));
        let makeUserData = [{}];
        pageUserSelectValue.map((data, index) => {
            data?.value === questionList[index].leftAnswer ? 
                makeUserData[index] = {
                    'pageNum' : index+1,
                    'value' : questionList[index].leftAnswer,
                    'AnswerImg' : questionList[index].leftAnswerImg,
                    'commentery' : questionList[index].commentery,
                    'relatedContent' : questionList[index].relatedContent,
                    'questionMsg' : questionList[index].resultQMsg,
                }
                : 
                makeUserData[index] = {
                    'pageNum' : index+1,
                    'value' : questionList[index].rightAnswer,
                    'AnswerImg' : questionList[index].rightAnswerImg,
                    'commentery' : questionList[index].commentery,
                    'relatedContent' : questionList[index].relatedContent,
                    'questionMsg' : questionList[index].resultQMsg,
                }
       })

       setUserData(makeUserData);
       const interval = setTimeout(()=> setLoading(false), 3400);
    }, []);

    const viewCommentery = (data) => {
        setViewCommentery(data);
    }

    return (
        <div className='bg-[#F5F2EE] h-screen overflow-auto'>
            <Head>
                <title>결과페이지 | 말씀광장</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
            </Head>
            <div className="max-w-screen-sm mx-auto overflow-auto flex flex-col justify-items-center items-center  px-[1rem] bg-[#F5F2EE]  pb-[4rem]" >
                <div className="flex justify-between items-center pt-[1rem] w-full text-right mb-14 cursor-pointer">
                    <div className='inline-block' onClick={() => router.back()}>
                        <span className='font-[DREAM] text-[1.3rem] text-[#30BA93]'>〈이전으로</span>
                    </div>
                    <div className='w-[5rem] inline-block'>
                        <Link href="https://www.wordsquare.org/">
                            <a>
                                <Image src={Logo} layout="responsive" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full relative  text-[#000000] text-left">
                    <h1 className='font-Blackhan text-[2rem] sm:text-[4rem] sm:mb-[1rem] leading-[4rem]'>나의 선택은?</h1>
                    <span className='w-[11rem] border-2 border-[#30BA93] inline-block'></span>
                    <h2 className='font-[DREAM] font-bold text-[1.1rem] sm:text-[1.5rem] pb-8 mt-[1rem]'>당신이 선택한 결과들은 다음과 같아요. <br /><b className='text-[#2ea885]'>그림</b>을 <b className='text-[#2ea885]'>선택</b>하시면 관련한 <b className='text-[#2ea885]'>컨텐츠를 볼 수 있습니다.</b></h2>
                </div>
                <div className='relative w-full font-[DREAM] font-bold text-[1.1rem] sm:text-[1.4rem] overflow-x-hidden'>
                    <h2 className='mb-[2rem]'>관련된 재미있는 영상들도 체크해볼까요?</h2>
                    
                    <div className={`relative w-full ${isLoading === true ? 'block' : 'hidden'}`}>
                        <div className="w-full borer-2">
                            <Image src={LoadingImg} layout="responsive" className='animate-busMove' />
                        </div>
                        <h2 className='mb-12 text-[1.1rem] sm;text-[1.7rem] w-3/4 mx-auto text-center border-2 rounded-lg border-[#30BA93] p-[1rem] ring-2 ring-offset-2'>
                            결과를 가져오는 중이에요<br /> 잠시만 기다려주세요
                        </h2>
                    </div>

                    <div className={`${isViewCommentery === null ? 'block' : 'hidden'} ${isLoading === true && 'hidden'}`}>
                        <ul className='flex flex-row justify-center flex-wrap '>
                        {userData?.map((data) => {
                            return (
                                <li key={data.pageNum} className='w-[33%] cursor-pointer opacity-75 hover:opacity-100 mb-[1rem]' onClick={() => viewCommentery(data)}>
                                    <Image src={data?.AnswerImg} layout="responsive" />
                                </li>
                            )
                        })}
                        </ul>    
                    </div>
                    {isViewCommentery !== null && (
                        <div className='w-[99%] bg-[#F5F2EE] '> 
                            <div className='w-full text-center'>
                                <p className='font-[DREAM] font-extrabold text-[1.2rem] leading-[1.4rem] sm:text-[1.8rem] sm:leading-[2rem] mb-[1rem]  whitespace-pre-wrap mt-[4rem] animate-bounce '>{isViewCommentery.questionMsg}</p>
                                <p className='w-[35%] mt-[1.5rem] mx-auto'>
                                    <Image src={isViewCommentery.AnswerImg} layout="responsive" />
                                </p>
                            </div>
                            <h2 className='border-2 rounded-xl border-[#30BA93] bg-[#30BA93] text-white px-4 py-2 inline-block cursor-pointer mb-[2rem]' onClick={() => setViewCommentery(null)}>닫기</h2>
                            <h2 className='font-[DREAM] text-[1.4rem] font-bold ]'>관련영상보기</h2>
                            <span className='w-[8rem] border-2 border-[#30BA93] inline-block mb-[1rem]'></span>
                            <ul className='leading-[1.8rem] sm:leading-[2.5rem]'>
                                {isViewCommentery.relatedContent.map((data, index) => {
                                    
                                    if(data === null) {
                                        return (
                                            <li className='cursor-pointer' key={index}>
                                                
                                            </li>
                                        )
                                    }
                                    
                                    return (
                                        <li className='cursor-pointer underline list-disc ml-4' key={data.pageNum}>
                                            <Link href={data.contentUrl} >
                                                <a>
                                                    <h2 className='text-[1rem] sm:text-[1.4rem]'>{data.title}</h2>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='mt-[3rem] w-full'>
                    <ul className='font-[DREAM] text-[1.4rem] sm:text-[1.7rem] w-full flex sm:flex-row flex-col justify-center sm:space-x-3 mx-auto text-center'>
                        <Link href="/balancegame">
                            <a>
                                <li className='py-[.5rem] sm:px-[1.5rem] mb-[1.5rem] border-2 bg-[#30BA93] text-white ring-1 ring-offset-2 ring-[#30BA93] rounded-lg hover:bg-[#22876b]'>다시하기</li>
                            </a>
                        </Link>
                        <Link href="https://www.wordsquare.org/square-crossroads/assessments">
                            <a>
                                <li className='py-[.5rem] px-[1.5rem] mb-[1.5rem] border-2 bg-[#30BA93] text-white ring-1 ring-offset-2 ring-[#30BA93] rounded-lg hover:bg-[#22876b]'>다른테스트</li>
                            </a>
                        </Link>
                        <Link href="https://www.wordsquare.org/">
                            <a>
                                <li className='py-[.5rem] px-[1.5rem] mb-[1.5rem] border-2 bg-[#30BA93] text-white ring-1 ring-offset-2 ring-[#30BA93] rounded-lg hover:bg-[#22876b]'>말씀광장가기</li>
                            </a>
                        </Link>                
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Result;
