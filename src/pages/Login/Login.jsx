import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import './Login.css'
import { connect } from 'react-redux';
import {loginUser, loginUserWithFacebook} from "../../redux/user/UserAction";

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src="https://i.ibb.co/Jrc8DYW/Free-Logo-Design-Template-for-Online-Store-PNG-transparent.png" alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
                <button className="btn btn-outline-dark mt-2" onClick={() => this.props.signInWithFacebook()}>
                    Logheaza-te cu Facebook
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginUser()),
        signInWithFacebook: () => dispatch(loginUserWithFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);