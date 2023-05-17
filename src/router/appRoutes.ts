import { Board } from '../pages/board/Board';
import { Home } from '../pages/home/Home';

export const routes = {
    '/': Home,
    '/board': Board
} as const;
