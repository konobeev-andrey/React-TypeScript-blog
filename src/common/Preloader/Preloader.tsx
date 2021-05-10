import React from "react";
import preloaderSVG from './preloaderSVG.svg'

const Preloader = () => {
    return (
        <div className={'preloader__contener'}>
            <p><img src={preloaderSVG} alt={'preloader'}/></p>
        </div>
    )
}

export default Preloader;