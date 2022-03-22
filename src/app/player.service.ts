import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from './model/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiServerUrl}/players`);
  }

  public getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiServerUrl}/players/${id}`);
  }

  public addPlayer(player: Player, teamId: number): Observable<Player> {
    return this.http.post<Player>(`${this.apiServerUrl}/players/add?teamId=${teamId}`, player);
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiServerUrl}/players/update`, player);
  }

  public deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/players/delete/${id}`);
  }

  public transferPlayer(playerId: number, newTeamId: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiServerUrl}/players/transfer?playerId=${playerId}&newTeamId=${newTeamId}`);
  }
}
