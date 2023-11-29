import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    color: ${(props) => props.color};
    text-align: ${(props) => props.text_position};
`;

const Title = (props) => {
    return <StyledTitle {...props} />;
};

export default Title;
