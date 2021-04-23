interface ISortObject {
  name: string;
  [key: string]: any;
}


export interface ISortPattern {
  name: string;
  index: number;
}



// tslint:disable-next-line:class-name
export class priSort{
  private _sp: ISortPattern[];
  private checkSort(l: string, r: string){
    let lb = false;
    let rb = false;
    let lbx = -1;
    let rbx = -1;

    for (const x of this._sp){
      if (l === x.name) {
        lb = true;
        lbx = x.index;
      }
      if (r === x.name) {
        rb = true;
        rbx = x.index;
      }
    }
    if (lb === true && rb === false)
      return -1;
    if (lb === false && rb === true)
      return 1;

    if (lb === true && rb === true){
      if (lbx < rbx) return -1;
      else
        return 1;
    }
    if (l < r) return -1;
    if (r < l) return 1;
    return 0;

  }
  public sort(so: ISortObject[], sp: ISortPattern[] ): any

  {
    if (so && sp) {
      this._sp = sp.sort((left, right): number => {
        if (left.index < right.index) {
          return -1;
        }
        if (left.index > right.index) {
          return 1;
        } else {
          return 0;
        }
      });
      return so.sort((left, right) => this.checkSort(left.name, right.name));
    }


  }

}
