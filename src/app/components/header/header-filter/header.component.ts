import { AzureService } from '../../../../shared/services/azure.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { Entity, ENTITIES, Asset, ASSETS, Portfolio, PORTFOLIOS } from '../../../models/filter-data';

interface Relationship {
  value: string;
  viewValue: string;
}

interface Account {
  accId: string;
  accName: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected port: Portfolio[] = PORTFOLIOS;

  protected entity: Entity[] = ENTITIES;

  protected asset: Asset[] = ASSETS;

  public portCtrl: FormControl = new FormControl();

  public portFilterCtrl: FormControl = new FormControl();

  public entityCtrl: FormControl = new FormControl();

  public entityFilterCtrl: FormControl = new FormControl();

  public assetMultiCtrl: FormControl = new FormControl();

  public assetMultiFilterCtrl: FormControl = new FormControl();

  public filteredPortfolio: ReplaySubject<Portfolio[]> = new ReplaySubject<Portfolio[]>(1);

  public filteredEntity: ReplaySubject<Entity[]> = new ReplaySubject<Entity[]>(1);

  public filteredAssetsMulti: ReplaySubject<Asset[]> = new ReplaySubject<Asset[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();

  protected _onDestroy = new Subject<void>();

  relationship: Relationship[] = [
    { value: 'family', viewValue: 'FAMILY' },
    { value: 'self', viewValue: 'SELF' }
  ];

  account: Account[] = [
    { accName: 'ALL', accId: 'all' }
  ];

  relSelected = 'family';
  portSelected = 'all';
  entSelected = this.entity[0].entityName;
  accSelected = 'all';
  assetSelected = 'all';
  LoggedInUserObj: any;
  transactions: any;
  LoggedInUserName = "";

  constructor(public AzureService: AzureService) { }

  ngOnInit(): void {
    // this.LoggedInUserObj = this.authService.getPortalUser();

    if (this.LoggedInUserObj) {
      console.log("LoggedInUserObj : " + JSON.stringify(this.LoggedInUserObj));
      console.log('Email : ' + this.LoggedInUserObj.email);
      this.LoggedInUserName = this.LoggedInUserObj.name;
      // this.getTransactionsByUser(this.LoggedInUserObj.email);
    }

    // set initial selection
    this.portCtrl.setValue(this.port[0]);
    this.entityCtrl.setValue(this.entity[0]);
    this.assetMultiCtrl.setValue([this.asset[0], this.asset[0], this.asset[0]]);

    // load the initial list
    this.filteredPortfolio.next(this.port.slice());
    this.filteredEntity.next(this.entity.slice());
    this.filteredAssetsMulti.next(this.asset.slice());

    // listen for search field value changes
    this.portFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPortfolio();
      });

    this.entityFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEntity();
      });

    this.assetMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterAssetsMulti();
      });
  }

  logout() {
    // this.authService.logout();
  }
  getTransactionsByUser(email) {
    try {
      this.AzureService.getUserTransaction(email).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.transactions = data[0];
        console.log("transactions : " + JSON.stringify(this.transactions));
        if (this.transactions.length > 0) {

        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  toggleSideBarFun() {
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

  ngAfterViewInit() {
    // this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredAssetsMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.assetMultiCtrl.patchValue(val);
        } else {
          this.assetMultiCtrl.patchValue([]);
        }
      });
  }


  // protected setInitialValue() {
  //   this.filteredPortfolio
  //     .pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       // setting the compareWith property to a comparison function
  //       // triggers initializing the selection according to the initial value of
  //       // the form control (i.e. _initializeSelection())
  //       // this needs to be done after the filteredlists are loaded initially
  //       // and after the mat-option elements are available
  //       this.singleSelect.compareWith = (a: Portfolio, b: Portfolio) => a && b && a.value === b.value;
  //     });

  //   this.filteredEntity
  //     .pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       // setting the compareWith property to a comparison function
  //       // triggers initializing the selection according to the initial value of
  //       // the form control (i.e. _initializeSelection())
  //       // this needs to be done after the filteredlists are loaded initially
  //       // and after the mat-option elements are available
  //       this.singleSelect.compareWith = (a: Entity, b: Entity) => a && b && a.entityId === b.entityId;
  //     });

  //   this.filteredAssetsMulti
  //     .pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       // setting the compareWith property to a comparison function
  //       // triggers initializing the selection according to the initial value of
  //       // the form control (i.e. _initializeSelection())
  //       // this needs to be done after the filteredBanks are loaded initially
  //       // and after the mat-option elements are available
  //       this.multiSelect.compareWith = (a: Asset, b: Asset) => a && b && a.assetId === b.assetId;
  //     });
  // }

  protected filterPortfolio() {
    if (!this.port) {
      return;
    }
    // get the search keyword
    let search = this.portFilterCtrl.value;
    if (!search) {
      this.filteredPortfolio.next(this.port.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredPortfolio.next(
      this.port.filter(port => port.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterEntity() {
    if (!this.entity) {
      return;
    }
    // get the search keyword
    let search = this.entityFilterCtrl.value;
    if (!search) {
      this.filteredEntity.next(this.entity.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredEntity.next(
      this.entity.filter(entity => entity.entityName.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterAssetsMulti() {
    if (!this.asset) {
      return;
    }
    // get the search keyword
    let search = this.assetMultiFilterCtrl.value;
    if (!search) {
      this.filteredAssetsMulti.next(this.asset.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredAssetsMulti.next(
      this.asset.filter(asset => asset.assetName.toLowerCase().indexOf(search) > -1)
    );
  }

}
