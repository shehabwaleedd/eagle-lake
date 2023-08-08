import React from 'react'
import './Contact.css'
import LeftSideContact from './leftSideContact/LeftSideContact'

const Contact = () => {
    return (
        <section className='contact'>
            <div className="left__side-contact">
                <LeftSideContact />
            </div>
            <div className="right__side-contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15872.53176808049!2d80.442011!3d5.976425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1156f7250d59f%3A0xbfa04fa5aa9a5c8f!2sThe%20Eagle%20Lake!5e0!3m2!1sen!2sae!4v1691513377016!5m2!1sen!2sae" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact