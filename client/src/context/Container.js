import React, { useEffect, useRef, useState } from "react";
import { MyContext } from "./MyContext";
import { socket } from "../socket.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { gameData } from "../data/gameData";
import sound from "../assets/notify.mp3";

const notify = new Audio(sound);
export default function Container({ children }) {
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState(gameData);
  const [playerTurn, setPlayerTurn] = useState(null);
  const [outWhite, setOutWhite] = useState([]);
  const [outBlack, setOutBlack] = useState([]);
  const [countDown, setCountDown] = useState({});
  const interval = useRef()
  const navigate = useNavigate();

  const counter = (playerTurn, countDown) => {
    console.log("counter .... ", playerTurn, countDown[playerTurn]);
    clearInterval(interval.current)
    let s = countDown[playerTurn].s;
    let m = countDown[playerTurn].m;
    /*  if(playerTurn===user._id.toString()){
      m=countDown.white.m;
      s=countDown.white.s
    }else{
      m=countDown.black.m;
      s=countDown.black.s
    } */
    interval.current = setInterval(() => {
      s--;
      if (s <= 0) {
        s = 59;
        m--;
      }

      if (m < 0) {
        clearInterval(interval);
      }
      setCountDown((prev) => ({ ...prev, [playerTurn]: { m, s } }));
    }, 1000);
  };
  /*   useEffect(()=>{
    if(playerTurn==="white"){
        setGame( game.map((elem,i)=>({...elem,id:i} ) ))
   } else{
     setGame(game.map((elem,i)=>({...elem,id:63-i})))
   }

 },[playerTurn]) */

  useEffect(() => {
    const allRooms = (rooms, user) => {
      setRooms(rooms);

      setUser((oldUser) => {
        if (oldUser._id.toString() === user._id.toString()) {
          return user;
        } else {
          return oldUser;
        }
      });
    };

    const getGameData = ({
      otherBoard,
      playerTurn,
      outBlack,
      outWhite,
      countDown,
    }) => {
      /* clearInterval(interval) */
      counter(playerTurn, countDown);
     
      setCountDown(countDown);
      setGame(otherBoard);
      setGameStart(true);
      setOutBlack(outBlack);
      setOutWhite(outWhite);
      setPlayerTurn(playerTurn);

      notify.play();
    };
    const afterLeave = (rooms, userId) => {
      setUser((user) => {
        if (user._id.toString() === userId) {
          setRooms(rooms);
          navigate("/lobby");
          return user;
        } else {
          setRooms(rooms);
          return user;
        }
      });
      setGame(gameData);
      setGameStart(false);
      setOutBlack([]);
      setOutWhite([]);
      setPlayerTurn({});
    };

    socket.on("room_created", allRooms);

    socket.on("game_started", getGameData);

    socket.on("after_leave_room_created", afterLeave);

    /*   socket.on("user_left",allRooms) */
    return () => {
      socket.off("room_created", allRooms);
      socket.off("game_started", getGameData);
      socket.off("after_leave_room_created", afterLeave);
    };
  }, []);
  useEffect(() => {
    socket.on("connect", () => {
      if (localStorage.getItem("token")) {
        axios
          .get("/users/verify", {
            headers: {
              token: localStorage.getItem("token"),
              socketId: socket.id,
            },
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              console.log(res.data.data);
              setUser(res.data.data);
              axios
                .get("/rooms", {
                  headers: {
                    token: localStorage.getItem("token"),
                    socketId: socket.id,
                  },
                })
                .then((response) => {
                  if (response.data.success) {
                    setRooms(response.data.data);
                    /*    const JoinedRoom = response.data.data.find(room=>{
              return room.players.find(({_id})=>_id===res.data.data._id)
            })
            if(JoinedRoom){
              socket.emit("join_room",{userId:res.data.data._id,roomId:JoinedRoom._id})
            } */
                  }
                });
            }
          });
      }
    });
  }, [user]);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        room,
        rooms,
        setRoom,
        setRooms,
        players,
        setPlayers,
        gameStart,
        setGameStart,
        game,
        setGame,
        playerTurn,
        setPlayerTurn,
        outBlack,
        setOutBlack,
        outWhite,
        setOutWhite,
        countDown,
        counter,
        interval,
        setCountDown,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
