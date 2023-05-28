import { state } from '../../myState/state';
import { Component } from '../../utilTypes';
import { boardContainer } from './board.css';

export const Board: Component = () => {
    const [currentState, setState] = state(0, Board, '.cont');
    console.log(currentState);

    const onClick = (isInc = false) => {
        const operator = isInc ? +1 : -1;
        setState(state => {
            return state + operator;
        });
    };

    return {
        render() {
            return `<div class="cont ${boardContainer}">
                         <h2>hey its the Board and $count is <span>${currentState}</span></h2>
                            you want to go home? reach 10 or -4
                         <button action="inc" class="button">count up</button>
                         <button action="dec" class="button">count down</button>
                         <a href="/">Home</a>
                        <div class="cell">
                        </div>
                    </div>`;
        },
        listeners: [
            {
                selector: `.${'button'}`,
                eventType: 'click',
                listener: ({ listenerData }) => {
                    const { action } = listenerData;
                    onClick(action === 'inc');
                },
                allSelectors: true
            }
        ]
    };
};
