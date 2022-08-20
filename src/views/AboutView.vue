<template>
	<div class="wrap">
		<h2>About <span>Me</span></h2>
		<div class="introduce">
			<img src="../assets/images/about-Me/avatar@2x.png" alt="avatar img" />
			<p>
				약속과 신뢰를 중요하게 여기며, 꼼꼼한 성격과 높은 집중력으로 작업물의
				완성도를 높이는데 자신있는 노력형 웹퍼블리셔입니다. <br />
				매일매일 빠르게 발전하는 기술들을 익히는 걸 즐겨하며, 잘 해결되지 않는
				문제를 해결할 때 즐거움이 코딩을 하는 가장 매력적인 부분이라고
				생각합니다. 제가 맡은 부분의 일은 책임지고 최선의 결과를 내도록
				하겠습니다.
			</p>
		</div>
		<div class="strength subtitle">
			<h3>Strength</h3>
			<ul>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/about-Me/strength1.svg"
								alt="strength img1"
							/>
							<h3>탄탄한 기본기</h3>
							<p>
								코딩 작업을 하다가 어떤 오류가 생겼을 때 무엇을 모르는 지
								파악하고 해결할려고 노력하고 있습니다.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/about-Me/strength2.svg"
								alt="strength img2"
							/>
							<h3>소통 능력</h3>
							<p>
								커뮤니케이션이 중요한 일을 많이 담당하여 어떻게 하면 최대한
								원만히 목표를 달성할 수 있을지 생각하는 습관을 가졌습니다.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div class="card">
						<div class="card-content">
							<img
								src="../assets/images/about-Me/strength3.svg"
								alt="strength img3"
							/>
							<h3>자기 개발</h3>
							<p>
								새로운 것을 시도하는 것을 좋아합니다. 정체되지 않고 항상 새로운
								모습을 보이겠습니다.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="experience subtitle">
			<h3>Experience</h3>
			<div class="card">
				<div class="card-content">
					<h4>빈티지샵 온라인, 오프라인 매장운영</h4>
					<p>2008.05 ~2015.07</p>
					<h4>(주)SPC삼립 생산팀 오퍼레이터근무</h4>
					<p>2018.07 ~2021.11</p>
				</div>
			</div>
		</div>
		<div class="education subtitle">
			<h3>Education</h3>
			<div class="card">
				<div class="card-content">
					<h4>부흥고등학교 이공계 졸업</h4>
					<p>1998.03 . ~2001.03</p>
					<h4>동서대학교 국제관계학부 중퇴</h4>
					<p>2002.03 ~2007.05</p>
					<h4>라인 아트 학원 웹퍼블리셔과정 수료</h4>
					<p>2022.02 ~2022.09</p>
				</div>
			</div>
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
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.wrap {
	box-sizing: border-box;
	.introduce {
		text-align: center;
		margin-bottom: 43px;
		img {
			width: 112px;
			height: 112px;
			margin-bottom: 29px;
		}
		p {
			text-align: left;
		}
	}
	.strength {
		margin-bottom: 60px;
		ul {
			li {
				.card {
					width: 327px;
					height: 309px;
					padding: 24px 38px 50px;
					margin-bottom: 41px;
					.card-content {
						margin: 0;
					}
				}
			}
		}
	}
	.experience {
		margin-bottom: 60px;
		.card {
			width: 330px;
			height: 223px;
			border-radius: 0;
			border-left: 7px solid $secondary;
			padding: 50px 38px 50px;
			.card-content {
				h4 {
					position: relative;
					&::before {
						content: '';
						display: block;
						position: absolute;
						top: 3px;
						width: 10px;
						height: 10px;
						background-color: $bg-color1;
						border: 1px solid $secondary;
						border-radius: 50%;
					}
					&:first-child {
						&::before {
							left: -58px;
						}
					}
					&:last-of-type {
						&::before {
							left: -56px;
						}
					}
				}
			}
			P {
				margin-bottom: 10px;
			}
		}
	}
	.education {
		margin-bottom: 60px;
		.card {
			width: 330px;
			height: 261px;
			border-radius: 0;
			border-left: 7px solid $secondary;
			padding: 50px 38px 50px;
			.card-content {
				h4 {
					position: relative;
					&::before {
						content: '';
						display: block;
						position: absolute;
						top: 3px;
						width: 10px;
						height: 10px;
						background-color: $bg-color1;
						border: 1px solid $secondary;
						border-radius: 50%;
					}
					&:first-child {
						&::before {
							left: -90px;
						}
					}
					&:nth-last-of-type(2) {
						&::before {
							left: -76px;
						}
					}
					&:last-of-type {
						&::before {
							left: -59px;
						}
					}
				}
			}
		}

		p {
			margin-bottom: 10px;
		}
	}
}
</style>
