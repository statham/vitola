import { Actions } from "react-native-router-flux";
import * as api from "../api";
import * as accessToken from "../accessToken";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../action-types";

const register = (email, password) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST
  });
  return api.register(email, password)
    .then(resp => resp.json())
      .then(data => accessToken.saveSessionToken(data)
        .then(() => {
          dispatch({
            type: REGISTER_SUCCESS,
            data
          });
          Actions.Tabbar();
        })
      )
      .catch((error) => {
        dispatch({
          type: REGISTER_FAILURE,
          data: error
        });
      });
};

export default register;
