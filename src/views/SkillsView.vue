<template>
	<div class="skills wrap">
		<h2>My <span>Skills</span></h2>
		<div class="design subtitle">
			<h3>Design</h3>
			<p>Photoshop과 XD, Figma등을 이용하여 UI/UX 디자인을 할 수 있습니다.</p>
			<div class="skills-content card">
				<div class="skills-box">
					<div class="skills-list">
						<div class="skill">
							<div class="skill_description">
								<span>Photoshop</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="83">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>Illustrator</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="84">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>XD</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="76">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>Figma</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="77">
								<div class="skill_value"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="coding subtitle">
			<h3>Coding</h3>
			<p>
				자바스크립트로 동적인 기능 구현이 가능하며, 라이브러리와 프레임 워크
				사용하여 기본적인 빌드업가능합니다.
			</p>
			<div class="skills-content card">
				<div class="skills-box">
					<div class="skills-list">
						<div class="skill">
							<div class="skill_description">
								<span>HTML</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="85">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>CSS</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="85">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>Sass</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="83">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>JavaScript</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="85">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>jQuery</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="83">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>TypeScript</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="70">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>Vue</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="67">
								<div class="skill_value"></div>
							</div>
						</div>
						<div class="skill">
							<div class="skill_description">
								<span>React</span>
								<span>0%</span>
							</div>
							<div class="skill__bar" data-num="60">
								<div class="skill_value"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="service subtitle">
			<h3>Services</h3>
			<ul>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/skills/design.svg"
								alt="design icon img"
							/>
							<h3>Web & App Design</h3>
							<p>
								사용자가 편리한 UI경험을 하도록 고민하여 디자인합니다. 컬러
								사용이나 타이포 그래피등을 신경써서 만들도록 노력하고 있습니다.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/skills/responsive.svg"
								alt="responsive icon img"
							/>
							<h3>Responsive Web</h3>
							<p>
								미디어 쿼리, Bootstrap, tailwind, materialize 그리드 시스템을
								사용한 반응형 사이트 제작이 가능합니다.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/skills/webapp.svg"
								alt="webapp icon img"
							/>
							<h3>Web & App Develope</h3>
							<p>
								웹 표준에 맞는 HTML 마크 업을 하도록 노력합니다. modernizr를
								사용하여 크로싱브라우징 이 가능할 수 있도록 하며, 프레임 워크,
								라이브러리, 번들러 를 사용하여 빌드 업 가능합니다.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
	components: {
		Footer,
	},
	mounted() {
		this.skillAni();
	},
	methods: {
		skillAni() {
			// skill animation

			const progress1 = document.querySelectorAll('.design .skill__bar');
			const progress2 = document.querySelectorAll('.coding .skill__bar');
			// const triggerPoint1 = document.querySelector('.design').offsetTop - 100;
			const triggerPoint2 = document.querySelector('.coding').offsetTop - 400;
			let excuted = false;
			let excuted2 = false;

			if (!excuted) {
				progress1.forEach((item) => numAnimation(item));
			}
			excuted = true;
			window.addEventListener('scroll', () => {
				let scrollAmt = window.scrollY;

				if (scrollAmt > triggerPoint2) {
					if (!excuted2) {
						progress2.forEach((item) => numAnimation(item));
					}
					excuted2 = true;
				}
				// excuted = true;
			});

			function numAnimation(item) {
				let initialRate = 0;
				let targetRate = item.getAttribute('data-num');
				let progressBar = item.querySelector('.skill_value');
				let progressRate =
					item.previousElementSibling.querySelector('span:last-child');
				let numAinmate = setInterval(() => {
					if (initialRate == targetRate) {
						clearInterval(numAinmate);
					}
					initialRate++;
					progressBar.style.width = `${initialRate}%`;
					progressRate.innerText = initialRate - 1 + '%';
				}, 30);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.skills {
	.subtitle {
		margin-bottom: 60px;
		p {
			margin-bottom: 30px;
		}
	}
	.skills-content {
		height: auto;
		padding: 10px;
		.skills-box {
			width: 100%;
			height: 100%;
			.skill {
				position: relative;
				margin-bottom: 24px;
				.skill_description {
					span {
						display: inline-block;
						font-size: 1.6rem;
						font-weight: 500;
						line-height: 22px;
						&:first-child {
							margin-bottom: 5px;
						}
						&:last-child {
							position: absolute;
							right: 13px;
							top: 26px;
							font-size: 1.4rem;
							font-weight: 400;
						}
					}
				}
				.skill__bar {
					width: 100%;
					height: 22px;
					position: relative;
					border: 2px solid $primary;
					border-radius: 10px;
					.skill_value {
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						width: 0;
						height: 18px;
						background-color: $secondary;
						border-radius: 8px;
					}
				}
			}
		}
	}
	.service {
		.card {
			width: 336px;
			height: 354px;
			padding: 24px 38px 50px;
			margin-bottom: 41px;
			&:last-child {
				padding: 24px 38px 30px;
			}
		}
	}
}
</style>
