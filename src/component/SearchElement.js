import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import '../styleSheet/searchElement.css';
import { feachData } from '../Redux/elementSlices';
import ElementItem from './mainElement';

const SearchElement = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces.spaces);

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (spaces.length === 0) {
      dispatch(feachData());
    }
  }, [dispatch, spaces.length]);

  const newList = spaces.filter(
    (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchTermChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <header>
        <div className="header-logo">
          <div>
            <h1>Final Space Character</h1>
          </div>
        </div>
        <div className="list-header">
          <div className="search field is-horizontal">
            <input
              className="input"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <CiSearch className="label-1" />
          </div>
        </div>
      </header>
      <div>
        {searchTerm.length ? (
          <ElementItem spaces={newList} />
        ) : (
          <ElementItem spaces={spaces} />
        )}
      </div>
    </div>
  );
};

export default SearchElement;
