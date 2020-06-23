import { Injectable } from '@angular/core';
import { Voiture } from '../Models/voiture';
import { Model } from '../Models/Model';
import { Marque } from '../models/marque';

@Injectable({
  providedIn: 'root',
})
export class voitureService {
  voitures = [
    new Voiture(
      1,
      250000,
      1985,
      'bla qd qdsk qmsks djkqsk jqs dkùj qùksj qùs dùkqlsjd ùqj dùqjsd',
      new Model(1, '308'),
      new Marque(1, 'Peugeot')
    ),
    new Voiture(
      2,
      35000,
      1990,
      'bla qd qsdsq sd qd sqd q qùksj qùs dùkqlsjd ùqj dùqjsd',
      new Model(1, '308'),
      new Marque(1, 'Peugeot')
    ),

  ];

  constructor() {}
}
