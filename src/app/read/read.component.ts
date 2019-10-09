import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Store, Select } from '@ngxs/store';
import { RemoveTutorial } from '../actions/tutorial.action';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {

  // tutorials$: Observable<Tutorial>;
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {
  }

}
