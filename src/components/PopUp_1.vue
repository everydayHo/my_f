<template>
	<div id="popup1" class="white-popup mfp-hide">
		<h2>960GS</h2>
		<div class="icon-box">
			<img
				src="../assets/images/lastest-work_modal/html@2x.png"
				alt="html image"
			/>
			<img
				src="../assets/images/lastest-work_modal/css-3@2x.png"
				alt="css image"
			/>
		</div>
		<p>
			960 그리드 시스템을 사용하여 XD, 포토샵으로 디자인 시안을 토대로 블로그
			사이트를 제작하였습니다.
		</p>
		<a
			href="http://hoit123.cafe24.com/project1"
			target="_blank"
			class="btn btn1 view-site"
			>VIEW SITE</a
		>
		<p class="modal-image">
			<img
				src="../assets/images/lastest-work_modal/1@2x.png"
				alt="project image1"
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
