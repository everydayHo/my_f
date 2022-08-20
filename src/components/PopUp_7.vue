<template>
	<div id="popup7" class="white-popup mfp-hide">
		<h2>Megabox</h2>
		<div class="icon-box">
			<img
				src="../assets/images/lastest-work_modal/html@2x.png"
				alt="html image"
			/>
			<img
				src="../assets/images/lastest-work_modal/sass@2x.png"
				alt="scss image"
			/>
			<img
				src="../assets/images/lastest-work_modal/js@2x.png"
				alt="javascript image"
			/>
			<img
				src="../assets/images/lastest-work_modal/vue@2x.png"
				alt="vue image"
			/>
		</div>
		<h4>기능: vue2 / Swiper js</h4>
		<p class="modal-text">
			Vue 프레임워크를 사용하여 메가박스 앱을 제작했습니다. Webpack,scss를
			이용하여 구현하였습니다.
		</p>
		<a
			href="https://rad-biscotti-9bce84.netlify.app/"
			target="_blank"
			class="btn btn1 view-site"
			>VIEW SITE</a
		>
		<p class="modal-image">
			<img src="../assets/images/lastest-work_modal/7@2x.png" alt="project 7" />
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
