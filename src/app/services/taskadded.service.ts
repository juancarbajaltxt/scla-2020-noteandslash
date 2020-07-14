import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskaddedService 
{private data: any;  

  constructor() {}
  asdf(){
this.data.input2=this.data.input  
  } 
  setData(data){
    // pushing to empty object
    if( this.data == undefined){
      this.data= data; 
      console.log(this.data);
    }
    // adding to already existent list
    else{
      var x = Object.keys(this.data).length;
      console.log(x);
      var taski = "task" + x;
      console.log(taski);
      this.data[taski] = data.task;
      console.log(this.data);
    }
    
  }
  getData(){
    return this.data
  }
}
