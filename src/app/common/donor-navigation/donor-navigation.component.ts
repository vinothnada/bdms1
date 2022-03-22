import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-navigation',
  templateUrl: './donor-navigation.component.html',
  styleUrls: ['./donor-navigation.component.scss']
})
export class DonorNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: String):void{
    this.router.navigate([`${pageName}`]);
  }
}
