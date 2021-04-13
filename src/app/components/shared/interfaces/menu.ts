export interface MenuItem extends MenuItemBase {
  _id: string;
}

export interface MenuItemBase {
  name: string;
  img: string;
  description: string;
  price: number;
}
