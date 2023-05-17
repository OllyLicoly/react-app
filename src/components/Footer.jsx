import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-15 border-top'>
        <div className='col mb-0'>   
          <a name="contacts"></a>               
          <h5>Путешествия и отдых в Горной Шории</h5>
        </div>
        <div className='col mb-0'>
        </div>
        <div className='col mb-0'>          
          <ul className='nav flex-column'>
            <li className='nav-item mb-0'>
              <a className='nav-link p-0 text-muted'></a>
            </li>
            <li className='nav-item mb-0'>
              <a className='nav-link p-0 text-muted'></a>
            </li>
          </ul>
        </div>
        <div className='col mb-0'>
        </div>
        <div className='col mb-4'>            
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Tel: +7-895-456-2596</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Email: kubez@mail.ru</a>
            </li>
          </ul>
        </div>        
      </footer>
    </div>
  )
}

export default Footer