function grid(size) {
    document.getElementById("clear").click()
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.id = "line" + i;
        row.className = "lines";
        document.getElementById("container").appendChild(row);
        for (let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.className = "square";
            document.getElementById(row.id).appendChild(col);
        };
    };
}

function hover() {
    document.querySelectorAll(".square").forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "black"
        });
    });
}

function rgbRand() {
    let color = []
    for (i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256))
    }
    return "rgb(" + color.join(",") + ")"
}


function erase() {
    document.getElementById("erase").addEventListener("click", function () {
        document.querySelectorAll(".square").forEach(function (square) {
            square.addEventListener("mouseover", function () {
                this.style.backgroundColor = "white";
            });
        });
    });
}

function clear() {
    document.getElementById("clear").addEventListener("click", function () {
        document.querySelectorAll(".square").forEach(function (square) {
            square.style.backgroundColor = "white";
        });
    });
}

function reset() {
    let current = document.getElementById("container");
    while (current.firstChild) {
        current.removeChild(current.firstChild);
    }
}

function gridSize() {
    document.getElementById("size").addEventListener("click", function () {
        let input = prompt("specify the grid size you prefer with a maximum of 100");
        while ((isNaN(input)) || input == "" || input % 1 != 0 || input < 16 || input > 100) {
            alert("invalid input or out of range");
            input = prompt("specify the grid size you prefer with a maximum of 100");
            if (false) break;
        }
        reset();
        grid(input);
        hover();
    });
}

function defColor() {
    document.getElementById("default").addEventListener("click", function () {
        hover();
    });
}

function randColor() {
    document.getElementById("rainbow").addEventListener("click", function () {
        document.querySelectorAll(".square").forEach(function (square) {
            square.addEventListener("mouseover", function () {
                square.style.backgroundColor = rgbRand();
            });
        });
    });
}

grid(16);
hover();
erase();
clear();
gridSize();
defColor();
randColor();



