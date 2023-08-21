import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core/";
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

const authService = jasmine.createSpyObj('AuthenticationService', ['logout', 'getPortalUser']);

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, HttpClientTestingModule, MatMenuModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        })],
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthenticationService, useValue: authService }
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })

  }));

  it('Header Menu Loaded Successfully...', () => {
    expect(HeaderComponent).toBeTruthy();
  });

});
