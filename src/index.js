module.exports = function check(str, bracketsConfig) {
    let stack = [];

    const bracketsMap = {};
    const openingBrackets = new Set();
    const closingBrackets = new Set();

    bracketsConfig.forEach(([open, close]) => {
        bracketsMap[close] = open;
        openingBrackets.add(open);
        closingBrackets.add(close);
    });

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (openingBrackets.has(currentSymbol)) {
            if (closingBrackets.has(currentSymbol) && stack[stack.length - 1] === currentSymbol) {
                stack.pop();
            } else {
                stack.push(currentSymbol);
            }
        }
        
        else if (closingBrackets.has(currentSymbol)) {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketsMap[currentSymbol]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

// ())(