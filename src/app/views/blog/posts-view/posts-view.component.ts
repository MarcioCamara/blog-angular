import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/models/post';

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
  categories: any[] = [];

  public postToSave: Post = {
    uid: '',
    title: '',
    content: '',
    abstract: '',
    favorites: 0,
    likes: 0,
    comments: 0,
    authorImageSource: '',
    authorName: '',
    date: '',
    imageSource: '',
    tags: [],
  };

  constructor(
    private router: Router,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.postsCollection = this.afs.collection<any>('posts');
    this.postsObservable = this.postsCollection.valueChanges();

    this.postsObservable.subscribe((posts) => {
      this.posts = posts;

      for (let i = 0; i < this.posts.length; i++) {
        this.posts[i].dateRaw = moment(this.posts[i].date, 'DD/MM/YYYY HH:mm:ss');
      }

      this.lastPost = this.posts[0];
      this.paginatedPosts = this.posts.slice(0, this.pageSize);

      this.getCategories();
    });
  }

  getCategories() {
    this.categories = [
      {
        title: 'Categorias',
        key: 'categorias',
        expanded: true,
        children: [
          {
            title: 'Programação',
            key: 'programacao',
            expanded: true,
            children: this.categorizePosts('programacao'),
          },
          {
            title: 'Tecnologia',
            key: 'tecnologia',
            expanded: true,
            children: this.categorizePosts('tecnologia'),
          },
        ],
      },
    ];
  }

  categorizePosts(key) {
    const postForCategories: any[] = [];

    for (let i = 0; i < this.posts.length; i++) {
      for (let j = 0; j < this.posts[i].tags.length; j++) {
        if (this.posts[i].tags[j].name === key && this.posts[i].tags[j].checked) {
          const obj: any = {};

          obj.title = this.posts[i].title;
          obj.key = this.posts[i].uid;
          obj.isLeaf = true;
          obj.isPost = true;

          postForCategories.push(obj);
        }
      }
    }
    return postForCategories;
  }

  categoriesClick(event: NzFormatEmitEvent): void {
    if (event.node.origin.isPost) {
      this.goPostDetails(event.node.origin.key);
    } else {
      event.node.isExpanded = !event.node.isExpanded;
    }
  }

  goPostDetails(uid: any) {
    this.router.navigate(['posts', 'details', uid]);
  }

  paginationChange(pageIndex) {
    const pageBegin = (pageIndex - 1) * this.pageSize;
    const pageEnd = (pageIndex * this.pageSize);

    this.paginatedPosts = this.posts.slice(pageBegin, pageEnd);
  }

  likeClick(post) {
    this.afs.collection('posts').doc(post.uid).set({
      uid: post.uid,
      title: post.title,
      content: post.content,
      abstract: post.abstract,
      favorites: post.favorites,
      likes: post.likes + 1,
      comments: post.comments,
      authorImageSource: post.authorImageSource,
      authorName: post.authorName,
      date: post.date,
      imageSource: post.imageSource,
      tags: post.tags,
    });

    // this.postToSave = post;
    // this.postToSave.likes++;
    console.log(this.afs.collection('posts').doc(post.uid).get());
  }
}
