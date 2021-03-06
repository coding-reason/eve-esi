

export interface ITradeItemPrice{
  item: IType;
  jitaPrice: number;
  amarrPrice: number;
  dodixiePrice: number;
  rensPrice: number;
  hekPrice: number;
  jita: boolean;
  amarr: boolean;
  dodixie: boolean;
  rens: boolean;
  hek: boolean;
}

export interface ITradeItemMicroPrice {
  item: IItem;
  jitaPrice: number;
  amarrPrice: number;
  dodixiePrice: number;
  rensPrice: number;
  hekPrice: number;
  jita: boolean;
  amarr: boolean;
  dodixie: boolean;
  rens: boolean;
  hek: boolean;
}

export class CTradeItemPrice implements ITradeItemPrice{
  constructor() {
    this.item = {name: "", type_id: 0, capacity: 0, description: "", dogma_attributes: [], dogma_effects: [], graphic_id: 0, group_id: 0, market_group_id: 0, mass: 0, packaged_volume: 0, portion_size: 0, published: true, radius: 0, volume: 0};
    this.amarrPrice = 0;
    this.dodixiePrice = 0;
    this.hekPrice = 0;
    this.jitaPrice = 0;
    this.rensPrice = 0;
    this.amarr = false;
    this.jita = false;
    this.hek = false;
    this.dodixie = false;
    this.rens = false;
  }
  item: IType;
  jitaPrice: number;
  amarrPrice: number;
  dodixiePrice: number;
  rensPrice: number;
  hekPrice: number;
  jita: boolean;
  amarr: boolean;
  dodixie: boolean;
  rens: boolean;
  hek: boolean;
}

/*export class CTradeItemMicroPrice implements ITradeItemMicroPrice{
  item: IItem;
  jitaPrice: number;
  amarrPrice: number;
  dodixiePrice: number;
  rensPrice: number;
  hekPrice: number;
  jita: boolean;
  amarr: boolean;
  dodixie: boolean;
  rens: boolean;
  hek: boolean;
}*/

export interface Icon {href: string; }
/**
 * Created by fox21 on 11/16/2016.
 */
export interface ItemGroup {name: string; href: string; id_str: string; id: number; types: {href: string; };
  parentGroup: {href: string; };
  description: string;
  isExpanded: boolean;
  children: Array<ItemGroup>;

}

export class cHub implements IHub { name: string; regionId: number; stationId: number; }


export interface Alert{type: IType; side: string; hub: cHub; price: number; targetPrice: number; percentage: number; qty: number; }
export interface BItem {typeid: number; description: string; price: number; }
export interface ItemBuild {items: Array<BItem>; }
export interface ItemGroups {items: Array<ItemGroup>; }
export class ItemGroupsCls {items: Array<ItemGroup>; }
export interface bom {quantity: number; typeid: number; }
export interface Blueprint {
  productTypeId: number;
  bom: [{typeid: number; quantity: number; }];
}
export class ItemBuildCls { items: Array<BItem>; }


export interface IHub{
  name: string; regionId: number; stationId: number;
}

export interface ICategory {
  category_id: number;
  name: string;
  published: boolean;
  groups: number[];
}
export class CCategory implements ICategory{
  category_id: number;
  name: string;
  published: boolean;
  groups: number[];
}
export interface IGroup {
  group_id: number;
  name: string;
  published: boolean;
  category_id: number;
  types: number[];
}
export interface DogmaAttribute {
  attribute_id: number;
  value: number;
}

export interface DogmaEffect {
  effect_id: number;
  is_default: boolean;
}
export interface IItem {
  name: string;
  type_id: number;
}
export interface IType {
  type_id: number;
  name: string;
  description: string;
  published: boolean;
  group_id: number;
  market_group_id: number;
  radius: number;
  volume: number;
  packaged_volume: number;
  capacity: number;
  portion_size: number;
  mass: number;
  graphic_id: number;
  dogma_attributes: DogmaAttribute[];
  dogma_effects: DogmaEffect[];
}

export interface IOrder {
  order_id: number;
  type_id: number;
  location_id: number;
  volume_total: number;
  volume_remain: number;
  min_volume: number;
  price: number;
  is_buy_order: boolean;
  duration: number;
  issued: Date;
  range: string;
}
export interface IOrderSub {
  orderL: IOrderL[];
  regionId: number;

}
export interface IOrderL {
  order_id: number;
  type_id: number;
  system_id: number;
  location_id: number;
  volume_total: number;
  volume_remain: number;
  min_volume: number;
  price: number;
  is_buy_order: boolean;
  duration: number;
  issued: Date;
  range: string;
}
