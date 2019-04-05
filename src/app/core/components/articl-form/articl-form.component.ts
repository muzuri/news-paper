import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';



@Component({
  selector: 'app-articl-form',
  templateUrl: './articl-form.component.html',
  styleUrls: ['./articl-form.component.css']
})
export class ArticlFormComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
