import Image from "next/image"
import React from "react"
import tw from "tailwind-styled-components"
import AhLogo from '@/static/images/Ah.png'
import ShibaLogo from '@/static/images/shiba_logo.png'

const FooterContainer = tw.div`
    flex
    h-40 w-full
    border-t
    border-amber-900
    scroll-transparent scroll-overlay
`

export default function Footer() {
    return (
        <>
            <FooterContainer>
        
            </FooterContainer>
        </>
    )
}