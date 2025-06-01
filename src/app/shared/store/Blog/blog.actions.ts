import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";


export const loadBlog=createAction("loadBlog")

export const adblog=createAction('adblog',props<{bloginput:BlogModel}>())
export const updateblog=createAction('updateblog',props<{bloginput:BlogModel}>())
export const deleteblog=createAction('deleteblog',props<{id:number}>())