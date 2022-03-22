import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  playerForDeleteId!: number;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      players => this.players = players);
  }

  deletePlayer(id: number): void {
    this.playerService.deletePlayer(id).subscribe(
      (response: void) => this.getPlayers()
    );
  }

  setPlayerForDeleteId(id: number): void {
    this.playerForDeleteId = id;
  }
}