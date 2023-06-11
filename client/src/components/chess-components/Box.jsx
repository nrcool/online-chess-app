import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../context/MyContext";
import { socket } from "../../socket";
import toast, { Toaster } from "react-hot-toast";
import { checkValidMoveForBishop } from "../../rules/checkMove";
export default function Box({ item, row, index }) {
  const {
    setGame,
    game,
    user,
    room,
    setPlayerTurn,
    playerTurn,
    setOutWhite,
    outWhite,
    setOutBlack,
    outBlack,
    interval,
    countDown,
    counter
  } = useContext(MyContext);
  //check valid move
  const validMove = (target, item) => {
    const boardSize = 8;
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
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 + 3 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 + 4 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 + 5 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 + 6 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 + 7 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id + boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 - 2 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 - 3 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 - 4 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 - 5 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 - 6 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          /*   item.id - boardSize + 1 === target.id && */
          (item.id - boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 + 2 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 + 3 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 + 4 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 + 5 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 + 6 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //fourth
          //item.id - boardSize - 1 === target.id &&
          (item.id - boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 - 2 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 - 3 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 - 4 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 - 5 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 - 6 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 6 - 6 === elem.id)
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
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 5 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          //second
          (item.id - boardSize === target.id && target.color !== item.color) ||
          (item.id - boardSize * 2 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 5 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          //third
          (item.id + 1 === target.id && target.color !== item.color) ||
          (item.id + 2 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 3 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 4 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 5 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 6 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            game.find((elem) => item.id + 5 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 7 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            game.find((elem) => item.id + 5 === elem.id).color === "none" &&
            game.find((elem) => item.id + 6 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 1 === target.id && target.color !== item.color) ||
          (item.id - 2 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 3 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 4 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 5 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 6 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            game.find((elem) => item.id - 5 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 7 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            game.find((elem) => item.id - 5 === elem.id).color === "none" &&
            game.find((elem) => item.id - 6 === elem.id).color === "none" &&
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
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 + 3 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 + 4 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 + 5 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 + 6 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 + 7 === target.id &&
            game.find((elem) => item.id + boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //second
          (item.id + boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize * 2 - 2 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 - 3 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 - 4 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 - 5 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 - 6 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id + boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id + boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //third
          /*   item.id - boardSize + 1 === target.id && */
          (item.id - boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 + 2 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 + 3 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 + 4 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 + 5 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 + 6 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id - boardSize + 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 + 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 + 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 + 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 + 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 6 + 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //fourth
          //item.id - boardSize - 1 === target.id &&
          (item.id - boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize * 2 - 2 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 - 3 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 - 4 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 - 5 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 - 6 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 - 7 === target.id &&
            game.find((elem) => item.id - boardSize - 1 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 - 2 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 3 - 3 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 4 - 4 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 5 - 5 === elem.id)
              .color === "none" &&
            game.find((elem) => item.id - boardSize * 6 - 6 === elem.id)
              .color === "none" &&
            target.color !== item.color) ||
          //first
          (item.id + boardSize === target.id && target.color !== item.color) ||
          (item.id + boardSize * 2 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 3 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 4 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 5 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 6 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id + boardSize * 7 === target.id &&
            game.find((elem) => item.id + boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 5 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id + boardSize * 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          //second
          (item.id - boardSize === target.id && target.color !== item.color) ||
          (item.id - boardSize * 2 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 3 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 4 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 5 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 6 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 5 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          (item.id - boardSize * 7 === target.id &&
            game.find((elem) => item.id - boardSize === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 2 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 3 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 4 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 5 === elem.id).color ===
              "none" &&
            game.find((elem) => item.id - boardSize * 6 === elem.id).color ===
              "none" &&
            target.color !== item.color) ||
          //third
          (item.id + 1 === target.id && target.color !== item.color) ||
          (item.id + 2 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 3 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 4 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 5 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 6 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            game.find((elem) => item.id + 5 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id + 7 === target.id &&
            game.find((elem) => item.id + 1 === elem.id).color === "none" &&
            game.find((elem) => item.id + 2 === elem.id).color === "none" &&
            game.find((elem) => item.id + 3 === elem.id).color === "none" &&
            game.find((elem) => item.id + 4 === elem.id).color === "none" &&
            game.find((elem) => item.id + 5 === elem.id).color === "none" &&
            game.find((elem) => item.id + 6 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 1 === target.id && target.color !== item.color) ||
          (item.id - 2 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 3 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 4 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 5 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 6 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            game.find((elem) => item.id - 5 === elem.id).color === "none" &&
            target.color !== item.color) ||
          (item.id - 7 === target.id &&
            game.find((elem) => item.id - 1 === elem.id).color === "none" &&
            game.find((elem) => item.id - 2 === elem.id).color === "none" &&
            game.find((elem) => item.id - 3 === elem.id).color === "none" &&
            game.find((elem) => item.id - 4 === elem.id).color === "none" &&
            game.find((elem) => item.id - 5 === elem.id).color === "none" &&
            game.find((elem) => item.id - 6 === elem.id).color === "none" &&
            target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }
      case "king":
        if (
          (item.id + 1 === target.id && target.color !== item.color) ||
          (item.id - 1 === target.id && target.color !== item.color) ||
          (item.id + boardSize === target.id && target.color !== item.color) ||
          (item.id - boardSize === target.id && target.color !== item.color) ||
          (item.id + boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id + boardSize - 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize + 1 === target.id &&
            target.color !== item.color) ||
          (item.id - boardSize - 1 === target.id && target.color !== item.color)
        ) {
          return true;
        } else {
          return false;
        }
    }
  };
  const dragStart = (e, item) => {
    /* console.log(item) */
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  const dragOver = (e) => {
    e.preventDefault();
    /* e.target.style.backgroundColor="green" */
    /*  console.log(e.target, "dragover") */
  };

  const drop = (e, item) => {
    /*  console.log("target droped",e)
      console.log(item) */

    const target = { ...item };
    const dragingItem = JSON.parse(e.dataTransfer.getData("item"));
    console.log(target, "target");
    console.log(dragingItem, "dragging item");
    console.log(playerTurn, user._id)
    if (playerTurn === user._id.toString()) {
      if (validMove(target, dragingItem)) {
        console.log("working.....")
        if (target.color !== "none") {
          target.color === "white"
            ? setOutWhite([...outWhite, { ...target }])
            : setOutBlack([...outBlack, { ...target }]);
        }

        const updatedGame = game.map((elem) => {
          if (elem.id === target.id) {
            return { ...dragingItem, id: target.id };
          } else if (elem.id === dragingItem.id) {
            return { id: dragingItem.id, color: "none" };
          } else {
            return elem;
          }
        });
        setGame(updatedGame);
      /*  clearInterval(interval) */
       counter(Object.keys(countDown).filter((id)=>id!==playerTurn)[0],countDown)
        /* checkValidMoveForBishop(target,dragingItem,game,setGame) */
        socket.emit("turn", {
          userId: user._id,
          roomId: room._id,
          updatedGame,
          playerTurn,
          outBlack:target.color === "black" ? [...outBlack, { ...target }] : outBlack,
          outWhite:target.color === "white" ? [...outWhite, { ...target }] : outWhite ,
          countDown
        });
         
        /* setPlayerTurn(playerTurn === "white" ? "black" : "white"); */
      } else {
        toast.error("Invalid Move 🧐");
      }
    } else {
      toast.error("it's not your turn 😮!");
    }
  };
  const dragEnter = (e) => {
    e.preventDefault();

    /* console.log(e,"enter") */
  };
  const dragLeave = (e) => {
    /*  e.target.style.backgroundColor="yellow" */
  };
  return (
    <div
      droppable="true"
      style={{
        backgroundColor:
          row % 2 === 0
            ? index % 2 === 0
              ? item.check
                ? "green"
                : "#B88B4A"
              : item.check
              ? "green"
              : "#E3C16F"
            : index % 2 === 0
            ? item.check
              ? "green"
              : "#E3C16F"
            : item.check
            ? "green"
            : "#B88B4A",
      }}
      className="box"
      onDragEnter={dragEnter}
      onDragOver={dragOver}
      onDrop={(e) => drop(e, item)}
      onDragLeave={dragLeave}
    >
      {/*  <span className="text-sm">{item.id}</span> */}
      <Toaster position="top-center" />
      <div style={{display:"flex",justifyContent:"center"}} draggable={true} onDragStart={(e) => dragStart(e, item)}>
        {item.icon && (
          <FontAwesomeIcon
            title={item.piece}
            color={item.color ? item.color : null}
            icon={item.icon}
            style={{
              strokeWidth: "5%",
              stroke: item.color === "white" ? "black" : "white",
               textShadow: "2px 5px 10px black", 
               textAlign:"center",
              filter: "drop-shadow(2px 2px 2px black)",
            }}
          />
        )}{" "}
      </div>
    </div>
  );
}
