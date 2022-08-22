<template>
	<div class="home">
		<div class="swiper slide_container">
			<ul class="swiper-wrapper slides">
				<!-- Slides -->
				<li class="swiper-slide slide">
					<a href="http://hoit12.dothome.co.kr/wp/" target="_blank">
						<img
							src="../assets/images/home-swiper/folex@2x.png"
							alt="project image1"
						/>
					</a>
					<div class="caption tlt">
						<div class="texts">
							<h2>Jo Jungwoo</h2>
							<h3>Web publisher</h3>
							<h3>Portfolio</h3>
						</div>
					</div>
				</li>
				<li class="swiper-slide slide">
					<a href="https://hoit123.cafe24.com/expire" target="_blank">
						<img
							src="../assets/images/home-swiper/expire@2x.png"
							alt="project image2"
						/>
					</a>
					<div class="caption">
						<h2 class="tlt2">Jo Jungwoo</h2>
						<h3 class="tlt2">Web publisher</h3>
						<h3 class="tlt2">Portfolio</h3>
					</div>
				</li>
				<li class="swiper-slide slide">
					<a href="https://gilded-figolla-13462e.netlify.app/" target="_blank">
						<img
							src="../assets/images/home-swiper/waxom@2x.png"
							alt="project image3"
						/>
					</a>
					<div class="caption">
						<h2 class="tlt3">Jo Jungwoo</h2>
						<h3 class="tlt3">Web publisher</h3>
						<h3 class="tlt3">Portfolio</h3>
					</div>
				</li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
	data() {
		return {};
	},
	components: {
		Footer,
	},
	mounted() {
		this.movingSlide();
		this.textAni();
		this.textAni2();
		this.textAni3();
	},
	methods: {
		movingSlide() {
			const swiper = new Swiper('.swiper', {
				loop: true,
				autoplay: {
					delay: 9000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true,
				},
			});
		},
		textAni() {
			$('.tlt').textillate({
				selector: '.texts',
				loop: true,
				minDisplayTime: 500,
				autoStart: true,
				in: {
					// set the effect name
					effect: 'wobble',
					delayScale: 1.5,
					delay: 50,
					sync: false,
					shuffle: false,
					reverse: false,
				},

				// out animation settings.
				out: {
					effect: 'flipOutY',
					delayScale: 1.5,
					delay: 50,
					sync: false,
					shuffle: true,
					reverse: false,
				},
			});
		},
		textAni2() {
			$('.tlt2').textillate({
				loop: true,
				minDisplayTime: 3500,
				autoStart: true,
				in: {
					// set the effect name
					effect: 'rollIn',
					delayScale: 1.5,
					delay: 30,
					sync: false,
					shuffle: true,
					reverse: false,
				},

				// out animation settings.
				out: {
					effect: 'fadeOutUpBig',
					delayScale: 1.5,
					delay: 30,
					sync: false,
					shuffle: true,
					reverse: false,
				},
			});
		},
		textAni3() {
			$('.tlt3').textillate({
				loop: true,
				minDisplayTime: 3500,
				autoStart: true,
				in: {
					// set the effect name
					effect: 'rotateInUpLeft',
					delayScale: 1.5,
					delay: 30,
					sync: false,
					shuffle: true,
					reverse: false,
				},

				// out animation settings.
				out: {
					effect: 'rotateOutUpLeft',
					delayScale: 1.5,
					delay: 30,
					sync: false,
					shuffle: true,
					reverse: false,
				},
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.home {
	width: 100%;
	height: 100vh;
	.swiper {
		width: 100%;
		height: 100%;
		.slides {
			list-style: none;

			.slide {
				position: relative;
				a {
					display: block;
					width: 100%;
					height: 100%;
					position: relative;

					&::before {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						background-color: rgba(0, 0, 0, 0.2);
					}
				}
				.caption {
					width: 308px;
					height: 200px;
					background: rgba(255, 254, 242, 0.8);
					position: absolute;
					left: 50%;
					top: 50%;
					border-radius: 20px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					flex-wrap: nowrap;
					transform: translate(-50%, -50%);
					z-index: 10;
					padding: 30px 20px;
					text-align: center;
					overflow: hidden;
					h2 {
						line-height: 25px;
					}
					h3 {
						line-height: 20px;
					}
				}
			}
		}
		.swiper-pagination {
			bottom: 85px;
		}
	}
}
</style>
