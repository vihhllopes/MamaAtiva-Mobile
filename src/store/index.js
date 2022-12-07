import { createStore, action } from "easy-peasy";
import sol from "../../assets/Images/sol.png";
import moon from "../../assets/Images/moon.png";

const store = createStore({
  tema: "#FFFFFF",

  setTema: action((state, payload) => {
    if (state.tema == "#FFFFFF") {
      state.tema = "#111111";
    } else {
      state.tema = "#FFFFFF";
    }
  }),
});
export default store;
