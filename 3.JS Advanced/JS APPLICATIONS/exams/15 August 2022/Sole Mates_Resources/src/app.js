import { logout } from "./api/users.js";
import { html, render } from "./lib.js";
import { page } from "./lib.js";
import { updateContext, updateNav } from "./middlewares.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showSearch } from "./views/search.js";

page(updateContext);
page(updateNav);
page('/index','/');
page('/', showHome);

page('/register', showRegister);
page('/login', showLogin);
page('/logout',onLogout);

page('/catalog', showCatalog);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id',showEdit)
page('/search', showSearch);

page.start();

function onLogout(){
    logout();
    page.redirect('/catalog');
}

