import { createRouter, createWebHistory } from 'vue-router';
import IntroView from '../views/IntroView.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SkillsView from '../views/SkillsView.vue';
import WorksView from '../views/WorksView.vue';
import ContactView from '../views/Contactview.vue';

const routes = [
	{
		path: '/',
		name: 'intro',
		component: IntroView,
	},
	{
		path: '/home',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/skills',
		name: 'skills',
		component: SkillsView,
	},
	{
		path: '/works',
		name: 'works',
		component: WorksView,
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

export default router;
