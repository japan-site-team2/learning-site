import { createAccount, getType} from '../actions/account';
import { INIT_STATE } from '../state';

export default function Account(state = INIT_STATE.AccountData, action) {
    switch (action.type) {
      case getType(createAccount.createAccountRequest):
        return {
          ...state,
          isLoading: true,
          data: action.payload,
        };
      case getType(createAccount.createAccountSuccess):
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(createAccount.createAccountFailure):
        return {
          ...state,
          isLoading: false,
        };
      default:
          return state;
      }
  }