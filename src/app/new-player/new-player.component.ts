import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../model/player';
import { Team } from '../model/team';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  positions: string[] = [];
  teams: Team[] = [];
  selectedTeam!: Team;

  constructor(private playerService: PlayerService,
    private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams
    );
  }

  addPlayer(addPlayerForm: NgForm): void {
    this.playerService.addPlayer(addPlayerForm.value, this.selectedTeam.id).subscribe(
      (response: Player) => { addPlayerForm.reset(); },
      (error: HttpErrorResponse) => { alert(error.message); addPlayerForm.reset(); }
    );
    window.location.href = 'http://localhost:4200/players';
  }

}
