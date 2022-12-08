<script>
	import { slide } from 'svelte/transition';
	import { screenWidth, mediumBreakPoint } from './store.js';

	export let links;
	let isOpen = false;

	const handleBtnClick = (e) => {
		isOpen = !isOpen;
	}
</script>

<nav>
	<button class="burger"
		aria-label="Переключить навигацию" 
		on:click={handleBtnClick}
		class:open={isOpen}
	>
		<div class="icon" aria-hidden="true"></div>
	</button>
	{#if isOpen && $screenWidth <= $mediumBreakPoint}
		<ul transition:slide>
			{#each links as link}
				<li class:active={link.active}><a href={link.href}>{link.text}</a></li>
			{/each}
		</ul>
		{:else if $screenWidth > $mediumBreakPoint}
		<ul>
			{#each links as link}
				<li class:active={link.active}><a href={link.href}>{link.text}</a></li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	.burger {
		width: 29px;
		height: 21px;
		position: relative;
	}

	.open .icon {
		background-color: transparent;
		transition: background-color 0.3s;
	}

	.icon {
		transition: background-color 0.3s 0.3s;
	}

	.icon::before {
		top: 0;
	}

	.icon::after {
		bottom: 0;
	}

	.icon,
	.icon::before,
	.icon::after {
		width: 28px;
		height: 3px;
		border-radius: 2px;
		background-color: #fff;
	}

	.icon::before,
	.icon::after {
		content: "";
		position: absolute;
		left: 0;
		transition: top 0.3s 0.3s, bottom 0.3s 0.3s, transform 0.3s;
	}

	.open .icon::before,
	.open .icon::after {
		transition: top 0.3s, bottom 0.3s, transform 0.3s 0.3s;
	}

	.open .icon::after {
		bottom: 9px;
		transform: rotate(45deg);
	}

	.open .icon::before {
		top: 9px;
		transform: rotate(-45deg);
	}

	ul {
		background-color: #2D2E33;
		position: absolute;
		top: 100%;
		left:  0;
		width: 100%;
		padding: 2rem;
	}

	li:not(:last-child) {
		margin-bottom: 1.5rem;
	}


	a:hover {
		color: #fff;
	}

	a {
		transition: color 0.3s;
	}

	.active {
		color: #fff;
	}

	@media (min-width: 768px) {
		ul {
			left: auto;
			right: 0;
			width: 247px;
		}
	}

	@media (min-width: 1180px) {
		button {
			display: none;
		}

		ul {
			position: static;
			display: flex;
			gap: 2.5rem;
			justify-content: space-between;		
			background-color: transparent;
			padding: 0;
			width: auto;
		}

		li:not(:last-child) {
			margin-bottom: 0;
		}
	}
</style>