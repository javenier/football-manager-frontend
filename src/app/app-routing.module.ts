import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams/:id', component: TeamDetailsComponent },
  { path: 'players/:id', component: PlayerDetailsComponent },
  { path: 'team/new', component: NewTeamComponent },
  { path: 'player/new', component: NewPlayerComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
