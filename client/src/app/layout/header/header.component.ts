import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public isLoggedIn!: boolean;
  @Output() public menuButtonClicked: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public loggedOutClicked: EventEmitter<void> =
    new EventEmitter<void>();
  constructor() {}

  public onClick(): boolean {
    this.loggedOutClicked.emit();
    return false;
  }
}
