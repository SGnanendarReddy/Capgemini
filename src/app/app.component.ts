import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  name = 'Angular';
 public students :any=[];
  // student name,std id, mobile
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  addUser() {
    this.students.push(this.studentForm.value);
    this.studentForm.reset();
  }
  notify(value: any) {
    alert(value);
  }
}
