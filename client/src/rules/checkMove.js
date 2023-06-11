export const checkValidMoveForBishop = (target,item,gameBoard,setGameBoard)=>{
     if(item.piece==="bishop"){
         const king= gameBoard.find(elem=>elem.piece==="king"&& elem.color!==item.color)
         console.log(king)
         if(validMove(king,{...item,id:target.id,gameBoard},gameBoard)){
             console.log("king on check")
             king.check=true
             setGameBoard([...gameBoard])
         }
         
     }
 }
 


 export const validMove = (target, item, gameBoard,playerTurn) => {
    const boardSize=8
    switch (item.piece) {
      case "pown":
        if (
          (item.id + boardSize === target.id && !target.icon) ||
          (item.id + boardSize * 2 === target.id &&
            !target.icon &&
            item.id + boardSize * 2 < 32) ||
          (item.id + boardSize + 1 === target.id &&
            target.color !== playerTurn &&
            target.color !== "none") ||
          (item.id + boardSize - 1 === target.id &&
            target.color !== playerTurn &&
            target.color !== "none")
        ) {
          return true;
        } else {
          return false;
        }
      case "knight":
        if (
          (item.id + boardSize * 2 + 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 - 1 === target.id &&
            target.color !== item.color) ||
          (item.id + 2 + boardSize === target.id &&
            target.color !== item.color) ||
          (item.id + 2 - boardSize === target.id &&
            target.color !== item.color) ||
          (item.id - 2 + boardSize === target.id &&
            target.color !== item.color) ||
          (item.id - 2 - boardSize === target.id && target.color !== item.color)
        ) {
          console.log(true);
          return true;
        } else {
          return false;
        }
      case "bishop":
     
        if (
          (item.id + boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 + 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 + 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 + 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 + 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 + 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 + 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id + boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 - 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 - 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 - 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 - 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 - 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          /*   item.id - boardSize + 1 === target.id && */
          (item.id - boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 + 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 + 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 + 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 + 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 + 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //fourth
          //item.id - boardSize - 1 === target.id &&
          (item.id - boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 - 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 - 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 - 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 - 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 - 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }

      case "rook":
        if (
          (item.id + boardSize === target.id && target.color !== item.color) ||
          (item.id + boardSize * 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id - boardSize === target.id && target.color !== item.color) ||
          (item.id - boardSize * 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          (item.id + 1 === target.id && target.color !== item.color) ||
          (item.id + 2 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 3 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 4 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 5 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 6 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 7 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 5 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 1 === target.id && target.color !== item.color) ||
          (item.id - 2 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 3 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 4 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 5 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 6 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 7 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 5 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 6 === elem.id).color ===
              "none" &&
            target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }
      case "queen":
        if (
          (item.id + boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 + 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 + 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 + 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 + 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 + 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 + 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id + boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 - 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 - 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 - 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 - 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 - 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          /*   item.id - boardSize + 1 === target.id && */
          (item.id - boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 + 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 + 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 + 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 + 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 + 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize + 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //fourth
          //item.id - boardSize - 1 === target.id &&
          (item.id - boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 - 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 - 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 - 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 - 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 - 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 - 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize - 1 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //first
          (item.id + boardSize === target.id && target.color !== item.color) ||
          (item.id + boardSize * 2 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 === target.id &&
            gameBoard.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id + boardSize * 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id - boardSize === target.id && target.color !== item.color) ||
          (item.id - boardSize * 2 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 === target.id &&
            gameBoard.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - boardSize * 2 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 3 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 4 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 5 === elem.id)
              .color === "none" &&
            gameBoard.find((elem) => item.id - boardSize * 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          (item.id + 1 === target.id && target.color !== item.color) ||
          (item.id + 2 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 3 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 4 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 5 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 6 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + 7 === target.id &&
            gameBoard.find((elem) => item.id + 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 5 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id + 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 1 === target.id && target.color !== item.color) ||
          (item.id - 2 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 3 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 4 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 5 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 6 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - 7 === target.id &&
            gameBoard.find((elem) => item.id - 1 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 2 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 3 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 4 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 5 === elem.id).color ===
              "none" &&
            gameBoard.find((elem) => item.id - 6 === elem.id).color ===
              "none" &&
            target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }
      case "king":
        if (
          item.id + boardSize === target.id&& target.color !== item.color ||
          item.id - boardSize === target.id&& target.color !== item.color ||
          item.id + boardSize + 1 === target.id&& target.color !== item.color ||
          item.id + boardSize - 1 === target.id && target.color !== item.color||
          item.id - boardSize + 1 === target.id && target.color !== item.color||
          (item.id - boardSize - 1 === target.id && target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }
    }
  };
