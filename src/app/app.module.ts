import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { NewPlayerComponent } from './new-player/new-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    TeamDetailsComponent,
    PlayerDetailsComponent,
    NewTeamComponent,
    NewPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
