import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { NewOrPrevSessionService } from '../../services/sessions/new-or-prev-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserHistoryComponent, UserProgressComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  currentState: any;

  constructor(private NewOrPrevSessionService: NewOrPrevSessionService, private router: Router) {
    this.currentState = this.NewOrPrevSessionService.getState();
  }

  public getPreviousSession = () => {
    this.NewOrPrevSessionService.setState('current');
    console.log('current')
    this.currentState = this.NewOrPrevSessionService.getState();
    this.router.navigate(['/question'])
  }
  public getNewSession = () => {
    this.NewOrPrevSessionService.setState('new');
  }

}
