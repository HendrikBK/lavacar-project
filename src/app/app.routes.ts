import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdadeComponent } from './components/typescript/idade/idade.component';
import { NotaComponent } from './components/typescript/nota/nota.component';
import { PrimoComponent } from './components/typescript/primo/primo.component';
import { TabuadaComponent } from './components/typescript/tabuada/tabuada.component';
import { MaiornumeroComponent } from './components/typescript/maiornumero/maiornumero.component';
import { ReaisComponent } from './components/typescript/reais/reais.component';


export const routes: Routes = [
   { path : '', component: HomeComponent},
   { path : 'idade', component: IdadeComponent},
   { path : 'nota', component: NotaComponent },
   { path : 'primo', component: PrimoComponent },
   { path : 'tabuada', component: TabuadaComponent },
   { path : 'maiornumero', component: MaiornumeroComponent },
   { path : 'reais', component: ReaisComponent }
];
