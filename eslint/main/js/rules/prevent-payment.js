module.exports = {
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id && node.id.name === 'getPayments') {
          context.report({
            node,
            message: 'avoidGetPayments',
          });
        }
      }
    }
  }
}