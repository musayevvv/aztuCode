document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inp");
    const bgColorInput = document.getElementById("bg-color");
    const pointColorInput = document.getElementById("point-color");
    const submitBtn = document.getElementById("submit");
    const board = document.getElementById("board");
  
    function createCard(text, bgColor, pointColor) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundColor = bgColor;
  
      const point = document.createElement("div");
      point.classList.add("point");
      point.style.backgroundColor = pointColor;
  
      const textDiv = document.createElement("div");
      textDiv.classList.add("text");
      const span = document.createElement("span");
      span.textContent = text;
      textDiv.appendChild(span);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function () {
        card.remove();
      });
  
      card.appendChild(point);
      card.appendChild(textDiv);
      card.appendChild(deleteBtn);
  
      board.appendChild(card);
    }
  
    submitBtn.addEventListener("click", function () {
      if (input.value.trim() !== "") {
        createCard(input.value, bgColorInput.value, pointColorInput.value);
        input.value = "";
      }
    });
  });
  