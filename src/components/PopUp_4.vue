<template>
	<div id="popup4" class="white-popup mfp-hide">
		<h2>Samsung JBL</h2>
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
		<p>
			삼성 JBL사이트를 1200 그리드 시스템 템플릿 작업을 토대로 제작하였습니다.
			스크롤시 메뉴바에 동적이 효과를 주었으며, 고객 설문 팝업창을
			구현하였습니다.
		</p>
		<a
			href="http://hoit123.cafe24.com/project4"
			target="_blank"
			class="btn btn1 view-site"
			>VIEW SITE</a
		>
		<p class="modal-image">
			<img
				src="../assets/images/lastest-work_modal/4@2x.png"
				alt="project image4"
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

<style scoped></style>
