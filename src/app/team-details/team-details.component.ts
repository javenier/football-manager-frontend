import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../model/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team?: Team;

  constructor(private teamService: TeamService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeam();
  }
  
  getTeam(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id).subscribe(
      (team: Team) => this.team = team,
      (error: HttpErrorResponse) => {
        alert(error.error);
        window.location.href = 'http://localhost:4200/teams';
      }
    );
  }

  updateTeam(team: Team): void {
    this.teamService.updateTeam(team).subscribe(
      response => console.log(response)
    );
    window.location.reload();
  }
}
