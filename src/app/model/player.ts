import { Team } from "./team";

export interface Player {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    startOfCareer: Date;
    nationality: string;
    imageUrl: string;
    team: Team;
}