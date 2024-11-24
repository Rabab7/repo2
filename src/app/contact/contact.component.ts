import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isNameFocused = false
  isAgeFocused = false
  isEmailFocused = false
  isPasswordFocused = false

  onFocus(input:string):void{
    if(input === 'name') this.isNameFocused = !this.isNameFocused
    if(input === 'age') this.isAgeFocused = !this.isAgeFocused
    if(input === 'email') this.isEmailFocused = !this.isEmailFocused
    if(input === 'password') this.isPasswordFocused = !this.isPasswordFocused
  }
  

}
