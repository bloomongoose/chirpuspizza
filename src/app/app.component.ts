import { Component } from '@angular/core';
import { MenuItem } from './menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  items:MenuItem[] =[
    {
      item: "Nashville Wings",
      category: "Wings",
      price: 6.99
    },
    {
      item: "Vegan Impossible Wings",
      category: "Wings",
      price: 7.99
    },
    {
      item: "Dino Inferno Wings",
      category: "Wings",
      price: 9.99
    },
    {
      item: "Volcano Pizza",
      category: "Pizza",
      price: 10.99
    },
    {
      item: "Glacier Pizza",
      category: "Pizza",
      price: 11.99
    },
    {
      item: "Hurricane Pizza",
      category: "Pizza",
      price: 12.99
    },
    {
      item: "Iceage Mac n' Cheese",
      category: "Sides",
      price: 6.99
    },
    {
      item: "Jalapeño Poppers",
      category: "Sides",
      price: 6.99
    },
    {
      item: "Iceberg Brownie",
      category: "Dessert",
      price: 3.99
    }
  ];

  displayMenuItems():MenuItem[]{
    return this.items;
  }
}
