import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import Photos from './views/Photos.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
    {
		path: '/news',
		name: 'News',
		component: News,
	},
    {
		path: '/photos',
		name: 'Photos',
		component: Photos,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;