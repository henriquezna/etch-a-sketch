const container = document.getElementById("container");

document.getElementById("reset").addEventListener("click", function() {reset(16)});
document.getElementById("small").addEventListener("click", function() {reset(16)});
document.getElementById("medium").addEventListener("click", function() {reset(64)});
document.getElementById("large").addEventListener("click", function() {reset(256)});

reset(16);

function color(e){
    e.target.style.backgroundColor = "#FF5A5F";
}

function reset(grid){
    let size = "100px";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    if(grid === 16){
        container.style.gridTemplateColumns= "1fr 1fr 1fr 1fr";
        size = "100px";
    }else if(grid === 64){
        container.style.gridTemplateColumns= "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        size = "50px";
    }else{
        container.style.gridTemplateColumns= "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        size = "25px";
    }

    for(let i=0; i < grid; i++){
        const div = document.createElement("div");
        div.classList.add("pixels");
        div.style.width = size;
        div.style.height = size;
        div.addEventListener("mouseover", color);
        container.appendChild(div);
    }
}