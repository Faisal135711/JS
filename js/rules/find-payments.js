module.exports = {
  meta: { fixable: 'not a valid meta.fixable value' },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'getPayments') {
          context.report({
            node:node,
            message: "getPayments is deprecated. use getLatestPayments",
            fix: function(fixer) {
              return fixer.replaceText(node.callee, "getLatestPayments")
            }
          })
        }
      }
    }
  }
}