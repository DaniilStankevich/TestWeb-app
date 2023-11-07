import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { setFilters } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { useAppDispatch } from '../redux/store';
import { fetchCreams } from '../redux/cream/asyncActions';
import { selectPizzaData } from '../redux/cream/selectors'
import qs from 'qs'
import Sort, { list } from '../components/Sort';
import Cream from '../components/CreamBlock';
import Categories from '../components/Categories';





export const Home: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const isSeacrh = useRef(false) 
  const isMounted = useRef(false)

  const {items, status} = useSelector(selectPizzaData)
  const {categoryId, sort, currentPage, search} = useSelector(selectFilter)

const getPizzas = async () => {

  const sortBy = sort.sortProperty.replace('-', '');                // по чем сортировать (rating, price, name) 
  const order = sort.sortProperty.includes('-')? 'asc' : 'desc';    // убыванию-возрастанию
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const searchHome = search ? `&search=${search}` : '';

  dispatch(
    fetchCreams({
          sortBy,                   
          order,                    
          category,
          searchHome,
          currentPage   
        }))
}


// ПЕРЕХОД НА СПАРСЕНЫЙ АДРЕС
useEffect(() => {
  if(isMounted.current) {
    const qeryString = qs.stringify({       //qs.stringify - делаем строку

      sortProperty: sort.sortProperty,      
      categoryId,
      currentPage
   })

   navigate(`?${qeryString}`);  // формированием строки на основе состояние диспатча - qeryString
  }                             // вставка адреса 

  isMounted.current = true;
}, [categoryId, sort.sortProperty, currentPage]) 


// Если был первый рендер, то проверем URL-параметры и сохраняем в redux
// Сработка после перезагрузки страницы
useEffect(() => {
  if (window.location.search) {    
    const params = qs.parse(window.location.search.substring(1))  // qs.parse - позволяет спаристь данные из ссылки в объект 
    const sort = list.find(obj => obj.sortProperty === params.sortProperty)  
    dispatch(setFilters({ ...params, sort }))
    isSeacrh.current = true; 
  }
}, [])


useEffect (() => {
    if( !isSeacrh.current ) {
        getPizzas();
    }
    isSeacrh.current = false
}, [ categoryId, sort.sortProperty, search, currentPage ])  





const creams =  items.map((obj: any) => (  <Cream  {...obj} key={obj.id} /> ))


return (
<div className="container">
  <div className="content__top">

  <Categories />
  <Sort/>
       
  </div>   
      <h2 className="content__title">Все крмема</h2>
      {creams}

</div>
)}

export default Home

