// handling add post form submission
// fetch POST request to /posts/
// display user.handlebars (dashboard)

const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const text = document.querySelector('#text').value.trim();
    // const post_id = parseInt(document.location.href.split("/").pop());
    console.log(title);
    console.log(text);
  
    if (title && text) {
      // const response = await fetch('/api/comments', {
      //   method: 'POST',
      //   body: JSON.stringify({ comment }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    // document.location.reload();
};

document
  .querySelector('.add-post-form')
  .addEventListener('submit', postFormHandler);