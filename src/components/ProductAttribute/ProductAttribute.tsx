import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { TextLabel } from '../TextLabel';

const ItemsContainer = styled.div<{ variant?: 'big' | 'small' }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${({ variant }) => {
    if (variant === 'small') {
      return `
          height: 2em;
          line-height: 2em;
          font-size: 0.8rem;
        `;
    } else {
      return `
          height: 3em;
          line-height: 3em;
        `;
    }
  }}
`;

const TextItem = styled.div<{ isActive: boolean; disabled?: boolean }>`
  ${({ isActive }) =>
    isActive &&
    `background-color: #000;
    color: #fff;`};
  height: 100%;
  text-align: center;
  width: 4em;
  border: 1px solid #000;
  margin-right: 1em;
  font-weight: 500;
  transition: 0.2s;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  &:hover {
    background-color: ${({ disabled }) => !disabled && '#000'};
    color: ${({ disabled }) => !disabled && '#fff'};
  }
`;

const ColorItem = styled.div<{
  value: string;
  isActive: boolean;
  variant?: 'small' | 'big';
  disabled?: boolean;
}>`
  padding: 0.1em;
  height: ${({ variant }) => (variant === 'small' ? '1em' : '1.5em')};
  width: ${({ variant }) => (variant === 'small' ? '1em' : '1.5em')};
  border: 3px solid
    ${({ isActive }) => (isActive ? theme.colors.active : '#fff')};
  margin-right: ${({ variant }) => (variant === 'small' ? '0.5em' : '1em')};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: 0.2s;
  background-color: ${({ value }) => value};
  &:hover {
    border: ${({ disabled }) => !disabled && `3px solid ${theme.colors.active}`};
  }
`;

type Item = {
  id: string;
  value: string;
  displayValue: string;
};

type AttributeProps = {
  id: string;
  name: string;
  type: string;
  items: Item[];
  activeValue: string | null;
  onSelect?: (name: string, value: string) => void;
  variant?: 'big' | 'small';
  disabled?: boolean;
};

class ProductAttribute extends Component<AttributeProps> {
  render() {
    const { name, type, items, activeValue, onSelect, variant, disabled } =
      this.props;

    return (
      <>
        <TextLabel
          margin={variant === 'small' ? '0.8em 0 0.4em 0' : '1.5em 0 0.5em 0'}
          variant={variant === 'big' ? 'bold' : 'thin'}
        >
          {name}:
        </TextLabel>
        <ItemsContainer variant={variant}>
          {type === 'swatch'
            ? items.map(({ id, value }) => (
                <ColorItem
                  variant={variant}
                  disabled={disabled}
                  key={id}
                  value={value}
                  isActive={value === activeValue}
                  onClick={onSelect && (() => onSelect(name, value))}
                ></ColorItem>
              ))
            : items.map(({ id, value }) => (
                <TextItem
                  key={id}
                  isActive={value === activeValue}
                  disabled={disabled}
                  onClick={onSelect && (() => onSelect(name, value))}
                >
                  {value}
                </TextItem>
              ))}
        </ItemsContainer>
      </>
    );
  }
}

export { ProductAttribute };
