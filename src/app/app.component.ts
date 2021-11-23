import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title = 'to-do-list';
    isContent:boolean=true;
    public items : any = [];
    public newTask:any;
    public addToList() {
        if (this.newTask == '') 
        {
            this.isContent=false;
        }
        else 
        {
            this.items.push(this.newTask);
            this.newTask = '';
        }
    }
}
