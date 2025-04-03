document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inp"),
        bgColor = document.getElementById("bg-color"),
        pointColor = document.getElementById("point-color"),
        submitBtn = document.getElementById("submit"),
        board = document.getElementById("board");

    const loadCards = () => {
        board.innerHTML = "";
        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.forEach((card, index) => renderCard(card, index));
    };

    const renderCard = ({ text, bgColor, pointColor, checked }, index) => {
        if (!text.trim()) return;
        board.innerHTML += `
            <div class="card" style="background: ${bgColor}">
                <div class="point" style="background: ${pointColor}"></div>
                <div class="text" data-index="${index}" style="text-decoration: ${checked ? 'line-through' : 'none'}">
                    <span>${text}</span>
                </div>
                <input type="checkbox" class="check-btn" data-index="${index}" ${checked ? 'checked' : ''} onchange="toggleCheck(${index})">
                <button class="delete-btn" onclick="deleteCard(${index})">X</button>
                <button class="edit-btn" onclick="editCard(${index})">Edit</button>
            </div>`;
    };

    window.toggleCheck = index => {
        let cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards[index].checked = !cards[index].checked;
        localStorage.setItem("cards", JSON.stringify(cards));
        loadCards();
    };

    window.deleteCard = index => {
        let cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.splice(index, 1);
        localStorage.setItem("cards", JSON.stringify(cards));
        loadCards();
    };

    window.editCard = index => {
        const textDiv = document.querySelector(`.text[data-index="${index}"]`);
        const span = textDiv.querySelector("span");
        textDiv.innerHTML = `<textarea class="edit-textarea" onblur="saveEdit(this, ${index})">${span.textContent}</textarea>`;
        textDiv.querySelector("textarea").focus();
    };

    window.saveEdit = (textarea, index) => {
        let cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards[index].text = textarea.value;
        localStorage.setItem("cards", JSON.stringify(cards));
        loadCards();
    };

    submitBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;
        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.push({ text, bgColor: bgColor.value, pointColor: pointColor.value, checked: false });
        localStorage.setItem("cards", JSON.stringify(cards));
        loadCards();
        input.value = "";
    });

    input.addEventListener("keypress", e => e.key === "Enter" && submitBtn.click());

    loadCards();
});
