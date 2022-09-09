// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // I: primitive value, could be collection (object or array)
  // O: stringified version of the input
  // C:
  // E: undefined or function will be omitted and return null


  var type = typeof obj;

  // if input is number, string, boolean or null, return stringified version

  if (type === 'number' || type === 'boolean') {
    return '' + obj;
  } else if (type === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj) === true) {
    var arrResult = [];
    for (var i = 0; i < obj.length; i++) {
      // result += stringifyJSON(obj[i]) + ', ';
      arrResult.push(stringifyJSON(obj[i]));
    }
    return '[' + (arrResult.join(',')) + ']';
  } else if (type === 'object') {
    var objResult = '{';
    for (key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        objResult += '"' + key + '":' + stringifyJSON(obj[key]) + ",";
      }
    }
    if (objResult.length === 1) {
      return objResult + '}';
    }
    objResult = objResult.slice(0, -1) + '}';
    return objResult;
  }
  // if type is an

  // if input is an object, iterate through it and recursively call the function on each value within it
  // same as above for an arrays


};
