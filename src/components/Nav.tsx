import Image from "next/image"
import React from "react"
import tw from "tailwind-styled-components"
import AhLogo from '@/static/images/Ah.png'
import ShibaLogo from '@/static/images/shiba_logo.png'

const NavContainer = tw.nav`
    flex items-center justify-center
    w-full h-14
  bg-shibablue-100
    border-b border-b-amber-900
    scroll-transparent scroll-overlay
`

const NavLayout = tw.div`
    max-w-[1600px] 
    flex flex-col items-center justify-between
    w-full h-full px-4 xl:px-6 py-4 lg:py-3
`

const NavLogoContainer = tw.div`
    flex 
    w-full h-full space-x-1 lg:space-x-2
`

export default function Nav() {
    return (
        <>
            <NavContainer>
                <NavLayout>
                    <NavLogoContainer>
                        <Image className="h-full w-fit object-contain" src={AhLogo} ></Image>
                        <Image className="h-full w-fit object-contain" src={ShibaLogo} ></Image>
                    </NavLogoContainer>
                </NavLayout>
            </NavContainer>
        </>
    )
}