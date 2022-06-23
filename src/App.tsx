import { Component } from 'react';
import { Header } from './components/header';
import { Wrapper } from './components/wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper width='80%'>
        <Header></Header>
        <main style={{ border: '1px solid black', height: '100vh' }}></main>
        <div></div>
      </Wrapper>
    );
  }
}

export default App;
