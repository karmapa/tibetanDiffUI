export const changeTheme = (color) => {
  const themeTypes = {
    green: {
      bg: '#EFF2E4',
      title: '#D3FFBE',
      logo: 'transparent',
      main: '#000000',
      logoTitle: '#4A8731',
      textBg: '#FFFFFF',
      diffedDrawGreen: 'lightgreen',
      diffedDrawRed: 'pink'
    },
    blue: {
      bg: '#D7ECFF',
      title: '#B7F2FF',
      logo: 'transparent',
      main: '#000000',
      logoTitle: '#4A8731',
      textBg: '#FFFFFF',
      diffedDrawGreen: 'lightgreen',
      diffedDrawRed: 'pink'
    },
    black: {
      bg: '#000000',
      title: '#616161',
      logo: '#FFFFFF',
      main: '#FFFFFF',
      logoTitle: '#FFFFFF',
      textBg: '#2B2B2B',
      diffedDrawGreen: 'green',
      diffedDrawRed: 'red'
    },
    yellow: {
      bg: '#FFF4D7',
      title: '#FFE7B7',
      logo: 'transparent',
      main: '#000000',
      logoTitle: '#4A8731',
      textBg: '#FFFFFF',
      diffedDrawGreen: 'lightgreen',
      diffedDrawRed: 'pink'
    }
  }
  document.getElementById('bg').style.background = themeTypes[color]['bg'];  
  document.getElementById('logo').style.background = themeTypes[color]['logo'];
  document.getElementById('main').style.color = themeTypes[color]['main'];
  document.getElementById('logoTitle').style.color = themeTypes[color]['logoTitle'];
  document.getElementById('ljTitle').style.background = themeTypes[color]['title'];
  document.getElementById('ljText').style.background = themeTypes[color]['textBg'];
  document.getElementById('dgTitle').style.background = themeTypes[color]['title'];
  document.getElementById('dgText').style.background = themeTypes[color]['textBg'];
  document.getElementById('diffedTitle').style.background = themeTypes[color]['title'];
  document.getElementById('diffedText').style.background = themeTypes[color]['textBg'];
  document.getElementById('diffedDrawGreen').style.background = themeTypes[color]['diffedDrawGreen'];
  document.getElementById('diffedDrawRed').style.background = themeTypes[color]['diffedDrawRed'];

}