import { blogReducer } from "../Blog/blog.reducers";
import { counterReducer } from "../counter.reducer";

export const AppState={
    counter:counterReducer,
    blog:blogReducer
}