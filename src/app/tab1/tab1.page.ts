import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }


  public form = [
    { val: 'Task 1', isChecked: true },
    { val: 'Task 2', isChecked: false },

  ];
  Addtask() {
    this.form.push(
      { val: 'New task', isChecked: false },
    )
  }

  }
