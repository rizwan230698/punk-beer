import React, { useContext } from 'react';
import { Tooltip } from 'antd';
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

const BeerCard = React.forwardRef(({ beer }, ref) => {
  const { id, name, description, image_url, tagline } = beer;
  const {
    state: { favourites },
    addToFavourite,
    removeFromFavourite,
  } = useContext(BeerContext);

  return (
    <Tooltip title={tagline} placement="bottom" color="#0D0D0D">
      <CardX hoverable>
        <ImageContainer ref={ref}>
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
    </Tooltip>
  );
});

export default BeerCard;
