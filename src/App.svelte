<script>
	import Btn from './Btn.svelte';
	import ModalWindow from './ModalWindow.svelte';
	import Prompt from './Prompt.svelte';
	import Status from './Status.svelte';
	import State from './State.svelte';
	import TextField from './TextField.svelte';
	import CheckBox from './CheckBox.svelte';
	import Toggle from './Toggle.svelte';
	import Header from './Header.svelte';
	import Channels from './Channels.svelte';

	export let links;
</script>

<main>
	<Header {links}/>
	
	<div class="container">
		<h1>Приобрести услугу</h1>	

		<div class="channels">
			<Channels/>
		</div>

		<div class="tabs">
			<div class="inner">
				<Btn classMod="gray">
					Просмотры
				</Btn>

				<Btn classMod="gray">
					Зрители
				</Btn>

				<Btn classMod="gray">
					Зрители ultra
				</Btn>

				<Btn classMod="gray">
					Прайм подписка
				</Btn>

				<Btn classMod="gray">
					Фолловеры
				</Btn>

				<Btn classMod="gray">
					Загрузить сообщения для чат ботов
				</Btn>	

				<div class="shadow" aria-hidden="true"></div>
			</div>
		</div>
	</div>



	

	<!-- <br>

	<Btn>
		<img src="img/play.svg" alt="Play">
		Возобновить
	</Btn>
	<br>

	<Btn classMod="small">
		<img src="img/play.svg" alt="Play">
	</Btn>
	<br>

	<Btn classMod="wide">Пополнить баланс</Btn>
	<br>

	<Btn classMod="narrow">
		<img src="img/pause.svg" alt="Pause">
		Остановить
	</Btn>
	<br>

	<Btn classMod="dim">
		<img src="img/trash.svg" alt="Корзина">
		Удалить
	</Btn>
	<br>

	<Btn classMod="dim">
		<img src="img/return.svg" alt="Стрелка назад">
		Возврат
	</Btn>
	<br>

	<Btn classMod="small dim">
		<img src="img/trash.svg" alt="Корзина">
	</Btn>
	<br>

	<Btn classMod="small dim">
		<img src="img/return.svg" alt="Стрелка назад">
	</Btn>
	<br>

	<ModalWindow classMod="warning">
		<svelte:fragment slot="title">Внимание!</svelte:fragment>
		<svelte:fragment slot="text">Слишком маленький интервал.
		Интервал увеличен автоматически.</svelte:fragment>
	</ModalWindow>
	<br>

	<ModalWindow>
		<svelte:fragment slot="title">Выполнено!</svelte:fragment>
		<svelte:fragment slot="text">Заказ № 614502 <strong>приостановлен</strong>.</svelte:fragment>
	</ModalWindow>
	<br>

	<Prompt classMod="for-phone">
		Переверните телефон в горизонтальное положение, чтобы увидеть больше параметров в таблице
	</Prompt>
	<br>

	<Prompt>
		<div class="line green">
			<State isPlaying=true/>
			<Status isOnline=true/>
		</div>
		<div class="line red">
			<State/>
			<Status/>
		</div>
	</Prompt>
	<br>

	<Prompt classMod="big" isPopup=true> 
		<svelte:fragment slot="text">It is a long established fact that a reader will be distracted by the readable <span class=price>19,05</span> ₽/мин content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</svelte:fragment>
	</Prompt>
	<br>

	<Prompt classMod="small" isPopup="true">
		<svelte:fragment slot="text">Текст подсказки Текст подсказки Текст подсказки Текст подсказки Текст подсказки Текст подсказки Текст подсказки</svelte:fragment>
	</Prompt>
	<br>

	<TextField placeholder="Подсказка"/>
	<br>
	<br>

	<CheckBox>Лимит сообщений</CheckBox>
	<br>

	<CheckBox disabled=true>Лимит сообщений</CheckBox>
	<br>

	<Toggle/>
	<br>

	<Toggle disabled=true/>
	<br>

	<Toggle disabled=true checked=true/>
	<br>

	<Toggle checked=true/>
	<br>

	<Tabs/>
	<br>

	<Btn classMod="gray">
		Просмотры
	</Btn> -->
</main>

<style>
	h1 {
		font-weight: 600;
		font-size: 2.4rem;
		color: #fff;
		padding: 3rem 0 2.5rem;
	}

	.channels {
		margin-bottom: 1.3rem;
	}

	.tabs {
		position: relative;
		margin-left: -2px;
	}

	.inner::-webkit-scrollbar {
		display: none;
	}

	.inner {
		display: flex;
		gap: 1.2rem;
		overflow-x: auto;
		scrollbar-width: none;
		padding: 4px;	
	}

	.shadow {
		position: absolute;
		right: -1px;
		width: 5.9rem;
		height: 100%;
		background:  linear-gradient(270deg, #212126 0%, rgba(33, 33, 38, 0.85) 50%, rgba(33, 33, 38, 0) 100%);
	}
	
	/*.line {
		display: grid;
		grid-template-columns: 70px auto;
		grid-gap: 3rem;
		padding-left: 4px;
	}

	.line:not(:last-child) {
		margin-bottom: 1rem;
	}

	.green {
		border-left: 2px solid #C7FE2B;
	}

	.red {
		border-left: 2px solid #FF5555;
	}

	.price {
		color: #FF5555;
	}*/
</style>