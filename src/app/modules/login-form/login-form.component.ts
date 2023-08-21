import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit{
  @Input() public userName: string | undefined;
  @Input() public password: string | undefined;
  public formGroup: FormGroup | undefined;
  public registerForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    acceptNews: new FormControl()
});
  formBuilder: any;
  name: string | undefined;
  age: number | undefined;
  constructor(private router:Router) {
    // super(dialog);
  }

  ngOnInit(): void {
    
 
  }
  public submitForm(): void {
    console.log("Form is valid : ", this.registerForm.valid);
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){
    this.router.navigate(['default']);
    }
}

public clearForm(): void {
    this.registerForm.reset();
}
}