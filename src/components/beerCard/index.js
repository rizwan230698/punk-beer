import React, { useContext } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';

import {
  CardX,
  ImageContainer,
  Image,
  Content,
  Title,
  Description,
} from './style';
import { shortDescription } from '../../utils';
import { BeerContext } from '../../context/beerProvider';

const BeerCard = ({ beer }) => {
  const { id, name, description, image_url } = beer;
  const {
    state: { favourites },
    addToFavourite,
    removeFromFavourite,
  } = useContext(BeerContext);

  return (
    <CardX hoverable>
      <ImageContainer>
        <Image src={image_url} alt={name} />
      </ImageContainer>
      <Content>
        <Title>{name}</Title>
        <Description>{shortDescription(description)}</Description>
      </Content>
      {!favourites[id] ? (
        <StarOutlined onClick={() => addToFavourite(beer)} />
      ) : (
        <StarFilled onClick={() => removeFromFavourite(beer)} />
      )}
    </CardX>
  );
};

export default BeerCard;
