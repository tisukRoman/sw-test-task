import { Component } from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus.png';
import minusIcon from '../../assets/minus.png';
import { Button } from '../Button';
import { Picture } from '../Picture';
import { theme } from '../../theme';

const CountPickerWrapper = styled.div<{ variant?: 'big' | 'small' }>`
  height: ${({ variant }) => (variant === 'small' ? '12em' : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Count = styled.div<{ variant?: 'big' | 'small' }>`
  font-size: ${({ variant }) => (variant === 'small' ? '1rem' : '1.5rem')};
  font-family: ${theme.fonts.main};
  font-weight: 500;
`;

type CountPickerProps = {
  onDecrease: () => void;
  onIncrease: () => void;
  count: number;
  variant?: 'big' | 'small';
};

class CountPicker extends Component<CountPickerProps> {
  render() {
    const { count, onDecrease, onIncrease, variant } = this.props;

    return (
      <CountPickerWrapper variant={variant}>
        <Button
          variant='outlined'
          height={variant === 'small' ? '1.5em' : '2.8em'}
          width={variant === 'small' ? '1.5em' : '2.8em'}
          onClick={onIncrease}
        >
          <Picture src={plusIcon} alt='increase product count' />
        </Button>
        <Count variant={variant}>{count}</Count>
        <Button
          variant='outlined'
          height={variant === 'small' ? '1.5em' : '2.8em'}
          width={variant === 'small' ? '1.5em' : '2.8em'}
          onClick={onDecrease}
        >
          <Picture src={minusIcon} alt='decrease product count' />
        </Button>
      </CountPickerWrapper>
    );
  }
}

export { CountPicker };
