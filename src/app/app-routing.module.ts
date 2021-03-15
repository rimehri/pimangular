import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {AboutComponent} from './about/about.component'
import {SigninComponent} from './signin/signin.component'
import {RegistreComponent} from './registre/registre.component'

const routes: Routes = [

  { path: '',
  component: HomePageComponent
},
{ path: 'signin',
component: SigninComponent
},
{ path: 'about',
component: AboutComponent
},
{ path: 'registre',
component: RegistreComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

