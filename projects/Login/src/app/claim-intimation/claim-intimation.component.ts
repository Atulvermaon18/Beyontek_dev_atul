import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-intimation',
  templateUrl: './claim-intimation.component.html',
  styleUrls: ['./claim-intimation.component.css']
})
export class ClaimIntimationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  newclaimFn() {
    this.router.navigate(['/newclaim']);
  }
}
