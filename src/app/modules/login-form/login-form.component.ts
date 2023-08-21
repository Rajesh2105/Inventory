import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
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
constructor(private route:ActivatedRoute,private router:Router) { }
  // constructor(@Inject(Router) private router: Route, private route:ActivatedRoute) {
  //   // super(dialog);
  // }

  ngOnInit(): void {
    
  //   this.formGroup = this.formBuilder.group({
  //     age: [this.age],
  //     name: [this.name, Validators.required]
  // });
  }
  public submitForm(): void {
    console.log("Form is valid : ", this.registerForm.valid);
    this.registerForm.markAllAsTouched();
    // this.route.navigate(['defualt']);

}

public clearForm(): void {
    this.registerForm.reset();
}
}
