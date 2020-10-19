'use strict';

const e = React.createElement;

class Button extends React.Component {
  render(){
    return <button>Teste</button>
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(Button, { commentID: commentID }),
      domContainer
    );
  });
