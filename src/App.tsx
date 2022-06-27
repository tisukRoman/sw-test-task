import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';
import {
  Category as CategoryType,
  withCategoryList,
} from './api/withCategoryList';

type AppProps = {
  categories?: CategoryType[];
};

class App extends Component<AppProps> {
  render() {
    const { categories } = this.props;
    return (
      <Wrapper>
        <Header categories={categories} />
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

export default withCategoryList(({ data: { loading, categories, error } }) => {
  if (loading) return <div>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  return <App categories={categories} />;
});
