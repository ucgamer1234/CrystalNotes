class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    render() {
        const noteElement = document.createElement('li');
        noteElement.classList.add('note');

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = this.content;

        noteElement.appendChild(titleElement);
        noteElement.appendChild(contentElement);

        return noteElement;
    }
}

export default Note;

// ...existing code...

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

noteForm.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    saveNote(title, content);
    noteForm.reset();
};

loadNotes();