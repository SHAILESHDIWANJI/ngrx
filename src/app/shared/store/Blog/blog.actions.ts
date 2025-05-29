import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";


export const loadBlog=createAction("loadBlog")

export const adblog=createAction('adblog',props<{bloginput:BlogModel}>())