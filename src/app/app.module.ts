import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { 
        NbCardModule,
        NbIconModule,
        NbThemeModule, 
        NbLayoutModule , 
        NbButtonModule,
        NbSidebarModule,
        NbAccordionModule,
        NbFormFieldModule,
        NbSearchModule,
        NbUserModule,
        NbMenuModule,
        NbListModule,
        NbIconLibraries,
        NbCheckboxModule,
        NbTooltipModule
      } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { MaindashboardComponent } from './maindashboard/maindashboard.component'; // we also need angular router for Nebular to function properly
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SiderbuttonmenuComponent } from './siderbuttonmenu/siderbuttonmenu.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebartreeComponent } from './sidebar/sidebartree/sidebartree.component';
import { HomeComponent } from './home/home.component';
import { SidebuttonComponent } from './sidebar/sidebutton/sidebutton.component';
import { InboxComponent } from './inbox/inbox.component';
import { StarmarkComponent } from './starmark/starmark.component';
import { DelayedComponent } from './delayed/delayed.component';
import { ImportedmailComponent } from './importedmail/importedmail.component';
import { ChatComponent } from './chat/chat.component';
import { HassentComponent } from './hassent/hassent.component';
import { DraftmailComponent } from './draftmail/draftmail.component';
import { AllmailsComponent } from './allmails/allmails.component';
import { AllspamComponent } from './allspam/allspam.component';
import { DeletedmailsComponent } from './deletedmails/deletedmails.component';
import { BigdatatypeComponent } from './bigdatatype/bigdatatype.component';
import { CanadatypeComponent } from './canadatype/canadatype.component';
import { FacebooktypeComponent } from './facebooktype/facebooktype.component';
import { TimingsendComponent } from './timingsend/timingsend.component';
import { ManagebookmarkComponent } from './managebookmark/managebookmark.component';
import { CreatebookmarkComponent } from './createbookmark/createbookmark.component';
import { StartmeetingComponent } from './startmeeting/startmeeting.component';
import { JoinmeetingComponent } from './joinmeeting/joinmeeting.component';


@NgModule({
  declarations: [
    AppComponent,
    MaindashboardComponent,
    SidebarComponent,
    SiderbuttonmenuComponent,
    PersonaldetailComponent,
    MaincontentComponent,
    SidebartreeComponent,
    HomeComponent,
    SidebuttonComponent,
    InboxComponent,
    StarmarkComponent,
    DelayedComponent,
    ImportedmailComponent,
    ChatComponent,
    HassentComponent,
    DraftmailComponent,
    AllmailsComponent,
    AllspamComponent,
    DeletedmailsComponent,
    BigdatatypeComponent,
    CanadatypeComponent,
    FacebooktypeComponent,
    TimingsendComponent,
    ManagebookmarkComponent,
    CreatebookmarkComponent,
    StartmeetingComponent,
    JoinmeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NbThemeModule.forRoot({name: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'}),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,  
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    MatToolbarModule,  
    NbEvaIconsModule,
    NbAccordionModule,
    NbUserModule,
    NbTooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTreeModule,
    NbListModule,
    MatProgressBarModule,
    MatTabsModule,
    NbFormFieldModule,
    MatMenuModule,
    NbSearchModule,
    MatTableModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


export class PagesModule { constructor(iconsLibrary: NbIconLibraries) { iconsLibrary.registerSvgPack('myicon', { 'message-circle': '<img src="../assets/images/message-circle.svg" width="25px">', }); } }
