import React from 'react'
import "../App.css";


const Header = () => {
  return (
    
<div className='container'>
<header className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-15 my-15 '>
  <div className='col mb-0'>    
  <img src='img/logo.png' width={150} height={110}></img>
    </div>
    <div className='col mb-3'>
    </div>
    <div className='col mb-0'>      
      <ul className='nav flex-column'>
        <li className='nav-item mb-0'>
          <a className='nav-link p-3 m-4 text-muted' href="#about">О нас</a>
        </li>        
      </ul>
    </div>
    <div className='col mb-0'>      
      <ul className='nav flex-column'>
        <li className='nav-item mb-0'>
          <a className='nav-link p-3 m-4 text-muted' href="#tyrs">Туры</a>
        </li>       
      </ul>
    </div>  
    <div className='col mb-0'>    
      <ul className='nav flex-column'>
        <li className='nav-item mb-0'>
          <a className='nav-link p-3 m-4 text-muted' href="#contacts">Контакты</a>
        </li>
      </ul>
    </div>       
</header>
</div>
  )
}

export default Header