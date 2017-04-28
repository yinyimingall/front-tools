//babel.js
module.exports = function(){
  let $root = document.getElementById('root')
  setTimeout( () => {
    let node = document.createElement('div')
    node.textContent = 'this is writen by es6.babel is worked.'
    $root.appendChild(node)
  }, 1500)
}
