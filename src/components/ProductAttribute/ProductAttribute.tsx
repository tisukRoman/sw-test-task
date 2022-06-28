import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { TextLabel } from '../TextLabel';

const ItemsContainer = styled.div`
  height: 3em;
  line-height: 3em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TextItem = styled.div<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    `background-color: #000;
    color: #fff;`};
  height: 100%;
  width: 4em;
  border: 1px solid #000;
  margin-right: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ColorItem = styled.div<{ value: string; isActive: boolean }>`
  padding: 0.1em;
  height: 1.5em;
  width: 1.5em;
  border: 3px solid
    ${({ isActive }) => (isActive ? theme.colors.active : '#ffffff')};
  margin-right: 1em;
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ value }) => value};
  &:hover {
    border: 3px solid ${theme.colors.active};
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
  onSelect: (name: string, value: string) => void;
};

class ProductAttribute extends Component<AttributeProps> {
  render() {
    const { name, type, items, activeValue, onSelect } = this.props;

    return (
      <>
        <TextLabel margin='1.5em 0 0.5em 0'>{name}:</TextLabel>
        <ItemsContainer>
          {type === 'swatch'
            ? items.map(({ id, value }) => (
                <ColorItem
                  key={id}
                  value={value}
                  isActive={value === activeValue}
                  onClick={() => onSelect(name, value)}
                ></ColorItem>
              ))
            : items.map(({ id, value }) => (
                <TextItem
                  key={id}
                  isActive={value === activeValue}
                  onClick={() => onSelect(name, value)}
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
