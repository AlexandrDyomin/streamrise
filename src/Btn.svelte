<script>
	export let classMod;
</script>

<button class="btn {classMod}">
	<slot></slot>
</button>

<style>
	.btn {
		width: 100%;
		min-width: max-content;
		padding: 10px;
		font-weight: 600;
		font-size: 1.4rem;
		color: #fff;
		background-color: #7668CB;	
		border-radius: 4px;	
		text-transform: uppercase;
		transition: background-color 0.3s, 
					transform 0.1s,
					color 0.3s;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.btn:hover {
		background-color: #B0A2FC;
	}

	.btn:active {
		transform: scale(0.95);
	}

	.small {
		width: 3rem;
		height: 3rem;
		padding: 0.7rem;
	}

	.wide {
		padding-top: 1.4rem;
		padding-bottom: 1.4rem;
	}

	.narrow {
		padding-top: 0.7rem;
		padding-bottom: 0.7rem;
	}

	.dim {
		background-color: rgba(176, 162, 252, 0.25);
		color: #B0A2FC;
	}

	.dim:hover {
		background-color: rgba(176, 162, 252, 0.5);
	}

	.gray {
		background-color: #2D2D32;
		color: #C0C0C2;
	}

	.gray:focus,
	.gray:hover {
		background-color: #2D2D32;
		color: #fff;
	}
</style>
