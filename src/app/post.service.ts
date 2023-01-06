import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from './post.module'
import { map } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostsServices{
    subscribe: any;
    

    constructor(private http:HttpClient){}

    createAndStorePost(title:string,content:string){
       const postData: Post = {title :title, content : content}  
        //...
        this.http.post<{name:string}>("https://http-request-225ae-default-rtdb.firebaseio.com/posts.json", 
    postData).subscribe(responseData=>{
      console.log(responseData);
    });
    }

    fetchposts(){
       return this.http.get<{[key:string]: Post}>("https://http-request-225ae-default-rtdb.firebaseio.com/posts.json")
        .pipe(map((responseData)=>{
          const postArray: Post[] = [];
          for (const key in responseData){
            if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key], id:key})
            console.log(postArray)
              
              
            }
          }
          return postArray;
        }))
      }
    }



