import { contextDecorator, navUpdate, onLogout } from './middleware.js';
import { page } from './lib.js';
import { showDashboard } from './views/dashboard.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/deatails.js';
import { showEdit } from './views/edit.js';

page(contextDecorator);
page('/index', '/');
page(navUpdate);


page('/', showDashboard);
page('/dashboard', showDashboard);
page('/create', showCreate);

page('/details/:id', showDetails);
page('/edit/:id',showEdit);

page('/myPosts', showDashboard);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page.start();

