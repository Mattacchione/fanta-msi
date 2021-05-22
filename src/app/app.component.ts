import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playerPoolTop: any
  playerPoolJng: any
  playerPoolMid: any
  playerPoolAdc: any
  playerPoolSupp: any
  playerPoolCoach: any

  comp: any

  validComp: boolean

  constructor() {

    this.validComp = false

    this.comp = {
      top: {},
      jungle: {},
      mid: {},
      adc: {},
      supp: {},
      coach: {}
    }

    this.playerPoolTop = [
      {
        player: 'Xiaohu',
        team: 'RNG',
        value: 40
      },
      {
        player: 'Armut',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Khan',
        team: 'DW',
        value: 20
      },
      {
        player: 'Hanabi',
        team: 'PSG',
        value: 10
      }
    ]
    this.playerPoolJng = [
      {
        player: 'Wei',
        team: 'RNG',
        value: 40
      },
      {
        player: 'Elyoya',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Canyon',
        team: 'DW',
        value: 20
      },
      {
        player: 'River',
        team: 'PSG',
        value: 10
      }
    ]
    this.playerPoolMid = [
      {
        player: 'Crylin',
        team: 'RNG',
        value: 40
      },
      {
        player: 'Humanoid',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Maple',
        team: 'PSG',
        value: 20
      },
      {
        player: 'Showmaker',
        team: 'DW',
        value: 10
      }
    ]
    this.playerPoolAdc = [
      {
        player: 'Carzzy',
        team: 'MAD',
        value: 40
      },
      {
        player: 'GALA',
        team: 'RNG',
        value: 30
      },
      {
        player: 'Ghost',
        team: 'DW',
        value: 20
      },
      {
        player: 'Doggo',
        team: 'PSG',
        value: 10
      }
    ]
    this.playerPoolSupp = [
      {
        player: 'Ming',
        team: 'RNG',
        value: 40
      },
      {
        player: 'Kaiser',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Kaiwing',
        team: 'PSG',
        value: 20
      },
      {
        player: 'BeryL',
        team: 'DW',
        value: 10
      }
    ]
    this.playerPoolCoach = [
      {
        player: 'Poppy',
        team: 'RNG',
        value: 40
      },
      {
        player: 'Mac',
        team: 'MAD',
        value: 30
      },
      {
        player: 'kkOma',
        team: 'DW',
        value: 20
      },
      {
        player: 'Helper',
        team: 'PSG',
        value: 10
      }
    ]
  }

  ngOnInit(): void {
  }

  completedComp() {
    return !!this.comp.top?.value && !!this.comp.jungle?.value && !!this.comp.mid?.value && !!this.comp.adc?.value && !!this.comp.supp?.value && !!this.comp.coach?.value
  }

  calculateCredit() {
    const top = this.comp.top?.value ? this.comp.top?.value : 0
    const jungle = this.comp.jungle?.value ? this.comp.jungle?.value : 0
    const mid = this.comp.mid?.value ? this.comp.mid?.value : 0
    const adc = this.comp.adc?.value ? this.comp.adc?.value : 0
    const supp = this.comp.supp?.value ? this.comp.supp?.value : 0
    const coach = this.comp.coach?.value ? this.comp.coach?.value : 0
    let value = 150 - top - jungle - mid - adc - supp - coach
    return value
  }

  verifyComp() {
    if (this.completedComp()) {
      if (this.calculateCredit() <= 150 && this.calculateCredit() >= 0) {
        let rng = 0, mad = 0, dw = 0, c9 = 0, psg = 0, pgg = 0
        for (const [key, value] of Object.entries(this.comp)) {
          if (key !== 'coach') {
            switch (value['team']) {
              case 'RNG':
                rng++
                break;
              case 'MAD':
                mad++
                break;
              case 'DW':
                dw++
                break;
              case 'C9':
                c9++
                break;
              case 'PSG':
                psg++
                break;
              case 'PGG':
                pgg++
                break;
            }
          }
        }
        if (rng > 3 || mad > 3 || dw > 3 || c9 > 3 || psg > 3 || pgg > 3) {
          this.validComp = false
        } else {
          this.validComp = true
        }
      } else {
        console.log('value false')
        this.validComp = false
      }
    }
  }

  copy() {
    return String(this.comp.top?.player) + ' ' + String(this.comp.jungle?.player) + ' ' + String(this.comp.mid?.player) + ' ' + String(this.comp.adc?.player) + ' ' + String(this.comp.supp?.player) + ' ' + String(this.comp.coach?.player)
  }

}