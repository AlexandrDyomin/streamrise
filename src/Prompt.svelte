<script>
	export let classMod;
	export let isPopup = false;
</script>

<div class="prompt {classMod}">
	{#if isPopup}
		<h2>
			<slot name="title">Подсказка</slot>
		</h2>
		<p>
			<slot name="text">Текст</slot>
		</p>
	{:else}
		<slot></slot>	
	{/if}
</div>

<style>
	.prompt {
		padding: 1rem 1.5rem;
		background-image: url(../img/info.svg);
		background-position: right top;
		background-repeat: no-repeat;
		background-color: #4C4F53;
		border-radius: 8px;
		color:  #fff;
		font-size: 1.3rem;
		max-width: 29rem;
		line-height: 1.5;
	}

	.big,
	.small {
		position: relative;
		box-shadow: 0px 4px 10px 3px rgba(33, 33, 38, 0.35);
		font-size: 1.4rem;
	}

	.big {
		max-width: 34.5rem;
		line-height: 1.5;
	}


	.big::after {
		content: "";
		position: absolute;
		right: 100%;
		top: 2rem;
		width: 1.6rem;
		height: 5.7rem;
		background-image: url(../img/pointer.svg);
	} 

	.small {
		max-width: 	23.3rem;
		background-color:  rgba(176, 162, 252, 0.25);
		background-image: none;
	}

	.small:before {
		content: "";
		position: absolute;
		top: 100%;
		right: 0.8rem;
		width: 4.4rem;
		height: 1.4rem;
		background-image: url(../img/pointer_sm.svg);
	}

	.for-phone {
		background-position: right 10px top 7px;
		background-image: url(../img/turn.svg);
	}

	h2 {
		font-weight: 500;
		font-size: 1.5rem;
		line-height: initial;
		margin-bottom: 2px;
	}
</style>