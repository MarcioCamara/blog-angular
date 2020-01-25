import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss'],
})
export class PostsViewComponent implements OnInit {
  public lastPost: any;
  public pageSize = 2;

  private postsCollection: AngularFirestoreCollection<any>;
  postsObservable: Observable<any[]>;
  posts: any[];
  paginatedPosts: any[];

  categories = [
    {
      title: 'Categorias',
      key: 'categorias',
      expanded: true,
      children: [
        {
          title: 'Programação',
          key: 'programacao',
          expanded: true,
          children: [
            { title: 'Lorem ipsum dolor sit amet', key: 'lorem', isLeaf: true },
            { title: 'consectetur adipiscing elit', key: 'consectetur', isLeaf: true },
            { title: 'sed do eiusmod tempor incididunt', key: 'sed', isLeaf: true },
          ],
        },
        {
          title: 'Tecnologia',
          key: 'tecnologia',
          expanded: true,
          children: [
            { title: 'Lorem ipsum dolor sit amet', key: 'ipsum', isLeaf: true },
            { title: 'consectetur adipiscing elit', key: 'adipiscing', isLeaf: true },
            { title: 'sed do eiusmod tempor incididunt', key: 'eiusmod', isLeaf: true },
          ],
        },
      ],
    },
  ];

  constructor(
    private router: Router,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.postsCollection = this.afs.collection<any>('posts');
    this.postsObservable = this.postsCollection.valueChanges();

    this.postsObservable.subscribe((posts) => {
      this.posts = posts;

      for (let i = 0; i < this.posts.length; i++) {
        this.posts[i].dateRaw = moment(this.posts[i].date, 'DD/MM/YYYY HH:mm:ss');
      }

      this.lastPost = this.posts[0];
      this.paginatedPosts = this.posts.slice(0, this.pageSize);
    });
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  goPostDetails(post: any) {
    this.router.navigate(['posts', 'details', post.uid]);
  }

  paginationChange(pageIndex) {
    const pageBegin = (pageIndex - 1) * this.pageSize;
    const pageEnd = (pageIndex * this.pageSize);

    this.paginatedPosts = this.posts.slice(pageBegin, pageEnd);
  }
}
