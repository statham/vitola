import { Actions } from "react-native-router-flux";
import * as api from "../api";
import * as accessToken from "../accessToken";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../action-types";

const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  return api.login(email, password)
  .then(resp => resp.json())
  .then(data => accessToken.saveSessionToken(data)
    .then(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        data
      });
      Actions.Tabbar();
    })
  )
  .catch((error) => {
    dispatch({
      type: LOGIN_FAILURE,
      data: error
    });
  });
};

export default login;
