import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {PeopleCreateComponent} from './components/people/people-create/people-create.component';


const routes: Routes = [
	{
    	path:"",
		component:HomeComponent
	},
	{
    	path:"products",
		component:ProductCrudComponent
	},
	{
		path:"products/create",
		component:ProductCreateComponent
	},
	{
		path:"preople/create",
		component:PeopleCreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
