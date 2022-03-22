import { Player } from "./player";

export interface Team {
    id: number;
    name: string;
    commissionFee: number;
    transferBalance: number;
    country: string;
    city: string;
    foundationDate: Date;
    coachName: string;
    imageUrl: string;
    players: Player[];
}