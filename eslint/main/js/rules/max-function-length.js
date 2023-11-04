module.exports = {
  create(context) {
    const { max } = context.options[0] || { max: 20 };

    return {
      FunctionDeclaration(node) {
        // console.log(node);
        const lines = node.loc.end.line - node.loc.start.line + 1;

        if (lines > max) {
          context.report({
            node,
            message: `Function exceeds maximum length of ${max} lines.`,
          });
        }
      }
    }
  }
}