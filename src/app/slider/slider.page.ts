import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitorService } from '../servicios/competitors/competitor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss']
})
export class SliderPage implements OnInit {
  subcription$: Subscription;
  listado = [];

  constructor(
    private competitorService: CompetitorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompetitors();
  }

  public goCompetitor(): void {
    this.router.navigateByUrl('competidores');
  }

  private getCompetitors(): void {
    this.subcription$ = this.competitorService.getCompetitors()
      .subscribe(resp => {
        this.listado = resp;
      },(err) => {
          console.log(err);
      });
  }

}
