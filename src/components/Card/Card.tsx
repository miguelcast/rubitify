import React, { Suspense } from 'react';

import WrapperCard from './WrapperCard';
import Text from './Text';
import { RoundFallBack, RoundImage } from '../Shared';

interface Props {
  image: string;
  title: string;
  subtitle?: string;
}

const Card = ({ image, title, subtitle  }: Props) => {
  return (
    <WrapperCard role="button" tabIndex={0}>
      <Suspense fallback={title}>
        <RoundImage
          src={image}
          alt={title}
          fallback={<RoundFallBack />}
          onError={() => console.log('Error loading image.')}
        />
      </Suspense>
      <Text as="em" title={title}>{title}</Text>
      {subtitle && (
        <Text title={subtitle}>{subtitle}</Text>
      )}
    </WrapperCard>
  );
};

export default Card;
