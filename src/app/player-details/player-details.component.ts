import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../model/player';
import { Team } from '../model/team';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player?: Player;
  teams: Team[] = [];
  selectedTeam!: Team;

  constructor(private playerService: PlayerService,
              private teamService: TeamService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlayer();
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams
    );
  }

  getPlayer(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.playerService.getPlayer(id).subscribe(
      (player: Player) => this.player = player,
      (error: HttpErrorResponse) => { 
        alert(error.error);
        window.location.href = 'http://localhost:4200/players';
      } 
    );
  }

  updatePlayer(player: Player): void {
    this.playerService.updatePlayer(player).subscribe(
      response => console.log(response)
    );
    window.location.reload();
  }

  transferPlayer(): void {
    const playerId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.playerService.transferPlayer(playerId, this.selectedTeam.id).subscribe(
      response => console.log(response),
      (error: HttpErrorResponse) => { 
        alert(error.error);
        window.location.href = `http://localhost:4200/players/${playerId}`;
      }
    );
    window.location.reload();
  }
}