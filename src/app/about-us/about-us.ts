
import { HttpClient} from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { User } from '../services/user';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss'],
})


export class AboutUs implements OnInit  {
 users: any[] = [];

  constructor(private userService: User) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.users = data;
      },
      error: (err: any) => {
        console.error('Failed to fetch users', err);
      }
    });
  }
}
