import { contextDecorator, navUpdate, onLogout } from './middleware.js';
import { page } from './lib.js';
import { showDashboard } from './views/dashboard.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showMyPosts } from './views/myPosts.js';

page(contextDecorator);
page('/index.html', '/dashboard');
page('/', '/dashboard');
page(navUpdate);


page('/dashboard', showDashboard);
page('/create', showCreate);

page('/details/:id', showDetails);
page('/edit/:id',showEdit);

page('/myPosts', showMyPosts);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page.start();

