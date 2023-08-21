
// import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectableSettings, TreeItem } from '@progress/kendo-angular-treeview';
import { of } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 
  public expandedKeys: any[] = ['0'];
  public selectedKeys: any[] = ['0_0'];
 


  // public isItemSelected = (_: any, index: string) => this.selectedKeys.indexOf(index) > 0;

  public handleSelection({ index }: any): void {
      this.selectedKeys = [index];
      console.log('selected', this.selectedKeys);
  }
 
 
  // public periodFilters: any[] = [];
  public relationshipsFilters: any[] = [];
  public entitiesFilters: any[] = [];
  public accountsFilters: any[] = [];
  public portfoliosFilters: any[] = [];
  public documentFilters: any[] = [];
  public contactFilters: any[] = [];
  // public selectedCommonFilterKey: any[] = [];
  public selectedPeriodFilterKey: string[] = [];
  public selectedRelationshipsFilterKey: string[] = [];
  public selectedAccountsFilterKey: string[] = [];
  public selectedEntitiesFilterKey: string[] = [];
  public selectedPortfoliosFilterKey: string[] = [];
  public selectedDocumentFilterKey: number[] = [];
  public selectedContactFilterKey: string[] = [];
  public selection: SelectableSettings = { mode: 'single' };

  public legalDocs: any[] = [];

  exclusions: any[] = ['legal_docs'];
  public showDocs: boolean = false;
  constructor(

    private cdRef: ChangeDetectorRef,

    private router: Router
  ) {

  }


  public isExpanded = (dataItem: any, index?: string) => {
    return  0;
  }

  ngOnInit(): void { 
    /* this.router.navigate(["/visibility"]);  */
    // this.router.navigate(["/roleSetup"]); 
  }





}
