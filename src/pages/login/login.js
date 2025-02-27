import fetchLog from "../../pages/login/fetchlog.js";
import loadComponent from "../../helpers/loadComponent.js";
import smoothScroll from "../../helpers/smoothscroll.js";

export default function loadLogin() {
  const promise = loadComponent("", "../../pages/login/login.html");

  promise
    .then(() => {
      smoothScroll();
      fetchLog();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
