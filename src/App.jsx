import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import FlexWrapp from "./components/FlexWrapp";
import Console from "./components/Console";
import Button from "./components/Button";

//!-------------- STYLES_COMPONENTS ---------------
const StyledAppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    font-size: 20px;
    padding: 2rem;
    background: black;
    color: white;
`;

//todo-------------- STYLES_COMPONENTS ---------------
const App = () => {
    return (
        <div className="App">
            <StyledAppWrapper>
                <FlexWrapp>
                    <Title color={"green"}>
                        Console.js (styled_components)
                    </Title>
                </FlexWrapp>
                <FlexWrapp direction={"column"} margin={"0px 10px 0px 0px"}>
                    <Console />
                    <Button
                        primary
                        // outlined
                        color={"white"}
                        background={"green"}
                        align={"flex-end"}
                    >
                        Нажми меня
                    </Button>
                </FlexWrapp>
            </StyledAppWrapper>
        </div>
    );
};

export default App;
