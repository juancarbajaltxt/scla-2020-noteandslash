import { Component, OnInit } from '@angular/core';
import { TaskaddedService } from '../services/taskadded.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit { 
  data: any; 
  constructor(private TaskaddedService: TaskaddedService) { var plus=this.TaskaddedService.getData();
    console.log(plus); }
  anywhere={}
  input2= {} 
  input3={input4:this.input2}

  // add: string = ""; 
 // mirrorData = {} 
 // taskplus(){
  //  this.mirrorData = {mirrodata: this.add};
    // this.TaskaddedService.setData( this.mirrorData);
 // } 


  public form = [
    { val: '', isChecked: false },

  ];
  Addtask() {
    this.form.push(
      { val: ' ', isChecked: false },
    )
  }
  ngOnInit() {
  //   this.TaskaddedService.getData (); 
  //   this.TaskaddedService.setData (this.input2); 
    var plus=this.TaskaddedService.getData();
    console.log(plus);
  } 
  }