import { getUser, getType} from '../actions/getUser';
import { INIT_STATE } from '../state';

export default function loadUser(state = INIT_STATE.userData, action) {
    switch (action.type) {
      case getType(getUser.getUserRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getUser.getUserSuccess):
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getUser.getUserFailure):
        return {
          ...state,
          isLoading: false,
        };
      default:
          return state;
      }
  }