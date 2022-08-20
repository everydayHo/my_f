<template>
	<div id="popup5" class="white-popup mfp-hide">
		<h2>Retina Web Design</h2>
		<div class="icon-box">
			<img
				src="../assets/images/lastest-work_modal/html@2x.png"
				alt="html image"
			/>
			<img
				src="../assets/images/lastest-work_modal/css-3@2x.png"
				alt="css image"
			/>
			<img
				src="../assets/images/lastest-work_modal/js@2x.png"
				alt="css image"
			/>
		</div>
		<h4>기능: Swiper.js / Cubeportfolio.js</h4>
		<p>
			템플릿 작업을 바탕으로 웹디자인 회사 사이트를 제작했습니다. 메뉴 페이지를
			전부 제작하였으며, 슬라이더 효과, 필터링 효과를 라이브러리를 사용하요
			구현하였습니다.
		</p>
		<a
			href="http://hoit123.cafe24.com/project5"
			target="_blank"
			class="btn btn1 view-site"
			>VIEW SITE</a
		>
		<p class="modal-image">
			<img
				src="../assets/images/lastest-work_modal/5@2x.png"
				alt="project image5"
			/>
		</p>
		<p><a href="#" v-on:click="closePopup" class="close-btn_01">창 닫 기</a></p>
	</div>
</template>

<script>
export default {
	methods: {
		closePopup(e) {
			$.magnificPopup.close();
			e.preventDefault();
		},
	},
};
</script>

<style lang="scss" scoped>
#popup5 {
	.view-site {
		top: 34%;
	}
}
</style>
