import { routes } from './router/appRoutes';

export interface IListenersDescription {
    eventType: keyof DocumentEventMap;
    selector: keyof HTMLElementTagNameMap | string;
    listener: EventListener;
    options?: boolean | AddEventListenerOptions | undefined;
}

export interface IComponentResult {
    render: () => string;
    listeners?: IListenersDescription[];
}

export type Component = () => IComponentResult;

export type TPagesPathnames = keyof typeof routes;
