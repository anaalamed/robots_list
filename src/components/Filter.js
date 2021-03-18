import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Filter = ({ list_data, on_filter }) => {
  let num = useRef(-1);
  const update_list = (event) => {
    const txt = event.target.value;
    const filtered_list = list_data.filter((item) =>
      item.first_name.toLowerCase().includes(txt.toLowerCase())
    );
    num.current = filtered_list.length;
    on_filter(filtered_list);
  };

  return (
    <Header>
      <FilterTitle>
        {num.current !== -1 ? num.current : list_data.length} items filtered
      </FilterTitle>
      <FilterInput onChange={update_list} />
    </Header>
  );
};

export default Filter;

Filter.propTypes = {
  on_filter: PropTypes.func.isRequired,
  list_data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};

// ---------------------------- styled-components ----------------------
const Header = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
`;
const FilterInput = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;
  :focus {
    border: tomato 2px solid;
  }
`;
