import {combineReducers} from 'redux';
import {types} from '../actions/action.js';

export const initialState = {
  currentPage: '1.1b',
  pageNumber: 0,
  pages: ['1.1b', '1.2a', '1.2b', '1.3a', '1.3b'],
  warnNext: false,
  warnPre: true,
}

const pager = (state = initialState, action) => {
  switch(action.type) {
    case 'PAGENEXT':
      if(state.pages.length < (state.pageNumber + 2)) {
        return {
          ...state,
          warnNext: true
        }
      }else {
        return {
          ...state,
          warnPre: false,
          pageNumber: state.pageNumber + 1,
          currentPage: state.pages[state.pageNumber + 1]
        }
      }
    case 'PAGEPRE':
      if(0 > (state.pageNumber - 1)) {
        return {
          ...state,
          warnPre: true
        }
      }else {
        return {
          ...state,
          warnNext: false,
          pageNumber: state.pageNumber - 1,
          currentPage: state.pages[state.pageNumber - 1]
        }
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  pager
})

export default reducers;