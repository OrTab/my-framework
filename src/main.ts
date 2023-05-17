import { renderApp } from './app';
import RouterService from './services/RouterService';
import { TPagesPathnames } from './utilTypes';

window.addEventListener('load', () => {
    const pageData = RouterService.getNextPage(
        window.location.pathname as TPagesPathnames
    );
    renderApp(pageData);
});
