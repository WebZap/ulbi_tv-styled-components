import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';


//!-------------- STYLES_COMPONENTS ---------------
const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family:'Courier New', Courier, monospace ;

}
`

const theme = {
	colors: {
		primary: "green",
		secondary: "red"
	}
}
//!---------------------...------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={theme}>
		<Global />
		<App />
	</ThemeProvider>
);

