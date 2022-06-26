import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  componentDidMount() {
    if(window.location.pathname !== '/category/all'){
      window.location.pathname = '/category/all';
    }
  }

  render() {
    const { categories } = this.props;

    return (
      <Wrapper>
        <Header categories={categories} />
        <Main>
          <Routes>
            {categories?.map(({ name }) => (
              <Route
                path={`/category/${name}`}
                element={<Category input={{ title: name }} />}
              />
            ))}
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
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
