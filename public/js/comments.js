const commentFormHandler = async (event) => {
  event.preventDefault();

  const blog_id = document.querySelector('.comment-body').dataset.blogpost_id;
  
  const comment_content = document.querySelector('#comment-description').value.trim();

  if (comment_content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ blog_id, comment_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to insert comment');
    }
  }
};

document.querySelector('.new-comment-form')
.addEventListener('submit', commentFormHandler);