module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let bracketMap = new Map(bracketsConfig);

  for(let item of str){
      if(bracketMap.has(item)) {
          stack.push(item);
      } else  {
          if(stack.length > 0) {
              let result = stack.pop();
              if(item !== bracketMap.get(result)){    
                  return false;
              } 
          } else if (stack.length === 0) {
              return false;
          }
      } 
  }

  if(stack.length === 0) {
      return true;
  } else {
      return false;
  };
}