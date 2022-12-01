import { contextDecorator, navUpdate, onLogout } from './middleware.js';
import { page } from './lib.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCatalog } from './views/catalog.js';
// import { showHome } from './views/home.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showMyItems } from './views/myBooks.js';

page(contextDecorator);
page('/index', '/catalog');
page(navUpdate);


// page('/', showHome);
page('/catalog', showCatalog);
page('/create', showCreate);

page('/details/:id', showDetails);
page('/edit/:id',showEdit);

page('/myBooks', showMyItems);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page.start();

