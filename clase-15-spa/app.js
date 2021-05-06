// Routes 
const routes = [
    { path: '/', component: HomeComponent, },
    { path: '/page1', component: Page1Component, },
    { path: '/page2', component: Page2Component, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    const path = parseLocation(); //Obtiene el hash. Ej #pagina1
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    $('#app').html(component.render());
};

$(document).ready(function () {
    router();
});

$(window).on('hashchange', function (e) {
    router();
});