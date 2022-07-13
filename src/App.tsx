import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { Header } from './components/Header';
import { Main } from './components/Main';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto 5em auto;
  text-align: center;
`;

class App extends Component<{}, {}> {

  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route path='/category/:name' component={Category} />
            <Route path='/product/:id' component={Product} />
            <Route path='/cart' component={Cart} />
            <Redirect to='/category/all' />
          </Switch>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
