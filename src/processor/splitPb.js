const splitLjPb = (text) => {
  let obj = {};
  let arr = text.replace(/<pb id="(\d+.\d+[ab])"\/>\r?\n/g, '##$1@@').replace(/<.+?>/g, '').split('##');
  arr.map((pb) => {
    let splited;
    if (pb.match('@@')) {
      splited = pb.split('@@');
      obj[splited[0]] = splited[1];
    }
  });
  return obj;
};

const splitDgPb = (text) => {
  let obj = {};
  let arr = text.replace(/<jp="(\d+[ab])"\/>/g, '##1.$1@@').replace(/<.+?>/g, '').split('##');
  arr.map((pb) => {
    let splited;
    if (pb.match('@@')) {
      splited = pb.split('@@');
      obj[splited[0]] = splited[1];
    }
  });
  return obj;
};

const splitPb = {
  splitLjPb,
  splitDgPb
};

export default splitPb;
