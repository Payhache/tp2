import { Model } from './Model';
import { Marque } from './marque';

export class Voiture {
  idVoiture: number;
  KmParcouru: number;
  anneeMiseEnCirculation: number;
  description: string;
  model: Model;
  marque: Marque;
  constructor(
    idVoiture: number = null,
    kmParcouru: number = null,
    anneeMiseEnCirculation: number = null,
    description: string = null,
    model: Model,
    marque: Marque
  ) {
    this.idVoiture = idVoiture;
    this.KmParcouru = kmParcouru;
    this.anneeMiseEnCirculation = anneeMiseEnCirculation;
    this.description = description;
    this.model = model;
    this.marque = marque;
  }
}
