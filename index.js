const btnSelected = document.querySelectorAll(".select-buton");
const players = document.querySelectorAll(".players-name");

const selectedPlayers = document.getElementById("olList");

let count = 0;

for (const selectBtn of btnSelected) {
    selectBtn.addEventListener("click", (add) => {
        count++;
        if (count > 5) {
            alert("allrady your five player selected ");
        }

        else {
            const selected = SelectedName(add);
            selectedPlayers.appendChild(selected);
            add.target.style.backgroundColor = "red";
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

   const playerAll = document.getElementById("Per-Player");
const callBtn = document.getElementById("calcute-buton");
const expensisAll = document.getElementById("player-total");



callBtn.addEventListener("click", (add)   => {
    if (playerAll.value == "" || count === 0) {
        alert("all your player ");
    }

    else {
        const PlayerNamesto = + playerAll.value;
        let expense =
            count > 5
                ? 5 * PlayerNamesto
                : count * PlayerNamesto;
        expensisAll.innerText = `${expense}`;
    }
});
const managertaka = document.getElementById("manajer-salary");
const coachtaka = document.getElementById("coach-salary");

const calTotalBtn = document.getElementById("calcute-total");
const Playertolal = document.getElementById("alltotal-amount");

calTotalBtn.addEventListener("click", (add) => {
    if (managertaka.value == "" || coachtaka.value == "") {
        alert("plz inter your salary select ");
    }
    else {
        let PlayerNamesto = +playerAll.value;
        let expensisAll =
            count > 5
                ? 5 * PlayerNamesto
                : count * PlayerNamesto;
        let coachsalary = +coachtaka.value;
        let managersalary = + managertaka.value;

        let totalallsalary = expensisAll + managersalary + coachsalary;
        Playertolal.innerText = `${totalallsalary}`;
    }
});





