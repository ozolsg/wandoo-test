export interface Person {
  person: Character;
}

export interface Character {
  id: string;
  name: string | null;
  birthYear?: string | null;
  eyeColor: string | null;
  gender: Gender;
  hairColor: string | null;
  height: string | null;
  mass: string | null;
  skinColor: string | null;
  homeworld?: Homeworld | null;
  filmConnection?: {
    totalCount: number;
    films: Film[];
  } | null;
  vehicleConnection?: {
    totalCount: number;
    vehicles: Vehicle[];
  } | null;
  starshipConnection?: {
    totalCount: number;
    starships: Starship[];
  } | null;
}

export interface Film {
  id: string;
  title: string | null;
  episodeID: number | null;
  releaseDate: string | null;
  director: string | null;
}

export interface Vehicle {
  id: string;
  name: string | null;
  model: string | null;
}

interface Starship {
  id: string;
  name: string | null;
  model: string | null;
}

export interface Homeworld {
  id: string;
  name: string | null;
  terrains: string | null;
  population: string | null;
}

export type Gender = 'male' | 'female' | 'n/a' | 'unknown' | null;
