import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ItemGroup} from "../models/IItems";

@Component({
  selector: "app-treeview",
  templateUrl: "./treeview.component.html",
  styleUrls: ["./treeview.component.css"]
})
export class TreeviewComponent  {

  @Input() itemGroups: Array<ItemGroup>;
  @Output() onItemsSelect = new EventEmitter<string>();

  private subgrps: ItemGroup[];

  /*constructor(private itgs: ibgService)
  {  this.ItemService = itgs;
    this.subgrps = this.itgs.getGroupData();
  }*/

  toggle(it: ItemGroup): void
  {
    it.isExpanded = true;
    if (it.isExpanded)
      it.isExpanded = false;
    this.onItemsSelect.emit(it.types.href);
  }

  onItemsSel(s: string): void
  {
    this.onItemsSelect.emit(s);
  }
  getChildren(it: ItemGroup): ItemGroup[]
  {
    return it.children;
    /* let result = new Array<ItemGroup>();
     for(let sub of this.subgroups)
     {
     if(sub.parentGroup.href === it.href)
     {
     result.push(sub);
     }
     }
     return result;*/
  }

}

