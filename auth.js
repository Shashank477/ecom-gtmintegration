// Registration Logic
function registerUser() {
    let name = document.getElementById('regName').value;
    let phone = document.getElementById('regPhone').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;

    if (!(name && phone && email && password)) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, phone, email, password }));
    alert("Registration successful!");
    window.location.href = "index.html";
}

// Login Logic
function loginUser() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        alert("No registered user found!");
        return;
    }

    if (user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', true);
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }
}