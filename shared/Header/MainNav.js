import React from 'react'
import Logo from '../Logo/Logo'

const MainNav = ({ isTop }) => {
    return (
        <>
            <div
                className={`nc-MainNav1 relative z-10 ${isTop ? "onTop " : "notOnTop backdrop-filter"
                    }`}
            >
                <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
                    <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
                        <Logo />
                        {/* <Navigation /> */}
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
                        <div className="hidden items-center xl:flex space-x-1">
                            {/* <SwitchDarkMode /> */}
                            {/* <SearchDropdown /> */}
                            <div className="px-1" />
                            {/* <ButtonPrimary href="/login">Sign up</ButtonPrimary> */}
                        </div>
                        <div className="flex items-center xl:hidden">
                            {/* <SwitchDarkMode /> */}
                            <div className="px-1" />
                            {/* <MenuBar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNav
