let blogNotesCreated = {};

const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (name && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blogCreate');
        } else {
            //this is an alert for the creating of the post
            document.location.replace('/blogCreate');
            alert('Failed to create Post');
            console.log("failed to create the blog Post")
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
    console.log("create button  new form handler clicked")

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
    console.log("create button clicked")
