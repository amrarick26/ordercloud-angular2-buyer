import { Component, OnInit } from '@angular/core';
import { MeService } from '@ordercloud/angular-sdk';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: {};
  constructor(private meService: MeService) { }

  ngOnInit() {
    this.meService.Get().subscribe(me => {
      this.currentUser = me;
    })
  }

}
