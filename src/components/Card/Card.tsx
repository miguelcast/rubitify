import React from 'react';
import { RoundFallBack, RoundImage } from "./RoundImage";
import WrapperCard from './WrapperCard';
import Text from './Text';

interface Props {
  image: string;
  title: string;
  subtitle?: string;
}

const Card = ({ image, title, subtitle  }: Props) => {
  return (
    <WrapperCard role="button" tabIndex={0}>
      <RoundImage
        src={image}
        alt={title}
        fallback={<RoundFallBack />}
        onError={() => console.log('Error loading image.')}
      />
      <Text as="em" title={title}>{title}</Text>
      {subtitle && (
        <Text title={subtitle}>{subtitle}</Text>
      )}
    </WrapperCard>
  );
};

export default Card;
