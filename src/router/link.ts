import { renderApp } from '../app';
import RouterService from '../services/RouterService';
import { TPagesPathnames } from '../utilTypes';

export const goTo = (
    pathTarget: TPagesPathnames,
    queryParams?: {
        [key: string]: string;
    },
    hash: string = ''
) => {
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
