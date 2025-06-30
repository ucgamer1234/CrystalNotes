
        // Modal logic
        const modal = document.getElementById('auth-modal');
        const openBtn = document.getElementById('open-signin');
        const closeBtn = document.getElementById('close-auth');
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');
        const showSignup = document.getElementById('show-signup');
        const showSignin = document.getElementById('show-signin');

        openBtn.onclick = () => { modal.style.display = 'flex'; signinForm.style.display = 'block'; signupForm.style.display = 'none'; };
        closeBtn.onclick = () => { modal.style.display = 'none'; };
        showSignup.onclick = () => { signinForm.style.display = 'none'; signupForm.style.display = 'block'; };
        showSignin.onclick = () => { signupForm.style.display = 'none'; signinForm.style.display = 'block'; };
        window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

        // Dummy handlers for sign in/up
        signinForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Signed in as ' + document.getElementById('signin-username').value);
            modal.style.display = 'none';
        };
        signupForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Account created for ' + document.getElementById('signup-username').value);
            modal.style.display = 'none';
        };
// Modal logic
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('auth-modal');
    const openBtn = document.getElementById('open-signin');
    const closeBtn = document.getElementById('close-auth');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showSignin = document.getElementById('show-signin');

    openBtn.onclick = () => { modal.style.display = 'flex'; signinForm.style.display = 'block'; signupForm.style.display = 'none'; };
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    showSignup.onclick = () => { signinForm.style.display = 'none'; signupForm.style.display = 'block'; };
    showSignin.onclick = () => { signupForm.style.display = 'none'; signinForm.style.display = 'block'; };
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    signinForm.onsubmit = (e) => {
        e.preventDefault();
        alert('Signed in as ' + document.getElementById('signin-username').value);
        modal.style.display = 'none';
    };
    signupForm.onsubmit = (e) => {
        e.preventDefault();
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        if (password !== confirm) {
            alert('Passwords do not match!');
            return;
        }
        if (!document.getElementById('signup-terms').checked) {
            alert('You must agree to the Terms and Conditions.');
            return;
        }
        alert('Account created for ' + document.getElementById('signup-username').value);
        modal.style.display = 'none';
    };

    // Notes logic
    const noteForm = document.getElementById('note-form');
    const noteList = document.getElementById('note-list');

    function loadNotes() {
        noteList.innerHTML = '';
        const notes = JSON.parse(localStorage.getItem('crystalnotes-notes') || '[]');
        notes.forEach((note, idx) => {
            const li = document.createElement('li');
            li.className = 'note';
            li.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button onclick="deleteNote(${idx})">Delete</button>
            `;
            noteList.appendChild(li);
        });
    }

    function saveNote(title, content) {
        const notes = JSON.parse(localStorage.getItem('crystalnotes-notes') || '[]');
        notes.push({ title, content });
        localStorage.setItem('crystalnotes-notes', JSON.stringify(notes));
        loadNotes();
    }

    window.deleteNote = function(idx) {
        const notes = JSON.parse(localStorage.getItem('crystalnotes-notes') || '[]');
        notes.splice(idx, 1);
        localStorage.setItem('crystalnotes-notes', JSON.stringify(notes));
        loadNotes();
    };

    if (noteForm) {
        noteForm.onsubmit = (e) => {
            e.preventDefault();
            const title = document.getElementById('note-title').value;
            const content = document.getElementById('note-content').value;
            saveNote(title, content);
            noteForm.reset();
        };
    }

    loadNotes();
});