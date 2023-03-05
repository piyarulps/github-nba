import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TeamList, teamResults } from '../Shared/team.modal';

@Component({
  selector: 'app-nba-team-result',
  templateUrl: './nba-team-result.component.html',
  styleUrls: ['./nba-team-result.component.scss'],
})
export class NbaTeamResultComponent implements OnInit {
  public teamCode!: number;
  public results: Array<teamResults> = [];
  public teamdetails: TeamList;
  constructor(
    private service: ApiService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamCode = params['teamCode'];
      this.getTeamResult(params['teamCode']);
    });
  }
  getTeamResult(teamCode: string) {
    const data = this.service.selectedTeamList.find(ele => {
      console.log(ele);
      if (ele.abbreviation == teamCode) {
        this.teamdetails = ele;
        this.results = ele.results;
      }
    });
  }
}
