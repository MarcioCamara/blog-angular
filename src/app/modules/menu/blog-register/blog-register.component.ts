import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { UploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-blog-register',
  templateUrl: './blog-register.component.html',
  styleUrls: ['./blog-register.component.scss'],
})
export class BlogRegisterComponent implements OnInit {
  blogForm: FormGroup;

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true,
  };

  fileList: any[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;

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

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpRequestService,
  ) {
    this.blogForm = this.fb.group({
      name: ['', [Validators.required], [this.nameAsyncValidator]],
      status: ['0', [Validators.required]],
      recurrent: ['0', [Validators.required]],
      real_price: ['', [Validators.required]],
      month: ['', [Validators.required]],
      note: [''],
    });
  }

  ngOnInit() {
  }

  // Form Component
  submitForm(value: any): void {
    for (const key in this.blogForm.controls) {
      this.blogForm.controls[key].markAsDirty();
      this.blogForm.controls[key].updateValueAndValidity();
    }

    // SALVAR DADOS AQUI

    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();

    this.blogForm.reset();
    for (const key in this.blogForm.controls) {
      this.blogForm.controls[key].markAsPristine();
      this.blogForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.blogForm.controls.confirm.updateValueAndValidity());
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

  // Upload Component
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  saveBlogImage() {
    console.log('AQUI DEVE SALVAR A IMAGEM NO FIRESTORE');
  }

  // Tags Component
  checkChange(e: boolean): void {
    console.log(e);
  }
}
