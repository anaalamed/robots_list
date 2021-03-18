import React, { useState } from "react";
import styled from "styled-components";

const ImageLoader = ({ container, source: src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState(src);
  const [count, setCount] = useState(0);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = () => {
    if (count <= 5) {
      // console.log("reloading");
      // console.log(count);
      setCount(count + 1);
      setSource(`${src}?r=${Math.random()}`); // bacause of cash
    }
  };

  // console.log(source);

  return (
    <Box>
      <Icon show={isLoading}>🤩</Icon>
      <Image
        src={source}
        alt="avatar"
        show={!isLoading}
        onLoad={onLoad}
        onError={onError}
        container={container}
      />
    </Box>
  );
};

export default ImageLoader;

const Icon = styled.span`
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 100px;
`;

const Image = styled.img`
  opacity: ${({ show }) => (show ? 1 : 0)};
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
  ${({ container }) => `
      ${container}:hover & {
        box-shadow: 0 0.4rem 1.5rem DimGrey;
        margin-bottom: 3rem;
        padding-bottom: 1rem;
      }
  `}
`;

const Box = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;
