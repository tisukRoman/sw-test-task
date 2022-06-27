import { Component } from 'react';
import { v4 as uid } from 'uuid';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { theme } from '../theme';
import { ProductDetails, withProductDetails } from '../api/withProductDetails';
import { toAttributesState } from '../utils/toAttributesState';
import { Button } from '../components/Button';
import { Picture } from '../components/Picture';
import { ProductAttribute } from '../components/ProductAttribute';

const ProductPage = styled.div`
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
`;

const PictureList = styled.div`
  width: 10em;
  height: 32em;
  overflow: scroll;
  text-align: center;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PictureListWrapper = styled.div`
  margin-bottom: 2em;
  max-width: 5em;
  min-height: 5em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const PictureWrapper = styled.div`
  max-width: 38em;
  height: 32em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  margin-left: 6em;
  width: 20em;
  height: 32em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${theme.fonts.main};
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InfoTitle = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const InfoSubTitle = styled.h2`
  margin-top: 0em;
  font-weight: 400;
`;

const Price = styled.div`
  font-weight: bold;
  font-family: ${theme.fonts.main};
  margin: 2em 0;
`;

const Description = styled.div`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-weight: 400;
`;

type ProductProps = {
  data: {
    product: ProductDetails;
    loading: boolean;
    error: any;
  };
};

type ProductState = {
  selectedPicture: string;
  attributes: {
    [name: string]: string;
  } | null;
};

class Product extends Component<ProductProps, ProductState> {
  state = {
    selectedPicture: '',
    attributes: null,
  };

  componentDidUpdate() {
    const { product } = this.props.data;
    const { attributes } = this.state;

    if (product?.attributes.length && !attributes) {
      const activeAttributes = toAttributesState(product.attributes);
      this.setState({
        attributes: activeAttributes,
      });
    }
  }

  selectPicture = (src: string) => {
    this.setState({ selectedPicture: src });
  };

  selectAttributeValue = (name: string, value: string) => {
    this.setState((prev) => {
      const updatedAttributes = { ...prev.attributes };
      updatedAttributes[name] = value;
      return { attributes: updatedAttributes };
    });
  };

  render() {
    console.log(this.state);

    const { loading, error, product } = this.props.data;
    const { attributes } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <h1>Error</h1>;

    return (
      <ProductPage>
        <PictureList>
          {product.gallery.map((src) => (
            <PictureListWrapper key={uid()}>
              <Picture
                src={src}
                alt='product picture'
                onClick={() => this.selectPicture(src)}
              />
            </PictureListWrapper>
          ))}
        </PictureList>
        <PictureWrapper>
          <Picture
            src={this.state.selectedPicture || product.gallery[0]}
            alt='selected product picture'
          />
        </PictureWrapper>
        <Info>
          <InfoTitle>{product.name}</InfoTitle>
          <InfoSubTitle>{product.brand}</InfoSubTitle>
          {product.attributes.map((attr) => (
            <ProductAttribute
              onSelect={this.selectAttributeValue}
              key={attr.id}
              activeValue={attributes ? attributes[attr.name] : null}
              {...attr}
            />
          ))}
          <Price>
            {product.prices[0].currency.symbol}
            {product.prices[0].amount}
          </Price>
          <Button variant='filled' disabled={!product.inStock}>
            ADD TO CART
          </Button>
          <Description>{parse(product.description)}</Description>
        </Info>
      </ProductPage>
    );
  }
}

export default withProductDetails(Product);
