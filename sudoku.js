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

var activeBoard= board;

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

            // fills in the puzzel numbers
            if (board[r][c] != "-"){
                tile.innerText= board[r][c]
                tile.classList.add("tile-start")
            }


            // adds the lines to make the seprate squares
            if(r==2 || r== 5){
                tile.classList.add("horzontal-line")
            }
            if(c==2 || c== 5){
                tile.classList.add("vertical-line")
            }
            
            tile.addEventListener("click", selectTile);
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

function selectTile(){
    if (numselected){
        if(this.innerText !=""){
            return // prevents overwritng
        }
        
        let cords = this.id.split("-");// creates array as ["c"],["r"] where c and r are the corisponding cordiates
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);

        if (solution[r][c]== numselected.id){
            this.innerText = numselected.id; // adds number to tile
            activeBoard[r][c] = 
            alert(activeBoard[r][c] )
        }
        else{
            error +=1;
            document.getElementById("error").innerText= error;
        }
        
    }
}