import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

const playerInitialState = {
   title: 'Store Scoreboard',
   players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4}
   ]
}

let playerId = 4;
const playerReducer = (state = playerInitialState, action) => {
   switch(action.type){
      case UPDATE_TITLE:
         return{
            ...state,
            title: action.title
         }
      case ADD_PLAYER:
         return{
            ...state,
            players: [
              ...state.players,
               { name: action.name, score: 0, id: ++playerId }
            ]
         }
      case CHANGE_SCORE:
         state.players.forEach(item => {
            if(item.id === action.index){
               item.score += action.score;
            }
         })
         return{
            ...state,
            players: [
              ...state.players
            ]
         }
      case REMOVE_PLAYER:
         return{
            ...state,
            players: state.players.filter(player => player.id !== action.id)
         }
      default:
         return state;
   }
}

const allReducers = combineReducers({playerReducer});

export const store = createStore(allReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);