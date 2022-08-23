const btnSelected = document.querySelectorAll(".select-buton");
const players = document.querySelectorAll(".players-name");

const selectedPlayers = document.getElementById("olList");

let count = 0;

for (const selectBtn of btnSelected) {
    selectBtn.addEventListener("click", (add) => {
        count++;
        if (count > 5) {
            alert("You can selected only five player ");
        }

        else {
            const selected = SelectedName(add);
            selectedPlayers.appendChild(selected);
            add.target.style.backgroundColor = "yellow";
            add.target.style.color = "black";
            add.target.disabled = true;
        }
    });
}



function SelectedInner(add) {
    return add.target.parentElement.parentElement.firstElementChild.innerText;
}

function SelectedName(add) {
    const playerAll = SelectedInner(add);
    let name = document.createElement("li");
    name.classList.add("text-red-400");
    name.innerText = playerAll;
    return name;
}

