import {
  SET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_CURRENT_TASK,
  COMPLETE_TASK,
  START_TASK
} from "../actions/types";

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
          tasks: state.tasks.filter((task) => task.id !== action.payload),
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
    
        let taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)
        const newTasks = [...state.tasks]
        newTasks[taskIndex] = action.payload
        return Object.assign(
            {},
            {
                ...state,
                task: newTasks
            }
        )
    case COMPLETE_TASK:
      const completeIndex = state.tasks.findIndex( el => el.id === action.payload.id)
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
          const startIndex = state.tasks.findIndex( el => el.id === action.payload.id)
            const newTasksStart = [...state.tasks]
            newTasksStart[startIndex].status = "in progress"
            return Object.assign(
                {},
                {
                    ...state,
                    task: newTasksStart
                }
            );
    default: 
       return state
  }
}
