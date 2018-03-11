import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import { log } from '../../../lib/ke-utils'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      pwd: '',
      confirmpwd: '',
    }
  }
  handleChange = (e) => {
    console.log('change')
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.requestRegisterUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.pwd,
    })
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First name: </label>
          <input
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor='lastName'>Last name: </label>
          <input
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='pwd'
            value={this.state.pwd}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Confirm password: </label>
          <input
            type='password'
            name='confirmpwd'
            value={this.state.confirmpwd}
            onChange={this.handleChange}
          />
          <button type='submit'>Register</button>
        </form>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps, actionCreators)(Register)
