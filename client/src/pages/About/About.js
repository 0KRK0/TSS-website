import React from 'react';
import { useEffect } from 'react';
import '../../styles/About.css';

function About() {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const handleScroll = () => {
            const windowheight = window.innerHeight;
            const revealpoint = 150;

            reveals.forEach((reveal) => {
                const revealtop = reveal.getBoundingClientRect().top;

                if (revealtop < windowheight - revealpoint) {
                    reveal.classList.add('active');
                } else {
                    reveal.classList.remove('active');
                }
            });
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='about'>
            <main className="stalwart">
                <div className="header">
                    <h1>About Us</h1>
                </div>
                <div className="container-a h">
                    <div className="stalwart-content">
                        <h2>Tech Stalwart Solution</h2>
                        <p> Empowering Businesses with Exceptional
                            Staffing and Strategic Consulting Solutions for Unparalleled Success.
                            Your Trusted Partner for Exceptional Staffing
                            and Strategic Consulting, driving unparalleled success in the ever evolving technology landscape.</p>
                    </div>
                    <div className="stalwart-image">
                        <img className='stl-img' src="https://assets.entrepreneur.com/content/3x2/2000/20150225224437-computer.jpeg" />
                    </div>
                </div>

                <section className="container-a reveal section1">
                    <div className="stalwart-content">
                        <h2>Unparalleled Staffing Services</h2>
                        <p> At Tech Stalwart Solution, we understand that exceptional talent is the
                            backbone of any successful organization. That's why we specialize in
                            identifying, recruiting, and onboarding top-notch professionals who possess
                            the skills, knowledge, and experience to drive your business forward. Whether
                            you need temporary staff for short-term projects or permanent hires for longterm growth, our comprehensive staffing solutions ensure that you have access
                            to the right talent when you need it most.</p>

                    </div>

                </section>


                <section className="container-a reveal section2">
                    <div className="stalwart-content">
                        <h2>Extensive Network of Expert Consultants</h2>
                        <p> Our company boasts a vast network of industry-leading consultants who
                            possess deep domain knowledge and a wealth of experience across various
                            technology sectors. These consultants are equipped to provide strategic
                            guidance, solve complex business challenges, and assist in technology
                            implementation and optimization. By partnering with Tech Stalwart Solution,
                            you gain access to a diverse pool of experts who can help you navigate the
                            intricacies of your industry and stay ahead of the competition.</p>

                    </div>
                </section>


                <section className="container-a reveal section3">
                    <div className="stalwart-content">
                        <h2>Tailored Solutions for Every Business</h2>
                        <p> We believe that every business is unique, and cookie-cutter solutions rarely
                            suffice. At Tech Stalwart Solution, we take the time to understand your
                            organization's specific needs, challenges, and goals before developing custom tailored solutions that align with your vision. Whether you require assistance
                            with workforce planning, project management, technology implementation, or
                            process optimization, our team of dedicated professionals will work closely with
                            you to deliver strategic solutions that drive measurable results.</p>

                    </div>
                </section>



                <section className="container-a reveal section4">
                    <div className="stalwart-content">
                        <h2>Agile and Adaptive Approach</h2>
                        <p> In today's rapidly evolving business landscape, agility is key to staying
                            competitive. At Tech Stalwart Solution, we pride ourselves on our ability to
                            adapt quickly to changing market dynamics and emerging technologies. We
                            stay up-to-date with the latest industry trends, ensuring that our clients benefit
                            from the most innovative solutions and strategies. With our agile approach, we
                            can swiftly respond to your evolving needs, helping you seize new
                            opportunities and overcome challenges effectively.</p>

                    </div>
                </section>


                <section className="container-a reveal section5">
                    <div className="stalwart-content">
                        <h2>Commitment to Excellence</h2>
                        <p> At the core of our company's ethos is a relentless commitment to excellence.
                            We strive to exceed client expectations at every turn by delivering outstanding
                            service, exceptional talent, and valuable insights. Our team of industry experts,
                            recruiters, and consultants are driven by a passion for what they do, and they
                            work tirelessly to ensure that our clients receive unparalleled support,
                            guidance, and value from our partnership.</p>

                    </div>
                </section>



                <section className="container-a reveal section6">
                    <div className="stalwart-content">
                        <p> Partner with Tech Stalwart Solution today and unlock the potential of your
                            business with our comprehensive staffing and consulting services. Let us be
                            your trusted ally in navigating the ever-evolving technology landscape and
                            driving your organization towards long-term success</p>

                    </div>
                </section>

            </main >
        </div>
    )
}

export default About