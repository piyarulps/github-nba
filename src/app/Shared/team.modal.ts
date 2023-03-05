export interface TeamMeta {
  current_page: number
  next_page: null
  per_page: number
  total_count: number
  total_pages:number
}
export interface TeamList {
  id: number
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Team {
  data:Array<TeamList>,
  meta:TeamMeta
}
export interface TeamListDeatils{
    id: number
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
    selfAvgScore?: string;
    opptAvgScore?: string;
    results?:Array<teamResults>
  }

  export interface teamResults {
    id:	number;
    date:	string;
    home_team_score	:	number;
    visitor_team_score:	number;
    period:	number;
    postseason	:	boolean;
    season:	number;
    status:	string;
    time:	string;
    visitor_team:TeamList;
    home_team:TeamList;
    OpptTeam?:string;
    selfTeam?: string;
    self_score?: number;
    oppt_score?: number;
  }
  export interface game {
    data:Array<teamResults>;
    meta:TeamMeta;
  }


