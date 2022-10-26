import { championSquareImgURL, summonerSpellImgURL } from './../../../services/api';
import { MatchResultOptions, SummonerSpellOptions, Type, SummonerSpell, Victory } from './../core/types/card';
import { Component, OnInit, Input } from '@angular/core';

export interface CardProps {
  type: Type,
  victory: Victory,
  champion?: String,
  firstSummonerSpell?: SummonerSpell,
  secondSummonerSpell?: SummonerSpell,
  kill?: Number,
  death?: Number,
  assistance?: Number,
  matchResult?: MatchResultOptions,
  message?: String
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type: Type = 'match-history';

  //Math History Type Inputs
  @Input() victory: Victory = 'undefined';
  @Input() champion: String = 'lee sin';
  @Input() firstSummonerSpell: SummonerSpell = 'ignite'; 
  @Input() secondSummonerSpell: SummonerSpell = 'flash'; 
  @Input() kill: Number = 0;
  @Input() death: Number = 0;
  @Input() assistance: Number = 0;

  public matchResult?: MatchResultOptions;
  public firstSummonerSpellName?: SummonerSpellOptions;
  public secondSummonerSpellName?: SummonerSpellOptions;
  public summonerSpellImgURL = summonerSpellImgURL;
  public championSquareImgURL = championSquareImgURL;

  championName() {
    const championNameArr: string[] = this.champion.split(' ');
    let formatedChampionName: string = '';

    for (let i = 0; i < championNameArr.length; i++) {
      formatedChampionName = formatedChampionName + (championNameArr[i].charAt(0).toUpperCase() + championNameArr[i].slice(1));
    }
    return formatedChampionName;
  }

  kda() {
    const kda = ( Number(this.kill) + Number(this.assistance) ) / Number(this.death)
    return kda.toFixed(1);
  }

  setMatchResult() {
    if (this.victory === 'true') {
      return 'Vitória';
    } else if (this.victory === 'false') {
      return 'Derrota';
    } else {
      return 'Indefinido';
    }
  }

  ngOnInit(): void {
    this.kda()
    this.matchResult = MatchResultOptions[this.victory];
    this.firstSummonerSpellName = SummonerSpellOptions[this.firstSummonerSpell];
    this.secondSummonerSpellName = SummonerSpellOptions[this.secondSummonerSpell];
  }
}
