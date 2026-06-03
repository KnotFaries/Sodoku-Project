
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
            console.log(" ")
            console.log("active r : "+ activeBoard[r])
            let part_one = activeBoard[r].substring(0,c)
            let part_two = activeBoard[r].substring(c+1,9)

            let out = part_one+"a"+part_two
            activeBoard[r]= out
            console.log(r,c,)
            console.log("part one: "+ part_one)
            console.log("part two: "+ part_two)
            console.log("out : "+ out)
            console.log("active r : "+ activeBoard[r])
            
            count +=1
        }
    }
}
console.log(count)
console.log(activeBoard)

var problem= {"board": board, "solution": solution, "difficulty": "Easy"}