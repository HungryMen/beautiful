
import React from 'react';
import { connect } from 'react-redux';

import {userLogin} from '../../actions/UserActions';

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin
    }
};

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(userLogin())
    }
    render() {
        return <h1>hello, {`${this.props.isLogin}`}</h1>
    }
}

export default connect(mapStateToProps)(Register);
