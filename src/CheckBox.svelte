<script>
	export let disabled = false;
</script>

<label class="checkbox">
	<input type="checkbox" {disabled}>
	<div class="box">
		<span class="mark"></span>
		<slot></slot>
	</div>
</label>

<style>
	.checkbox {
		display: inline-block;
		color: #C0C0C2;
		font-weight: 500;
		font-size: 1.4rem;
	}

	input {
		appearance: none;
		position: absolute;
	}


	.box {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		position: relative;
		cursor: pointer;
	}

	.box::before {
		content: "";
		display: inline-block;
		width:  15px;
		height: 15px;
		border-radius: 4px;
		background-color: #3F4246;
		transition: background-color 0.3s;
	}

	.mark {
		position: absolute;
		width: 17px;
		height: 17px;
		background-color: transparent;
	}

	input:disabled + .box {
		color: #4C4F53;	
	}

	input:checked + .box::before {
		background-color: #7668CB;
	}

	input:checked + .box .mark {
		background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6261 1.15895L12.7195 0.299952C12.2726 -0.122872 12.0128 -0.117976 11.6302 0.438371L5.04051 10.0115L1.97384 7.01216C1.55076 6.59379 1.2861 6.61604 0.93826 7.12788L0.23842 8.20051C-0.116604 8.7266 -0.0712335 9.02524 0.348443 9.43783L4.71913 13.6937C5.16906 14.1387 5.42238 14.0929 5.77022 13.5948L13.7399 2.44077C14.1142 1.91113 14.0915 1.59468 13.6261 1.15895Z' fill='white'/%3E%3C/svg%3E");
		background-position: left 3px bottom 3px;
		background-repeat: no-repeat;
	}

	input:focus + .box::before{
		outline: 2px solid lightskyblue;
	}
</style>