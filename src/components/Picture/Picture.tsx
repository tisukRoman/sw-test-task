import { Component } from 'react';
import styled from 'styled-components';

const StyledPicture = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

type PictureProps = {
  src: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

class Picture extends Component<PictureProps> {
  render() {
    const { src, alt, onClick } = this.props;
    return <StyledPicture onClick={onClick} src={src} alt={alt} />;
  }
}

export { Picture };
