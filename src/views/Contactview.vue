<template>
	<div class="contact wrap">
		<h2>Contact <span>Me</span></h2>
		<div class="card">
			<div class="card-content">
				<img
					src="../assets/images/contact/contact@2x.png"
					alt="contact image"
				/>

				<div class="user-box">
					<div>
						<h4>조정우</h4>
						<i class="xi-user"></i>
					</div>
					<div>
						<h4>010-9858-1103</h4>
						<i class="xi-call"></i>
					</div>
					<div>
						<h4>jungwoopage@gmail.com</h4>
						<i class="xi-mail"></i>
					</div>
				</div>
				<div class="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.810456903399!2d126.86095292326385!3d37.29962582106931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6ed5ab4c4f03%3A0xc3ca7686009d732d!2z7JuU65OcMeuLqOyngOyVhO2MjO2KuA!5e0!3m2!1sko!2skr!4v1660631365808!5m2!1sko!2skr"
						width="600"
						height="450"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
		<div class="card">
			<form action="" method="post" class="sendform">
				<div class="input-field">
					<input
						id="input_name"
						type="text"
						class="validate"
						name="input_name"
						required
					/>
					<label for="input_name">Name</label>
				</div>
				<div class="input-field">
					<input
						id="input_email"
						type="email"
						name="input_email"
						class="validate"
						required
					/>
					<label for="input_email">E-mail</label>
				</div>
				<div class="input-field">
					<textarea id="input_msg" class="materialize-textarea"></textarea>
					<label for="input_msg">Message</label>
				</div>
				<p><a href="#" id="input_submit" class="btn btn1">SUBMIT</a></p>
			</form>
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
		this.formValidation();
	},
	methods: {
		formValidation() {
			$('.sendform').validate({
				rules: {
					input_name: {
						required: true,
						minlength: 2,
					},
					input_email: {
						required: true,
						email: true,
					},
				},
				messages: {
					input_name: {
						required: '필수 입력사항입니다.',
						minlength: '최소 2자이상 입력하세요.',
					},
					input_email: {
						required: '필수 입력사항입니다.',
						email: '이메일 양식을 지켜주세요.',
					},
				},
				errorElement: 'span',
				errorClass: 'bad',
				validClass: 'good',
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.contact {
	.card {
		padding: 20px 18px 20px;
		margin-bottom: 60px;
		.card-content {
			img {
				width: 148px;
				height: 101px;
				margin-bottom: 20px;
			}
			.user-box {
				margin: 0 auto 20px;
				padding-left: 40px;
				div {
					display: flex;
					flex-direction: row-reverse;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 17px;
					i {
						font-size: 1.8rem;
						margin-right: 20px;
					}
					h4 {
						flex: 1;
					}
				}
			}
			.map {
				width: 100%;
				height: 250px;

				iframe {
					width: 100%;
					height: 100%;
					border: 1px solid #ccc !important;
				}
			}
		}
	}

	form {
		padding: 10px 20px;
		.input-field {
			margin-bottom: $mb30;

			label {
				font-weight: 500;
				font-size: 1.6rem;
				top: -10px;
			}
			textarea {
				height: 100px !important;
			}
		}
	}
}
</style>
