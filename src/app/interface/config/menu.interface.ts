export interface IMenu {
    id: any;
    idParent: string;
    display: string;
    name: string;
    path: string;
    show: boolean;
    icon?: string;
    seo?: {
      title: string;
      description?: string;
      link?: string;
      image?: string;
      ogType?: string;
    };
    privileges: any[];
    children?: any;
}