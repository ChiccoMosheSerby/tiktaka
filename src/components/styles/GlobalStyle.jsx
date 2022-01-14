import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body,html {
    font-family: "Nunito Sans";
    margin: 0;
    padding: 0;
    font-size: 13px;
    padding: 0;
    margin: 0;
  }

  :root{
    --mainColor :#ffda2a;
    --disabledBtnColor :#ccb026;
    --textColor : #9a9a9a;
    --dropShadow: 0 2px 5px rgb(73, 73, 73);

}

`;

export default GlobalStyle;
