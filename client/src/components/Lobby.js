import React, { useContext, useEffect } from 'react';
import { socket } from '../socket'
import { useNavigate } from 'react-router-dom'
import roomImagePlaceHolder from "../assets/leader-success-chess-pieces.jpg"
import { MyContext } from '../context/MyContext';
import axios from 'axios';
/* import bg from "../assets/room-background.jpg" */

const Lobby = () => {
  const {user,rooms,setRooms,game,setPlayerTurn,setCountDown,countDown} =useContext(MyContext)
  const navigate= useNavigate()

  useEffect(()=>{
    axios.get("/rooms",{headers:{token:localStorage.getItem("token"),"socketId":socket.id}}).then(res=>{
      if(res.data.success){
        setRooms(res.data.data)
      }
    })
  },[])
  const handleCreateRoom = (e) => {
    e.preventDefault();
    // Create a new room object
    socket.emit("create_room",{roomName:e.target.roomName.value, userId:user._id})
  };

  const handleJoinRoom = (id) => {
    // Implement logic to join the selected room
    // Redirect the user to the room or show a success message
    setPlayerTurn(user._id.toString())
    socket.emit("join_room",{userId:user._id,roomId:id})
    navigate(`/lobby/${id}`)
  };

  return (
    <div className={` min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Chess Lobby
        </h2>
      </div>

      <div className="mt-8 w-full ">
        <div className="bg-white  py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 md:w-1/2 m-auto md:space-y-6" onSubmit={handleCreateRoom}>
            <div>
              <label htmlFor="roomName" className="block text-sm font-medium text-gray-700">
                Room Name
              </label>
              <div className="mt-1">
                <input
                  id="roomName"
                  name="roomName"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Room
              </button>
            </div>
          </form>

        </div>

        <div className="mt-8 w-1/2 m-auto bg-black ">
            {rooms.length > 0 ? (
              <div>
                <h3 className="text-lg font-medium text-white text-center">Available Rooms:</h3>
                <ul className="mt-4 p-10 flex justify-center items-center flex-wrap">
                  {rooms.map((room) => (
                    <li key={room._id} className='m-2'>
                      <button
                        className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleJoinRoom(room._id)}
                      >
                        <img
                          className="h-24 w-24 rounded-md mr-4"
                          src={roomImagePlaceHolder} // Replace with actual chess image URL
                          alt="Chess"
                        />
                        <div>
                          <h2 className="text-lg font-medium text-gray-900">{room.roomName}</h2>
                          <h3 className="text-sm text-gray-500">
                            {room.players.length} player(s) joined
                          </h3>
                          <p className="text-xs text-gray-500">Created: {room.created}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-4 text-gray-600">No rooms available at the moment.</p>
            )}
          </div>
      </div>
    </div>
  );
};

export default Lobby;
