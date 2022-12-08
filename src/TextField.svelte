<script>
	export let placeholder;
</script>

<input type="text" {placeholder}>

<style>
	input {
		width: 100%;
		height: 3.7rem;
		border: none;
		border-radius: 4px;
		background-color: #3F4246;
		padding: 1rem;
		font-size: 1.4rem;
		color: #fff;
	}

	input::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}
</style>