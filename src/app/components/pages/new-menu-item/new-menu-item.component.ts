import { RestaurantService } from './../../shared/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-menu-item',
  templateUrl: './new-menu-item.component.html',
  styleUrls: ['./new-menu-item.component.scss'],
})
export class NewMenuItemComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private service: RestaurantService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  submit() {
    this.service.postMenuItem(this.form.value).subscribe((res) => {
      this.router.navigate(['/menu']);
      // do something after new item is created
    });
  }
}
