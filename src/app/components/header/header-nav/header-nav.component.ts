import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  LoggedInUserObj: any;
  transactions: any;
  LoggedInUserName = "";

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  show: boolean = false;
  showActions: boolean = false;
  messages: any[] = [];
  messagesCopy: any[] | undefined;
  exclusions: any[] = [];
  unreadMessages: number = 0;

  billActions: any[] = [];
  billActionsCount: number = 0;

  public expanded = false;

  public selected: number = 0;

  public items: any[] = [
    { text: 'Bill Payment', count: 1, icon: 'k-i-inbox', selected: true },
    // { text: 'Documents', icon: 'k-i-bell' },
    { text: 'System Updates', count: 0, icon: 'k-i-calendar' }
  ];

  constructor(

    private router: Router
  ) { }

  ngOnInit(): void {
    // this.LoggedInUserObj = this.authService.getPortalUser();

    if (this.LoggedInUserObj) {
      console.log("LoggedInUserObj : " + JSON.stringify(this.LoggedInUserObj));
      console.log('Email : ' + this.LoggedInUserObj.email);
      this.LoggedInUserName = this.LoggedInUserObj.name;
      // this.getTransactionsByUser(this.LoggedInUserObj.email);

    }

  




  }

  logout() {

  }
  onSearch(searchTerm: string) {

  }

  toggleSideBarFun() {
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }


  public onToggle(): void {
    this.show = !this.show;
    this.selected = 0;
    if (this.showActions) this.showActions = false;
  }

  public onToggleActions(): void {
    this.showActions = !this.showActions;
    if (this.show) this.show = false;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.show = false;
    this.showActions = false;
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.index;
  }

}
