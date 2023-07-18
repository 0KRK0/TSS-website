import React from 'react'
import '../../styles/Service.css'
const Service = () => {
    return (
        <div className="services-section" id='services'>
            <div className="inner-width">
                <h1 className="section-title">Our Services</h1>
                <div className="border"></div>
                <div className="services-container">
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="section-title">Retail Staffing</div>
                        <div className="service-desc">
                            Provide trained retail associates and store managers to enhance customer service and optimize retail operations.
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="section-title">IT Staffing</div>
                        <div className="service-desc">
                            Source and supply highly skilled IT professionals for diverse technology roles to support digital transformation initiatives.
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fab fa-android"></i>
                        </div>
                        <div className="section-title">Customized Staffing Solutions</div>
                        <div className="service-desc">
                            Tailor staffing solutions to meet unique business needs, industry-specific requirements, and evolving workforce demands.
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-object-ungroup"></i>
                        </div>
                        <div className="section-title">Consulting Services</div>
                        <div className="service-desc">
                            Offer strategic consulting and advisory services to help businesses optimize their staffing and workforce management.
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="section-title">Technical Staffing</div>
                        <div className="service-desc">
                            Source technical experts and specialists, such as technicians and system administrators, for specific technical roles.
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <div className="section-title">Remote Staffing</div>
                        <div className="service-desc">
                            Facilitate remote work arrangements by connecting businesses with professionals who can work effectively from anywhere.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;

