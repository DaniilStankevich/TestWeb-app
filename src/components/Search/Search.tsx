import { useCallback, useState, useEffect } from "react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCurrentPage } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/filter/selectors";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const searchDispath = useDispatch();
  const { search } = useSelector(selectFilter);

  const [value, setValue] = useState("");

  // Переменная inputRef создана для фокуса после "onClickClear"
  const inputRef = useRef<HTMLInputElement>(null);

  // Запрос будет отправлен через 3 сек после "остановки инпута"
  const updateSearchValue = useCallback(
    debounce((str) => {
      let endValue = str.replace(/ +/g, " ").trim();

      if (endValue !== "") {
        searchDispath(setSearch(endValue));
        setValue(endValue);
      } else {
        setValue("");
      }
    }, 3000),

    []
  );

  const onChangeInput = (event: any) => {
    setValue(event.target.value); //Здесь идет мгновенная перерисовка ипута
    updateSearchValue(event.target.value); //Запуск функции debounce для отправки данных
  };

  // Функция отчистки инпута
  const onClickClear = () => {
    searchDispath(setSearch("")); // В хранилище очищаем поле ввода
    updateSearchValue(""); // Запускаем функцию debounce с пустой строкой для отмены запроса
    setValue(""); // Очищаем vlue инпута
    inputRef.current?.focus(); // Наводим фокус и в случае налиция "inputRef.current" значения, вызываем
    searchDispath(setCurrentPage(1));
  };

  useEffect(() => {
    setValue(search);
  }, []);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>

      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder="Поиск крема ..."
      />

      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
