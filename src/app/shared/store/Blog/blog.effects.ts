import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { MasterService } from "../master.service";
import {createEffect} from "@ngrx/effects"
import { LOAD_BLOG, loadblogsuccess } from "./blog.actions";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
@Injectable()

export class BlogEffect{
    constructor (private action$:Actions,private service:MasterService){}

    _blog=createEffect(()=>
    this.action$.pipe(
        ofType(LOAD_BLOG),
        exhaustMap(()=>{
            return this.service.getAllBlogs().pipe(
                map((data)=>{
                    return loadblogsuccess({bloglist:data})
                }),
                catchError(()=>EMPTY)
            )
        })
    )
    )
}