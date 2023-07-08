import React from 'react'

const Carousel = () => {
  return (
    // <!-- Section1  -->
    <div id="home-page-wrap">
        <section id="home-page-scroll-button-wrap">
            <div id="home-page-button-wrapper">
                {/* <!-- image start --> */}
                <div id="home-page-wrapper-1"> 
                    <img src="" alt=''/>
                </div>
                <div id="home-page-wrapper-2">
                    <img src="" alt=''/>
                </div>
                <div id="home-page-wrapper-3">
                    <img src="" alt=''/>
                </div>
                <div id="home-page-wrapper-4">
                    <img src=""alt='' />
                </div>
                <div id="home-page-wrapper-5">
                    <img src="" alt="" />
                </div>
                {/* <!-- image end --> */}
                {/* <!-- Read more Button start  --> */}
                <div id="home-page-button">
                    <button> Read More </button>
                </div>
                {/* <!-- button end --> */}
            </div>
            <div id="home-page-scroll">
                <button> NEXT  </button>
                <button>||</button>
                <button>PREVIOUS</button>
            </div>
        </section>
        <div id="home-page-line"></div>
    </div>
  )
}

export default Carousel