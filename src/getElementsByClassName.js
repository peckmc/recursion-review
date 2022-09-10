// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// I - a document (webpage)
// O - an array of elements that match the input class name
// C - use recursion
// E - N/A



// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // delcare variable respresenting document
  var body = document.body;
  // declare result array variable
  var result = [];

  // create child function that takes in an 'element' parameter
  var findNodes = function (node) {

    var classList = node.classList;
    var children = node.childNodes;

    if (classList && classList.contains(className)) {
      result.push(node);
    }

    if (children) {
      for (var i = 0; i < children.length; i++) {
        findNodes(children[i]);
      }
    }
  }
  // call child functon on document
  findNodes(body);
  return result;
};
