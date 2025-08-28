export interface Person {
  person: Character;
}

export interface Character {
  id: string;
  name: string | null;
  birthYear?: string | null;
  eyeColor: string | null;
  gender: string | null;
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
  created: string | null;
  edited: string | null;
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

export interface Starship {
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
