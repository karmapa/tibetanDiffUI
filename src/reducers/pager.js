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
  themeStyle: 'themeDefault',
  paneOldText: true,
  paneNewText: true,
  paneDiffedText: true,
  openPane: 3
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
        themeStyle: 'theme' + action.style
      };
    case 'CLOSEOLDTEXT':
      if (!state.paneDiffedText && !state.paneNewText) {
        return {
          ...state,
          paneOldText: true
        };
      } else if (true === state.paneOldText) {
        return {
          ...state,
          openPane: --state.openPane,
          paneOldText: !state.paneOldText
        };
      } else {
        return {
          ...state,
          openPane: ++state.openPane,
          paneOldText: !state.paneOldText
        };
      }
    case 'CLOSENEWTEXT':
      if (!state.paneDiffedText && !state.paneOldText) {
        return {
          ...state,
          paneNewText: true
        };
      } else if (true === state.paneNewText) {
        return {
          ...state,
          openPane: --state.openPane,
          paneNewText: !state.paneNewText
        };
      } else {
        return {
          ...state,
          openPane: ++state.openPane,
          paneNewText: !state.paneNewText
        };
      }
    case 'CLOSEDIFFEDTEXT':
      if (!state.paneNewText && !state.paneOldText) {
        return {
          ...state,
          paneDiffedText: true
        };
      } else if (true === state.paneDiffedText) {
        return {
          ...state,
          openPane: --state.openPane,
          paneDiffedText: !state.paneDiffedText
        };
      } else {
        return {
          ...state,
          openPane: ++state.openPane,
          paneDiffedText: !state.paneDiffedText
        };
      }
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
    style: style
  };
}

export function closeOldText() {
  return {
    type: 'CLOSEOLDTEXT'
  };
}

export function closeNewText() {
  return {
    type: 'CLOSENEWTEXT'
  };
}

export function closeDiffedText() {
  return {
    type: 'CLOSEDIFFEDTEXT'
  };
}
