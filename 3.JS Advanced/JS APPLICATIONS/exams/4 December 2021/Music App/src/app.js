import { contextDecorator, navUpdate, onLogout } from './middleware.js';
import { page } from './lib.js';
import { showHome } from './views/home.js';2
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';
// import { showProfile } from './views/profile.js';

page(contextDecorator);
page('/index', '/');
page(navUpdate);


page('/', showHome);
page('/catalog', showCatalog);
page('/create', showCreate);

page('/details/:id', showDetails);
page('/edit/:id',showEdit);

// page('/profile', showProfile);
page('/search', showSearch);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page.start();

