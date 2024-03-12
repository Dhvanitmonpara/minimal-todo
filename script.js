const addTask = document.getElementById("add-todo");
const inputTask = document.getElementById("input-box");
const listCon = document.getElementById("list-con");

function addTodo() {
  if (inputTask.value !== "") {
    let newVal = inputTask.value;
    const newTask = document.createElement("div");
    newTask.classList.add("task-subcon");
    newTask.classList.add("task-selector");

    newTask.innerHTML = `
          <li class="tasks">
            <img class="task-img" height="20px" src="images/unchecked.png" />
            <div class="task-note">
              <h6 class="task-heading">${newVal}</h6>
              <p class="task-details">
              </p>
            </div>
            <svg
              class="task-delete"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="10"
              height="10"
              x="0"
              y="0"
              viewBox="0 0 320.591 320.591"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class=""
            >
              <g>
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  fill="#000"
                  opacity="1"
                  data-original="#000000"
                  class=""
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  fill="#000"
                  opacity="1"
                  data-original="#000000"
                  class=""
                ></path>
              </g>
            </svg>
          </li>
        `;

    listCon.appendChild(newTask);
    inputTask.value = "";
    saveData();

    newTask.querySelector(".task-delete").addEventListener("click", () => {
      newTask.remove();
      saveData();
    });

    newTask.querySelector(".tasks").addEventListener("click", () => {
      newTask.classList.toggle("checked");
      let checkbox = newTask.querySelector(".task-img");
      if (checkbox.getAttribute("src") == "images/checked.png") {
        checkbox.setAttribute("src", "images/unchecked.png");
      } else {
        checkbox.setAttribute("src", "images/checked.png");
      }
      saveData();
    });
  }
}

addTask.addEventListener("click", addTodo);

// note adder

const noteInputBlock = document.getElementById("note-input");
const addNote = document.getElementById("add-todo-con");
const noteInputBox = document.getElementById("note-input-box");
const titleInputBox = document.getElementById("title-input-box");
const submitNote = document.getElementById("submit-note-btn");
const cancelNote = document.getElementById("cancel-note-btn");

function activateNoteInput() {
  if (noteInputBlock.style.display == "flex") {
    noteInputBlock.style.display = "none";
  } else {
    noteInputBlock.style.display = "flex";
  }
}

function insertNote() {
  let titleValue = titleInputBox.value;
  let noteValue = noteInputBox.value;

  if (noteInputBox.value !== "" && titleInputBox.value !== "") {
    const newTask = document.createElement("div");
    newTask.classList.add("task-subcon");
    newTask.classList.add("task-selector");

    newTask.innerHTML = `
      <li class="tasks">
      <img class="task-img" height="20px" src="images/unchecked.png" />
      <div class="task-note">
        <h6 class="task-heading">${titleValue}</h6>
        <p class="task-details">${noteValue}</p>
      </div>
      <svg
        class="task-delete"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="10"
        height="10"
        x="0"
        y="0"
        viewBox="0 0 320.591 320.591"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            fill="#000"
            opacity="1"
            data-original="#000000"
            class=""
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            fill="#000"
            opacity="1"
            data-original="#000000"
            class=""
          ></path>
        </g>
      </svg>
        </li>
      `;
    listCon.appendChild(newTask);
    saveData();

    // Setup event listener for the new delete button
    newTask.querySelector(".task-delete").addEventListener("click", () => {
      newTask.remove();
      saveData();
    });

    newTask.querySelector(".tasks").addEventListener("click", () => {
      newTask.classList.toggle("checked");
      let checkbox = newTask.querySelector(".task-img");
      if (checkbox.getAttribute("src") == "images/checked.png") {
        checkbox.setAttribute("src", "images/unchecked.png");
      } else {
        checkbox.setAttribute("src", "images/checked.png");
      }
      saveData();
    });
  }
  titleInputBox.value = "";
  noteInputBox.value = "";
  activateNoteInput();
  saveData();
}

function restoreNote(img, status, title, note) {
  const newTask = document.createElement("div");
  newTask.classList.add("task-subcon");
  newTask.classList.add("task-selector");

  if (status) {
    newTask.classList.add("checked");
  }

  newTask.innerHTML = `
    <li class="tasks">
    <img class="task-img" height="20px" src="${img}" />
    <div class="task-note">
      <h6 class="task-heading">${title}</h6>
      <p class="task-details">${note}</p>
    </div>
    <svg
      class="task-delete"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="10"
      height="10"
      x="0"
      y="0"
      viewBox="0 0 320.591 320.591"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class=""
    >
      <g>
        <path
          d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
          fill="#000"
          opacity="1"
          data-original="#000000"
          class=""
        ></path>
        <path
          d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
          fill="#000"
          opacity="1"
          data-original="#000000"
          class=""
        ></path>
      </g>
    </svg>
      </li>
    `;
  listCon.appendChild(newTask);
  saveData();

  // Setup event listener for the new delete button
  newTask.querySelector(".task-delete").addEventListener("click", () => {
    newTask.remove();
    saveData();
  });

  newTask.querySelector(".tasks").addEventListener("click", () => {
    newTask.classList.toggle("checked");
    let checkbox = newTask.querySelector(".task-img");
    if (checkbox.getAttribute("src") == "images/checked.png") {
      checkbox.setAttribute("src", "images/unchecked.png");
    } else {
      checkbox.setAttribute("src", "images/checked.png");
    }
    saveData();
  });
}

addNote.addEventListener("click", activateNoteInput);
submitNote.addEventListener("click", insertNote);
cancelNote.addEventListener("click", activateNoteInput);

// Delete note

const deleteNoteBtn = document.querySelectorAll(".task-delete");

function eventAdd() {
  deleteNoteBtn.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
}

eventAdd();

// storage

function saveData() {
  let taskSelector = document.querySelectorAll(".task-selector");
  let data = [];
  data = [];

  taskSelector.forEach((e) => {
    let checkedData;
    if (e.classList.contains("checked")) {
      checkedData = true;
    } else {
      checkedData = false;
    }
    let imgSrc = e.querySelector("img").getAttribute("src");
    let imgSource;
    if (imgSrc == "images/checked.png") {
      imgSource = "images/checked.png";
    } else {
      imgSource = "images/unchecked.png";
    }
    let titleData = e.querySelector("h6").innerText;
    let contentData = e.querySelector("p").innerText;

    let task = {
      img: imgSource,
      status: checkedData,
      title: titleData,
      note: contentData,
    };
    data.push(task);
  });

  localStorage.setItem("data", JSON.stringify(data));
}

function getData() {
  let storedData = localStorage.getItem("data");
  if (storedData) {
    let parsedData = JSON.parse(storedData);
    parsedData.forEach((item) => {
      restoreNote(item.img, item.status, item.title, item.note);
    });
  }
}

function resetApp() {
  const sureToResetApp = confirm(
    "Are you sure t reset this app? (Your all data will be erased)"
  );
  if (sureToResetApp) {
    localStorage.clear();
    location.reload();
  } else {
    console.log("Ok! your data is safe :)");
  }
}

getData();
