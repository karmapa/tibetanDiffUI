import lj001 from '../../assets/diffData/lj001.js';
import dg001 from '../../assets/diffData/dg001.js';

const ljPages = Object.keys(lj001);

const initialState = {
  currentPage: ljPages[0],
  pageNumber: 0,
  pages: ljPages,
  warnNext: false,
  warnPre: false,
  ljText: lj001[ljPages[0]],
  dgText: dg001[ljPages[0]],
  pageInput: ljPages[0],
  wrongPageInput: false,
  themeStyle: 'themeGreen'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGENEXT':
      if (state.pages.length < (state.pageNumber + 2)) {
        return {
          ...state,
          warnNext: true,
          wrongPageInput: false
        };
      } else {
        return {
          ...state,
          warnPre: false,
          wrongPageInput: false,
          pageNumber: state.pageNumber + 1,
          currentPage: state.pages[state.pageNumber + 1],
          ljText: lj001[state.pages[state.pageNumber + 1]],
          dgText: dg001[state.pages[state.pageNumber + 1]],
          pageInput: state.pages[state.pageNumber + 1]
        };
      }
    case 'PAGEPRE':
      if (0 > (state.pageNumber - 1)) {
        return {
          ...state,
          warnPre: true,
          wrongPageInput: false
        };
      } else {
        return {
          ...state,
          warnNext: false,
          wrongPageInput: false,
          pageNumber: state.pageNumber - 1,
          currentPage: state.pages[state.pageNumber - 1],
          ljText: lj001[state.pages[state.pageNumber - 1]],
          dgText: dg001[state.pages[state.pageNumber - 1]],
          pageInput: state.pages[state.pageNumber - 1]
        };
      }
    case 'PAGEINPUT':
      if (state.pages.some(pb => action.input === pb)) {
        return {
          ...state,
          pageNumber: state.pages.indexOf(action.input),
          ljText: lj001[action.input],
          dgText: dg001[action.input],
          currentPage: action.input,
          pageInput: action.input,
          wrongPageInput: false
        };
      } else {
        return {
          ...state,
          pageInput: action.input,
          wrongPageInput: true
        };
      }
    case 'THEMESWITCH':
      return {
        ...state,
        themeStyle: action.style
      };
    default:
      return state;
  }
};

export default reducer;

export function pageNext() {
  return {
    type: 'PAGENEXT'
  };
}

export function pagePre() {
  return {
    type: 'PAGEPRE'
  };
}

export function pageInput(input) {
  return {
    type: 'PAGEINPUT',
    input: input
  };
}

export function themeSwitch(style) {
  return {
    type: 'THEMESWITCH',
    style: 'theme' + style
  };
}