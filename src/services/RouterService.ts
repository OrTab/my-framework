import { renderApp } from '../app';
import { routes } from '../router/appRoutes';
import { IComponentResult, TPagesPathnames } from '../utilTypes';

class RouterService {
    currentPage: IComponentResult;
    constructor() {
        this.currentPage = this.gerCurrentPage();
    }

    gerCurrentPage() {
        const pathname = window.location.pathname;
        return routes[pathname as TPagesPathnames];
    }

    getNextPage(string: TPagesPathnames): IComponentResult {
        this.currentPage = routes[string];
        return routes[string];
    }

    handleAnchorElementNavigation() {
        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', ev => {
                ev.preventDefault();
                history.pushState(null, '', el.href);
                renderApp(this.getNextPage(el.pathname as TPagesPathnames));
            });
        });
    }
}

export default new RouterService();
