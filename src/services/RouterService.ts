import { renderApp } from '../app';
import { routes } from '../router/appRoutes';
import { Component, IComponentResult, TPagesPathnames } from '../utilTypes';

class RouterService {
    currentPage: Component;
    constructor() {
        this.currentPage = this.gerCurrentPage();
    }

    gerCurrentPage() {
        const pathname = window.location.pathname;
        return routes[pathname as TPagesPathnames];
    }

    getNextPage(string: TPagesPathnames): IComponentResult {
        this.currentPage = routes[string];
        return routes[string]();
    }

    handleAnchorElementNavigation() {
        document.querySelectorAll('a').forEach(el => {
            if ('outer' in el.attributes) {
                return;
            }

            el.addEventListener('click', event => {
                event.preventDefault();
                if (event.metaKey || event.ctrlKey) {
                    const newWindow = window.open()!;
                    newWindow.opener = null;
                    newWindow.location = el.href;
                    return;
                }
                history.pushState(null, '', el.href);
                renderApp(this.getNextPage(el.pathname as TPagesPathnames));
            });
        });
    }
}

export default new RouterService();
