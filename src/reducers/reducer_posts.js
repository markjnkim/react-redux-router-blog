import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data); 
      // OBJECT CONVERSION  [post1, post2]   ->
      // { 4: post }  USING LODASH very NICE
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
    // action.payload.data is the post we want to fetch
    // using the cache of posts already fetched
    // action is from axios
    // adding new post to current cache state

    // const post = action.payload.data;
    // const newState = { ...state };
    // // post is now id
    // this creates { id:post }
    // newState[post.id] = post;
    // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}