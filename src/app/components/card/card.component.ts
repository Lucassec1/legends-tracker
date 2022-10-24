import { championSquareImgURL, summonerSpellImgURL } from './../../../services/api';
import { MatchResultOptions, SummonerSpellOptions } from './../core/types/card';
import { Component, OnInit, Input } from '@angular/core';

type Type = 'match-history';
type Victory = 'true' | 'false' | 'undefined';
type SummonerSpell = 'barrier' | 'cleanse' | 'ignite' | 'exhaust' | 'flash' | 'ghost' | 'heal' | 'clarity' | 'smite' | 'teleport';

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

  constructor() {  }

  championName() {
    const championNameArr: string[] = this.champion.split(' ');
    let formatedChampionName: string = '';

    for (let i = 0; i < championNameArr.length; i++) {
      formatedChampionName = formatedChampionName + (championNameArr[i].charAt(0).toUpperCase() + championNameArr[i].slice(1));
    }
    console.log(formatedChampionName)
    return formatedChampionName;
  }

  kda() {
    const kda = ( Number(this.kill) + Number(this.assistance) ) / Number(this.death)
    return kda.toFixed(1);
  }

  ngOnInit(): void {
    this.kda()
    this.matchResult = MatchResultOptions[this.victory];
    this.firstSummonerSpellName = SummonerSpellOptions[this.firstSummonerSpell];
    this.secondSummonerSpellName = SummonerSpellOptions[this.secondSummonerSpell];
  }

}
