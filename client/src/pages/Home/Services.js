import React from 'react'
import '../../styles/Service.css'
const Service = () => {
    return (
        <div class="services-section">
            <div class="inner-width">
                <h1 class="section-title">Our Services</h1>
                <div class="border"></div>
                <div class="services-container">
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="section-title">Retail Staffing</div>
                        <div class="service-desc">
                            Provide trained retail associates and store managers to enhance customer service and optimize retail operations.
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="section-title">IT Staffing</div>
                        <div class="service-desc">
                            Source and supply highly skilled IT professionals for diverse technology roles to support digital transformation initiatives.
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fab fa-android"></i>
                        </div>
                        <div class="section-title">Customized Staffing Solutions</div>
                        <div class="service-desc">
                            Tailor staffing solutions to meet unique business needs, industry-specific requirements, and evolving workforce demands.
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fas fa-object-ungroup"></i>
                        </div>
                        <div class="section-title">Consulting Services</div>
                        <div class="service-desc">
                            Offer strategic consulting and advisory services to help businesses optimize their staffing and workforce management.
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="section-title">Technical Staffing</div>
                        <div class="service-desc">
                            Source technical experts and specialists, such as technicians and system administrators, for specific technical roles.
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-icon">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <div class="section-title">Remote Staffing</div>
                        <div class="service-desc">
                            Facilitate remote work arrangements by connecting businesses with professionals who can work effectively from anywhere.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;

