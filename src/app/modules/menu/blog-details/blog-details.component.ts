import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  post = {
    name: 'Desenvolva e publique um blog usando Angular 8, Firebase e GitHub Pages',
    abstract: 'Nesse tutorial você poderá aprender a criar seu blog usando um dos principais frameworks de SPA do mercado, salvando os posts usando Firebase e publicá-lo totalmente de graça usando GitHub Pages!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Amet volutpat consequat mauris nunc congue nisi. Fames ac turpis egestas sed tempus urna et pharetra. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. A pellentesque sit amet porttitor eget dolor morbi non arcu. Lacus viverra vitae congue eu consequat ac felis donec et. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tellus integer feugiat scelerisque varius morbi enim nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet risus nullam eget felis eget. Eget sit amet tellus cras adipiscing enim eu turpis. Fermentum dui faucibus in ornare quam viverra orci sagittis. Dictum at tempor commodo ullamcorper a lacus. Ultricies leo integer malesuada nunc. Tristique nulla aliquet enim tortor. Sed nisi lacus sed viverra tellus in.
Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Bibendum ut tristique et egestas quis. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Odio morbi quis commodo odio aenean sed adipiscing. Purus in mollis nunc sed id semper risus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Tellus in metus vulputate eu scelerisque. Eros donec ac odio tempor orci dapibus. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tellus pellentesque eu tincidunt tortor aliquam nulla. Eget duis at tellus at. Nibh sit amet commodo nulla. Tempor commodo ullamcorper a lacus. Egestas sed tempus urna et.
Eget aliquet nibh praesent tristique. Ac turpis egestas integer eget aliquet. Fames ac turpis egestas sed. Et molestie ac feugiat sed lectus. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Etiam tempor orci eu lobortis elementum nibh tellus. Nunc aliquet bibendum enim facilisis. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Pulvinar proin gravida hendrerit lectus. Risus nullam eget felis eget nunc lobortis. Duis convallis convallis tellus id interdum velit. Massa massa ultricies mi quis hendrerit. Iaculis eu non diam phasellus vestibulum lorem. Magna eget est lorem ipsum. Suspendisse in est ante in nibh mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Arcu cursus euismod quis viverra nibh cras.
Amet massa vitae tortor condimentum lacinia quis vel eros. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Vitae sapien pellentesque habitant morbi. Lorem ipsum dolor sit amet consectetur adipiscing. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. In eu mi bibendum neque egestas congue. Id interdum velit laoreet id. Purus non enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id. Lectus proin nibh nisl condimentum id venenatis a condimentum. Sem integer vitae justo eget magna fermentum iaculis eu non. Ultricies mi eget mauris pharetra et. Velit scelerisque in dictum non consectetur a. Tellus molestie nunc non blandit massa. Sem viverra aliquet eget sit amet tellus cras adipiscing enim.
Commodo nulla facilisi nullam vehicula. Leo duis ut diam quam nulla porttitor massa. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Elementum sagittis vitae et leo duis ut. Iaculis eu non diam phasellus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Risus nullam eget felis eget nunc. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Neque viverra justo nec ultrices dui sapien. Sed lectus vestibulum mattis ullamcorper velit sed. Etiam non quam lacus suspendisse.`,
    imageSource: 'https://grokonez.com/wp-content/uploads/2019/04/angular-8-firestore-tutorial-crud-angular-fire-feature-image.jpg',
    imageDescription: 'Logo do Framework Angular 8 ao lado esquerdo juntamente com o logo do Firebase do Google',
    tags: [
      {
        name: 'programacao',
        checked: true,
      },
      {
        name: 'tecnologia',
        checked: true,
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

  loadData(post) {
    // AQUI SERÁ FEITO O CARREGAMENTO DE DADOS VIA PAGINATION
  }
}
