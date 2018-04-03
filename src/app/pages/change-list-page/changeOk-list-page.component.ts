import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../services/change.service';
import { Change } from '../../models/change';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeOk-list-page',
  templateUrl: './changeOk-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeOkListPageComponent implements OnInit {
  private changes: Change[] = [
    new Change(1,"Donkey Kong","Adventure","https://ugc.kn3.net/i/origin/http://www.noticiasdot.com/publicaciones/galerias/Nintendo/2007/NDS_Donkey-Kong-Jungle-Climber-wallpaper/NDS_Donkey-Kong-Jungle-Climber-wallpaper-02.jpg","",true),
  ];
  constructor(public changeService: ChangeService,public router: Router) {
    
  }

  ngOnInit() {
    this.changeService.list().subscribe(changeResponse => {
    this.changes = changeResponse;
      })
  }

  myEvent(event) {
    this.router.navigate(['/code']);
  }

}