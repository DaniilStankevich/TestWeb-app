import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import creams from './cream/slice'
import filter from './filter/slice'

export const store = configureStore({

  reducer: {
    creams,
    filter
    }

})

//Получаем тип всего хранилища
type FuncType = typeof store.getState         //typeof возращаем тип операнда "store.getState"
export type RootState = ReturnType<FuncType>  //Превращаем содержимое в тип

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
