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
