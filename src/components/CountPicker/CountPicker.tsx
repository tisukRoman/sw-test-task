import { Component } from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';
import { theme } from '../../theme';
import { Button } from '../Button';

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

const Icon = styled.img<{ variant?: 'big' | 'small' }>`
  ${({ variant }) =>
    variant === 'small'
      ? `
    width: 100%;
    height: 100%;
  `
      : `
    margin-top: 25%;
    width: 60%;
    height: 60%;
  `}
`;

type CountPickerProps = {
  onDecrease: () => void;
  onIncrease: () => void;
  variant?: 'big' | 'small';
  count: number;
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
          <Icon variant={variant} src={plusIcon} alt='increase product count' />
        </Button>
        <Count variant={variant}>{count}</Count>
        <Button
          variant='outlined'
          height={variant === 'small' ? '1.5em' : '2.8em'}
          width={variant === 'small' ? '1.5em' : '2.8em'}
          onClick={onDecrease}
        >
          <Icon
            variant={variant}
            src={minusIcon}
            alt='decrease product count'
          />
        </Button>
      </CountPickerWrapper>
    );
  }
}

export { CountPicker };
