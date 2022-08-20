<template>
	<div class="intro">
		<div>
			<h1 id="scene">
				<span data-depth="1.5">w</span>
				<span data-depth="2.8">a</span>
				<span data-depth="3.5">j</span>
				<span data-depth="4.3">o</span>
			</h1>
		</div>

		<div class="progress" id="progress">
			<div class="preloader-dotline">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<span class="progress-text">0%</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		this.logoParallax();
		this.barLoading();
	},
	methods: {
		// 프로그래스 함수
		barLoading() {
			var percent = $('.progress-text');
			var count = 5;
			var loading = setInterval(() => {
				if (count === 100) {
					clearInterval(loading);
					this.$router.push('/home');
				} else {
					count += 1;
					percent.text(count + '%');
				}
			}, 40);
		},
		logoParallax() {
			var scene = document.getElementById('scene');
			var parallaxInstance = new Parallax(scene);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.intro {
	position: relative;
	width: 100%;
	height: 100vh;

	#scene {
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%, -50%) !important;
		display: flex !important;
		z-index: 1;

		span {
			position: relative !important;
			font-size: 3.6rem;
			font-weight: 900;
		}
	}
	.progress {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		background: $bg-color1;

		.preloader-dotline {
			.dot {
				display: inline-block;
				position: absolute;
				top: 45%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: $secondary;
				height: 10px;
				width: 10px;
				opacity: 0;
				border-radius: 50%;
				animation: dotline-move 4s infinite;
				transform: translateX(-300px);
			}

			.dot:nth-child(1) {
				animation-delay: 0.8s;
			}

			.dot:nth-child(2) {
				animation-delay: 0.7s;
			}

			.dot:nth-child(3) {
				animation-delay: 0.6s;
			}

			.dot:nth-child(4) {
				animation-delay: 0.5s;
			}

			.dot:nth-child(5) {
				animation-delay: 0.4s;
			}

			.dot:nth-child(6) {
				animation-delay: 0.3s;
			}

			.dot:nth-child(7) {
				animation-delay: 0.2s;
			}

			.dot:nth-child(8) {
				animation-delay: 0.1s;
			}

			@keyframes dotline-move {
				40% {
					transform: translateX(0px);
					opacity: 0.8;
				}
				100% {
					transform: translateX(300px);
					opacity: 0;
				}
			}
		}

		.progress-text {
			font-family: 'Pretendard';
			font-weight: 500;
			font-size: 14px;
			color: $secondary;
			margin-top: 10px;
			position: absolute;
			text-align: center;
			top: 50%;
			width: 100%;
		}
	}
}
</style>
