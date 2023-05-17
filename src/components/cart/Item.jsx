import React, { useState } from 'react'
import { AppContext } from '../../App';

const Item = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded ] = useState(context.isAdded);
    const [fav, setFav ] = useState(false);
    

  return ( 

    <div className='conteiner py-3'>
       
    <main>
        <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>

                        

                        <p>{props.title}</p>
                        <img className='rounded' src={props.img} width={'50%'}></img>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                        
                        
                    </div>

                </div>

            </div>
        </div>
    </main>
</div>
  )
}

export default Item