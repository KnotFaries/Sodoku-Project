var numselected = null;
var tileselected= null;

var error = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload= function(){
    setGame();
}
function setGame(){
    //Digitis 1-9
    // the following works inside the div called "digits"
    // <div id= "i" class = "number"> i </div>
    for( let i= 1; i<=9; i++){
        let number = document.createElement("div"); // creates div tag
        number.id = i
        number.innerText= i;
        number.addEventListener("click", selectNumber);
        number.classList.add('number');
        document.getElementById('digits').appendChild(number)
    }

    // Board set up 

    for(let r=0; r<9; r++){
        for( let c = 0; c<9; c++){
            let tile = document.createElement("div");
            tile.id= r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            document.getElementById('board').append(tile);
        }
    }
}

function selectNumber(){
    // adds a grey background to selected numbers. 

    // removes existing divs 
    if (numselected != null){
        numselected.classList.remove('number-selected');
    }

    // adds in the current selected number 
    numselected= this;
    numselected.classList.add('number-selected'); // adds numselected class to the div

}
