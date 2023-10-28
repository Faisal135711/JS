module.exports = {
  create(context) {
    return {
      CallExpression(node) {
        if(node.callee.name === 'checkPositive' && typeof node.arguments[0].value !== 'number') {
          context.report({
            node,
            message: "Only number is allowed as parameter"
          })
        }
      }
    }
  }
}