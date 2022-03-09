import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <span className='name'>Inshort Clone Design By <a target='_blank' href='https://www.facebook.com/KamalHossain09/'>Kamal hosssain</a></span>
        <hr style={{width:'90%'}}/>
        <div className="iconContainter">
        <a target='_blank' href='https://www.facebook.com/KamalHossain09/'><i className='fab fa-instagram'></i></a>
        <a target='_blank' href='https://www.facebook.com/KamalHossain09/'><i className='fab fa-facebook'></i></a>
        <a target='_blank' href='https://www.linkedin.com/in/kamalhossain24'><i className='fab fa-linkedin'></i></a>
        <a target='_blank' href='https://www.youtube.com/c/TheKamal'><i className='fab fa-youtube'></i></a>
        <a target='_blank' href='https://github.com/Kamalhossain24'><i className='fab fa-github'></i></a>
            </div>
        </div>
  )
}

export default Footer