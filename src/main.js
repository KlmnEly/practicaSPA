import { renderRoute } from "./router.js";

// document.addEventListener('DOMContentLoaded', renderRoute());
window.addEventListener('hashchange', renderRoute())