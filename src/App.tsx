import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';
import { Category } from './pages/Category';
import { Product } from './pages/Product';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Category />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </Main>
        <div></div>
      </Wrapper>
    );
  }
}

export default App;
