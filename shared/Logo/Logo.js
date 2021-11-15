import React from 'react'
import Link from 'next/link'
import LogoSvgLight from './LogoSvgLight';
import LogoSvg from './LogoSvg';
import logoImg from "../../images/logo.png";
import logoLightImg from "../../images/logo-light.png";

const Logo = () => {
    const img = logoImg;
    const imgLight = logoLightImg;
    const className = "";
    return (
        <>
            <Link href="/">
                <a className={`ttnc-logo inline-block text-primary-6000 ${className}`}>
                    <LogoSvgLight />
                    <LogoSvg />

                    {/* THIS USE FOR MY CLIENT */}
                    {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
                    {/* {img ? (
                        <img
                            className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
                            src={img}
                            alt="Logo"
                        />
                    ) : (
                        "Logo Here"
                    )}
                    {imgLight && (
                        <img
                            className="hidden max-h-12 dark:block"
                            src={imgLight}
                            alt="Logo-Light"
                        />
                    )} */}
                </a>

            </Link>
        </>
    )
}

export default Logo
