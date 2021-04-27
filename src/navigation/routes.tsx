import {
  MenuScreen,
  GameScreen,
  LeaderBoardScreen,
  GameOverScreen,
} from '../screens';
import {IRoute} from '../shared/types';

const createRoutes = <T extends IRoute>(arg: T): T => arg;

const routes = createRoutes({
  menu: {
    name: 'menu',
    component: MenuScreen,
  },
  game: {
    name: 'game',
    component: GameScreen,
  },
  leaderBoards: {
    name: 'leaderBoards',
    component: LeaderBoardScreen,
  },
  gameOver: {
    name: 'gameOver',
    component: GameOverScreen,
  },
});

export default routes;
