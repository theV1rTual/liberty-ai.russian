import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  private scrollFunctions: Map<string, () => void> = new Map();

  setScrollFunction(key: string, scrollFunction: () => void) {
    this.scrollFunctions.set(key, scrollFunction);
  }

  scrollToComponent(key: string) {
    const scrollFunction = this.scrollFunctions.get(key);
    if (scrollFunction) {
      scrollFunction();
    }
  }
}
