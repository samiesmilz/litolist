// Selecting elements
const timelineDiv = document.querySelector(".timeline");

//Add an event listener to the entire div containing lists
timelineDiv.addEventListener("click", ({ target }) => {
  // Get the clicke dlist item
  const listItem = target.closest("li");
  // Check to see which element has been clicked in the list
  if (target.matches(".delete")) {
    target.closest("li").remove();
    saveLists();
  } else if (target.matches("span") && target.contentEditable !== "true") {
    target.classList.toggle("cross");
    saveLists();
  } else if (target.matches(".edit")) {
    const spanText = listItem.querySelector("span");
    spanText.contentEditable = true;
    spanText.focus();
    target.innerText = "save";
    target.classList.toggle("edit");
    target.classList.toggle("save");

    // Select all the buttons in the li and disable editing on them
    const buttons = target.closest("li").querySelectorAll("button");
    buttons.forEach((b) => (b.contentEditable = false));
    saveLists();
  } else if (target.matches(".save")) {
    target.innerText = "edit";
    const spanNow = listItem.querySelector("span");
    const newText = spanNow.value;
    spanNow.contentEditable = false;
    target.classList.toggle("save");
    target.classList.toggle("edit");
    saveLists();
  }
});

// Adding a new item on the list
const litoForm = document.querySelectorAll(".lito-form");
for (let form of litoForm) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputBox = form.querySelector(".input-box");
    const item = inputBox.value;

    // Create new elements
    const newDiv = document.createElement("div");
    const newListItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    //Add text to new elements
    newSpan.innerText = item;
    editButton.innerText = "edit";
    deleteButton.innerText = "-";

    // Set the classes
    newDiv.classList.add("lito-item");
    editButton.classList.add("edit");
    deleteButton.classList.add("delete");

    //Add elements to list item created
    newDiv.append(newSpan);
    newDiv.append(editButton);
    newDiv.append(deleteButton);
    newListItem.append(newDiv);

    const parentDiv = form.parentElement;
    const olToAddTo = parentDiv.querySelector("ol");
    olToAddTo.append(newListItem);
    saveLists();

    inputBox.value = "";
  });
}

// Working on the slogan to osciallate
const litoSlogan = document.querySelector(".slogan");
setInterval(function () {
  litoSlogan.classList.toggle("big");
  if (litoSlogan.classList.contains("big")) {
    litoSlogan.innerText = "Big Champs!";
  } else {
    litoSlogan.innerText = "Lito-List...";
  }
  litoSlogan.classList.toggle("small");
}, 2800);

// This section handles saving and retriving data from local storage.

function saveLists() {
  const dayList = document.querySelector("#day-list");
  const weekList = document.querySelector("#week-list");
  const yearList = document.querySelector("#year-list");

  // Save the lists as strings
  const listsData = {
    daylist: dayList.innerHTML,
    weeklist: weekList.innerHTML,
    yearlist: yearList.innerHTML,
  };

  //save the lists
  localStorage.setItem("savedLists", JSON.stringify(listsData));
}

function getLists() {
  const localLists = JSON.parse(localStorage.getItem("savedLists"));

  // Check if localLists is not null (localStorage has data)
  if (localLists) {
    const dayList = document.querySelector("#day-list");
    const weekList = document.querySelector("#week-list");
    const yearList = document.querySelector("#year-list");

    // Update the inner HTML of the list elements
    dayList.innerHTML = localLists.daylist;
    weekList.innerHTML = localLists.weeklist;
    yearList.innerHTML = localLists.yearlist;
  }
}

// Call getLists when the page loads
window.addEventListener("load", getLists);
