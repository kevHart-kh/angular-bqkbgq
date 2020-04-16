import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "kevin hartono";

  barang = {
    nama: "mangga",
    harga: 100000
  };

  item = [
    {
      nama: "mangga arr1",
      harga: 100000
    },
    {
      nama: "durian arr2",
      harga: 500000
    }
  ];

  angka = [10, 4, 2, 4, 6, 1, 2];

  show: boolean = true;

  user = {
    nama: "asd"
  };
}
