import { RoundFallBack, RoundImage } from "./RoundImage";
import WrapperCard from './WrapperCard';
import React from "react";

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
      <em title={title}>{title}</em>
      {subtitle && (
        <span title={subtitle}>{subtitle}</span>
      )}
    </WrapperCard>
  );
};

export default Card;
