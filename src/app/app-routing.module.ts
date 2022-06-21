import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'starmarked',
    component: StarmarkComponent
  },   
  {
    path: 'delayed',
    component: DelayedComponent
  },   
  {
    path: 'chat',
    component: ChatComponent
  },   
  {
    path: 'hassent',
    component: HassentComponent
  },  
  {
    path: 'draftmail',
    component: DraftmailComponent
  },    
  {
    path: 'importedmail',
    component: ImportedmailComponent
  },  
  {
    path: 'allmails',
    component: AllmailsComponent
  },   
  {
    path: 'spam',
    component: AllspamComponent
  },   
  {
    path: 'deletedmails',
    component: DeletedmailsComponent
  },   
  {
    path: 'bigdatatype',
    component: BigdatatypeComponent
  },   
  {
    path: 'canadatype',
    component: CanadatypeComponent
  },   
  {
    path: 'facebooktype',
    component: FacebooktypeComponent
  },   
  {
    path: 'timingsend',
    component: TimingsendComponent
  },   
  {
    path: 'managebookmark',
    component: ManagebookmarkComponent
  },   
  {
    path: 'createbookmark',
    component: CreatebookmarkComponent
  },   
  {
    path: 'startmeeting',
    component: StartmeetingComponent
  },       
  {
    path: 'joinmeeting',
    component: JoinmeetingComponent
  },    
//  {path: '', redirectTo: 'home', pathMatch: 'full'},
//  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
//  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
