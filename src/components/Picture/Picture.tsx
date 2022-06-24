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
};

class Picture extends Component<PictureProps> {
  render() {
    return <StyledPicture src={this.props.src} alt={this.props.alt} />;
  }
}

export { Picture };
