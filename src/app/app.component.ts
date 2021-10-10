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
        value: 40
      },
      {
        player: 'Khan',
        team: 'DW',
        value: 40
      },
      {
        player: 'Armut',
        team: 'MAD',
        value: 40
      },
      {
        player: 'Hanbi',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Nuguri',
        team: 'FPX',
        value: 30
      },
      {
        player: 'Rascal',
        team: 'GENG',
        value: 30
      },
      {
        player: 'Adam',
        team: 'FNC',
        value: 30
      },
      {
        player: 'Ssumday',
        team: '100T',
        value: 30
      },
      {
        player: 'Xiaohu',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Canna',
        team: 'T1',
        value: 20
      },
      {
        player: 'Odoamne',
        team: 'RGE',
        value: 20
      },
      {
        player: 'Alphari',
        team: 'TL',
        value: 20
      },
      {
        player: 'Fudge',
        team: 'C9',
        value: 10
      },
      {
        player: 'Evi',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Morgan',
        team: 'HLE',
        value: 10
      },
      {
        player: 'Ale',
        team: 'LNG',
        value: 10
      }
    ]
    this.playerPoolJng = [
      {
        player: 'Jiejie',
        team: 'EDG',
        value: 40
      },
      {
        player: 'Canyon',
        team: 'DW',
        value: 40
      },
      {
        player: 'Elyoya',
        team: 'MAD',
        value: 40
      },
      {
        player: 'River',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Tian',
        team: 'FPX',
        value: 30
      },
      {
        player: 'Clid',
        team: 'GENG',
        value: 30
      },
      {
        player: 'Bwipo',
        team: 'FNC',
        value: 30
      },
      {
        player: 'Closer',
        team: '100T',
        value: 30
      },
      {
        player: 'Wei',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Oner',
        team: 'T1',
        value: 20
      },
      {
        player: 'Inspired',
        team: 'RGE',
        value: 20
      },
      {
        player: 'Santorin',
        team: 'TL',
        value: 20
      },
      {
        player: 'Blaber',
        team: 'C9',
        value: 10
      },
      {
        player: 'Steal',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Willer',
        team: 'HLE',
        value: 10
      },
      {
        player: 'Tarzan',
        team: 'LNG',
        value: 10
      }
    ]
    this.playerPoolMid = [
      {
        player: 'Scout',
        team: 'EDG',
        value: 40
      },
      {
        player: 'ShowMaker',
        team: 'DW',
        value: 40
      },
      {
        player: 'Humanoid',
        team: 'MAD',
        value: 40
      },
      {
        player: 'Maple',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Doinb',
        team: 'FPX',
        value: 30
      },
      {
        player: 'Bdd',
        team: 'GENG',
        value: 30
      },
      {
        player: 'Nisqy',
        team: 'FNC',
        value: 30
      },
      {
        player: 'Abbedagge',
        team: '100T',
        value: 30
      },
      {
        player: 'Cryin',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Faker',
        team: 'T1',
        value: 20
      },
      {
        player: 'Larssen',
        team: 'RGE',
        value: 20
      },
      {
        player: 'Jensen',
        team: 'TL',
        value: 20
      },
      {
        player: 'Perkz',
        team: 'C9',
        value: 10
      },
      {
        player: 'Aria',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Chovy',
        team: 'HLE',
        value: 10
      },
      {
        player: 'icon',
        team: 'LNG',
        value: 10
      }
    ]
    this.playerPoolAdc = [
      {
        player: 'Viper',
        team: 'EDG',
        value: 40
      },
      {
        player: 'Ghost',
        team: 'DW',
        value: 40
      },
      {
        player: 'Carzzy',
        team: 'MAD',
        value: 40
      },
      {
        player: 'Unified',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Lwx',
        team: 'FPX',
        value: 30
      },
      {
        player: 'Ruler',
        team: 'GENG',
        value: 30
      },
      {
        player: 'Upset',
        team: 'FNC',
        value: 30
      },
      {
        player: 'FBI',
        team: '100T',
        value: 30
      },
      {
        player: 'GALA',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Teddy',
        team: 'T1',
        value: 20
      },
      {
        player: 'Hans sama',
        team: 'RGE',
        value: 20
      },
      {
        player: 'Tactical',
        team: 'TL',
        value: 20
      },
      {
        player: 'Zven',
        team: 'C9',
        value: 10
      },
      {
        player: 'Yutapon',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Deft',
        team: 'HLE',
        value: 10
      },
      {
        player: 'Light',
        team: 'LNG',
        value: 10
      }
    ]
    this.playerPoolSupp = [
      {
        player: 'Meiko',
        team: 'EDG',
        value: 40
      },
      {
        player: 'BeryL',
        team: 'DW',
        value: 40
      },
      {
        player: 'Kaiser',
        team: 'MAD',
        value: 40
      },
      {
        player: 'Kaiwing',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Crisp',
        team: 'FPX',
        value: 30
      },
      {
        player: 'Life',
        team: 'GENG',
        value: 30
      },
      {
        player: 'Hylissang',
        team: 'FNC',
        value: 30
      },
      {
        player: 'huhi',
        team: '100T',
        value: 30
      },
      {
        player: 'Ming',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Keria',
        team: 'T1',
        value: 20
      },
      {
        player: 'Trymbi',
        team: 'RGE',
        value: 20
      },
      {
        player: 'CoreJJ',
        team: 'TL',
        value: 20
      },
      {
        player: 'Vulcan',
        team: 'C9',
        value: 10
      },
      {
        player: 'Gaeng',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Vista',
        team: 'HLE',
        value: 10
      },
      {
        player: 'Iwandy',
        team: 'LNG',
        value: 10
      }
    ]
    this.playerPoolCoach = [
      {
        player: 'Maokai',
        team: 'EDG',
        value: 40
      },
      {
        player: 'KkOma',
        team: 'DW',
        value: 40
      },
      {
        player: 'Mac',
        team: 'MAD',
        value: 40
      },
      {
        player: 'Helper',
        team: 'PSG',
        value: 40
      },
      {
        player: 'Steak',
        team: 'FPX',
        value: 30
      },
      {
        player: 'oDin',
        team: 'GENG',
        value: 30
      },
      {
        player: 'YamatoCannon',
        team: 'FNC',
        value: 30
      },
      {
        player: 'Reapered',
        team: '100T',
        value: 30
      },
      {
        player: 'Poppy',
        team: 'RNG',
        value: 20
      },
      {
        player: 'Stardust',
        team: 'T1',
        value: 20
      },
      {
        player: 'fredy122',
        team: 'RGE',
        value: 20
      },
      {
        player: 'Kold',
        team: 'TL',
        value: 20
      },
      {
        player: 'Mithy',
        team: 'C9',
        value: 10
      },
      {
        player: 'Yang',
        team: 'DFM',
        value: 10
      },
      {
        player: 'Kezman',
        team: 'HLE',
        value: 10
      },
      {
        player: 'U',
        team: 'LNG',
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
        if (edg > 1 || dw > 1 || mad > 1 || psg > 1 || fpx > 1 || geng > 1 || fnc > 1 || hundred > 1 || rng > 1 || t1 > 1 || rge > 1 || tl > 1 || c9 > 1 || dfm > 1 || hle > 1 || lng > 1) {
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