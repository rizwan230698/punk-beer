import React from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';

import { shortDescription } from '../../utils';
import {
  CardX,
  ImageContainer,
  Image,
  Content,
  Title,
  Description,
} from './style';

const BeerCard = ({ beer: { name, description, image_url } }) => (
  <CardX>
    <ImageContainer>
      <Image src={image_url} alt={name} />
    </ImageContainer>
    <Content>
      <Title>{name}</Title>
      <Description>{shortDescription(description)}</Description>
    </Content>
    <StarOutlined />
  </CardX>
);

export default BeerCard;
