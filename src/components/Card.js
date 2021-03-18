import React from "react";
// import Thumb from "./Thumb";
import styled from "styled-components";
import ImageLoader from "./ImageLoader";

const Card = ({ first_name, country, description, avatar }) => {
  return (
    <CardBox>
      <ImageLoader source={avatar} container={CardBox} />
      <TextsBox>
        <CardTitle className="paragraph">
          {first_name} from {country}
        </CardTitle>
        <CardMsg>{description}</CardMsg>
      </TextsBox>
    </CardBox>
  );
};
export default Card;

// ---------------------------- styled-components ----------------------
const CardBox = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: paleturquoise;
  }
  :active {
    background: skyblue;
    color: white;
    &.paragraph {
      color: white;
    }
  }
`;

const TextsBox = styled.div`
  padding-left: 2.8rem;
`;

const CardTitle = styled.div`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2.8rem;
  &.paragraph {
    font-size: 3.8rem;
    font-weight: 400;
    font-family: "Yanone Kaffeesatz", sans-serif;
    text-align: center;
    color: slategray;
  }
`;

const CardMsg = styled.div`
  font-family: "Raleway";
  font-size: 1.4rem;
  max-width: 35rem;
`;
