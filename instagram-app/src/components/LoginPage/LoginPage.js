import React from "react";
import styled from "styled-components";

const LoginDiv = styled.div`
	margin-top: 15vh;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;
const InputForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const LoginInput = styled.input`
	margin-top: 1rem;
`;

const LoginButton = styled.button`
	margin-top: 1rem;
`;

const LogoImg = styled.img`
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const LoginCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30rem;
	height: 35rem;
	background-color: white;
	border: 1px solid lightgrey;
`;

const LoginFooterDiv = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const LoginFooterH3 = styled.h3`
	margin-right: 0.5rem;
`;

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<LoginDiv>
				<LoginCardDiv>
					<LogoImg
						src={require("../SearchBar/assets/ig_written_logo.png")}
						alt=""
					/>
					<InputForm onSubmit={this.props.OnSubmit}>
						<LoginInput
							type="text"
							placeholder="Phone number, username, or email"
							onChange={this.props.ChangeHandler}
							name="username"
							value={this.props.username}
						/>
						<LoginInput
							type="password"
							placeholder="Password"
							onChange={this.props.ChangeHandler}
							name="password"
							value={this.props.password}
						/>
						<LoginButton>Log In</LoginButton>
					</InputForm>

					<LoginFooterDiv>
						<LoginFooterH3>Don't have an account?</LoginFooterH3>
						<a href="https://www.google.com/">Sign Up</a>
					</LoginFooterDiv>
				</LoginCardDiv>
				<div style={{ fontSize: "24px" }}> Username: pherpher089</div>
				<div style={{ fontSize: "24px" }}> Password: LambdaSchools19</div>
				<div style={{ fontSize: "24px" }}> ;)</div>
			</LoginDiv>
		);
	}
}

export default LoginPage;
