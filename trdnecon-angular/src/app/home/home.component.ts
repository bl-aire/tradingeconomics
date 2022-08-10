import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: any;
  posts: any[];
  sub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.dataService.getData().subscribe({
      next: posts => {
        this.posts = posts;
      },
      error: err => this.errorMessage = err
    });
  }

}
