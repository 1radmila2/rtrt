import React, { useState, useEffect, useRef } from 'react';
import './header.css'; 
import logo from './logo.png'
import Cart from './CustomCart.jsx'
function Header() {
  const categories = [
    { id: 1, name: 'Лекарства' },
    { id: 2, name: 'Витамины' },
    { id: 3, name: 'Уход за телом' },
  ];

  const userIsLoggedIn = true; 
  const [isCartVisible, setCartVisibility] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setCartVisibility(!isCartVisible);
  };

  const handleOutsideClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartVisibility(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

    
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Online Pharmacy Logo" />
        </a>
      </div>
      <div className="user-info">
        {userIsLoggedIn ? (
          <>
            <span className="user-greeting"></span>
            <button type="button" className="logout-button">
              Выйти
            </button>
          </>
        ) : (
          <a href="/login" className="nav-link">
            Войти
          </a>
        )}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Поиск по товарам" />
        <button type="button">Искать</button>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/" className="nav-link">
              Главная
            </a>
          </li>
          <li>
            <a href="/medicines" className="nav-link">
              Лекарства
            </a>
          </li>
          <li>
            <a href="/vitamins" className="nav-link">
              Витамины
            </a>
          </li>
          <li>
            <a href="/personal-care" className="nav-link">
              Уход за телом
            </a>
          </li>
          <li className="dropdown">
            
            <ul className="dropdown-list">
              {categories.map(category => (
                <li key={category.id}>

                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      
      <div className="cart-link">
        <a href="/cart" className="nav-link">
        <button onClick={toggleCart}>
        <span role="img" aria-label="Shopping Cart">
          🛒
        </span>{' '}
        Cart
      </button>
      {isCartVisible && <Cart />} {/* Показывать корзину, если isCartVisible === true */}
        </a>
      </div>
    </header>
  );
}

export default Header;

