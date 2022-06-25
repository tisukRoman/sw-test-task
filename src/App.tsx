import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Main>
          <Routes>
            <Route path='/' element={<Category />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Main>
        <div></div>
      </Wrapper>
    );
  }
}

export default App;
