import oldText from '../../assets/diffData/oldText001.js';
import newText from '../../assets/diffData/newText001.js';

const oldTextName = Object.keys(oldText)[0];
const newTextName = Object.keys(newText)[0];
const oldPages = Object.keys(oldText[oldTextName]);

const initialState = {
  currentPage: oldPages[0],
  pageNumber: 0,
  pages: oldPages,
  warnNext: false,
  warnPre: false,
  oldTextName: oldTextName,
  oldText: oldText[oldTextName][oldPages[0]],
  newTextName: newTextName,
  newText: newText[newTextName][oldPages[0]],
  pageInput: oldPages[0],
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
          oldText: oldText[oldTextName][state.pages[state.pageNumber + 1]],
          newText: newText[newTextName][state.pages[state.pageNumber + 1]],
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
          oldText: oldText[oldTextName][state.pages[state.pageNumber - 1]],
          newText: newText[newTextName][state.pages[state.pageNumber - 1]],
          pageInput: state.pages[state.pageNumber - 1]
        };
      }
    case 'PAGEINPUT':
      if (state.pages.some(pb => action.input === pb)) {
        return {
          ...state,
          pageNumber: state.pages.indexOf(action.input),
          oldText: oldText[oldTextName][action.input],
          newText: newText[newTextName][action.input],
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
