// Stolen from http://ricostacruz.com/cheatsheets/umdjs.html
(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react'], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'))
  } else {
    root.ReactLogState = factory(root.React)
  }

}(this || window, function (React) {
  var setState = React.Component.prototype.setState

  function logSetState(nextState) {
    var group = this.constructor.name + ' state changed'
    var resolvedNextState = typeof nextState === 'function' ? nextState(this.state) : nextState

    console.group(group)

    console.log('Previous State', this.state)
    console.log('Incoming State', resolvedNextState)

    console.groupEnd(group)

    return setState.apply(this, arguments)
  }

  return function(element) {
    if (element.setState === logSetState) return

    element.setState = logSetState.bind(element)

    console.info('Watching setState for ' + element.constructor.name)
  }
}))
