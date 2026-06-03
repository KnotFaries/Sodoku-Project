
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

const activeBoard=[
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

var count= 0
for (r=0; r<9; r++){
    for (c=0; c<9; c++){
        if (activeBoard[r][c] == "-"){
            let part_one = activeBoard[r].substring(0,c)
            let part_two = activeBoard[r].substring(c+1,9)

            let out = part_one+"a"+part_two
            activeBoard[r]= out
            
            count +=1
        }
    }
}


function checkWin(win){
    let count =0
    for(r=0; r<9; r++){
        for (c=0; c<9; c++){
            if (activeBoard[r][c] == "-"){
                count +=1
            }
        }
    }
    if(count ==0){
        console.log("WIN")
        
    }
}
console.log(activeBoard)
checkWin(solution)


var problem= {"board": board, "solution": solution, "difficulty": "Easy"}