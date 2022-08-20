<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss">
@import '../scss/default';
#app {
	background: $bg-color1;
	color: $primary;
	height: auto;
	height: 100%;
	margin: 0 auto;
}
</style>
