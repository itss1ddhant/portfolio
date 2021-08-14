import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Siddhant Pandey | Public speaker | YouTuber | Educator | Blogger | Uplifting the student community in the field of tech and personal growth'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        Teaching is my passion. Till now I have taught 1000 students and I've been teaching
                        students about Programming. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='https://www.youtube.com/channel/UCxyC_OIee4WvJ1xy30AVj_A'
                        >
                            my free C++ Master Course!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs too. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://itssiddhant.blogspot.com/'
                        >
                            my blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        a number of events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:siddhantpandey860@gmail.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;