import { Component, OnInit } from '@angular/core';
import { PopoverController,} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { TaskaddedService } from '../services/taskadded.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.page.html',
  styleUrls: ['./add-tasks.page.scss'],
})
export class AddTasksPage  {
  input: string ="";
  added(){
    console.log(this.input);
  this.TaskaddedService.setData(this.input); 
  // this.TaskaddedService.asdf(); 
  }

  constructor(private popover: PopoverController, private TaskaddedService: TaskaddedService) { 
   }

   CreatePopover()
  {
    this.added();
  this.popover.create({component:PopoverComponent, showBackdrop:false}).then((popoverElement)=>{
  popoverElement.present();
        })     
  } 
}
