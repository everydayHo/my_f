<template>
	<div class="work wrap">
		<h2>Latest <span>Work</span></h2>
		<!-- g-menu -->
		<div class="g-menu">
			<ul>
				<li><a href="#" id="m1" class="active">All</a></li>
				<li><a href="#" id="m2">Web</a></li>
				<li><a href="#" id="m3">Rwp</a></li>
				<li><a href="#" id="m4">App</a></li>
			</ul>
			<span class="highlight">hightlight</span>
		</div>
		<!-- gallery -->
		<div class="grid" id="gallery">
			<ul>
				<li class="grid-item g1 g2">
					<a href="#popup1">
						<img
							src="../assets/images/lastest-work/project2@2x.png"
							alt="work photo1"
						/>
						<div class="caption">
							<h3>960GS</h3>
							<p>
								Blog site <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g2">
					<a href="#popup2">
						<img
							src="../assets/images/lastest-work/project3@2x.png"
							alt="work photo2"
						/>
						<div class="caption">
							<h3>Spectacle</h3>
							<p>
								Blog site <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g2">
					<a href="#popup3">
						<img
							src="../assets/images/lastest-work/project4@2x.png"
							alt="work photo3"
						/>
						<div class="caption">
							<h3>Hyundai Motors</h3>
							<p>
								Company Site <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g2">
					<a href="#popup4">
						<img
							src="../assets/images/lastest-work/project5@2x.png"
							alt="work photo4"
						/>
						<div class="caption">
							<h3>Samsung JBL</h3>
							<p>
								Company Site <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g2">
					<a href="#popup5">
						<img
							src="../assets/images/lastest-work/project6@2x.png"
							alt="work photo4"
						/>
						<div class="caption">
							<h3>Retina Web Design</h3>
							<p>
								Web Design Site <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g3">
					<a href="#popup6">
						<img
							src="../assets/images/lastest-work/project7@2x.png"
							alt="work photo4"
						/>
						<div class="caption">
							<h3>Alia Corns</h3>
							<p>
								Web Developement Company Site<br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
				<li class="grid-item g1 g4">
					<a href="#popup7">
						<img
							src="../assets/images/lastest-work/project8@2x.png"
							alt="work photo4"
						/>
						<div class="caption">
							<h3>Megabox</h3>
							<p>
								Megabox App <br />
								클릭하시면 자세한 <br />
								설명이 보입니다.
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<p class="hidden">.</p>
		<Footer></Footer>
		<PopUp_1></PopUp_1>
		<PopUp_2></PopUp_2>
		<PopUp_3></PopUp_3>
		<PopUp_4></PopUp_4>
		<PopUp_5></PopUp_5>
		<PopUp_6></PopUp_6>
		<PopUp_7></PopUp_7>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import PopUp_1 from '../components/PopUp_1.vue';
import PopUp_2 from '../components/PopUp_2.vue';
import PopUp_3 from '../components/PopUp_3.vue';
import PopUp_4 from '../components/PopUp_4.vue';
import PopUp_5 from '../components/PopUp_5.vue';
import PopUp_6 from '../components/PopUp_6.vue';
import PopUp_7 from '../components/PopUp_7.vue';

export default {
	components: {
		Footer,
		PopUp_1,
		PopUp_2,
		PopUp_3,
		PopUp_4,
		PopUp_5,
		PopUp_6,
		PopUp_7,
	},
	mounted() {
		this.filterBtnActive();
		this.gallery();
	},
	methods: {
		filterBtnActive() {
			const filtersBtn = document.querySelectorAll('.g-menu ul li a');
			const highLight = document.querySelector('.highlight');

			for (let i = 0; i < filtersBtn.length; i++) {
				filtersBtn[i].addEventListener('click', function (e) {
					e.preventDefault();
					let targetLeft = this.offsetLeft;
					let targetWidth = this.offsetWidth;
					highLight.style.left = targetLeft + 'px';
					highLight.style.width = targetWidth + 'px';
					e.target.classList.add('active');
					for (let k = 0; k < filtersBtn.length; k++) {
						if (filtersBtn[k] !== e.target) {
							filtersBtn[k].classList.remove('active');
						}
					}
				});
			}
			// let $triggerBtn = $('.g-menu ul li:first-child a');
			// $triggerBtn.trigger('click');
		},
		gallery() {
			$(window).load(function () {
				$('.grid').isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
				});
			});

			var grid = $('.grid');
			var m1 = $('#m1');
			var m2 = $('#m2');
			var m3 = $('#m3');
			var m4 = $('#m4');

			// 라이트박스 초기 설정

			$('.g1 a').magnificPopup({
				type: 'inline',
				closeOnBgClick: false,
				closeBtnInside: true,
				gallery: {
					enabled: true,
				},
			});
			$('.g2 a').magnificPopup({
				type: 'inline',
				closeOnBgClick: false,
				closeBtnInside: true,
				gallery: {
					enabled: true,
				},
			});
			$('.g3 a').magnificPopup({
				type: 'inline',
				closeOnBgClick: false,
				closeBtnInside: true,
				gallery: {
					enabled: true,
				},
			});
			$('.g4 a').magnificPopup({
				type: 'inline',
				closeOnBgClick: false,
				closeBtnInside: true,
				gallery: {
					enabled: true,
				},
			});

			m1.click(function (e) {
				e.preventDefault();
				grid.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
					filter: '.grid-item',
				});
				$('.g1 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
				$('.g2 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
				$('.g3 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
				$('.g4 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
			});
			m2.click(function (e) {
				e.preventDefault();
				grid.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
					filter: '.g2',
				});
				$('.g2 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
			});
			m3.click(function (e) {
				e.preventDefault();
				grid.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
					filter: '.g3',
				});

				$('.g3 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
			});
			m4.click(function (e) {
				e.preventDefault();
				grid.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
					filter: '.g4',
				});

				$('.g4 a').magnificPopup({
					type: 'inline',
					closeOnBgClick: false,
					closeBtnInside: true,
					gallery: {
						enabled: true,
					},
				});
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.work {
	// g-menu
	.g-menu {
		margin-bottom: $mb30;
		position: relative;

		ul {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			z-index: 100;
			li {
				height: 30px;
				margin-right: 5px;
				z-index: 1;

				a {
					display: block;
					height: 100%;
					padding: 0 15px;
					font-size: 1.6rem;
					line-height: 30px;

					&.active {
						color: #fff;
					}
				}
			}
		}
		.highlight {
			position: absolute;
			display: block;
			width: 50px;
			height: 30px;
			top: 0;
			left: 0;
			background: $secondary;
			text-indent: -9999em;
			border-radius: 30px;
			transition: 400ms ease-in-out;
		}
	}

	// gallery
	#gallery {
		li {
			width: 100%;
			height: auto;
			margin-bottom: 21px;
			position: relative;
			clear: both;
			margin: 0 auto;
			text-align: center;
			a {
				position: relative;
				float: left;
				overflow: hidden;
				margin: 10px 1%;
				height: auto;
				text-align: center;
				cursor: pointer;
				display: block;
				background: $secondary;
				border-radius: 17px;
				img {
					position: relative;
					display: block;
					min-height: 100%;
					max-width: 100%;
					width: 100%;
					display: block;
					opacity: 0.95;
					-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
					transition: opacity 0.35s, transform 0.35s;
					-webkit-transform: scale3d(1.05, 1.05, 1);
					transform: scale3d(1.05, 1.05, 1);
				}
				.caption {
					padding: 2em;
					color: #fff;
					text-transform: uppercase;
					font-size: 1.25em;
					-webkit-backface-visibility: hidden;
					backface-visibility: hidden;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					h3 {
						text-align: left;
						opacity: 0;
					}
					p {
						position: absolute;
						right: 0;
						bottom: 0;
						margin: 3em;
						line-height: 15px;
						padding: 0 1em;
						max-width: 150px;
						border-right: 4px solid #fff;
						text-align: right;
						opacity: 0;
						-webkit-transition: opacity 0.35s;
						transition: opacity 0.35s;
					}
					a {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: 1000;
						text-indent: 200%;
						white-space: nowrap;
						font-size: 0;
						opacity: 0;
					}
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						pointer-events: none;
						background: rgba(255, 255, 255, 0.5);
						content: '';
						-webkit-transition: -webkit-transform 0.6s;
						transition: transform 0.6s;
						-webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
							translate3d(0, -100%, 0);
						transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
							translate3d(0, -100%, 0);
					}
				}
				&:hover img {
					opacity: 0.4;
					-webkit-transform: scale3d(1, 1, 1);
					transform: scale3d(1, 1, 1);
				}
				&:hover .caption::before {
					-webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
						translate3d(0, 100%, 0);
					transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
						translate3d(0, 100%, 0);
				}
			}
			&:hover .caption h3 {
				opacity: 1;
			}
			&:hover .caption p {
				opacity: 1;
				-webkit-transition-delay: 0.1s;
				transition-delay: 0.1s;
			}
		}
	}
	.hidden {
		color: $bg-color1;
	}
}
</style>
