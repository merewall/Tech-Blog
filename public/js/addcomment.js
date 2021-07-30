// button handler for adding comment
// post request to comments table
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const post_id = parseInt(document.location.href.split("/").pop());
    console.log(comment);
    console.log(post_id);
  
    if (comment && post_id) {
      // const response = await fetch('/api/comments', {
      //   method: 'POST',
      //   body: JSON.stringify({ comment }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    document.location.reload();
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);