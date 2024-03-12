import { Component } from '@angular/core';

@Component({
  selector: 'app-getshooters',
  templateUrl: './getshooters.component.html',
  styleUrl: './getshooters.component.scss'
})
export class GetshootersComponent {
  candidphotographer: number = 0;
  candidcinematographer: number = 0;
  tridtionalphotographer: number = 0;
  tridtionalvideographer: number = 0;
  assistantphotographer: number = 0;
  assistantvideographer: number = 0;
  drone: number=0;
  incrementValue(identifier: string): void {
    switch (identifier) {
      case 'candidphotographer':
        this.candidphotographer++;
        break;
      case 'candidcinematographer':
        this.candidcinematographer++;
        break;
      case 'tridtionalphotographer':
        this.tridtionalphotographer++;
        break;
      case 'tridtionalvideographer':
        this.tridtionalvideographer++;
        break;
      case 'assistantphotographer':
        this.assistantphotographer++;
        break;
      case 'assistantvideographer':
        this.assistantvideographer++;
        break;
        case "drone":
          this.drone++;
          break
      default:
        break;
    }
  }

  decrementValue(identifier: string): void {
    switch (identifier) {
      case 'candidphotographer':
        if (this.candidphotographer > 0) {
          this.candidphotographer--;
        }
        break;
      case 'candidcinematographer':
        if (this.candidcinematographer > 0) {
          this.candidcinematographer--;
        }
        break;
      case 'tridtionalphotographer':
        if (this.tridtionalphotographer > 0) {
          this.tridtionalphotographer--;
        }
        break;
      case 'tridtionalvideographer':
        if (this.tridtionalvideographer > 0) {
          this.tridtionalvideographer--;
        }
        break;
      case 'assistantphotographer':
        if (this.assistantphotographer > 0) {
          this.assistantphotographer--;
        }
        break;
      case 'assistantvideographer':
        if (this.assistantvideographer > 0) {
          this.assistantvideographer--;
        }
        break;
        case 'drone':
          if (this.drone > 0) {
            this.drone--;
          }
          break
      default:
        break;
    }
  }
}
