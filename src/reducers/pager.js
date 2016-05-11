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
      return {
        ...state,
        pageInput: action.input,
        wrongPageInput: false
      };
    case 'PAGEKEYPRESS':
      if (('Enter' === action.key) && (state.pages.some(pb => state.pageInput === pb))) {
        return {
          ...state,
          pageNumber: state.pages.indexOf(state.pageInput),
          oldText: oldText[oldTextName][state.pageInput],
          newText: newText[newTextName][state.pageInput],
          currentPage: state.pageInput,
          pageInput: state.pageInput,
          wrongPageInput: false
        };
      } else {
        return {
          ...state,
          pageInput: state.pageInput,
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

export function pageKeyPress(key) {
  return {
    type: 'PAGEKEYPRESS',
    key: key
  };
}

export function themeSwitch(style) {
  return {
    type: 'THEMESWITCH',
    style: 'theme' + style
  };
}
