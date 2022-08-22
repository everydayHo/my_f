<template>
	<div class="footer">
		<ul>
			<li>
				<router-link to="/home" class="active"
					><i class="xi-home"></i>HOME</router-link
				>
			</li>
			<li>
				<router-link to="/about"><i class="xi-user"></i>ABOUT</router-link>
			</li>
			<li>
				<router-link to="/skills"
					><i class="xi-chart-line"></i>SKILLS</router-link
				>
			</li>
			<li>
				<router-link to="/works"
					><i class="xi-business"></i>PORTFOLIO</router-link
				>
			</li>
			<li>
				<router-link to="/contact"><i class="xi-mail"></i>CONTACT</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.footer {
	width: 100%;
	height: 65px;
	position: fixed;
	left: 0;
	bottom: 0;
	background-color: $bg-color2;
	z-index: 9999;

	ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;

		li {
			width: 20%;
			height: 100%;

			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				text-align: center;
				font-size: 1.2rem;
				color: $bg-color1;
				transition: 400ms ease-in-out;
				i {
					font-size: 2.8rem;
				}
				&:hover {
					transform: scale(1.2);
					color: $color6;
				}
			}
		}
	}
}
</style>
