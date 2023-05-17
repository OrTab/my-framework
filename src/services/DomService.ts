import { IListenersDescription } from '../utilTypes';
import RouterService from './RouterService';

export class DomService {
    static addListeners(listenersDescription: IListenersDescription[]) {
        listenersDescription.forEach(
            ({ eventType, selector, listener, options }) => {
                const element = document.querySelector(selector)!;
                element.addEventListener(eventType, listener, options);
            }
        );
        RouterService.handleAnchorElementNavigation();
    }

    static removeListeners(listenersDescription: IListenersDescription[]) {
        listenersDescription.forEach(({ eventType, selector, listener }) => {
            const element = document.querySelector(selector)!;
            element.removeEventListener(eventType, listener);
        });
    }
}
