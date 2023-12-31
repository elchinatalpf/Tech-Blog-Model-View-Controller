const commentFormHandler = async (event) => {
  event.preventDefault();
console.log(event);
  const blogpost_id = document.querySelector('.new-comment-form').dataset.blogid;
  
  const comment_content = document.querySelector('#comment-description').value.trim();

  if (comment_content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ blogpost_id, comment_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to insert comment');
    }
  }
};

document.querySelector('.new-comment-form')
.addEventListener('submit', commentFormHandler);