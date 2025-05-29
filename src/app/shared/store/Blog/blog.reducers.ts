import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { adblog, loadBlog } from "./blog.actions";

const _blogReducer = createReducer(
BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
   
    };
  }),
  on(adblog, (state,action) => {
    const _blog={...action.bloginput}
    _blog.id=state.blogList.length
    return {
      ...state,
      blogList:[...state.blogList,_blog]
   
    };
  }),
 
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
