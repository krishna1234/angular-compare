import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: any[] = [];
  startTime!: number;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.startTime = performance.now();
    this.apiService.getData().subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngAfterViewInit(): void {
    const endTime = performance.now();
    const timeTaken = endTime - this.startTime;
    console.log(`Time taken to render table: ${timeTaken} milliseconds`);
  }
}
