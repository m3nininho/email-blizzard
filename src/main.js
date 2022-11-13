import HomePage from "./components/HomePage";
import MainContent from "./components/MainContent";
import PreExpansion from "./components/PreExpansion"
import BuyInAdvance from "./components/BuyInAdvance"
import Conect from "./components/Conect"
import Footer from "./components/Footer"

document.querySelector("#app").innerHTML = /*html*/ `
  <div class="max-w-3xl mx-auto bg-textConect">
    ${HomePage()}
    ${MainContent()}
    ${PreExpansion()}
    ${BuyInAdvance()}
    ${Conect()}
    ${Footer()}
  </div>
`;
