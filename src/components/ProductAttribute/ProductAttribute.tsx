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

const TextItem = styled.div`
  height: 100%;
  width: 4em;
  border: 1px solid #000;
  margin-right: 1em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ColorItem = styled.div<{ value: string }>`
  padding: 0.1em;
  height: 2em;
  width: 2em;
  border: 3px solid #efefef;
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
};

class ProductAttribute extends Component<AttributeProps> {
  render() {
    console.log(this.props);

    const { name, type, items } = this.props;

    return (
      <>
        <TextLabel margin='1.5em 0 0.5em 0'>{name}:</TextLabel>
        <ItemsContainer>
          {type === 'swatch'
            ? items.map(({ id, value, displayValue }) => (
                <ColorItem key={id} value={value}></ColorItem>
              ))
            : items.map(({ id, value, displayValue }) => (
                <TextItem key={id}>{value}</TextItem>
              ))}
        </ItemsContainer>
      </>
    );
  }
}

export { ProductAttribute };
