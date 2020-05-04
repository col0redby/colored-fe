import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnInit,
  Output,
  TrackByFunction,
  ViewChild
} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Comment} from '../../models/user-actions.model';
import {CommentAction} from '../../models/like-action.model';

@Component({
  selector: 'colored-comments-block',
  templateUrl: './comments-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('inputMessage', {static: false})
  private inputMessage: ElementRef;

  @Input() messages: Comment[];
  @Output() sendComment = new EventEmitter();

  users = [
    {
      username: 'Nick Nick',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa doloribus ipsa minima nemo nobis\n' +
        '            nulla quaerat ut. Nesciunt, voluptates.',
      date: '2020-05-30',
      outgoing: false
    },
    {
      username: 'Nick Nick',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa doloribus ipsa minima nemo nobis\n' +
        '            nulla quaerat ut. Nesciunt, voluptates.',
      date: '2020-05-30',
      outgoing: true
    },
    {
      username: 'Nick Nick',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa doloribus ipsa minima nemo nobis\n' +
        '            nulla quaerat ut. Nesciunt, voluptates.',
      date: '2020-05-30',
      outgoing: false
    }
  ];
  private users$: Observable<any>;

  trackByMessage: TrackByFunction<any> = (index, item) => item.username;

  constructor() {
  }

  ngOnInit() {
    this.users$ = of(this.users);
  }

  addMessage($event: any) {
    if ($event.ctrlKey && $event.key === 'Enter') {
      this.inputMessage.nativeElement.value += '\n';
      return;
    }
    if ($event.key === 'Enter') {
      this.inputMessage.nativeElement.blur();
      const comment: CommentAction = {
        userId: 1,
        text: this.inputMessage.nativeElement.value
      };
      this.inputMessage.nativeElement.value = '';
      this.sendComment.emit(comment);
      return;
    }
  }

  ngAfterViewInit(): void {
    this.inputMessage.nativeElement.addEventListener('keypress', this.addMessage(this));
  }
}
