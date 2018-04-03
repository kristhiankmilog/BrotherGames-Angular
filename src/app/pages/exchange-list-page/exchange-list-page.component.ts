import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../services/change.service';
import { Change } from '../../models/change';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-list-page',
  templateUrl: './exchange-list-page.component.html',
  styleUrls: ['./exchange-list-page.component.css']
})
export class ExchangeListComponent implements OnInit {

    private exchanges: Change[] = [
      new Change(1,"Dead Space","Game Survival Terror","http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg","",true),
      new Change(2,"Bloodborne","RPG Survival","https://i11b.3djuegos.com/juegos/11033/project_beast/fotos/ficha/project_beast-2739557.jpg","",true),
      new Change(3,"Uncharted 4","Adventure","https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2943/2943094_sd.jpg;maxHeight=550;maxWidth=642","",true),
      new Change(4,"Mario Odyssey","Adventure","https://images-na.ssl-images-amazon.com/images/I/91-VfRp-i0L._SY679_.jpg","",true),
      
    ];
 

  constructor(public router: Router) { }

  ngOnInit() {
      this.exchanges;
  }

  myEvent(event) {
    this.router.navigate(['/okChanges']);
  }

}