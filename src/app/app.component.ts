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
        player: 'Flandre',
        team: 'EDG',
        value: 10
      },
      {
        player: 'Khan',
        team: 'DW',
        value: 20
      }
    ]
    this.playerPoolJng = [
      {
        player: 'Jiejie',
        team: 'EDG',
        value: 10
      },
      {
        player: 'Canyon',
        team: 'DW',
        value: 20
      }
    ]
    this.playerPoolMid = [
      {
        player: 'Scout',
        team: 'EDG',
        value: 20
      },
      {
        player: 'ShowMaker',
        team: 'DW',
        value: 10
      }
    ]
    this.playerPoolAdc = [
      {
        player: 'Viper',
        team: 'EDG',
        value: 20
      },
      {
        player: 'Ghost',
        team: 'DW',
        value: 10
      }
    ]
    this.playerPoolSupp = [
      {
        player: 'Meiko',
        team: 'EDG',
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
        player: 'Maokai',
        team: 'EDG',
        value: 10
      },
      {
        player: 'KkOma',
        team: 'DW',
        value: 20
      }
    ]

    this.playerPoolTop.sort((a, b) => {
      return b.value - a.value
    })
    this.playerPoolJng.sort((a, b) => {
      return b.value - a.value
    })
    this.playerPoolMid.sort((a, b) => {
      return b.value - a.value
    })
    this.playerPoolAdc.sort((a, b) => {
      return b.value - a.value
    })
    this.playerPoolSupp.sort((a, b) => {
      return b.value - a.value
    })
    this.playerPoolCoach.sort((a, b) => {
      return b.value - a.value
    })
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
    let value = 110 - top - jungle - mid - adc - supp - coach
    return value
  }

  verifyComp() {
    if (this.completedComp()) {
      if (this.calculateCredit() <= 110 && this.calculateCredit() >= 0) {
        let edg = 0, dw = 0, mad = 0, psg = 0, fpx = 0, geng = 0, fnc = 0, hundred = 0, rng = 0, t1 = 0, rge = 0, tl = 0, c9 = 0, dfm = 0, hle = 0, lng = 0
        for (const [key, value] of Object.entries(this.comp)) {
          if (key !== 'coach') {
            switch (value['team']) {
              case 'EDG':
                edg++
                break;
              case 'DW':
                dw++
                break;
              case 'MAD':
                mad++
                break;
              case 'PSG':
                psg++
                break;
              case 'FPX':
                fpx++
                break;
              case 'GENG':
                geng++
                break;
              case 'FNC':
                fnc++
                break;
              case '100T':
                hundred++
                break;
              case 'RNG':
                rng++
                break;
              case 'T1':
                t1++
                break;
              case 'RGE':
                rge++
                break;
              case 'TL':
                tl++
                break;
              case 'C9':
                c9++
                break;
              case 'DFM':
                dfm++
                break;
              case 'HLE':
                hle++
                break;
              case 'LNG':
                lng++
                break;
            }
          }
        }
        if (edg > 3 || dw > 3 || mad > 3 || psg > 3 || fpx > 3 || geng > 3 || fnc > 3 || hundred > 3 || rng > 3 || t1 > 3 || rge > 3 || tl > 3 || c9 > 3 || dfm > 3 || hle > 3 || lng > 3) {
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