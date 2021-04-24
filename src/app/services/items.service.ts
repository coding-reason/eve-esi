import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {IRegion,  ISystems} from "../models/IRegions";
import {HttpClient} from "@angular/common/http";
import {ICategory, IGroup, IOrder, IOrderL, IOrderSub, IType} from '../models/IItems';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public categoryNumbers: string[];

  public itemNumbers: string[];
  public sinkPrice: Subject<IOrderSub>;
  private baseUri: string;
  private uri: string;
  private uriEnd: string;
  private categoriesUri: string;
  private groupsUri: string;
  private typesUri: string;
  private ordersUri: string;
  public JitaOrders: IOrderL[];
  public AmarrOrders: IOrderL[];
  public DodixieOrders: IOrderL[];
  public RensOrders: IOrderL[];
  public HekOrders: IOrderL[];
  public itSortedCategories: Array<ICategory>;

  public graphicUri: string;
  constructor(private http: HttpClient){
    this.baseUri = "https://esi.evetech.net/latest/universe";
    this.uriEnd = "/?datasource=tranquility&language=en-us";
    this.categoriesUri = "https://esi.evetech.net/latest/universe/categories/?datasource=tranquility";
    this.groupsUri = "https://esi.evetech.net/latest/universe/groups/";
    this.typesUri = "https://esi.evetech.net/latest/universe/types/";
    this.graphicUri = "https://esi.evetech.net/latest/universe/graphics/";
    this.ordersUri = "https://esi.evetech.net/latest/markets/";
// https://esi.evetech.net/latest/markets/10000042/orders/?datasource=tranquility&order_type=sell&page=1&type_id=36
    this.sinkPrice = new Subject<IOrderSub>();
    this.itSortedCategories = new Array<ICategory>();
  }


  public async getPriceDataPages(regionId: number, itemId: number, stationId: number): Promise<void> {
    let uriBase = "https://esi.evetech.net/latest/markets/RegionId/orders/?datasource=tranquility&order_type=sell&type_id=ItemId";
    uriBase = uriBase.replace("ItemId", itemId.toString());
    uriBase = uriBase.replace("RegionId", regionId.toString());
    await this.http.get<IOrderL[]>(uriBase).subscribe(data => {
      const orders = [];
      for (let ii = 0; ii < data.length; ii++) {
        if (data[ii].location_id === stationId) {
          orders.push(data[ii]);
        }

      }
      const orderSub: IOrderSub = {regionId, orderL: Object.assign(orders)};
      this.sinkPrice.next(orderSub);

    });
  }

  public getPriceDataUri(regionid: string): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.ordersUri + regionid + "/orders" + this.uriEnd);
  }
  public getGroup(id: string): Observable<IGroup> {
    return this.http.get<IGroup>(this.groupsUri + id + this.uriEnd);

  }
  public getType(id: number): Observable<IType> {
    return this.http.get<IType>(this.typesUri + id.toString() + this.uriEnd);

  }

  public getCategories(): Observable<any> {
    if (this.categoryNumbers == null)
      return this.http.get(this.categoriesUri);
    else
      return null;
  }

  getCategoryContent(id: string): Observable<ICategory> {
    this.uri  = this.baseUri + "/categories/" + id + this.uriEnd;
    return  this.http.get<ICategory>(this.uri);
  }
}
