// handling dashboard button
// fetch get request for /users/:id and display user.handlebars
async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;

    const post_id = parseInt(document.location.href.split("/").pop());
  
    if (title && text) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
              title,
              text,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
              document.location.replace(`/posts/${post_id}`);
          } else {
              alert(response.statusText);
          }
    }
    
  
    // What happens if the response is ok?
    // If the response is ok, that means that the dish was updated successfully. 
    // if (response.ok) {
    //   document.location.replace(window.location.pathname);
    // } else {
    //   alert('Failed to edit dish');
    // }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);