const imgBox = document.querySelector(".imgBox");
const containers = document.getElementsByClassName("container");

imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd triggered");
  e.target.className = "imgBox";
});

for (container of containers) {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver triggered");
  });

  container.addEventListener("dragenter", (e) => {
    console.log("DragEnter triggered");
    e.target.className += " dashed";
  });

  container.addEventListener("dragleave", (e) => {
    console.log("DragLeave triggered");
    e.target.className = "container";
    
  });

  container.addEventListener("drop", (e) => {
    console.log("Drop triggered");
    e.target.append(imgBox);
  });
}


