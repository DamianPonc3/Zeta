import React from 'react'
import "./slider.css"

function Slider() {
  return (
    <div>
        <div className='slider'>
            <div className='slides'>
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                <div className='slide first'>
                    <img src="https://http2.mlstatic.com/resources/exhibitors/MLA-Galaxy-week/35995610-f3e3-11ec-90d7-992b010700bd-Samsung_landing_desktop_jun22.jpg" alt=""/>
                </div>
                <div className='slide'>
                    <img src="https://http2.mlstatic.com/D_NQ_759826-MLA50305954750_062022-OO.webp" alt=""/>
                </div>
                <div className='slide'>
                    <img src="https://http2.mlstatic.com/D_NQ_648614-MLA50403197969_062022-OO.webp" alt=""/>
                </div>
                <div className='slide'>
                    <img src="https://http2.mlstatic.com/D_NQ_674809-MLA50293741186_062022-OO.webp" alt=""/>
                </div>
                <div className='navigation-auto'>
                    <div className='auto-btn1'></div>
                    <div className='auto-btn2'></div>
                    <div className='auto-btn3'></div>
                    <div className='auto-btn4'></div>
                </div>
            </div>
            <div className='navigation-manual'>
                <label for="radio1" className='manual-btn'></label>
                <label for="radio2" className='manual-btn'></label>
                <label for="radio3" className='manual-btn'></label>
                <label for="radio4" className='manual-btn'></label>
            </div>
        </div>
    </div>
  )
}

export default Slider