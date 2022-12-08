<script>
	export let isPlaying = false;
</script>

<div class="state">
	{#if isPlaying}
		<span class="resumed">Resumed</span>
	{:else}
		<span class="paused">Paused</span>
	{/if}
</div>

<style>
	.state {
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.2;
	}

	.resumed {
		color: #C7FE2B;
	}

	.paused {
		color: #FF5555;
	}
</style>