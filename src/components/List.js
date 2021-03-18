import React from "react";
import Card from "./Card";
import styled from "styled-components";

const List = ({ list_data, pick }) => {
  return (
    <CardsList>
      <ul>
        {list_data?.map((item) => (
          <CardItem key={item.id} onClick={() => pick(item)}>
            <Card {...item} />
          </CardItem>
        ))}
      </ul>
    </CardsList>
  );
};
export default List;

// ---------------------------- styled-components ----------------------
const CardsList = styled.div`
  background: oldlace;
  height: 75vh;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;

const CardItem = styled.li`
  :nth-child(even) {
    background: honeydew;
  }
  :nth-child(odd) {
    background: white;
  }
`;
