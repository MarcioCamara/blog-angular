import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
})
export class PostsDetailsComponent implements OnInit {
  postUID = '';

  post: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.postUID = this.activatedRoute.snapshot.params.uuid;
    console.log(this.postUID);

    this.afs.collection<any>('posts').valueChanges().subscribe((posts) => {
      this.post = posts.find(post => post.uid === this.postUID);
    });

    console.log(this.post);
  }
}
