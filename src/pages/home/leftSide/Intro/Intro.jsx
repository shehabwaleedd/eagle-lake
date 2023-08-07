import React from 'react'
import UpperBox from './upperBox/UpperBox'
import SmallBoxLeft from './smallBoxLeft/SmallBoxLeft'
import SmallBoxRight from './smallBoxRight/SmallBoxRight'
import './Intro.css'
const Intro = () => {
    return (
        <section className='intro'>
            <div className="intro__container">
                <UpperBox />
                <div className="intro__bottom">
                    <SmallBoxLeft />
                    <SmallBoxRight />
                </div>
            </div>
        </section>
    )
}

export default Intro