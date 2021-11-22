import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  searchTerm;

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    this.dataService.filteredItems(this.searchTerm);
  }

  isHome(): boolean {
    const check = this.router.url.indexOf('/home')
    if (check) {
      return false;
    }
    return true;
  }
}
