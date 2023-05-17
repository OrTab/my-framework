import { goTo } from '../../router/link';
import { IComponentResult } from '../../utilTypes';

export const Home: IComponentResult = {
    render() {
        return `<div class="home">
                    <h2>hey its the Home</h2>
                </div>`;
    },
    listeners: [
        {
            eventType: 'click',
            selector: '.home',
            listener() {
                goTo('/board');
            }
        }
    ]
};
