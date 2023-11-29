import React from "react";
import styled, { css, keyframes } from "styled-components"; //

const rotateAnimation = keyframes`
    0% {
        transform : rotateZ(0deg) ;
    }
    100%{
        transform: rotateZ(360deg);
    }
`;

const StyledButton = styled.button.attrs((props) => {
    return {
        outlined: true,
    };
})`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    align-self: ${({ align }) => align || "stretch"};
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rotateAnimation} 1s infinite linear;
    }
    ${(props) =>
        props.primary &&
        css`
            color: ${(props) => props.color || "white"};
            background: ${(props) => props.background || "white"};
        `}
    ${(props) =>
        props.outlined &&
        css`
            color: ${({ color }) => color || "white"};
            border: 1px solid ${({ color }) => color};
            background: transparent;
        `}
`;

const LargeButton = styled(StyledButton)`
    font-size: 28px;
`;

const Button = (props) => {
    return <LargeButton {...props} />;
};

export default Button;
