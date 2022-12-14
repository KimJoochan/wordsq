import Image from 'next/image';
import Link from 'next/link';
import MainBG from '../../asset/main_bg.jpg';
import Logo from '../../asset/logo.png';
import Title from '../../asset/title.png'

const index = () => {
    return (
        <div className="relative flex flex-col items-center max-w-screen-sm max-h-screen mx-auto justify-items-center" >
            <Image className='w-full' src={MainBG} />
            <div className="w-full absolute top-[33vh] text-center text-[#465b69]">
                <Image className='mx-auto w-[50%]' src={Title} alt='내 마음의 인테리어' />
                <h2 className='font-[NanumSquareRound] text-2xl font-bold pt-3 pb-10 mb-5'>-당신에게 어울리는 인테리어는?-</h2>
                <Link href="/myinterior/1">
                    <button className='font-[NanumSquareRound] text-xl bg-[#465b69] text-white px-10 py-3 rounded-2xl'>
                        시작하기
                    </button>
                </Link>
            </div>
            <div className="absolute w-20 bottom-10">
                <Image src={Logo}/>
            </div>
        </div>
    )
}

export default index;