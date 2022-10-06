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
    null,
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
    null,
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
    null,
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
    null,
    {
      "player": 369,
      "team": "JDG",
      "value": 50,
      "role": "top"
    },
    {
      "player": "Kanavi",
      "team": "JDG",
      "value": 50,
      "role": "jungle"
    },
    {
      "player": "Yagao",
      "team": "JDG",
      "value": 50,
      "role": "mid"
    },
    {
      "player": "Hope",
      "team": "JDG",
      "value": 50,
      "role": "adc"
    },
    {
      "player": "Missing",
      "team": "JDG",
      "value": 50,
      "role": "supp"
    },
    {
      "player": "Homme",
      "team": "JDG",
      "value": 50,
      "role": "coach"
    },
    null,
    {
      "player": "Doran",
      "team": "GENG",
      "value": 50,
      "role": "top"
    },
    {
      "player": "Peanut",
      "team": "GENG",
      "value": 50,
      "role": "jungle"
    },
    {
      "player": "Chovy",
      "team": "GENG",
      "value": 50,
      "role": "mid"
    },
    {
      "player": "Ruler",
      "team": "GENG",
      "value": 50,
      "role": "adc"
    },
    {
      "player": "Lehends",
      "team": "GENG",
      "value": 50,
      "role": "supp"
    },
    {
      "player": "Score",
      "team": "GENG",
      "value": 50,
      "role": "coach"
    },
    null,
    {
      "player": "Odoamne",
      "team": "RGE",
      "value": 50,
      "role": "top"
    },
    {
      "player": "Malrang",
      "team": "RGE",
      "value": 50,
      "role": "jungle"
    },
    {
      "player": "Larssen",
      "team": "RGE",
      "value": 50,
      "role": "mid"
    },
    {
      "player": "Comp",
      "team": "RGE",
      "value": 50,
      "role": "adc"
    },
    {
      "player": "Trymbi",
      "team": "RGE",
      "value": 50,
      "role": "supp"
    },
    {
      "player": "fredy122",
      "team": "RGE",
      "value": 50,
      "role": "coach"
    },
    null,
    {
      "player": "Fudge",
      "team": "C9",
      "value": 50,
      "role": "top"
    },
    {
      "player": "Blaber",
      "team": "C9",
      "value": 50,
      "role": "jungle"
    },
    {
      "player": "Jensen",
      "team": "C9",
      "value": 50,
      "role": "mid"
    },
    {
      "player": "Berserker",
      "team": "C9",
      "value": 50,
      "role": "adc"
    },
    {
      "player": "Zven",
      "team": "C9",
      "value": 50,
      "role": "supp"
    },
    {
      "player": "Max Waldo",
      "team": "C9",
      "value": 50,
      "role": "coach"
    },
    null,
    {
      "player": "Wayward",
      "team": "TES",
      "value": 40,
      "role": "top"
    },
    {
      "player": "Tian",
      "team": "TES",
      "value": 40,
      "role": "jungle"
    },
    {
      "player": "knight",
      "team": "TES",
      "value": 40,
      "role": "mid"
    },
    {
      "player": "JackeyLove",
      "team": "TES",
      "value": 40,
      "role": "adc"
    },
    {
      "player": "Mark",
      "team": "TES",
      "value": 40,
      "role": "supp"
    },
    {
      "player": "Crescent",
      "team": "TES",
      "value": 40,
      "role": "coach"
    },
    null,
    {
      "player": "Zeus",
      "team": "T1",
      "value": 40,
      "role": "top"
    },
    {
      "player": "Oner",
      "team": "T1",
      "value": 40,
      "role": "jungle"
    },
    {
      "player": "Faker",
      "team": "T1",
      "value": 40,
      "role": "mid"
    },
    {
      "player": "Gumayusi",
      "team": "T1",
      "value": 40,
      "role": "adc"
    },
    {
      "player": "Keria",
      "team": "T1",
      "value": 40,
      "role": "supp"
    },
    {
      "player": "Bengi",
      "team": "T1",
      "value": 40,
      "role": "coach"
    },
    null,
    {
      "player": "BrokenBlade",
      "team": "G2",
      "value": 40,
      "role": "top"
    },
    {
      "player": "Jankos",
      "team": "G2",
      "value": 40,
      "role": "jungle"
    },
    {
      "player": "caPs",
      "team": "G2",
      "value": 40,
      "role": "mid"
    },
    {
      "player": "Flakked",
      "team": "G2",
      "value": 40,
      "role": "adc"
    },
    {
      "player": "Targamas",
      "team": "G2",
      "value": 40,
      "role": "supp"
    },
    {
      "player": "Dylan Falco",
      "team": "G2",
      "value": 40,
      "role": "coach"
    },
    null,
    {
      "player": "Rest",
      "team": "CFO",
      "value": 20,
      "role": "top"
    },
    {
      "player": "Gemini",
      "team": "CFO",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Mission",
      "team": "CFO",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Shunn",
      "team": "CFO",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Koala",
      "team": "CFO",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Achie",
      "team": "CFO",
      "value": 20,
      "role": "coach"
    },
    null,
    {
      "player": "Flandre",
      "team": "EDG",
      "value": 40,
      "role": "top"
    },
    {
      "player": "JunJia - Jiejie",
      "team": "EDG",
      "value": 40,
      "role": "jungle"
    },
    {
      "player": "Scout",
      "team": "EDG",
      "value": 40,
      "role": "mid"
    },
    {
      "player": "Viper",
      "team": "EDG",
      "value": 40,
      "role": "adc"
    },
    {
      "player": "Meiko",
      "team": "EDG",
      "value": 40,
      "role": "supp"
    },
    {
      "player": "Maokai",
      "team": "EDG",
      "value": 40,
      "role": "coach"
    },
    null,
    {
      "player": "Nuguri - Burdol",
      "team": "DWG",
      "value": 40,
      "role": "top"
    },
    {
      "player": "Canyon",
      "team": "DWG",
      "value": 40,
      "role": "jungle"
    },
    {
      "player": "ShowMaker",
      "team": "DWG",
      "value": 40,
      "role": "mid"
    },
    {
      "player": "deokdam",
      "team": "DWG",
      "value": 40,
      "role": "adc"
    },
    {
      "player": "Kellin",
      "team": "DWG",
      "value": 40,
      "role": "supp"
    },
    {
      "player": "Daeny",
      "team": "DWG",
      "value": 40,
      "role": "coach"
    },
    null,
    {
      "player": "Ssumday",
      "team": "100T",
      "value": 20,
      "role": "top"
    },
    {
      "player": "Closer",
      "team": "100T",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Abbedagge",
      "team": "100T",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "FBI",
      "team": "100T",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "huhi",
      "team": "100T",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "Reapered",
      "team": "100T",
      "value": 20,
      "role": "coach"
    },
    null,
    {
      "player": "Kiaya",
      "team": "GAM",
      "value": 20,
      "role": "top"
    },
    {
      "player": "Levi",
      "team": "GAM",
      "value": 20,
      "role": "jungle"
    },
    {
      "player": "Kati",
      "team": "GAM",
      "value": 20,
      "role": "mid"
    },
    {
      "player": "Sty1e",
      "team": "GAM",
      "value": 20,
      "role": "adc"
    },
    {
      "player": "Bie",
      "team": "GAM",
      "value": 20,
      "role": "supp"
    },
    {
      "player": "JackieWind",
      "team": "GAM",
      "value": 20,
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
    let value = 220 - top - jungle - mid - adc - supp - coach
    return value
  }

  verifyComp() {
    if (this.completedComp()) {
      if (this.calculateCredit() <= 220 && this.calculateCredit() >= 0) {
        let edg = 0, dw = 0, mad = 0, psg = 0, fpx = 0, geng = 0, fnc = 0, hundred = 0, rng = 0, t1 = 0, rge = 0, tl = 0, c9 = 0, dfm = 0,
          hle = 0, lng = 0, drx = 0, byg = 0, eg = 0, sgb = 0, chf = 0, iw = 0, isg = 0, lll = 0, jdg = 0, tes = 0, g2 = 0, dwg = 0, t100 = 0, gam = 0, cfo = 0
        for (const [key, value] of Object.entries(this.comp)) {
          if (key !== 'coach') {
            switch (value['team']) {
              case 'JDG':
                jdg++
                break;
              case 'TES':
                tes++
                break;
              case 'G2':
                g2++
                break;
              case 'DWG':
                dwg++
                break;
              case '100T':
                t100++
                break;
              case 'GAM':
                gam++
                break;
              case 'CFO':
                cfo++
                break;
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
        if (edg > 2 || dw > 2 || mad > 2 || psg > 2 || fpx > 2 || geng > 2 || fnc > 2 || hundred > 2 || rng > 2 || t1 > 2 || rge > 2 || tl > 2 || c9 > 2 || dfm > 2 || hle > 2 || lng > 2 || drx > 2 || byg > 2 || eg > 2 || sgb > 2 || chf > 2 || iw > 2 || isg > 2 || lll > 2 || jdg > 2 || tes > 2 || g2 > 2 || dwg > 2 || t100 > 2 || gam > 2 || cfo > 2) {
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