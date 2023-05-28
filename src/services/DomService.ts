import { IListenersDescription } from '../utilTypes';
import RouterService from './RouterService';

export class DomService {
    static addListeners(listenersDescription: IListenersDescription[]) {
        listenersDescription.forEach(
            ({ eventType, selector, listener, options, allSelectors }) => {
                const element = allSelectors
                    ? document.querySelectorAll(selector)!
                    : [document.querySelector(selector)!];
                element.forEach(el => {
                    el.addEventListener(
                        eventType,
                        event => {
                            event.element = el;
                            const listenerData = Object.values(
                                el.attributes
                            ).reduce((data, { nodeName, nodeValue }) => {
                                return { ...data, [nodeName]: nodeValue };
                            }, {});
                            event.listenerData = listenerData;
                            listener(event);
                        },
                        options
                    );
                });
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

    static render(
        selector: keyof HTMLElementTagNameMap | string,
        content: string | number | boolean | undefined,
        listeners?: IListenersDescription[]
    ) {
        if (typeof content === 'undefined') return;
        const element = document.querySelector(selector)!;
        element.innerHTML = content.toString();
        listeners && this.addListeners(listeners);
    }
}
