import { Component } from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus-square.png';
import minusIcon from '../../assets/minus-square.png';
import { Button } from '../Button';
import { Picture } from '../Picture';

const CountPickerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class CountPicker extends Component {
  render() {
    return (
      <CountPickerWrapper>
        <Button variant='outlined' height='2em' width='2em'>
          <Picture src={plusIcon} alt='increase product count' />
        </Button>
        <div>1</div>
        <Button variant='outlined' height='2em' width='2em'>
          <Picture src={minusIcon} alt='decrease product count' />
        </Button>
      </CountPickerWrapper>
    );
  }
}

export { CountPicker };
