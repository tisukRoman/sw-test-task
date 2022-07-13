import { Component } from 'react';
import styled from 'styled-components';
import nav_arrow from '../../assets/nav_arrow.png';
import { Picture } from '../Picture';

const NavigationWrapper = styled.div`
  width: 5em;
  height: 2em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const NavButton = styled.div`
  width: 2em;
  height: 2em;
  line-height: 2em;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  opacity: 0.8;
`;

const CarouselWrapper = styled.div`
  width: 12.5em;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Carousel = styled.div<{ left: number }>`
  transition: 0.5s;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ left }) => left + 'em'};
`;

const PictureWrapper = styled.div`
  width: 12.5em;
  height: 100%;
`;

const Image = styled.img<{ direction: 'right' | 'left' }>`
  ${({ direction }) => direction === 'left' && 'transform: rotate(180deg)'};
`;

type CarouselProps = {
  gallery: string[];
};

type CarouselState = {
  left: number;
};

class GalleryCarousel extends Component<CarouselProps, CarouselState> {
  state = {
    left: 0,
  };

  scrollRight = () => {
    const maxLeft = (this.props.gallery.length - 1) * 12.5;
    if (Math.abs(this.state.left) !== maxLeft) {
      this.setState((s) => ({ left: s.left - 12.5 }));
    }
  };

  scrollLeft = () => {
    if (this.state.left !== 0) {
      this.setState((s) => ({ left: s.left + 12.5 }));
    }
  };

  render() {
    const { gallery } = this.props;

    return (
      <CarouselWrapper>
        <Carousel left={this.state.left}>
          {gallery.map((image) => (
            <PictureWrapper>
              <Picture src={image} alt='Gallery Carousel' />
            </PictureWrapper>
          ))}
        </Carousel>
        {gallery.length > 1 && (
          <NavigationWrapper>
            <NavButton onClick={this.scrollLeft}>
              <Image src={nav_arrow} alt='left arrow' direction='left' />
            </NavButton>
            <NavButton onClick={this.scrollRight}>
              <Image src={nav_arrow} alt='right arrow' direction='right' />
            </NavButton>
          </NavigationWrapper>
        )}
      </CarouselWrapper>
    );
  }
}

export { GalleryCarousel };
