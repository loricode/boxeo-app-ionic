import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitorService } from '../servicios/competitors/competitor.service';
import { Subscription } from 'rxjs';
import { Competitor } from '../interfaces/response/Competitor';

@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.page.html',
  styleUrls: ['./competidores.page.scss'],
})
export class CompetidoresPage implements OnInit, OnDestroy {
  subcription$: Subscription;
  tab = false;

  listado = [];
  competitor: Competitor = {
    id:'',
    firstName:'',
    lastName:'',
    age:'',
    weight:'',
    image:''
  };

  constructor(
    private router: Router,
    private competitorService: CompetitorService
  ) { }

  ngOnInit(): void{
    this.getCompetitors();
  }

  ngOnDestroy(): void {
    this.removeSubcription();
  }

  public navegarslider() {
    this.router.navigateByUrl('slider');
  }

  public goProfile(){
    this.router.navigateByUrl('/competidores/perfil');
  }

  public detail(id: string): void {
    const competitor = this.listado.find(item => item.id === id);
    this.competitor = competitor;
    this.tab = true;
  }

  public closeCard(): void {
    this.tab = false;
  }

  private getCompetitors(): void {
    this.subcription$ = this.competitorService.getCompetitors()
      .subscribe(resp => {
        this.listado = resp;
      },(err) => {
          console.log(err);
      });
  }

  private removeSubcription(): void {
    this.subcription$.unsubscribe();
  }

}
