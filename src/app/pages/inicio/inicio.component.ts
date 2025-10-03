import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faHome, faLeaf, faBolt, faHammer, faEye,
  faShieldAlt, faThermometerHalf, faWallet, faTrophy
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  faHome = faHome;
  faLeaf = faLeaf;
  faBolt = faBolt;
  faShieldAlt = faShieldAlt;
  faThermometerHalf = faThermometerHalf;
  faWallet = faWallet;
  faTrophy = faTrophy;

  faHammer = faHammer;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
    this.injectSolidIcons();
  }

  injectSolidIcons(): void {
  }
}