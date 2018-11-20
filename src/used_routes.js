import NotFound from './used_pages/404.vue';

// wonno 커스텀 뷰
import Main from './used_pages/main.vue';
import LeftPanel from './used_pages/left_panel.vue';
import JombieGame from './used_pages/jombie_game.vue';

// Pages
export default [
  // wonno 커스텀 라우트
  {
    path: '/main/',
    component: Main,
  },
  {
    path: '/left-panel/',
    component: LeftPanel,
  },
  {
    path: '/game_1/',
    component: JombieGame,
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    component: NotFound,
  },
];
