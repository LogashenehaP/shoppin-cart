import {
  IndividualCard,
  ImageWrapper,
  ProductImage,
  ParaTag,
  HeadingTag,
} from "./styles";
import React from "react";
import { FaStar } from "react-icons/fa";
interface AppProps {
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
}

const SearchDisplay: React.FC<AppProps> = ({
  name,
  brand,
  price,
  rating,
  image,
}: AppProps) => {
  return (
    <IndividualCard>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>
      <HeadingTag>{name}</HeadingTag>
      <ParaTag>Brand:{brand}</ParaTag>
      <ParaTag>${price}</ParaTag>
      <ParaTag>
        <FaStar /> {rating}
      </ParaTag>
    </IndividualCard>
  );
};
export default SearchDisplay;
