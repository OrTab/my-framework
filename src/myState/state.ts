import { DomService } from '../services/DomService';
import { Component } from '../utilTypes';
const map = new WeakMap();
export const state = <S>(
    currentState: S,
    cmp: Component,
    mainContainerSelector: string
): [S, (arg: (currentState: S) => S) => void] => {
    const stateRes = map.get(cmp);
    if (typeof stateRes === 'undefined') {
        map.set(cmp, currentState);
    } else {
        currentState = stateRes;
    }
    const setState = (arg: (currentState: S) => S) => {
        setTimeout(() => {
            if (typeof arg === 'function') {
                const res = arg(currentState);
                map.set(cmp, res);
            }
            const { render, listeners } = cmp();
            DomService.render(mainContainerSelector, render(), listeners);
        }, 0);
    };

    return [currentState, setState];
};

export const handleState = (cmp: Component) => {
    map.delete(cmp);
};
