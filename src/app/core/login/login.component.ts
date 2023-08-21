
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { LoginFormComponent } from './login-form/login-form.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  static id = 'Login';

  submitted = false;
  loginForm: FormGroup;
  userObj: any;
  loginerr = "";
  destroy$: Subject<boolean> = new Subject<boolean>();
  result: string | undefined;

  constructor(private router: Router, private formBuilder: FormBuilder, public translate: TranslateService, private dialogService: DialogService) {

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    // const browserLang = navigator.language;
    console.log("********* browserLang ********** : " + JSON.stringify(browserLang));

    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.AzureService.getUserCountry().pipe(takeUntil(this.destroy$)).subscribe((data) => {
    //   console.log("********** Get User Country ********* " + JSON.stringify(data));
    //   let userCountryObj = data;
    //   console.log("Country Code : " + userCountryObj['countryCode'])
    // })
  }

  doLogin() {
console.log("hi");
    const dialog: DialogRef = this.dialogService.open({
    
      content: LoginFormComponent,
     
      // height: 400,
      width: 480,
      minWidth: 350,
    });

    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log("close");
      } else {
        console.log("action", result);
      }
      this.result = JSON.stringify(result);
    });
  
    // this.authService.login();

    // this.router.navigate(['./portal/dashboard']);



    // if (this.loginForm.invalid) {
    //   return;
    // }

    // try {
    //   this.authService.getUser(loginData.username).pipe(takeUntil(this.destroy$)).subscribe((data) => {
    //     this.userObj = data[0];
    //     console.log("userObj : " + JSON.stringify(this.userObj));
    //     if (this.userObj) {
    //       this.authService.setPortalUser(this.userObj);
    //       this.router.navigate(['/dashboard']);
    //     } else {
    //       this.loginerr = 'User Not Found';
    //       console.log(this.loginerr);
    //     }
    //   })
    // } catch (e) {
    //   console.log(e);
    // }

  }
  
  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    console.log("setting in local Storage", localStorage.getItem)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
