import { Component, OnInit } from '@angular/core';
import { PopoverController,} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.page.html',
  styleUrls: ['./add-tasks.page.scss'],
})
export class AddTasksPage  {
  constructor(private popover: PopoverController) { 
   }

   CreatePopover()
  {
  this.popover.create({component:PopoverComponent, showBackdrop:false}).then((popoverElement)=>{
  popoverElement.present();
        })     
  } 
}
