import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.sushi)
  let {name , img_url : image, price, wasEaten, id} = props.sushi
  // console.log(name, image, price)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.sushiClick(id,price)}>
        { 
          wasEaten ? null : <img src={image} width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi