import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule}from'@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

import { PeopleCreateComponent } from './components/people/people-create/people-create.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {MatButtonModule} from '@angular/material/button';
import { PeopleCrudComponent } from './views/people-crud/people-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData}from '@angular/common';

registerLocaleData(localePt);
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        ProductCrudComponent,
        PeopleCreateComponent,
        ProductCreateComponent,
        PeopleCrudComponent,
        ProductReadComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule

  
    ],
    providers: [{

        provide:LOCALE_ID,
        useValue:'pt-BR'
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
