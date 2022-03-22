import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from './model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiServerUrl}/teams`);
  }

  public getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiServerUrl}/teams/${id}`);
  }

  public addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.apiServerUrl}/teams/add`, team);
  }

  public updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiServerUrl}/teams/update`, team);
  }

  public deleteTeam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teams/delete/${id}`);
  }
}
