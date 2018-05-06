Vue.component('haiku-line', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['line'],
  template: '<div class="line"><input val="line.originalText"><div class="inputCount"></div></div>'
})
