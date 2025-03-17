import React from 'react'

 const Card = (props) => {
    return (
        <div className='col-lg-4'>
            <div class="card" style={{width:'400px'}}>
                <img style={{height:'300px'}} src={props.imgsrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
