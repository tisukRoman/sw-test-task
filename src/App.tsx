import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Routes>
            <Route
              path='/category/:name'
              element={<Category input={{ title: 'tech' }} />}
            />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Main>
      </Wrapper>
    );
  }
}

App.contextType = CategoryContext;

export default App;
