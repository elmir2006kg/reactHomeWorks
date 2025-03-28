import React from "react";
import styled from "styled-components";

const HeaderItem = ({ name, username, email }) => {
  return (
    <StyledDiv>
      <p>
        User : {name}
        {username};
      </p>
      <p> email:{email};</p>
    </StyledDiv>
  );
};

export default HeaderItem;

const StyledDiv = styled.div`
  width: 780px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;

  gap: 20px;
`;
