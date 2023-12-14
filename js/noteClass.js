class Note {
  constructor(description, title = "Note Item:") {
    this.title = title;
    this.description = description;
    let d = new Date();
    this.lasMdificationDate = new Date();
    this.state = true; //true for completed notes
  }
  renderIn(parentElement) {
    const noteWrapper = document.createElement("div");
    noteWrapper.classList.add(this.state?"note-item":"note-done");
    const title = document.createElement("h2");
    title.classList.add("note-title");
    title.innerText = this.title;
    noteWrapper.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("note-description");
    description.innerText = `${this.description}`;
    noteWrapper.appendChild(description);

    if (this.state) {
      const deletebtn = document.createElement("button");
      deletebtn.classList.add("delte-btn");
      deletebtn.innerText = "x";
      deletebtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        compltedNotes.push(this);
        this.state = false;
      });
      noteWrapper.appendChild(deletebtn);
    }

    const date = document.createElement("span");
    date.classList.add("note-date");
    date.innerText = `last edit: ${this.lasMdificationDate.toDateString()} || ${this.lasMdificationDate.toLocaleTimeString()}`;
    noteWrapper.appendChild(date);
    parentElement.appendChild(noteWrapper);
  }
}