import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View style={{ paddingTop: 15 }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeHolder="test@test.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeHolder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
