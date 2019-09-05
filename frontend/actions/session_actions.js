import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const recieveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const recieveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

login: user => dispatch(login(user))
this.props.login(user)

const login = (user) => dispatch =>  login(user)
  .then(user => dispatch(recieveCurrentUser(user)))
  // don't forget to add the error rescue here!!!!!!!!!!!!!!!!!!!

const logout = () => dispatch => logout()
  .then( () => dispatch(logoutCurrentUser()))

const signup = (user) => dispatch => signup(user)
  .then( (user) => dispatch(recieveCurrentUser(user)))