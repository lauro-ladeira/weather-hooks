import React, { useState, useContext, useRef, useEffect} from 'react';
import { WeatherContext } from '../../contexts/WeatherContext'
import './SearchBar.css';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const { setCity } = useContext(WeatherContext);

  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, [])

  const handleInputChange = e => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setCity(term);
    resetInput();
  };

  const resetInput = () => {
    setTerm('');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <div className="search-box">
          <input type="text" className="search-txt" onChange={handleInputChange} value={term} ref={searchInput} />
          <div onClick={handleFormSubmit} className="search-btn">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </form>
    </div>
  );
}
