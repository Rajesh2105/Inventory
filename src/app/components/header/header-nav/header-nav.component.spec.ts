// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeaderNavComponent } from './header-nav.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatMenuModule } from '@angular/material/menu';
// import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
// import { AuthenticationService } from 'src/app/shared/services/authentication.service';
// import { By } from '@angular/platform-browser';
// import { Router } from "@angular/router";
// import { fakeAsync, tick } from "@angular/core/testing";
// import { Location } from "@angular/common";
// // import { routes } from "../../../../app-routing.module";
// import { MsalService, MsalModule, BroadcastService } from '@azure/msal-angular';
// import { DebugElement } from '@angular/core';
// import { AppInsightsService } from 'src/app/shared/services/app-insights.service';
// import { AppModule } from 'src/app/app.module';
// import { TransactionComponent } from 'src/app/modules/transaction/transaction.component';
// import { ActionsComponent } from 'src/app/modules/actions/actions.component';
// import { DocumentsComponent } from 'src/app/modules/documents/documents.component';
// import { InvestmentComponent } from 'src/app/modules/investment/investment.component';
// import { HoldingsComponent } from 'src/app/modules/holdings/holdings.component';

// class MockMsalService {

//   setLogger = (logger) => {
//     console.log('Msal logging')
//   }

//   handleRedirectCallback = ((callback) => {
//     return true
//   })

//   getAccount() {
//     return { userName: 'TestUser' }
//   }
// }

// let msalService = new MockMsalService();

// const authService = jasmine.createSpyObj('AuthenticationService', ['logout', 'getPortalUser']);

// describe('HeaderNavComponent', () => {
//   let component: HeaderNavComponent;
//   let fixture: ComponentFixture<HeaderNavComponent>;
//   let location: Location;
//   let router: Router;
//   let debugElement: DebugElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes([
//         { path: 'transactions', component: TransactionComponent },
//         { path: 'actions', component: ActionsComponent },
//         { path: 'documents', component: DocumentsComponent },
//         { path: 'investments', component: InvestmentComponent },
//         { path: 'holdings', component: HoldingsComponent }
//  ]), BrowserAnimationsModule, HttpClientTestingModule, MatMenuModule,
//       TranslateModule.forRoot({
//         loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
//       })],
//       declarations: [HeaderNavComponent],
//       providers: [
//         { provide: AuthenticationService, useValue: authService },
//         { provide: MsalService, useFactory: () => { return msalService } }
//       ],
//     })
//     // .overrideModule(TransactionModule, {
//     //   remove: {
//     //     imports: [MsalModule],
//     //   },
//     //   add: {
//     //     providers: [
//     //       { provide: MsalService, useFactory: () => { return msalService } },
//     //       { provide: AuthenticationService, useFactory: () => { return authService } },
//     //       { provide: Router, useValue: router }
//     //     ]
//     //   }
//     // })
//       .compileComponents()
//       .then(() => {
//         router = TestBed.get(Router);
//         location = TestBed.get(Location);
//         router.initialNavigation();
//         fixture = TestBed.createComponent(HeaderNavComponent);
//         debugElement = fixture.debugElement;
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//       })

//   }));

//   it('Header Menu Loaded Successfully...', () => {
//     expect(HeaderNavComponent).toBeTruthy();
//   });

//   it('should call logout on clicking sign out from profile menu', () => {
//     component.ngOnInit();
//     const loginSpy = spyOn(component, 'logout')
//     let menuTrigger = fixture.debugElement.query(By.css('.header-profile button'));
//     // let menu = fixture.debugElement.query(By.css('mat-menu'));
//     menuTrigger.triggerEventHandler('click', 'menu');
//     fixture.detectChanges();

//     // fixture.whenStable().then(() => {

//     // console.log('Menu:',menu);
//     let btn = fixture.debugElement.query(By.css('.header-signout'));
//     btn.triggerEventHandler('click', null);

//     fixture.detectChanges();
//     expect(loginSpy).toHaveBeenCalled();
//     // });
//   });


//   it('should call logout() form auth service on clicking sign out from profile menu', () => {
//     component.ngOnInit();
//     let menuTrigger = fixture.debugElement.query(By.css('.header-profile button'));
//     menuTrigger.triggerEventHandler('click', 'menu');
//     fixture.detectChanges();
//     let btn = fixture.debugElement.query(By.css('.header-signout'));
//     btn.triggerEventHandler('click', null);

//     fixture.detectChanges();
//     expect(authService.logout).toHaveBeenCalled();
//   });

//   it('should navigate to transactions', fakeAsync(() => {

//     debugElement
//       .query(By.css('.icon-transaction'))
//       .nativeElement.click();
//     //We wait for all pending promises to be resolved.
//     tick();
//     expect(location.path()).toBe('/transactions');

//   }));

//   it('should navigate to actions', fakeAsync(() => {

//     debugElement
//       .query(By.css('.icon-task'))
//       .nativeElement.click();
//     tick();
//     expect(location.path()).toBe('/actions');

//   }));

//   it('should navigate to documents', fakeAsync(() => {

//     debugElement
//       .query(By.css('.icon-book'))
//       .nativeElement.click();
//     //We wait for all pending promises to be resolved.
//     tick();
//     expect(location.path()).toBe('/documents');

//   }));

//   it('should navigate to investment', fakeAsync(() => {

//     debugElement
//       .query(By.css('.icon-investment'))
//       .nativeElement.click();
//     tick();
//     expect(location.path()).toBe('/investments');

//   }));

//   it('should navigate to holdings', fakeAsync(() => {

//     debugElement
//       .query(By.css('.icon-holdings'))
//       .nativeElement.click();
//     //We wait for all pending promises to be resolved.
//     tick();
//     expect(location.path()).toBe('/holdings');

//   }));
// });
