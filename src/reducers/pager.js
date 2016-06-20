import oldText from '../../assets/diffData/oldLJ.js';
import newText from '../../assets/diffData/newLJ.js';

const oldTextName = Object.keys(oldText)[0];
const newTextName = Object.keys(newText)[0];
const oldPages = Object.keys(oldText[oldTextName]);

const initialState = {
  oldTextObj: oldText,
  newTextObj: newText,
  oldTextName: oldTextName,
  newTextName: newTextName,
  currentPage: oldPages[0],
  pageNumber: 0,
  pages: oldPages,
  warnNext: false,
  warnPre: false,
  oldText: oldText[oldTextName][oldPages[0]],
  newText: newText[newTextName][oldPages[0]],
  pageInput: oldPages[0],
  importModalControl: false,
  wrongPageInput: false,
  themeStyle: 'themeDefault',
  paneOldText: true,
  paneNewText: true,
  paneDiffedText: true,
  openPane: 3,
  getDateFromImport: false,
  oldImportObj: '',
  newImportObj: ''
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
          oldText: state.oldTextObj[state.oldTextName][state.pages[state.pageNumber + 1]],
          newText: state.newTextObj[state.newTextName][state.pages[state.pageNumber + 1]],
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
          oldText: state.oldTextObj[state.oldTextName][state.pages[state.pageNumber - 1]],
          newText: state.newTextObj[state.newTextName][state.pages[state.pageNumber - 1]],
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
          oldText: state.oldTextObj[state.oldTextName][state.pageInput],
          newText: state.newTextObj[state.newTextName][state.pageInput],
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
    case 'IMPORTMODALCONTROL':
      if ('open' === action.mode) {
        return {
          ...state,
          importModalControl: true
        };
      } else if ('remove' === action.mode) {
        const oldTextName = Object.keys(oldText)[0];
        const newTextName = Object.keys(newText)[0];
        const oldPages = Object.keys(oldText[oldTextName]);
        return {
          ...state,
          oldTextObj: oldText,
          newTextObj: newText,
          oldTextName: oldTextName,
          newTextName: newTextName,
          currentPage: oldPages[0],
          pageNumber: 0,
          pages: oldPages,
          warnNext: false,
          warnPre: false,
          oldText: oldText[oldTextName][oldPages[0]],
          newText: newText[newTextName][oldPages[0]],
          pageInput: oldPages[0],
          wrongPageInput: false,
          getDateFromImport: false,
          importModalControl: false
        };
      } else if ('cancel' === action.mode) {
        return {
          ...state,
          importModalControl: false
        };
      } else if ('import' === action.mode) {
        const oldImportTextName = Object.keys(state.oldImportObj)[0];
        const newImportTextName = Object.keys(state.newImportObj)[0];
        const oldImportPages = Object.keys(state.oldImportObj[oldImportTextName]);
        return {
          ...state,
          oldTextObj: state.oldImportObj,
          newTextObj: state.newImportObj,
          oldTextName: oldImportTextName,
          newTextName: newImportTextName,
          currentPage: oldImportPages[0],
          pageNumber: 0,
          pages: oldImportPages,
          warnNext: false,
          warnPre: false,
          oldText: state.oldImportObj[oldImportTextName][oldImportPages[0]],
          newText: state.newImportObj[newImportTextName][oldImportPages[0]],
          pageInput: oldImportPages[0],
          wrongPageInput: false,
          getDateFromImport: true,
          importModalControl: false
        };
      } else {
        return {
          ...state,
        };
      }
    case 'FILEIMPORT':
      if (0 === action.state) {
        return {
          ...state,
          oldImportObj: action.obj
        };
      } else if (1 === action.state) {
        return {
          ...state,
          newImportObj: action.obj
        };
      } else {
        return {
          ...state
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

export function importModalControl(mode) {
  return {
    type: 'IMPORTMODALCONTROL',
    mode: mode
  };
}

export function fileImport(obj, state) {
  return {
    type: 'FILEIMPORT',
    obj: obj,
    state: state
  };
}
