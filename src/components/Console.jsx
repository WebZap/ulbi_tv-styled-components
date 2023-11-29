import React, { useState } from "react";
import styled from "styled-components";
import FlexWrapp from "./FlexWrapp";
import Line from "./Line";

const StylesConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${({ color }) => color || "white"};
    &:focus {
        outline: none;
    }
`;

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(["C/users/Zap/"]);

    const onKeyPress = (e) => {
        if (e.charCode == 13) setLines([...lines, "C/users/Zap/"]);
    };

    return (
        <FlexWrapp>
            <FlexWrapp direction={"column"} margin="0 10px">
                {lines.map((line) => {
                    return <Line>{line}</Line>;
                })}
            </FlexWrapp>
            <StylesConsole onKeyPress={onKeyPress} color={color} {...props} />
        </FlexWrapp>
    );
};

export default Console;
