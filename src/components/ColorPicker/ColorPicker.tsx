import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { ColorOption } from './ColorOption';

const ColorPickerContainer = styled.div`
    width: 100%;
    display: flex;
`

type ColorPickerState = {
    colors: string[]
}

class ColorPicker extends Component<{}, ColorPickerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      colors: ['#000', '#ffc0c0', '#f00', '#ff0'],
    };
  }

  render() {
    return (
      <>
        <ColorPickerContainer>
            {this.state.colors.map(color => (
                <ColorOption key={uid()} value={color}/>
            ))}
        </ColorPickerContainer>
      </>
    );
  }
}

export { ColorPicker };
