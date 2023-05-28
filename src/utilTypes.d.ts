import { routes } from './router/appRoutes';

declare global {
    interface Event {
        element: Element;
        listenerData: Record<string, string>;
    }
}
export interface IListenersDescription {
    eventType: keyof DocumentEventMap;
    selector: keyof HTMLElementTagNameMap | string;
    listener: EventListener;
    options?: boolean | AddEventListenerOptions | undefined;
    allSelectors?: boolean;
}

export interface IComponentResult {
    render: () => string | boolean | number | undefined;
    listeners?: IListenersDescription[];
}

export type Component<P = {}> = (props?: P) => IComponentResult;

export type TPagesPathnames = keyof typeof routes;
