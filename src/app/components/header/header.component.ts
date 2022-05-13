import { Component, OnInit } from '@angular/core';
import { UIService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Task List';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor(private UIService: UIService, private router: Router) {
    this.subscription = this.UIService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.UIService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
