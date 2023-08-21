import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateModule, TranslateService, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core/";
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { By } from '@angular/platform-browser';

const authService = jasmine.createSpyObj('AuthenticationService', ['login']);

describe('Login Component Isolated Test', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: authService }
      ],
      declarations: [LoginComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
      })

  }));
 
  it('Component successfully created', () => {
    expect(component).toBeTruthy();
  });


  it('should call doLogin() on clicking login', async () => {
    // component.ngOnInit();
    const loginSpy = spyOn(component, 'doLogin')
    let btn = fixture.debugElement.query(By.css('.login-button'));
    btn.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(loginSpy).toHaveBeenCalled();
    });
  });


  it('should call login() form auth service on clicking login', async () => {
    // component.ngOnInit();
    // const loginSpy = spyOn(component.authService, 'login')
    let btn = fixture.debugElement.query(By.css('.login-button'));
    btn.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(authService.login).toHaveBeenCalled();
    });
  });
});
