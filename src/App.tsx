import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { Wrapper } from './components/wrapper';
import { Category } from './pages/Category';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Category />} />
          </Routes>
        </Main>
        <div></div>
      </Wrapper>
    );
  }
}

export default App;
