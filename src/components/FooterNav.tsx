import Image from "next/image"
import React from "react"
import tw from "tailwind-styled-components"
import AhLogo from '@/static/images/Ah.png'
import ShibaLogo from '@/static/images/shiba_logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faVideo, faSquarePlus, faEnvelope, faUser  } from '@fortawesome/free-solid-svg-icons' 

const FooterNavContainer = tw.div`
    
    h-12 w-full
    border-t
    border-amber-900
     bg-shibablue-100
    scroll-transparent scroll-overlay
    flex lg:hidden
`

const FooterNavList = tw.div`
    h-full flex-1 flex justify-center items-center p-3
`

const FooterNavIconContainer = tw.div`
    h-full w-full flex justify-center aspect-square text-amber-950
`

export default function FooterNav() {
    return (
        <>
            <FooterNavContainer>
                <FooterNavList>
                    <FooterNavIconContainer>
                        <FontAwesomeIcon icon={faHome}/>
                    </FooterNavIconContainer>
                </FooterNavList>
                <FooterNavList>
                    <FooterNavIconContainer>
                        <FontAwesomeIcon icon={faVideo}/>
                    </FooterNavIconContainer>
                </FooterNavList>
                <FooterNavList>
                    <FooterNavIconContainer>
                        <FontAwesomeIcon icon={faSquarePlus}/>
                    </FooterNavIconContainer>
                </FooterNavList>
                <FooterNavList>
                    <FooterNavIconContainer>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </FooterNavIconContainer>
                </FooterNavList>
                <FooterNavList>
                    <FooterNavIconContainer>
                        <FontAwesomeIcon icon={faUser}/>
                    </FooterNavIconContainer>
                </FooterNavList>
            </FooterNavContainer>
        </>
    )
}