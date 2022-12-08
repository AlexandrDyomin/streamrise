<script>
	import {onMount} from 'svelte';

	let tab;
	let line;
	
	const underlineTab = (tab, line) => {
		const xCoord = tab.offsetLeft;
		line.style.left = `${xCoord}px`;

		const tabWidth = tab.offsetWidth;
		line.style.width = `${tabWidth}px`;
	}

	const handleTabsClick = (e) => {
		let tab;

		if (e.target.classList.contains('btn')) {
			tab = e.target.parentElement;
			underlineTab(tab, line);
		}
	}
	
	onMount(() => underlineTab(tab, line));
</script>

<nav  on:click={handleTabsClick}>
		<ul class="tabs">
			<li class="tab active" bind:this={tab}>
				<button class="btn">Twitch</button>
			</li>
			<li class="tab">
				<button class="btn">YouTube</button>
			</li>
			<li class="tab">
				<button class="btn">Trovo</button>
			</li>
			<div class="line" bind:this={line}></div>
		</ul>	
</nav>

<style>
	.tabs {
		position: relative;
		display: flex;
		gap: 1.2rem;
		border-bottom: 2px solid #3F4246;
		font-size: 1.6rem;
		color: #C0C0C2;
	}

	.tab {
		padding: 0.6rem 1.2rem;
	}

	.active {
		color: #fff;
		font-weight: 600;
	}

	.line {
		position: absolute;
		bottom: -2px;
		left: 0;
		background-color: #B0A2FC;
		width: 0;
		height: 2px;
		transition: width 0.3s, 
					left 0.3s;
	}
</style>