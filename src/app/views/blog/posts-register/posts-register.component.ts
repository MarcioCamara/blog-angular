import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import * as uuid from 'uuid';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-posts-register',
  templateUrl: './posts-register.component.html',
  styleUrls: ['./posts-register.component.scss'],
})
export class PostRegisterComponent implements OnInit {
  @ViewChild('file', { static: false }) file: ElementRef;

  public loading = false;

  postForm: FormGroup;
  postTitle = '';
  arquivo: any = {};

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

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true,
  };

  downloadURL: string;
  // uploadPercent: Observable<number>;
  uploadPercent: number;

  tags: any[] = [
    {
      name: 'programacao',
      checked: true,
    },
    {
      name: 'tecnologia',
      checked: true,
    },
  ];

  summernoteConfig = {
    lang: 'pt-BR',
    placeholder: 'Discorra sobre o assunto',
    tabsize: 2,
    height: 300,
    uploadImagePath: '',
    toolbar: [
      // [groupName, [list of button]]
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'link', 'hr']],
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times'],
  };

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private message: NzMessageService,
    private storage: AngularFireStorage,
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      abstract: [null, [Validators.required]],
    });
  }

  async uploadFile(event) {
    this.postToSave.uid = uuid.v4();

    window.scroll(0, 0);
    this.loading = true;

    console.log(event.target.files[0]);
    this.arquivo.name = event.target.files[0].name;
    this.arquivo.size = event.target.files[0].size;
    this.arquivo.lastModifiedDate = moment(event.target.files[0].lastModifiedDate).format('DD/MM/YYYY HH:mm:ss');
    this.arquivo.type = event.target.files[0].type;

    const filePath = `posts/${this.postToSave.uid}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, event.target.files[0]);

    task.snapshotChanges().pipe(finalize(async () => {
      this.downloadURL = await fileRef.getDownloadURL().toPromise();
      task.percentageChanges().subscribe((percentage) => {
        this.uploadPercent = percentage;
      });
      console.log(this.downloadURL);
      this.loading = false;
    })).subscribe();

    console.log('downloadURL', this.downloadURL);
    console.log('FILE', event);
  }

  submitForm(): void {
    const sendMessageId = this.message.loading('Enviando dados...', { nzDuration: 3000 }).messageId;

    for (const i in this.postForm.controls) {
      this.postForm.controls[i].markAsDirty();
      this.postForm.controls[i].updateValueAndValidity();
    }

    if (this.postForm.invalid) {
      this.message.remove(sendMessageId);
      this.message.error('Revise os campos e tente novamente!', { nzDuration: 3000 });
      return;
    }

    this.postToSave = Object.assign(this.postToSave, this.postForm.getRawValue());

    this.postToSave.imageSource = this.downloadURL;
    this.postToSave.favorites = 0;
    this.postToSave.likes = 0;
    this.postToSave.comments = 0;
    this.postToSave.authorImageSource = this.authService.user.photoURL;
    this.postToSave.authorName = this.authService.user.displayName;
    this.postToSave.date = moment().format('DD/MM/YYYY HH:mm:ss');
    this.postToSave.tags = [];

    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i].checked) {
        this.postToSave.tags.push(this.tags[i]);
      }
    }

    const postsCollection = this.afs.collection<Post>('posts');

    console.log(this.postToSave);
    try {
      postsCollection.add(this.postToSave);
      this.message.success('Dados salvos com sucesso!', { nzDuration: 3000 });

      this.file.nativeElement.value = '';

      for (const i in this.postForm.controls) {
        this.postForm.controls[i].setValue(null);
      }

      this.router.navigate(['posts', 'view']);
    } catch (e) {
      this.message.error('Algo deu errado! Contate o administrador do sistema!', { nzDuration: 3000 });
      console.log('ERRO AO SALVAR', e);
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();

    this.postForm.reset();
    for (const key in this.postForm.controls) {
      this.postForm.controls[key].markAsPristine();
      this.postForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.postForm.controls.confirm.updateValueAndValidity());
  }

  nameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === '_REPETIDA') {
          // TODO implementar aqui lógica para caso a despesa cadastrada tenha o mesmo
          // nome de uma despesa já cadastrada para o mesmo mês, apresente esse erro de duplicidade
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    })

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    }

    return { confirm: true, error: true };
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  checkChange(e: boolean): void {
    console.log(e);
  }
}
