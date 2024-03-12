import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrl: './get-projects.component.scss'
})
export class GetProjectsComponent {
  userId: number;
  constructor(private authService: AuthService) {
    this.userId = this.authService.getUserId();
  }
  
}
