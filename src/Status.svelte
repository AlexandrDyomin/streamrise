<script>
	export let isOnline = false;
</script>

<div class="status">
	{#if isOnline}
		<span class="online">Online</span>
	{:else}
		<span class="offline">Offline</span>
	{/if}
</div>

<style>
	.status {
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.2;
		color: #fff;
	}

	.online::before,
	.offline::before {
		content: "";
		display: inline-block;
		vertical-align: middle;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-right: 4px;
	}

	.online::before {
		background-color: #C7FE2B;
	}

	.offline::before {
		background-color: #FF5555;
	}
</style>
