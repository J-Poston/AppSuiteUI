export interface AppModule {
  id: string;        // 'cmms', 'shipping', 'qms'
  name: string;      // 'Asset Management', 'Shipping & Logistics', 'Quality Management'
  icon: string;      // Material icon name or CSS class
  menuTree: AppMenu[];
}

export interface AppMenu {
  title: string;
  route?: string;       // Angular router path (optional if it has children)
  icon?: string;
  children?: AppMenu[]; // Nested menu sub-items
  isExpanded?: boolean;  // Local view toggle state for accordion expansion
}