import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page'; 

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.page.html',
  styleUrls: ['./add-tasks.page.scss'],
})
export class AddTasksPage  {
  
  constructor(private popover:PopoverController) 
  {
  
  }
}
