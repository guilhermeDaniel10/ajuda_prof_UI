import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private route: Router) {}

  goToPage(pageName: string, params?: any) {
    this.route.navigate([`${pageName}`], {
      queryParams: params,
      state: { prevPage: this.route.url },
    });
  }
}
