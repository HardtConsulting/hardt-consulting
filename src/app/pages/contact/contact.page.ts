import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactusForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
  ) {
    this.contactusForm = this.builder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.email]),
      query: new FormControl(null, [Validators.required, Validators.minLength(25), Validators.maxLength(5000)]),
    });
  }

  ngOnInit() {
  }

}
