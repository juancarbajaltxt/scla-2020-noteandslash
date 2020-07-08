import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.page.html',
  styleUrls: ['./add-tasks.page.scss'],
})
export class AddTasksPage implements OnInit {
  myDate = new Date().toISOString();
  customPickerOptions: any;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  constructor() { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  dateChanged(date) {
    console.log(date.detail.value);
    console.log(this.myDate);
  }
}
  }

  ngOnInit() {
  }

}
