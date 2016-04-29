import {combineReducers} from 'redux';
import lj001 from '../../assets/diffData/lj001.js';
import dg001 from '../../assets/diffData/dg001.js';
import {types} from '../actions/action.js';

const ljPages = Object.keys(lj001);
const dgPages = Object.keys(dg001);

const initialState = {
  currentPage: ljPages[0],
  pageNumber: 0,
  pages: ljPages,
  warnNext: false,
  warnPre: false,
  ljText: lj001[ljPages[0]],
  dgText: dg001[ljPages[0]]
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
          currentPage: state.pages[state.pageNumber + 1],
          ljText: lj001[state.pages[state.pageNumber + 1]],
          dgText: dg001[state.pages[state.pageNumber + 1]]
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
          currentPage: state.pages[state.pageNumber - 1],
          ljText: lj001[state.pages[state.pageNumber - 1]],
          dgText: dg001[state.pages[state.pageNumber - 1]]
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