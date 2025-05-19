import { Component,EventEmitter, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// } or create an interface

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // e important sa specificam tipul de data altfel putem emite orice tip de valoare/data
  // We use object instead of separate values
  //@Input({required: true}) id!: string;
  //@Input({required: true}) avatar!: string; // decorator aproach 
  //@Input({required: true}) name!: string;
  

  // output as function
  //selectOutput = output<string>();
  // inputs as signals
  //avatarSignal = input.required<string>(); // type of value that is received by input
  //nameSignal = input.required<string>();


  //selectedUser = DUMMY_USERS[randomIndex]; -- state change 
  // using signal
  //selectedUser = signal(DUMMY_USERS[randomIndex]); -- signal
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) -- signal

  get imagePath() {
     return 'assets/users/' + this.user.avatar;
  }
  

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) -- signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]) -- signal
    //this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }

}
