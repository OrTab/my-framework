import { goTo } from '../../router/link';
import { IComponentResult } from '../../utilTypes';
import { boardContainer } from './board.css';

export const Board: IComponentResult = {
    render() {
        return `<div class="${boardContainer}">
                    <h2>hey its the Board</h2>
                </div>`;
    },
    listeners: [
        {
            selector: `.${boardContainer}`,
            eventType: 'click',
            listener: () => {
                goTo('/');
            }
        }
    ]
};
