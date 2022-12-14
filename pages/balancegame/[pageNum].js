import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../asset/Logo_green.png';
import { questionList } from './questionList';
import { useEffect, useState } from 'react';


export const wordBreak = {
    wordBreak: "keep-all",
};

const PageView = () => {
    const router = useRouter();
    const [userData, setUserData] = useState([]);
    const [commenteryIsView, setCommenteryIsView] = useState(false);

    const pageNum = parseInt(router.query.pageNum);

    useEffect(() => {
        const pageUserSelectValue = JSON.parse(localStorage.getItem('otBalanceGameUserSelectValue'));
        setUserData(pageUserSelectValue);

    }, []);

    const userSelectAnswer = (value) => {
        let makeUserData = userData;
        makeUserData[pageNum-1] = {'page':pageNum, 'value':value};
        localStorage.setItem('otBalanceGameUserSelectValue', JSON.stringify(makeUserData));
        
        router.push(`/balancegame/${questionList[pageNum-1].nextPage}`);
    }

    const viewCommentery = (value) => {
        setCommenteryIsView(value);
    }


    return (
        <div className='bg-[#F5F2EE] h-screen overflow-auto '>
            <Head>
                <title>당신의 선택(구약편) | 말씀광장</title>
            </Head>
            <div className="max-w-screen-sm mx-auto px-[1rem] bg-[#F5F2EE] " >
                <div className="flex justify-between items-center pt-[1rem] w-full text-right mb-14 cursor-pointer">
                    <div className='inline-block' >
                        <span className='font-[DREAM] font-bold text-[1.3rem] text-[#30BA93] hover:text-[#8a3d96]'>당신의 선택(구약편)</span>
                    </div>
                    <div className='w-[5rem] inline-block'>
                        <Link href="https://www.wordsquare.org/" >
                            <a>
                                <Image src={Logo} layout="responsive" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full relative text-[#000000] text-left mt-[2rem]">
                    <h1 className='font-[DREAM] font-extrabold text-[1.2rem] leading-[2rem] sm:text-[1.6rem] sm:leading-[2.5rem] mb-[1rem]  whitespace-pre-wrap'>Q. {questionList[pageNum-1] && questionList[pageNum-1].questionMsg}</h1>                   
                </div>
                <div className='flex flex-row justify-around align-bottom w-full pt-[1rem] sm:pt-[3rem]'>
                    <div onClick={() => userSelectAnswer(questionList[pageNum-1]?.leftAnswer)} className={`px-[1rem] cursor-pointer relative w-[40%] hover:transition-colors  hover:opacity-100 font-[DREAM] text-[1rem] sm:text-[1.5rem]  text-black py-3`}>
                        <div className='relative hover:transition-colors hover:opacity-100 p-[.2rem] rounded-2xl mb-[2rem] h-[18vh] sm:h-[26vh]'>
                            <div className='absolute top-0 left-0 w-full'>
                                <Image src={questionList[pageNum-1]?.leftAnswerImg} layout="responsive" className='animate-fadeIn' alt="설명 보조 이미지" />
                                
                            </div>
                            <div className='absolute top-0 left-0 w-full'>
                                <Image src={questionList[pageNum-1]?.leftAnswerImg1} layout="responsive" className='animate-fadeOut' alt="설명 보조 이미지" />
                            </div>
                        </div>
                        <p className='relative text-center font-bold' style={wordBreak}>{questionList[pageNum-1] && questionList[pageNum-1].leftAnswer}</p>
                    </div>
                    <div>
                        <span className='text-[1rem] sm:text-[1.4rem] font-[SANGJU]'>VS</span>
                    </div>
                    <div onClick={() => userSelectAnswer(questionList[pageNum-1]?.rightAnswer)} className={`px-[1rem] cursor-pointer relative w-[40%] hover:transition-colors  hover:opacity-100 font-[DREAM] text-[1rem] sm:text-[1.5rem]  text-black py-3`}>
                        <div className='relative hover:transition-colors hover:opacity-100 p-[.2rem] rounded-2xl mb-[2rem] h-[18vh] sm:h-[26vh]'>
                            <div className='absolute top-0 left-0 w-full'>
                                <Image src={questionList[pageNum-1]?.rightAnswerImg} layout="responsive" className='animate-fadeIn' alt="설명 보조 이미지" />
                            </div>
                            <div className='absolute top-0 left-0 w-full'>
                                <Image src={questionList[pageNum-1]?.rightAnswerImg1} layout="responsive" className='animate-fadeOut' alt="설명 보조 이미지" />
                            </div>
                        </div>
                        <p className='relative text-center font-bold' style={wordBreak}>{questionList[pageNum-1] && questionList[pageNum-1].rightAnswer}</p>
                    </div>
                </div>
                <div className='w-full text-center mt-[2rem] '>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <h2 className='mt-[2rem] font-[DREAM] border-b-2 pb-1 border-[#6e9187] cursor-pointer inline-block' onClick={() => router.back()}>
                                이전으로
                        </h2>
                        <h2 className='mt-[2rem] font-[DREAM] border-b-2 pb-1 border-[#6e9187] cursor-pointer' onClick={() => viewCommentery(commenteryIsView ? false : true)}>
                            {!commenteryIsView ? "해설보기" : "해설닫기"}
                        </h2>
                    </div>
                    <p className={`mt-[2rem] mb-[2rem] font-[DREAM] whitespace-pre-wrap ${commenteryIsView ? 'border-2 border-[#6e9187] rounded-xl p-4' : 'hidden'}`} dangerouslySetInnerHTML={ {__html: questionList[pageNum-1]?.commentery}}>
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default PageView;
