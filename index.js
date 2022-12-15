let saveNote = document.getElementById("save-btn")
let noteInput = document.getElementById("note-input")
let noteTitle = document.getElementById("note-title-input")
let notesSection = document.querySelector(".your-notes")
let deleteBtn = document.querySelector(".delete")

let prevNotes = JSON.parse(localStorage.getItem("myNotes"))
let prevTitles = JSON.parse(localStorage.getItem("myTitles"))
let myNotes = []
let myTitles = []

if(prevNotes) {
    myNotes = prevNotes
    myTitles = prevTitles
    renderNotes()
}

saveNote.addEventListener("click", save)

function save() {
    let index = myNotes.length
    if(noteInput.value === "" || noteTitle.value === "") {
        alert("Please write a valid note!")
        return
    }

    myNotes.push(noteInput.value)
    myTitles.push(noteTitle.value)
    noteInput.value = ""
    noteTitle.value = ""
    localStorage.setItem("myNotes", JSON.stringify(myNotes))
    localStorage.setItem("myTitles", JSON.stringify(myTitles))
    renderNotes()
}

function renderNotes() {
    let htmlCommand = ""
    for(let i in myNotes) {
        htmlCommand += `<div id="note-${i}" class="note-display">
        <h2>${myTitles[i]}</h2>
        <p>${myNotes[i]}</p>
        <button id="del-${i}" class="delete" onclick="deleteNote(${i})">Delete</button>
        </div>`
    }
    notesSection.innerHTML = htmlCommand
}

function deleteNote(index) {
    console.log("I am deleting note ", index)
    myNotes.splice(index, 1)
    myTitles.splice(index, 1)
    localStorage.setItem("myNotes", JSON.stringify(myNotes))
    localStorage.setItem("myTitles", JSON.stringify(myTitles))
    renderNotes()
}