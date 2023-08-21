import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SelectableSettings, TreeItem } from '@progress/kendo-angular-treeview';
import { MasterFiltersState, MasterFilterType } from 'src/app/core/models/app-state';
import { DataService } from 'src/app/shared/services/data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})

export class SidebarFilterComponent implements OnInit {
  public periodFilters: any[] = [
    {
      "name": "Access Configuration",
      "items": [
        {
          "name": "Visibility Access",
          "redirectTo": '/visibility',
          "key": 1,
          "value": {
            "startDate": null,
            "endDate": 1604988828116
          }
        },
        // {
        //   "name": "User Mapping",
        //   "redirectTo": '/usermap',
        //   "key": 2,
        //   "value": {
        //     "startDate": 1604988828116,
        //     "endDate": 1604988828116
        //   }
        // },
        // {
        //   "name": "Persona Setup",
        //   "redirectTo": '/personsetup',
        //   "key": 3,
        //   "value": {
        //     "startDate": 1604988828116,
        //     "endDate": 1604988828116
        //   }
        // },
        // {
        //   "name": "Role Setup",
        //   "redirectTo": '/rolesetup',
        //   "key": 3,
        //   "value": {
        //     "startDate": 1604988828116,
        //     "endDate": 1604988828116
        //   }
        // }
      ]
    }
  ];
  public expandedKeys: any[] = ['0'];
  public selectedKeys: any[] = ['0_0'];
 


  // public isItemSelected = (_: any, index: string) => this.selectedKeys.indexOf(index) > 0;

  public handleSelection({ index }: any): void {
      this.selectedKeys = [index];
      console.log('selected', this.selectedKeys);
  }
 
  // public commonFilters: any[] = [];
  public originalItems: { [name in MasterFilterType]: any[] } = {
    period: [],
    relationships: [],
    entities: [],
    accounts: [],
    portfolios: [],
    documentContentCategory: [],
    contentTypes: []

  };

  public filteredItems: { [name in MasterFilterType]: any[] } = {
    period: [],
    relationships: [],
    entities: [],
    accounts: [],
    portfolios: [],
    documentContentCategory: [],
    contentTypes: []

  };

  public searchTerm: string = null;
  public searchTermContacts: string = null;
  public activeComponentId: string = null;
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
  public filtersState: MasterFiltersState;
  public legalDocs: any[] = [];

  exclusions: any[] = ['legal_docs'];
  public showDocs: boolean = false;
  constructor(
   
    private userService: UserService,
    private cdRef: ChangeDetectorRef,
    private dataService: DataService,
    private router: Router
  ) {

  }

π
  public isExpanded = (dataItem: any, index?: string) => {
    return  0;
  }

  ngOnInit(): void { 
    // this.router.navigate(["/visibility"]); 
    this.router.navigate(["/editRoleSetup"]); 
  }



  handleFilterSelection(filterType: MasterFilterType, event: TreeItem) {
    console.log('Common Filter selected:', event.dataItem.redirectTo);
    this.router.navigate([event.dataItem.redirectTo]);
  }


  public handleCollapse(node) {
    // console.log('Collapse:', node);
    // this.masterFilterService.handleExpandCollapse('collapse', node);
  }

  /**
   * An `expand` event handler that will add the node hierarchical index
   * to the collection, expanding the its children.
   */
  public handleExpand(node) {
    // console.log('Expand:', node);
    // this.masterFilterService.handleExpandCollapse('expand', node);
  }
}






