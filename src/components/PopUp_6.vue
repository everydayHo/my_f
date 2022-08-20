<template>
	<div id="popup6" class="white-popup mfp-hide">
		<h2>Web Developement Company Site</h2>
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
		<h4>기능: Bootstrap / Parallax js / Gsap</h4>
		<p class="modal-text">
			부트스트랩 그리드 시스템을 사용하여 회사 사이트를 반응형으로
			제작하였습니다. 스크롤 시 애니매이션 효과를 주었으며, 프로젝트들에
			필터기능을 추가했습니다.
		</p>
		<a
			href="http://hoit123.cafe24.com/responsiveweb1"
			target="_blank"
			class="btn btn1 view-site"
			>VIEW SITE</a
		>
		<p class="modal-image">
			<img
				src="../assets/images/lastest-work_modal/6@2x.png"
				alt="project image6"
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
#popup6 {
	.modal-text {
		margin-bottom: 70px;
	}
	.view-site {
		top: 37%;
	}
}
</style>
