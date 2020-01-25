import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error403',
  templateUrl: './error403.component.html',
  styleUrls: ['./error403.component.scss']
})
export class Error403Component implements OnInit {
  public errorCode = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.errorCode = this.activatedRoute.snapshot.params.error;

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 3000);
  }

}
