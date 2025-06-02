import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const LOAD_BLOG_SUCCESS="[blog Page] load blog success"

export const LOAD_BLOG="[blog page] loads blog"

export const loadblog=createAction(LOAD_BLOG)

export const loadblogsuccess=createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>())



export const adblog=createAction('adblog',props<{bloginput:BlogModel}>())
export const updateblog=createAction('updateblog',props<{bloginput:BlogModel}>())
export const deleteblog=createAction('deleteblog',props<{id:number}>())