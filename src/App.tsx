import { Component, ReactNode } from 'react';
import { Wrapper } from './components/wrapper';

class App extends Component {
  render(): ReactNode {
    return (
      <Wrapper data-testid="app-wrapper">
        <div></div>
        <div></div>
        <div></div>
      </Wrapper>
    );
  }
}

export default App;
