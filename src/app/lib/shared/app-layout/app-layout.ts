import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppModule, AppMenu } from '../../models/navigation.model';

@Component({
  selector: 'appsuite-app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
  public currentModuleId = input.required<string>();
  public isWaffleOpen = signal<boolean>(false);
  public isSidebarCollapsed = signal<boolean>(false);

  public appModules = signal<AppModule[]>([
    {
      id: 'cmms',
      name: 'CMMS (Maintenance)',
      icon: 'precision_manufacturing', 
      menuTree: [
        {
          title: 'Equipment Management',
          icon: 'home_repair_service',
          isExpanded: true, 
          children: [
            { title: 'Equipment', route: '/equip' },
            { title: 'Manufacturers', route: '/equip/mfrs' },
            { title: 'Models', route: 'equip/models'},
            { title: 'Categories', route: 'equip/categories'},
            { title: 'Subcategories', route: 'equip/subcategories'}
          ]
        },
        { 
          title: 'Work Orders', 
          icon: 'build', 
          isExpanded: false,
          children:[
            { title: 'Technicians', route: 'cmms/techs'},
            { title: 'Maintenance Requests', route: 'cmms/requests'},
            { title: 'Estimates', route: 'cmms/estimates'},
            { title: 'Work Orders', route: '/cmms/workorders'},
            { title: 'Technician Workbench', route: '/cmms/techwb'},
            { title: 'Service Rep Workbench', route: 'cmms/servicerepwb'},
            { title: 'Service Reps', route: 'cmms/service-reps'}
          ]
        },
        {
          title: 'Admin',
          icon: 'build',
          isExpanded: false,
          children:[
            { title: 'Users', route:'/admin/users'},
            { title: 'Roles', route: '/admin/roles'} 
          ]
        }
      ]
    },    
    {
      id: 'shipping',
      name: 'Shipping & Receiving',
      icon: 'local_shipping',
      menuTree: [
        { title: 'Active Shipments', icon: 'schedule', route: '/shipping/active' },
        { 
          title: 'Carrier Settings', 
          icon: 'settings',
          children: [
            { title: 'LTL Freight Accounts', route: '/shipping/carriers/ltl' },
            { title: 'Parcel Rates', route: '/shipping/carriers/parcel' }
          ]
        }
      ]
    },
    {
      id: 'qms',
      name: 'Quality Management',
      icon: 'report',
      menuTree: [
        { 
          title: 'Quality Setup', 
          icon: 'settings', 
          children:[
            { title: 'Inspectors', route:'/qms/inspectors'},
            { title: 'Inspections', route:'qms/inspections'}
          ] 
        },
        { 
          title: 'Quality Activity', 
          icon: 'schedule',
          children: [
            { title: 'CAPA', route: '/qms/capa' },
            { title: 'DMR', route: '/qms/dmr' },
            { title: 'Nonconformance', route:'/qms/nonconform'},
            { title: 'Inspection', route:'/qms/inspection'}
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Admin',
      icon: 'report',
      menuTree:[
        {
          title:'',
          icon:'',
          children:[
            { title: 'Users', route:'/admin/users'},
            { title: 'Roles', route: '/admin/roles'} 
          ]
        }
      ]
    },
    {
      id: 'HR',
      name:'HR',
      icon: 'settings',
      menuTree: []
    },
    {
      id: 'Docs',
      name: 'Docs',
      icon: 'settings',
      menuTree: []
    },
    {
      id: 'compliance',
      name:'Compliance',
      icon: 'settings',
      menuTree:[]
    }
  ]);

  public getCurrentApp(): AppModule | undefined {
    return this.appModules().find(mod => mod.id === this.currentModuleId());
  }

  // 5. Action Handlers for clicks
  public toggleWaffle(): void {
    this.isWaffleOpen.update(v => !v);
  }

  public toggleSidebar(): void {
    this.isSidebarCollapsed.update(v => !v);
  }

  public toggleParentNode(node: AppMenu): void {
    node.isExpanded = !node.isExpanded;
  }

  public handleAppSwitch(selectedModule: AppModule): void {
    this.isWaffleOpen.set(false);
    
    console.log(`User wants to switch to: ${selectedModule.name}`);
    console.log(selectedModule);
    //window.location.href = `/${selectedApp.id}`; 
  }
}
