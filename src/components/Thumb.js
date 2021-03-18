import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Thumb = ({ image_url }) => {
  return (
    <div>
      <Thumb1 src={image_url} alt="some thing" />
    </div>
  );
};

export default Thumb;

Thumb.propTypes = {
  image_url: PropTypes.string.isRequired
};

const Thumb1 = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;
