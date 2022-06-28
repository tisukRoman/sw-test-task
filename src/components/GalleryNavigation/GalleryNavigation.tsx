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

const NavButton = styled.div<{ direction: 'right' | 'left' }>`
  ${({ direction }) => direction === 'left' && 'transform: rotate(180deg)'};
  width: 2em;
  height: 2em;
  line-height: 2.25em;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  opacity: 0.8;
`;

type GalleryNavigationProps = {
  onPrevious: (direction: 'left') => void;
  onNext: (direction: 'right') => void;
};

class GalleryNavigation extends Component<GalleryNavigationProps> {
  render() {
    const { onPrevious, onNext } = this.props;
    return (
      <NavigationWrapper>
        <NavButton onClick={() => onPrevious('left')} direction='left'>
          <img src={nav_arrow} alt='left arrow' />
        </NavButton>
        <NavButton onClick={() => onNext('right')} direction='right'>
          <img src={nav_arrow} alt='right arrow' />
        </NavButton>
      </NavigationWrapper>
    );
  }
}

export { GalleryNavigation };
