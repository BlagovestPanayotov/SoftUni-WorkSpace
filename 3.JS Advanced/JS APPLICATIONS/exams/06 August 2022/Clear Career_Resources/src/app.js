import { page } from "./library.js";
import { decorateContext, updateNav } from "./middleware.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { onLogout } from "./util.js";




page(decorateContext);
page(updateNav);
page('/index', '/');
page('/', showHome);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page('/catalog', showCatalog);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();