import App from './App.svelte';
import { screenWidth } from './store.js';

const app = new App({
	target: document.body,
	props: {
		links: [{
			href: "",
			text: "Главная",
			active: true
		},{
			href: "",
			text: "Приобрести услугу"
		}, {
			href: "",
			text: "Купленные Услуги"
		}, {
			href: "",
			text: "История заказов"
		}, {
			href: "",
			text: "История оплаты"
		}, {
			href: "",
			text: "Faq"
		}, {
			href: "",
			text: "Инструкция"
		}],
	}
});

const handleWindowResize = () => screenWidth.set(window.innerWidth);

window.addEventListener('resize', handleWindowResize);


export default app;