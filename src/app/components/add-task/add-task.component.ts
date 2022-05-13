import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService } from '../../service/ui.service';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor( private UIService: UIService) { 
    this.subscription = this.UIService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.text.length === 0) {
      alert("Please enter a task");
      return;
    }
    const { text, day, reminder } = this;
    const newTask = { text, day, reminder };

    this.onAddTask.emit(newTask);
  }

}
