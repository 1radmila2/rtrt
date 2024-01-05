import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from './logo.png';
import Cart from './CustomCart.jsx';
import ProductList from './CustomProductList.jsx';
function Header() {
   const categories = [
    { id: 1, name: 'Лекарства' },
    { id: 2, name: 'Витамины' },
    { id: 3, name: 'Уход за телом' },
  ];

  const userIsLoggedIn = true;
  const [isCartVisible, setCartVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const cartRef = useRef(null);

  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const toggleCart = () => {
    setCartVisibility(!isCartVisible);
  };

  useEffect(()=>{
    filteringProducts();
  }, [selectedCategory, searchQuery])

  const handleOutsideClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartVisibility(false);
    }
  };

  useEffect(() => {

    fetchProducts();
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/products', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        });
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const filteringProducts = () => {
    let filteredProducts = allProducts;
  
    if (selectedCategory !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    console.log('Filtered Products:', filteredProducts);
    setFilterProducts(filteredProducts)
  };

  useEffect(()=>{
    if(allProducts.length >0){
      filteringProducts()
    }
  }, [allProducts])


  return (
    <header className="main-header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Online Pharmacy Logo" />
        </a>
        {userIsLoggedIn ? (
          <>
            
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
        <input
          type="text"
          placeholder="Поиск по товарам"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button">Искать</button>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/" className="nav-link">
              Главная
            </a>
          </li>
          {categories.map((category) => (
            <div key={category.id + 'category'} className="category-item">
           
              <button
                className={`category-button ${selectedCategory === category.name ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
              </div>
          ))}
          <div key={'category-all'} className="category-item">
           
           <button
             className={`category-button ${selectedCategory === "" ? 'selected' : ''}`}
             onClick={() => setSelectedCategory("")}
           >
             Все
           </button>
           </div>
        </ul>
      </nav>
      
      <div className="cart-link" ref={cartRef}>
        <button onClick={toggleCart}>
          <span role="img" aria-label="Shopping Cart">
            🛒
          </span>{' '}
          Cart
        </button>
        {isCartVisible && <Cart />}
      </div>

      <div className="filtered-products">
      <ProductList
        products={filterProducts}
      />
      
        
      </div>
    </header>
  );
}

export default Header;
