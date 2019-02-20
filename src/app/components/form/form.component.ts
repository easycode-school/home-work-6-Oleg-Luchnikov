import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  postForm: NgForm;
  ngOnInit() {
    console.log(this.postForm, 'form');
  }

}
