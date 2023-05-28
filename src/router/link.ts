import { renderApp } from '../app';
import { removeComponentState } from '../myState/state';
import RouterService from '../services/RouterService';
import { TPagesPathnames } from '../utilTypes';
import { routes } from './appRoutes';

export const goTo = (
    pathTarget: TPagesPathnames,
    queryParams?: {
        [key: string]: string;
    },
    hash: string = ''
) => {
    const currentPage = routes[window.location.pathname as TPagesPathnames];
    removeComponentState(currentPage);
    const searchParams = new URLSearchParams(queryParams).toString();
    const url =
        location.origin +
        pathTarget +
        (searchParams ? `?${searchParams}` : '') +
        hash;
    const { pathname } = new URL(url);
    history.pushState(null, '', url);
    renderApp(RouterService.getNextPage(pathname as TPagesPathnames));
};
