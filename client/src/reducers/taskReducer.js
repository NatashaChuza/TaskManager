import {
  SET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_CURRENT_TASK,
  COMPLETE_TASK,
  START_TASK,
  CLEAR_CURRENT_TASK
} from "../actions/types";
import cloneDeep from 'lodash/cloneDeep';

const initialState = {
  tasks: [],
  currentTask: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:      
      return Object.assign(
        {},
        {
          ...state,
          tasks: state.tasks.filter((task) => task._id !== action.payload),
        }
      );
    case CREATE_TASK:
        return Object.assign(
            {},
            {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
        );
    case UPDATE_TASK:
        let taskIndex = state.tasks.findIndex(task => task._id == action.payload.id)
        const newTasks = cloneDeep(state.tasks)
        newTasks[taskIndex] = action.payload
        console.log(taskIndex)
        return{
          ...state,
          tasks: newTasks
        }
    case COMPLETE_TASK:
      const completeIndex = state.tasks.findIndex( el => el._id === action.payload)
        const newTasksComplete = [...state.tasks]
        newTasksComplete[completeIndex].status = "done"
        return Object.assign(
            {},
            {
                ...state,
                task: newTasksComplete
            }
        );
    case START_TASK:
          const startIndex = state.tasks.findIndex( el => el._id === action.payload)
            const newTasksStart = cloneDeep(state.tasks)
            newTasksStart[startIndex].status = "in progress"
            return{
              ...state,
              tasks: newTasksStart
            }
    case CLEAR_CURRENT_TASK:
      return{
        ...state,
        currentTask: ""
      }
    default: 
       return state
  }
}
