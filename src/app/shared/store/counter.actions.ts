import { createAction, props } from "@ngrx/store";

export const increament=createAction('increament')
export const decreament=createAction('decreament')
export const reset=createAction('reset')
export const customIncrement=createAction('customincrement',props<{value:number,action:string}>())

// export const customIncrement = createAction(
//     ' Custom Increment',
//     props<{ value: number }>()
//   );