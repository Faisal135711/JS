module.exports = {
  create(context) {

    return {
      VariableDeclaration(node) {
        if(node.kind === "var") {
          context.report({
            node,
            message: "use let or const instead of var"
          })
        }
      }
    }
    
  }
}