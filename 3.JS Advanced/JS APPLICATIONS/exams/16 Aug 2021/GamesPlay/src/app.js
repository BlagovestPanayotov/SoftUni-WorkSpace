import { contextDecorator, navUpdate, onLogout } from './middleware.js';
import { page } from './lib.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';

page(contextDecorator);
page('/index', '/');
page(navUpdate);


page('/', showHome);
page('/catalog', showCatalog);
page('/create', showCreate);

page('/details/:id', showDetails);
page('/edit/:id',showEdit);

// page('/myPosts', showDashboard);

page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);

page.start();



// _createdOn: 1617194128618
// _id: "ff436770-76c5-40e2-b231-77409eda7a61"
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
// category: "Action"
// imageUrl: "/images/CoverFire.png"
// maxLevel: "70"
// summary: "Best action shooter game, easy controls, realistic 3D graphics and fun offline missions. Get your best shooting gun and take to action!"
// title: "CoverFire"
