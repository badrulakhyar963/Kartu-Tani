import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 //CSS RESET'

@import url('https://fonts.googleapis.com/css2?family=Anta&family=Bebas+Neue&family=Kode+Mono:wght@400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


 body {
  font-family: "Roboto", "Anta";
  font-style: normal;
}
      
      
      /* code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
       */
      /* CSS Reset */
      * {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
      }    
`;
export default GlobalStyle;
