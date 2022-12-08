<script>
	export let disabled = false;
	export let checked = false;
</script>

<label class="toggle">
	<input type="checkbox" {disabled} {checked}>
	<span class="track"></span>
</label>

<style>
	.toggle {
		--color: #C0C0C2;
		--color-disabled: #616164;
		--t-width: 4rem;
		--t-height: calc(var(--t-width) / 2);
		--t-bg: #3F4246;
		--t-bg-disabled: #2D2E33;
		--t-bg-active:#7668CB;
		--t-bg-active-disabled: #433D68;
		--t-radius: 30rem;

		--th-size: var(--t-height);
		--th-bg: #C0C0C2;
		--th-bg-disabled: #616164;
		--th-bg-active: #FFF;
		--th-bg-active-disabled: #7A7A7D;
		--th-radius:  50%;
	}

	input {
		appearance: none;
		position: absolute;
	}

	input:focus {
		outline: none;
	}

	input:focus + .track {
		outline: 2px solid lightskyblue;
	}

	.track {
		display: inline-block;
		width: var(--t-width);
		height: var(--t-height);
		background-color: var(--t-bg);
		border-radius: var(--t-radius);
		transition: background-color 0.2s;
	}

	.track::before {
		content: "";
		display: inline-block;
		width: var(--th-size);
		height: var(--th-size);
		border-radius: var(--th-radius);
		background-color: var(--th-bg);
		transition: transform 0.2s;
	}

	input:checked + .track {
		background-color: var(--t-bg-active);
	}

	input:checked:disabled + .track {
		background-color: var(--t-bg-active-disabled);
	}

	input:checked + .track:before {
		transform: translateX(var(--th-size));
		background-color: var(--th-bg-active);
	}

	input:checked:disabled + .track:before {
		background-color: var(--th-bg-active-disabled);
	}

	input:disabled + .track {
		background-color: var(--t-bg-disabled);
	}

	input:disabled + .track:before {
		background-color: var(--th-bg-disabled);
	}
</style>