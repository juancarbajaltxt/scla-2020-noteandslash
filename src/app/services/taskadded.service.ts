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
    this.data = data; 
    console.log(this.data);
  }
  getData(){
    return this.data
  }
}
