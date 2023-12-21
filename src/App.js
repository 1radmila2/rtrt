import logo from './logo.svg';
import Counter from './eeeee/component.jsx'
import TextEditer from './eeeee/texteditor.jsx'
import Login from './eeeee/eeeee.jsx'
import CustomTable from './eeeee/customtable.jsx';
import Header from './component/CustomHeader.jsx';
import Cart from './component/CustomCart.jsx';
import Footer from './component/CustomFooter.jsx';
import ProductList from './component/CustomProductList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
