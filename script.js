async function fetchUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const users = data.users;
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');

        const userImage = document.createElement('img');
        userImage.src = user.image;  
        userImage.alt = `${user.firstName} ${user.lastName}`;
        userCard.appendChild(userImage);

        const userName = document.createElement('h3');
        userName.textContent = `${user.firstName} ${user.lastName}`;
        userCard.appendChild(userName);

        const userUsername = document.createElement('span');
        userUsername.classList.add('username');
        userUsername.textContent = `@${user.username}`;
        userCard.appendChild(userUsername);

        const userEmail = document.createElement('p');
        userEmail.classList.add('email');
        userEmail.textContent = user.email;
        userCard.appendChild(userEmail);

        usersContainer.appendChild(userCard);
    });
}

window.onload = fetchUsers;
