<script>
	import NavMenu from './NavMenu.svelte';
	import { screenWidth, mediumBreakPoint } from './store.js';

	export let links;
</script>

<header>
	<div class="container">
		<a href="/"><img src="img/logo.png" alt=""></a>
		{#if $screenWidth <= $mediumBreakPoint}
			<button class="exit" aria-label="Выйти">Выйти</button>
			<NavMenu {links}/>
		{:else}
			<NavMenu {links}/>
			<button class="exit" aria-label="Выйти">Выйти</button>
		{/if}	
	</div>
</header>

<style>
	.container { 
		position: relative;
		padding: 1.5rem 2rem;
		background-color: rgba(176, 162, 252, 0.25);
		font-weight:  500;
		font-size: 1.4rem;
		color: #C0C0C2;
	}

	.container,
	.exit {
		display: flex;
		align-items: center;
		text-transform: uppercase;
	}

	img {
		width: 32px;
		height: 41px;
		vertical-align: middle;
	}

	.exit:hover {
		color: #fff;
	}

	.exit {
		margin-left: auto;
		margin-right: 2.1rem;
		transition: color 0.3s;
	}

	.exit::before {
		content: "";
		width: 20px;
		height: 20px;
		margin-right: 0.5rem;
		margin-top: -1px;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM10 3.5C11.7 3.5 13 4.8 13 6.5C13 8.2 11.7 9.5 10 9.5C8.3 9.5 7 8.2 7 6.5C7 4.8 8.3 3.5 10 3.5ZM10 17.7C7.5 17.7 5.3 16.4 4 14.5C4 12.5 8 11.4 10 11.4C12 11.4 16 12.5 16 14.5C14.7 16.4 12.5 17.7 10 17.7Z' fill='%23C0C0C2'/%3E%3C/svg%3E");
	}

	@media (min-width: 768px) {
		img {
			margin-right: 3.5rem;
			width: 41px;
			height: 51px;
		}
	}
</style>