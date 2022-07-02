import { Component } from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus.png';
import minusIcon from '../../assets/minus.png';
import { Button } from '../Button';
import { Picture } from '../Picture';
import { theme } from '../../theme';

const CountPickerWrapper = styled.div<{size?: string}>`
  height: ${({size}) => size ? '12em' : '100%'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Count = styled.div`
  font-size: 1.5rem;
  font-family: ${theme.fonts.main};
  font-weight: 500;
`;

type CountPickerProps = {
  onDecrease: () => void;
  onIncrease: () => void;
  count: number;
  size?: string;
};

class CountPicker extends Component<CountPickerProps> {
  render() {
    const { count, onDecrease, onIncrease, size } = this.props;

    return (
      <CountPickerWrapper size={size}>
        <Button
          variant='outlined'
          height={size || '2.8em'}
          width={size || '2.8em'}
          onClick={onIncrease}
        >
          <Picture src={plusIcon} alt='increase product count' />
        </Button>
        <Count>{count}</Count>
        <Button
          variant='outlined'
          height={size || '2.8em'}
          width={size || '2.8em'}
          onClick={onDecrease}
        >
          <Picture src={minusIcon} alt='decrease product count' />
        </Button>
      </CountPickerWrapper>
    );
  }
}

export { CountPicker };
