<script>
	export let classMod;
</script>

<div class="window {classMod}">
	<button>
		<img src="img/cross.svg" alt="">
	</button>
	
	<h2>
		<slot name="title">Заголовок</slot>
	</h2>
		
	<p>
		<slot name="text">Текст</slot>
	</p>
	
</div>

<style>
	.window {
		position: relative;
		max-width: 28.9rem;
		padding: 2rem 1.5rem;
		border-radius: 8px;	
		background: url(../img/complete.svg);
		background-color: #B0A2FC40;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 95px 80px;
		color: #fff;
		font-size: 1.4rem;
		text-align: center;
	}

	.warning {
		background-image: url(../img/warning.svg);
	}
	
	button {
		padding: 0;
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		top: 1rem;
		right: 1rem;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button:active {
		transform: scale(0.85);
	}

	h2 {
		font-weight: 500;
		font-size: 1.6rem;
		margin-bottom: 1.3rem;
	}
</style>

