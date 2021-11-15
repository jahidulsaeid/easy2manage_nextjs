import React, { useState, useEffect } from 'react'
import MainNav from './MainNav'

const Header = () => {
    const [isTop, setisTop] = useState(true);

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    function scrollFunction() {
        const $head = document.getElementById("nc-chifis-header");
        if (!$head) return;
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            !!isTop && setisTop(false);
        } else {
            setisTop(true);
        }
    }
    return (
        <>
            <div id="nc-chifis-header" className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40">

                {/* NAV */}
                <MainNav isTop={isTop} />
            </div>
        </>
    )
}

export default Header
