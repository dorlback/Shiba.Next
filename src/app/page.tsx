import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from 'tailwind-styled-components'
import ShibaDiaryContents from '@/components/diary/ShibaDiaryContents'
import BasicModal from '@/components/BasicModal'

const inter = Inter({ subsets: ['latin'] })

const HomeContainer = tw.div`
    flex flex-col w-full items-center space-y-8 my-8
`


export default function Home() {
    return (
        <>
            <HomeContainer>
                <BasicModal/>
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
                <ShibaDiaryContents />
            </HomeContainer>
        </>
    )
}