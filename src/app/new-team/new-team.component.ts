import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../model/team';
import { TeamService } from '../team.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  addTeam(addTeamForm: NgForm): void {
    this.teamService.addTeam(addTeamForm.value).subscribe(
      (response: Team) => { addTeamForm.reset(); },
      (error: HttpErrorResponse) => { alert(error.message); addTeamForm.reset(); }
    );
    window.location.href = 'http://localhost:4200/teams';
  }

}
