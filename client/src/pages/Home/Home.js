import React from 'react'
import Careers from './Careers';
import Service from './Services';
import Carousel from './Carousel';
import Partners from './Partners';
import Process from './Process';

function Home() {
    return (
        <>
            <Carousel />
            <Partners />
            <Careers />
            <Process />
            <Service />
        </>
    )
}

export default Home