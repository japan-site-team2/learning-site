import { getCategories, getType, } from '../actions/categories';
import { INIT_STATE } from '../state';

export default function Categories(state = INIT_STATE.categoriesData, action) {
  switch (action.type) {
    case getType(getCategories.getCategoriesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getCategories.getCategoriesSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getCategories.getCategoriesFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
        return state;
    }
}