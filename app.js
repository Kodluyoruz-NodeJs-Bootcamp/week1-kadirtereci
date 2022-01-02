//image to drag
const imgBox = document.querySelector(".imgBox");

//droppable containers
const containers = document.getElementsByClassName("container");

//It is fired when the user starts dragging an item.
imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

//It is fired when a drag operation ends.
imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd triggered");
  e.target.className = "imgBox";
});

for (container of containers) {
  //It is fired when a dragged item is being dragged over a valid drop target.
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver triggered");
  });

  //It is fired when a dragged item enters a valid drop target.
  container.addEventListener("dragenter", (e) => {
    console.log("DragEnter triggered");
    e.target.className += " dashed";
  });

  //It is fired when a dragged item leaves a valid drop target.
  container.addEventListener("dragleave", (e) => {
    console.log("DragLeave triggered");
    e.target.className = "container";
  });

  //It is fired when an item is dropped on a valid drop target.
  container.addEventListener("drop", (e) => {
    console.log("Drop triggered");
    e.target.append(imgBox);
  });
}
