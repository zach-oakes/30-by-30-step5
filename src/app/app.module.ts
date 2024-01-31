import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatMenu, MatMenuItem, MatMenuModule} from "@angular/material/menu";
import { StudentDetailViewComponent } from './student-detail-view/student-detail-view.component';
import { StudentListViewComponent } from './student-list-view/student-list-view.component';
import {MatDivider} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatActionList, MatListItem} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginScreenComponent,
    NotFoundComponent,
    StudentDetailViewComponent,
    StudentListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormField,
    MatInput,
    MatInputModule,
    MatButton,
    MatIconButton,
    MatIcon,
    MatToolbarModule,
    MatDrawerContainer,
    MatDrawer,
    MatMenuModule,
    MatMenuItem,
    MatButtonModule,
    MatDivider,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatCheckbox,
    MatActionList,
    MatListItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
