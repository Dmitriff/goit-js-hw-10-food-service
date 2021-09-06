import menuList from "../db/menu.json";
import menuTpl from "../templates/menu.hbs";
import refs from "./refs";

refs.menuContainer.insertAdjacentHTML("beforeend", menuTpl(menuList));
