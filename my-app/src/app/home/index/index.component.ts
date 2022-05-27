import { Posts_Service } from '../../app-info/typescript-angular-client-generated/typescript-angular-client/api/posts_.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private postService: Posts_Service) { }

  ngOnInit() {
this.getPosts()
  }
getPosts(){
  this.postService.postsGet().subscribe({
    next:res=>{
      console.log(res)
    },
    error:err=>{
      console.log(err)
    }
  })
}
}
