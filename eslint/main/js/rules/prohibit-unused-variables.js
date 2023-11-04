// eslint-rules/no-unused-vars.js

module.exports = {
  create(context) {
    const declaredVars = new Set();

    return {
      VariableDeclarator(node) {
        if (node.id.type === 'Identifier') {
          declaredVars.add(node.id.name);
        }
      },
      'Program:exit'() {
        const scope = context.getScope();

        declaredVars.forEach((variable) => {
          if (!scope.references.some((ref) => ref.identifier.name === variable)) {
            context.report({
              node: scope.block,
              message: `"${variable}" is declared but never used.`,
            });
          }
        });
      },
    };
  },
};

