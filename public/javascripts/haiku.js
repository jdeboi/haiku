var haikuLines =   [
  {numSyllables: 10, isValid: false, originalText: "my haiku!" },
  {numSyllables: 10, isValid: false, originalText: "my haiku!" },
  {numSyllables: 10, isValid: false, originalText: "my haiku!" }
];


Vue.component('haiku-line', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['line'],
  template: '<div class="line"><input val="{{ line.originalText }}"><div class="inputCount"></div></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    test: "hi",
    haikuLines: haikuLines
  }
})
