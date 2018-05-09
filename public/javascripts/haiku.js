var haikuLines =   [
  {numSyllables: 10, isValid: false, originalText: "my haiku!" },
  {numSyllables: 10, isValid: false, originalText: "my haiku!" },
  {numSyllables: 10, isValid: false, originalText: "my haiku!" }
];


Vue.component('haiku-line', {
  // The haiku-line component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called line.
  props: ['line'],
  template: '<div class="line"><input val="lala"><div class="inputCount"></div></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    test: "hi",
    haikuLines: haikuLines
  }
})
