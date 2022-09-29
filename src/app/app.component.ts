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

  pool = [
    {
      "player": "Breathe",
      "team": "RNG",
      "value": 30,
      "role": "top"
    },
    {
      "player": "Wei",
      "team": "RNG",
      "value": 30,
      "role": "jungle"
    },
    {
      "player": "Xiaohu",
      "team": "RNG",
      "value": 30,
      "role": "mid"
    },
    {
      "player": "GALA",
      "team": "RNG",
      "value": 30,
      "role": "adc"
    },
    {
      "player": "Ming",
      "team": "RNG",
      "value": 30,
      "role": "supp"
    },
    {
      "player": "KenZhu",
      "team": "RNG",
      "value": 30,
      "role": "coach"
    },
    {
      "player": "Kingen",
      "team": "DRX",
      "value": 30,
      "role": "top"
    },
    {
      "player": "Pyosik",
      "team": "DRX",
      "value": 30,
      "role": "jungle"
    },
    {
      "player": "Zeka",
      "team": "DRX",
      "value": 30,
      "role": "mid"
    },
    {
      "player": "Deft",
      "team": "DRX",
      "value": 30,
      "role": "adc"
    },
    {
      "player": "BeryL",
      "team": "DRX",
      "value": 30,
      "role": "supp"
    },
    {
      "player": "Mowgli",
      "team": "DRX",
      "value": 30,
      "role": "coach"
    },
    {
      "player": "Wunder",
      "team": "FNC",
      "value": 30,
      "role": "top"
    },
    {
      "player": "Razork",
      "team": "FNC",
      "value": 30,
      "role": "jungle"
    },
    {
      "player": "Humanoid",
      "team": "FNC",
      "value": 30,
      "role": "mid"
    },
    {
      "player": "Upset",
      "team": "FNC",
      "value": 30,
      "role": "adc"
    },
    {
      "player": "Hylissang",
      "team": "FNC",
      "value": 30,
      "role": "supp"
    },
    {
      "player": "YamatoCannon",
      "team": "FNC",
      "value": 30,
      "role": "coach"
    },
    {
      "player": "Armut",
      "team": "MAD",
      "value": 30,
      "role": "top"
    },
    {
      "player": "Elyoya",
      "team": "MAD",
      "value": 30,
      "role": "jungle"
    },
    {
      "player": "Nisqy",
      "team": "MAD",
      "value": 30,
      "role": "mid"
    },
    {
      "player": "UNF0RGIVEN",
      "team": "MAD",
      "value": 30,
      "role": "adc"
    },
    {
      "player": "Kaiser",
      "team": "MAD",
      "value": 30,
      "role": "supp"
    },
    {
      "player": "Mac",
      "team": "MAD",
      "value": 30,
      "role": "coach"
    },
    {
      "player": "Impact",
      "team": "EG",
      "value": 20,
      "role": "top"
    },
    {
      "player": "Inspired",
      "team": "EG",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "jojopyun",
      "team": "EG",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Kaori",
      "team": "EG",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Vulcan",
      "team": "EG",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Rigby",
      "team": "EG",
      "value": 20,
      "role": "coach"
    },
    {
      "player": "Likai",
      "team": "BYG",
      "value": 20,
      "role": "top"
    },
    {
      "player": "HuSha",
      "team": "BYG",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Minji",
      "team": "BYG",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Wako",
      "team": "BYG",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Kino",
      "team": "BYG",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Benny",
      "team": "BYG",
      "value": 20,
      "role": "coach"
    },
    {
      "player": "Hasmed",
      "team": "SGB",
      "value": 20,
      "role": "top"
    },
    {
      "player": "BeanJ",
      "team": "SGB",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Froggy",
      "team": "SGB",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Shogun",
      "team": "SGB",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Taki",
      "team": "SGB",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Ren",
      "team": "SGB",
      "value": 20,
      "role": "coach"
    },
    {
      "player": "Evi",
      "team": "DFM",
      "value": 20,
      "role": "top"
    },
    {
      "player": "Steal",
      "team": "DFM",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Yaharong",
      "team": "DFM",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Yutapon",
      "team": "DFM",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Harp",
      "team": "DFM",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Kazu",
      "team": "DFM",
      "value": 20,
      "role": "coach"
    },
    {
      "player": "Topoon",
      "team": "CHF",
      "value": 10,
      "role": "top"
    },
    {
      "player": "Arthur",
      "team": "CHF",
      "value": 10,
      "role": "jungle"
    },
    {
      "player": "Tally",
      "team": "CHF",
      "value": 10,
      "role": "mid"
    },
    {
      "player": "Raes",
      "team": "CHF",
      "value": 10,
      "role": "adc"
    },
    {
      "player": "Aladoric",
      "team": "CHF",
      "value": 10,
      "role": "supp"
    },
    {
      "player": "Babip",
      "team": "CHF",
      "value": 10,
      "role": "coach"
    },
    {
      "player": "StarScreen",
      "team": "IW",
      "value": 10,
      "role": "top"
    },
    {
      "player": "Ferret",
      "team": "IW",
      "value": 10,
      "role": "jungle"
    },
    {
      "player": "Serin",
      "team": "IW",
      "value": 10,
      "role": "mid"
    },
    {
      "player": "HolyPhoenix",
      "team": "IW",
      "value": 10,
      "role": "adc"
    },
    {
      "player": "Farfetch",
      "team": "IW",
      "value": 10,
      "role": "supp"
    },
    {
      "player": "TheQep",
      "team": "IW",
      "value": 10,
      "role": "coach"
    },

    {
      "player": "ADD",
      "team": "ISG",
      "value": 10,
      "role": "top"
    },
    {
      "player": "Grell",
      "team": "ISG",
      "value": 10,
      "role": "jungle"
    },
    {
      "player": "seiya",
      "team": "ISG",
      "value": 10,
      "role": "mid"
    },
    {
      "player": "Gavotto",
      "team": "ISG",
      "value": 10,
      "role": "adc"
    },
    {
      "player": "Jelly",
      "team": "ISG",
      "value": 10,
      "role": "supp"
    },
    {
      "player": "Ukkyr",
      "team": "ISG",
      "value": 10,
      "role": "coach"
    },
    {
      "player": "Robo",
      "team": "LLL",
      "value": 10,
      "role": "top"
    },
    {
      "player": "Croc",
      "team": "LLL",
      "value": 10,
      "role": "jungle"
    },
    {
      "player": "tinowns",
      "team": "LLL",
      "value": 10,
      "role": "mid"
    },
    {
      "player": "Brance",
      "team": "LLL",
      "value": 10,
      "role": "adc"
    },
    {
      "player": "Ceos",
      "team": "LLL",
      "value": 10,
      "role": "supp"
    },
    {
      "player": "Von",
      "team": "LLL",
      "value": 10,
      "role": "coach"
    }
  ]

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

    this.playerPoolTop = []
    this.playerPoolJng = []
    this.playerPoolMid = []
    this.playerPoolAdc = []
    this.playerPoolSupp = []
    this.playerPoolCoach = []

    this.pool.forEach(player => {
      switch (player?.role) {
        case 'top':
          this.playerPoolTop.push(player)
          break;
        case 'jungle':
          this.playerPoolJng.push(player)
          break;
        case 'mid':
          this.playerPoolMid.push(player)
          break;
        case 'adc':
          this.playerPoolAdc.push(player)
          break;
        case 'supp':
          this.playerPoolSupp.push(player)
          break;
        case 'coach':
          this.playerPoolCoach.push(player)
          break;
      }
    })

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
    let value = 120 - top - jungle - mid - adc - supp - coach
    return value
  }

  verifyComp() {
    if (this.completedComp()) {
      if (this.calculateCredit() <= 120 && this.calculateCredit() >= 0) {
        let edg = 0, dw = 0, mad = 0, psg = 0, fpx = 0, geng = 0, fnc = 0, hundred = 0, rng = 0, t1 = 0, rge = 0, tl = 0, c9 = 0, dfm = 0, hle = 0, lng = 0, drx = 0, byg = 0, eg = 0, sgb = 0, chf = 0, iw = 0, isg = 0, lll = 0
        for (const [key, value] of Object.entries(this.comp)) {
          if (key !== 'coach') {
            switch (value['team']) {
              case 'DRX':
                drx++
                break;
              case 'BYG':
                byg++
                break;
              case 'EG':
                eg++
                break;
              case 'DRX':
                drx++
                break;
              case 'SGB':
                sgb++
                break;
              case 'CHF':
                chf++
                break;
              case 'IW':
                iw++
                break;
              case 'ISG':
                isg++
                break;
              case 'LLL':
                lll++
                break;
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
        if (edg > 2 || dw > 2 || mad > 2 || psg > 2 || fpx > 2 || geng > 2 || fnc > 2 || hundred > 2 || rng > 2 || t1 > 2 || rge > 2 || tl > 2 || c9 > 2 || dfm > 2 || hle > 2 || lng > 2 || drx > 2 || byg > 2 || eg  > 2 || sgb > 2 || chf > 2 || iw > 2 || isg > 2 || lll > 2) {
          this.validComp = false
        } else {
          this.validComp = true
        }
      } else {
        this.validComp = false
      }
    }
  }

  copy() {
    return String(this.comp.top?.player) + ' ' + String(this.comp.jungle?.player) + ' ' + String(this.comp.mid?.player) + ' ' + String(this.comp.adc?.player) + ' ' + String(this.comp.supp?.player) + ' ' + String(this.comp.coach?.player)
  }

}