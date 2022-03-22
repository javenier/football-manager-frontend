import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  teamForDeleteId!: number;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams);
  }

  deleteTeam(id: number): void {
    this.teamService.deleteTeam(id).subscribe(
      (response: void) => this.getTeams()
    );
  }

  setTeamForDeleteId(id: number): void {
    this.teamForDeleteId = id;
  }
}
