import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";
import { selectCartItemById } from "../../redux/cart/selectors";


type creamProps = {
  id: number,
  name: string ,
  price:  number,  
  imageUrl: string, 
}


const Cream: React.FC<creamProps> = ({id, name, price, imageUrl}) => {

  const dispatch = useDispatch()
  const cartItemCount = useSelector(selectCartItemById(id))  // Возврщает count всех найденных пицц одно id

let addedCount =  cartItemCount > 0 ? cartItemCount  :  ''

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
        { addedCount  && <i> {addedCount} </i> }
      </button>
    </div>
    </div> 
    
    </div> 
    )
}


export default Cream;

/*
[
 {
  "id": "4",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08202931/1000/08202931_2.jpg",
  "name": "Beauty Visage",
  "price": 415,
  "category": 3,
  "rating": 8
 },
 {
  "id": "8",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08101834/1000/08101834_2.jpg",
  "name": "Green clay",
  "price": 395,
  "category": 5,
  "rating": 10
 },
 {
  "id": "2",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08111639/1000/08111639_2.jpg",
  "name": "Oma Gertrude",
  "price": 295,
  "category": 1,
  "rating": 4
 },
 {
  "id": "1",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08111675/1000/08111675_2.jpg",
  "name": "АeRi",
  "price": 245,
  "category": 3,
  "rating": 6
 },
 {
  "id": "0",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08000794/1000/08000794_6.jpg",
  "name": "Бархтные ручки",
  "price": 803,
  "category": 1,
  "rating": 4
 },
 {
  "id": "6",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08211973/1000/08211973_1.jpg",
  "name": "Fitnessmodel",
  "price": 675,
  "category": 1,
  "rating": 9
 },
 {
  "id": "9",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08111639/1000/08111639_2.jpg",
  "name": "Freichhaltige",
  "price": 285,
  "category": 1,
  "rating": 7
 },
 {
  "id": "7",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08210421/1000/08210421_2.jpg",
  "name": "С-berrica",
  "price": 450,
  "category": 4,
  "rating": 10
 },
 {
  "id": "5",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08111507/1000/08111507_2.jpg",
  "name": "Cream-mask",
  "price": 580,
  "category": 2,
  "rating": 2
 },
 {
  "id": "3",
  "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08901136/1000/08901136_4.jpg",
  "name": "fitface",
  "price": 275,
  "category": 2,
  "rating": 2
 }
]

*/


/*
[
  {
    "id": "4",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08202931/1000/08202931_2.jpg",
    "name": "Чизбургер-пицца",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 415,
    "category": 3,
    "rating": 8,
    "description": "Чизбургер-пиццар - оригинальный микс итальянской и американской кухонь. Это сытная грудинка и сочная курица с маринованным огурцом и карамелизованным луком в сопровождении классической моцареллы и сырного соуса. Сосиска в борт делает блюдо ещё более сытным, так что, если вы ищете вариант быстрого и вкусного обеда или ужина, обратите внимание на «Чизбургер»!"
  },
  {
    "id": "8",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08101834/1000/08101834_2.jpg",
    "name": "Четыре сезона",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 395,
    "category": 5,
    "rating": 10,
    "description": "Пицца Четыре сезона — итальянская пицца, которая разделена на четыре части с четырьмя различными начинками, каждая из которых представляет один сезон года. Артишоки символизируют весну, помидоры или базилик символизируют лето, грибы символизируют осень, а ветчина, прошутто и оливки символизируют зиму. Эта популярная пицца в Италии была описана как «классическая», «знаменитая» итальянская пицца. Является вариантом пиццы капричоза."
  },
  {
    "id": "2",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08021776/1000/08021776_1.jpg",
    "name": "Цыпленок барбекю",
    "types": [
      0
    ],
    "sizes": [
      26,
      40
    ],
    "price": 295,
    "category": 1,
    "rating": 4,
    "description": "Цыпленок барбекю - это волшебство на вашей тарелке. Нежное, сочное куриное мясо, приготовленное в ароматном барбекю-соусе, облачено в пушистую пиццу с золотистой коркой. Под этим слоем курчат крошечные красные луковицы и ароматный соус, который придает пицце неповторимый характер. Это блюдо - настоящее путешествие в мир вкусов, где гармония мягкости куриного мяса и пикантной пикантности барбекю сливаются в чарующем сочетании. Попробуйте эту пиццу, и вы перенесетесь в атмосферу летних вечеров на природе, окутанных запахом дымящегося гриля и радостью общения с близкими."
  },
  {
    "id": "1",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08111675/1000/08111675_2.jpg",
    "name": "Сырная",
    "types": [
      0
    ],
    "sizes": [
      26,
      40
    ],
    "price": 245,
    "category": 3,
    "rating": 6,
    "description": "Пицца «Сырная» - традиционная пицца, беспроигрышный вариант в любой компании. Классический вкус этой пиццы известен по всему миру. Всего 4 вида сыра (Моцарелла, Дор-Блю, Пармезан, Брынза) в сочетании со специальным соусом, а какой результат!"
  },
  {
    "id": "0",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08000794/1000/08000794_6.jpg",
    "name": "Пепперони Фреш с перцем",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 803,
    "category": 1,
    "rating": 4,
    "description": "Пепперони Фреш с перцем – это сочная пицца, богато увенчанная ароматными ингредиентами. Тонкое хрустящее тесто, нежное томатное соус, итальянские пепперони и свежий, хрустящий перец создают неотразимый союз вкусов. Это блюдо - настоящий праздник для ваших вкусовых рецепторов, которое приносит радость в каждый укус. Попробуйте эту пиццу, и вы откроете для себя настоящее удовольствие от итальянской кухни в каждой крошке!"
  },
  {
    "id": "6",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08211973/1000/08211973_1.jpg",
    "name": "Пепперони",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 675,
    "category": 1,
    "rating": 9,
    "description": "Пепперони - одна из многочисленных разновидностей салями, отличающаяся острым пряным вкусом. Как правило, данное колбасное изделие изготавливается из свинины, либо из смеси говядины и свинины. Употребляется в пищу, как отдельно, так и в приготовленном виде в составе различных холодных и горячих блюд."
  },
  {
    "id": "9",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08303725/1000/08303725_1.jpg",
    "name": "Овощи и грибы 🌱",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 285,
    "category": 1,
    "rating": 7,
    "description": "Специально для тех, кто придерживается вегетарианского рациона, постится и тщательно следит за своей фигурой, предлагаем выбрать доставку пиццы «Овощи и грибы». Для создания пиццы используются свежие томаты, грибы, зелёный перец. Для обогащения вкуса и аромата в начинку добавлены маслины, сыр моцарелла, брынза и итальянские травы. Несмотря на свою лёгкость, это блюдо прекрасно насыщает."
  },
  {
    "id": "7",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08901062/1000/08901062_1.jpg",
    "name": "Маргарита",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 450,
    "category": 4,
    "rating": 10,
    "description": "Пицца Маргарита — традиционная итальянская пицца, пожалуй, самая популярная в мире, даже меню любой пиццерии начинается, как правило, именно с неё. Состав этой пиццы необычайно прост, её основные ингредиенты: сыр моцарелла, спелые помидоры и листья свежего базилика, которые придают ей неповторимый вкус и аромат."
  },
  {
    "id": "5",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08901062/1000/08901062_1.jpg",
    "name": "Крэйзи пепперони",
    "types": [
      0
    ],
    "sizes": [
      30,
      40
    ],
    "price": 580,
    "category": 2,
    "rating": 2,
    "description": "Крэйзи Пепперони - это настоящий фестиваль пикантности и страсти на вашем столе. Итальянские пепперони, обжигающе острые и ароматные, здесь исполняют виртуозный танец на тонком тесте, усыпанном роскошным слоем сыра. Это блюдо - воплощение страсти к еде, и каждый укус заставляет ваше сердце биться быстрее. Погрузитесь в мир огненной лепкости и аромата пиццы Крэйзи Пепперони, и вы останетесь влюблеными навсегда."
  },
  {
    "id": "3",
    "imageUrl": "https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08901136/1000/08901136_4.jpg",
    "name": "Кисло-сладкий цыпленок",
    "types": [
      0
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 275,
    "category": 2,
    "rating": 2,
    "description": "Кисло-сладкий цыпленок - это удивительное сочетание вкусов, где нежное куриное мясо плавно переплетается с бархатной сладостью и легкой кислинкой. Это блюдо - настоящий танец на вашем языке, где каждый укус приносит гармонию между сладкими и кислыми акцентами. Откройте для себя волшебство вкуса, которое перенесет вас в мир удовольствия с первой ломтикой."
  }
]
*/