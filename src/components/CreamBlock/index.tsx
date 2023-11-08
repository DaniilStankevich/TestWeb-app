import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";


type creamProps = {
  id: number,
  name: string ,
  price:  number,  
  imageUrl: string, 
}


const Cream: React.FC<creamProps> = ({id, name, price, imageUrl}) => {

  const dispatch = useDispatch()

  const onClikAdd = (event: any) => {
  
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      count: 0,
  
    }
    dispatch(addItem(item))
  }
  




return (

  <div className="cream-block-wrapper"> 
  
    <div className="cream-block">
      <div className="cream-block__container"> 
          <img
              className="cream-block__image"
              src={ imageUrl }
              alt="cosmetics"
          />
       
          <h4 className="cream-block__title">{ name}</h4>
    </div>


    <div className="cream-block__bottom">
      <div className="cream-block__price">от {price} ₽</div>

      <button   onClick={ onClikAdd }  className="button button--outline button--add">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
     
      </button>
    </div>
    </div> 
    
    </div> 
    )
}


export default Cream;
