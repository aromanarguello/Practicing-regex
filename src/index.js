// var str = `cat mat bat hat ?at 0at`;
// var str = `Aeiou $100 55.5%`;
// var str = `foo
// foobar
// foobaz
// fooboo
// `;

var str = `
800-456-7890
(555) 456-7890
4564567890
`;

// var regex = /[\S]/g;
// var regex = /foo(bar|boo)/g;
var regex = /\(?(?:\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}[\s-]/g;

console.log(str.replace(regex, "area code: $1 "));

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

output(str, regex, document.querySelector("pre"));
