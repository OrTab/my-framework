import { Component } from '../../utilTypes';

export const Home: Component = () => {
    return {
        render() {
            return `<div class="home">
                    <h2>hey its the Home</h2>
                    <a outer href="https://www.google.com">Google</a>
                    <a href="/board">Board</a>
                </div>`;
        },
        listeners: [
            {
                eventType: 'click',
                selector: '.home',
                listener() {
                    // goTo('/board');
                }
            }
        ]
    };
};
