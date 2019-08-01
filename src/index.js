// var str = `cat mat bat hat ?at 0at`;
var str = `Aeiou $100 55.5%`;

var regex = /[0-9]at/g;

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

output(str, regex, document.querySelector("pre"));
