import NotFound from './used_pages/404.vue';

// wonno 커스텀 뷰
import Main from './used_pages/main.vue';
import RightPanel from './used_pages/right_panel.vue';
import JombieGame from './used_pages/jombie_game.vue';
import WatingRoom from './used_pages/wating_room.vue';
import OpenJob from './used_pages/open_job.vue';


// Pages
export default [
  // wonno 커스텀 라우트
  {
    path: '/main/',
    component: Main,
  },
  {
    path: '/right-panel/',
    component: RightPanel,
  },
  {
    path: '/jombie_game/',
    component: JombieGame,
  },
  {
    path: '/wating_room/',
    component: WatingRoom,
  },
  {
    path: '/open_job/',
    component: OpenJob,
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    component: NotFound,
  },
];
