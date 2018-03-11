import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.css'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'

class ApiTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        pwd: '',
        confirmpwd: '',
    }
  }
  componentDidMount() {
    this.props.requestSignin()
    this.props.requestRegisterUser()
    this.props.requestLogout()
  }
  formatResponse(status) {
    return status === 'success'
      ? <span className='success'>{status}</span>
      : <span className='failure'>{status}</span>
  }

  render() {
    const { readRequestSignIn, readRequestRegisterUser, readRequestLogout } = this.props
    return (
      <div>
        <hr/>
        <div className='wrapper'>
          <h2 className='api-test'>ApiTest</h2>
          <div>
            <ul className='ul-status'>
              <li>readRequestSignIn: {this.formatResponse(readRequestSignIn.status)}</li>
              <li>readRequestRegisterUser: {this.formatResponse(readRequestRegisterUser.status)}</li>
              <li>readRequestLogout: {this.formatResponse(readRequestLogout.status)}</li>
            </ul>
          </div>
          {this.formatResponse()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    readRequestSignIn: selectors.getRequest(state, 'api/signin'),
    readRequestRegisterUser: selectors.getRequest(state, 'api/registerUser'),
    readRequestLogout: selectors.getRequest(state, 'api/logout'),
  }
}
export default connect(mapStateToProps, actionCreators)(ApiTest)
