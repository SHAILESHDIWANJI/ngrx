import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { adblog, deleteblog, loadBlog, updateblog } from "./blog.actions";
import { BlogModel } from "./blog.model";

const _blogReducer = createReducer(
BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
   
    };
  }),
  on(adblog, (state,action) => {
    const _blog={...action.bloginput}
    _blog.id=state.blogList.length+1
    return {
      ...state,
      blogList:[...state.blogList,_blog]
   
    };
  }),
  on(updateblog, (state,action) => {
    const _blog={...action.bloginput}
    const updateblog=state.blogList.map(blog=>{
      return _blog.id==blog.id?_blog:blog
    })
    return {
      ...state,
      blogList:updateblog
   
    };
  }),
  on(deleteblog, (state,action) => {
    const updateblog=state.blogList.filter((data:BlogModel)=>{
      return data.id!==action.id
    })
    return {
      ...state,
      blogList:updateblog
   
    };
  }),
 
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
