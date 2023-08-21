import { Component } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
import { LoginFormComponent } from './core/login/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NeoBar';


  constructor(private dialogService: DialogService) {}

  public openDialogForm(): void {
    const dialogRef = this.dialogService.open({
      content: LoginFormComponent,
    });

    const userInfo = dialogRef.content.instance as LoginFormComponent;
    userInfo.name = "Admin";
    userInfo.age = 42;

    type NewType = string;

    // dialogRef.result.subscribe((r: { [key: NewType]: string }) => {
    //   console.log(r);
    //   if (r['text'] === "Yes") {
    //     console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
    //   }
    // });
  }
}
