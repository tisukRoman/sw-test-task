import { Component } from 'react';
import styled from 'styled-components';
import { SizeOption } from './SizeOption';

const SizeContainer = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-between;
`;

type SizePickerState = {
  options: string[];
};

class SizePicker extends Component<{}, SizePickerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      options: ['xs', 's', 'm', 'l'],
    };
  }

  render() {
    return (
      <>
        <SizeContainer>
          {this.state.options.map((option, i) => (
            <SizeOption key={i} value={option}>
              {option.toUpperCase()}
            </SizeOption>
          ))}
        </SizeContainer>
      </>
    );
  }
}

export { SizePicker };
