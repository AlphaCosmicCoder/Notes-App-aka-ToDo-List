const addBtn = document.querySelector("#add-btn");
const main = document.querySelector("#main")
addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)

const saveNotes = () => {
    const note = document.querySelectorAll(".note textarea");
    const data = [];
    note.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("note")
    } else {
        localStorage.setItem("note", JSON.stringify(data))
    }
}
const addNote = (Text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
            <i class="Save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
    </div> 
    <textarea name="mytextarea" id="area" placeholder="Enter your Thaughts...">${Text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes()
        }
    )
    note.querySelector(".Save").addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}
(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("note"));
        if (lsnotes === null) {
            addNote()
        }
        else {
            lsnotes.forEach(
                (lsnotes) => {
                    addNote(lsnotes);
                }
            )
        }
    }
    
)()