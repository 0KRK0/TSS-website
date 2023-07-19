import React from 'react'
import '../../styles/Partners.css'
const Partners = () => {
    return (
        <div className='body'>
            <h2 id='partners'>Partners</h2>
            <div className="scroller">
                <div className="scroll-track">
                    <div className="scroll">
                        <img className='partner' id='wipro' src="../../../Wipro_Primary Logo_Color_RGB.svg" alt="Wipro" />
                    </div>
                    <div className="scroll">
                        <img className='partner' id='virtusa' src="../../../virtusa-corporation.webp" alt="Virtusa" />
                    </div>
                    <div className="scroll">
                        <img className='partner' id='quess' src="../../../Quess_Logo.png" alt="Quess" />
                    </div>

                    <div className="scroll">
                        <img className='partner' id='1point1' src="../../../1point1.jpg" alt="1point1" />
                    </div>
                </div>
                <div className="scroll-track">
                    <div className="scroll">
                        <img className='partner' id='edelweiss' src="../../../edtok.jpeg" alt="Edelweiss" />
                    </div>
                    <div className="scroll">
                        <img className='partner' id='hiring-hood' src="../../../HiringHood.svg" alt="Hiring Hood" />
                    </div>
                    <div className="scroll">
                        <img className='partner' id='tech-mahindra' src="../../../TechMahindra.png" alt="Tech Mahindra" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Partners