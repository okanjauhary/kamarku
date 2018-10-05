import axios from 'axios';

export function fetchRoom(){
  return {
    type: "FETCH_ROOM",
    payload: axios.get('http://192.168.0.22:8000/api/rooms')
  }
}

export function getRoom(id){
  return {
    type: "GET_ROOM",
    payload: axios.get(`http://192.168.0.22:8000/api/rooms/${id}`)
  }
}