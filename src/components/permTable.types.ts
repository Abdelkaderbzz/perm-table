export interface permTableProps {
  actions: string[];
  roles: string[];
  onRbacChange: (value: string[]) => void;
  rowSelectAll: boolean;
  rowSelectAllLabel: string;
  specialChar: string;
  permissions?: string[];
}
