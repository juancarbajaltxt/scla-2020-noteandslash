import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTasksPage } from './add-tasks.page';

import { TabsPage } from '../tabs/tabs.page';


const routes: Routes = [
  {
    path: '',
    component: AddTasksPage
  },
  {
    path: 'tabs',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTasksPageRoutingModule {}
