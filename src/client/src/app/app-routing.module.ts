import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collectioncomponent';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'stream/:filename', component: VideoplayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
