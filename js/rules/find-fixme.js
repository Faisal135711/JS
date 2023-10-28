module.exports = {

  create(context){
    // console.log(context.options);
    function findComments(comment) {
      // if(comment.value.toLowerCase().indexOf('fixme') !== -1) {
      //   context.report(comment, 'Fixme is not allowed in comments')
      // }

      if(context.options.indexOf(comment.value.toLowerCase()) >= 0) {
        context.report(comment, `${comment.value} is not allowed in the comments`)
      }
    }
    return {
      Program(node){
        let sourceCode = context.getSourceCode();
        let comments = sourceCode.getAllComments();
          for(let comment of comments) {
            findComments(comment)
          }
      }
    }
  }
}