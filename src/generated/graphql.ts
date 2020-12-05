import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "contest" */
export type Contest = {
  __typename?: 'contest';
  id: Scalars['uuid'];
  /** An object relationship */
  participant?: Maybe<Participants>;
  participant_id?: Maybe<Scalars['uuid']>;
  submission_time: Scalars['timestamptz'];
  submission_url: Scalars['String'];
  vote_count: Scalars['Int'];
};

/** aggregated selection of "contest" */
export type Contest_Aggregate = {
  __typename?: 'contest_aggregate';
  aggregate?: Maybe<Contest_Aggregate_Fields>;
  nodes: Array<Contest>;
};

/** aggregate fields of "contest" */
export type Contest_Aggregate_Fields = {
  __typename?: 'contest_aggregate_fields';
  avg?: Maybe<Contest_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contest_Max_Fields>;
  min?: Maybe<Contest_Min_Fields>;
  stddev?: Maybe<Contest_Stddev_Fields>;
  stddev_pop?: Maybe<Contest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contest_Stddev_Samp_Fields>;
  sum?: Maybe<Contest_Sum_Fields>;
  var_pop?: Maybe<Contest_Var_Pop_Fields>;
  var_samp?: Maybe<Contest_Var_Samp_Fields>;
  variance?: Maybe<Contest_Variance_Fields>;
};

/** aggregate fields of "contest" */
export type Contest_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contest_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contest" */
export type Contest_Aggregate_Order_By = {
  avg?: Maybe<Contest_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contest_Max_Order_By>;
  min?: Maybe<Contest_Min_Order_By>;
  stddev?: Maybe<Contest_Stddev_Order_By>;
  stddev_pop?: Maybe<Contest_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contest_Stddev_Samp_Order_By>;
  sum?: Maybe<Contest_Sum_Order_By>;
  var_pop?: Maybe<Contest_Var_Pop_Order_By>;
  var_samp?: Maybe<Contest_Var_Samp_Order_By>;
  variance?: Maybe<Contest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contest" */
export type Contest_Arr_Rel_Insert_Input = {
  data: Array<Contest_Insert_Input>;
  on_conflict?: Maybe<Contest_On_Conflict>;
};

/** aggregate avg on columns */
export type Contest_Avg_Fields = {
  __typename?: 'contest_avg_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contest" */
export type Contest_Avg_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contest". All fields are combined with a logical 'AND'. */
export type Contest_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contest_Bool_Exp>>>;
  _not?: Maybe<Contest_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contest_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  participant?: Maybe<Participants_Bool_Exp>;
  participant_id?: Maybe<Uuid_Comparison_Exp>;
  submission_time?: Maybe<Timestamptz_Comparison_Exp>;
  submission_url?: Maybe<String_Comparison_Exp>;
  vote_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contest" */
export enum Contest_Constraint {
  /** unique or primary key constraint */
  ContestParticipantIdKey = 'contest_participant_id_key',
  /** unique or primary key constraint */
  ContestPkey = 'contest_pkey'
}

/** input type for incrementing integer column in table "contest" */
export type Contest_Inc_Input = {
  vote_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contest" */
export type Contest_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  participant?: Maybe<Participants_Obj_Rel_Insert_Input>;
  participant_id?: Maybe<Scalars['uuid']>;
  submission_time?: Maybe<Scalars['timestamptz']>;
  submission_url?: Maybe<Scalars['String']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Contest_Max_Fields = {
  __typename?: 'contest_max_fields';
  id?: Maybe<Scalars['uuid']>;
  participant_id?: Maybe<Scalars['uuid']>;
  submission_time?: Maybe<Scalars['timestamptz']>;
  submission_url?: Maybe<Scalars['String']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "contest" */
export type Contest_Max_Order_By = {
  id?: Maybe<Order_By>;
  participant_id?: Maybe<Order_By>;
  submission_time?: Maybe<Order_By>;
  submission_url?: Maybe<Order_By>;
  vote_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contest_Min_Fields = {
  __typename?: 'contest_min_fields';
  id?: Maybe<Scalars['uuid']>;
  participant_id?: Maybe<Scalars['uuid']>;
  submission_time?: Maybe<Scalars['timestamptz']>;
  submission_url?: Maybe<Scalars['String']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "contest" */
export type Contest_Min_Order_By = {
  id?: Maybe<Order_By>;
  participant_id?: Maybe<Order_By>;
  submission_time?: Maybe<Order_By>;
  submission_url?: Maybe<Order_By>;
  vote_count?: Maybe<Order_By>;
};

/** response of any mutation on the table "contest" */
export type Contest_Mutation_Response = {
  __typename?: 'contest_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contest>;
};

/** input type for inserting object relation for remote table "contest" */
export type Contest_Obj_Rel_Insert_Input = {
  data: Contest_Insert_Input;
  on_conflict?: Maybe<Contest_On_Conflict>;
};

/** on conflict condition type for table "contest" */
export type Contest_On_Conflict = {
  constraint: Contest_Constraint;
  update_columns: Array<Contest_Update_Column>;
  where?: Maybe<Contest_Bool_Exp>;
};

/** ordering options when selecting data from "contest" */
export type Contest_Order_By = {
  id?: Maybe<Order_By>;
  participant?: Maybe<Participants_Order_By>;
  participant_id?: Maybe<Order_By>;
  submission_time?: Maybe<Order_By>;
  submission_url?: Maybe<Order_By>;
  vote_count?: Maybe<Order_By>;
};

/** primary key columns input for table: "contest" */
export type Contest_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contest" */
export enum Contest_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParticipantId = 'participant_id',
  /** column name */
  SubmissionTime = 'submission_time',
  /** column name */
  SubmissionUrl = 'submission_url',
  /** column name */
  VoteCount = 'vote_count'
}

/** input type for updating data in table "contest" */
export type Contest_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  participant_id?: Maybe<Scalars['uuid']>;
  submission_time?: Maybe<Scalars['timestamptz']>;
  submission_url?: Maybe<Scalars['String']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Contest_Stddev_Fields = {
  __typename?: 'contest_stddev_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contest" */
export type Contest_Stddev_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contest_Stddev_Pop_Fields = {
  __typename?: 'contest_stddev_pop_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contest" */
export type Contest_Stddev_Pop_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contest_Stddev_Samp_Fields = {
  __typename?: 'contest_stddev_samp_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contest" */
export type Contest_Stddev_Samp_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contest_Sum_Fields = {
  __typename?: 'contest_sum_fields';
  vote_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "contest" */
export type Contest_Sum_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** update columns of table "contest" */
export enum Contest_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParticipantId = 'participant_id',
  /** column name */
  SubmissionTime = 'submission_time',
  /** column name */
  SubmissionUrl = 'submission_url',
  /** column name */
  VoteCount = 'vote_count'
}

/** aggregate var_pop on columns */
export type Contest_Var_Pop_Fields = {
  __typename?: 'contest_var_pop_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contest" */
export type Contest_Var_Pop_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contest_Var_Samp_Fields = {
  __typename?: 'contest_var_samp_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contest" */
export type Contest_Var_Samp_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contest_Variance_Fields = {
  __typename?: 'contest_variance_fields';
  vote_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contest" */
export type Contest_Variance_Order_By = {
  vote_count?: Maybe<Order_By>;
};

/** columns and relationships of "control" */
export type Control = {
  __typename?: 'control';
  id: Scalars['uuid'];
  leaderboard: Scalars['Boolean'];
  submission: Scalars['Boolean'];
  vote: Scalars['Boolean'];
};

/** aggregated selection of "control" */
export type Control_Aggregate = {
  __typename?: 'control_aggregate';
  aggregate?: Maybe<Control_Aggregate_Fields>;
  nodes: Array<Control>;
};

/** aggregate fields of "control" */
export type Control_Aggregate_Fields = {
  __typename?: 'control_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Control_Max_Fields>;
  min?: Maybe<Control_Min_Fields>;
};

/** aggregate fields of "control" */
export type Control_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Control_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "control" */
export type Control_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Control_Max_Order_By>;
  min?: Maybe<Control_Min_Order_By>;
};

/** input type for inserting array relation for remote table "control" */
export type Control_Arr_Rel_Insert_Input = {
  data: Array<Control_Insert_Input>;
  on_conflict?: Maybe<Control_On_Conflict>;
};

/** Boolean expression to filter rows from the table "control". All fields are combined with a logical 'AND'. */
export type Control_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Control_Bool_Exp>>>;
  _not?: Maybe<Control_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Control_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  leaderboard?: Maybe<Boolean_Comparison_Exp>;
  submission?: Maybe<Boolean_Comparison_Exp>;
  vote?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "control" */
export enum Control_Constraint {
  /** unique or primary key constraint */
  ControlPkey = 'control_pkey'
}

/** input type for inserting data into table "control" */
export type Control_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  leaderboard?: Maybe<Scalars['Boolean']>;
  submission?: Maybe<Scalars['Boolean']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Control_Max_Fields = {
  __typename?: 'control_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "control" */
export type Control_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Control_Min_Fields = {
  __typename?: 'control_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "control" */
export type Control_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "control" */
export type Control_Mutation_Response = {
  __typename?: 'control_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Control>;
};

/** input type for inserting object relation for remote table "control" */
export type Control_Obj_Rel_Insert_Input = {
  data: Control_Insert_Input;
  on_conflict?: Maybe<Control_On_Conflict>;
};

/** on conflict condition type for table "control" */
export type Control_On_Conflict = {
  constraint: Control_Constraint;
  update_columns: Array<Control_Update_Column>;
  where?: Maybe<Control_Bool_Exp>;
};

/** ordering options when selecting data from "control" */
export type Control_Order_By = {
  id?: Maybe<Order_By>;
  leaderboard?: Maybe<Order_By>;
  submission?: Maybe<Order_By>;
  vote?: Maybe<Order_By>;
};

/** primary key columns input for table: "control" */
export type Control_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "control" */
export enum Control_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Leaderboard = 'leaderboard',
  /** column name */
  Submission = 'submission',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "control" */
export type Control_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  leaderboard?: Maybe<Scalars['Boolean']>;
  submission?: Maybe<Scalars['Boolean']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "control" */
export enum Control_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Leaderboard = 'leaderboard',
  /** column name */
  Submission = 'submission',
  /** column name */
  Vote = 'vote'
}

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  game_name: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  teams_scores: Array<Teams_Scores>;
  /** An aggregated array relationship */
  teams_scores_aggregate: Teams_Scores_Aggregate;
};

/** columns and relationships of "games" */
export type GamesTeams_ScoresArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesTeams_Scores_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Games_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Games_Max_Order_By>;
  min?: Maybe<Games_Min_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
  _not?: Maybe<Games_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
  game_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  teams_scores?: Maybe<Teams_Scores_Bool_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  GamesPkey = 'games_pkey'
}

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  game_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  teams_scores?: Maybe<Teams_Scores_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  game_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  game_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  game_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  game_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** on conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns: Array<Games_Update_Column>;
  where?: Maybe<Games_Bool_Exp>;
};

/** ordering options when selecting data from "games" */
export type Games_Order_By = {
  game_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  teams_scores_aggregate?: Maybe<Teams_Scores_Aggregate_Order_By>;
};

/** primary key columns input for table: "games" */
export type Games_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  GameName = 'game_name',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  game_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  GameName = 'game_name',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "leaderboard_public" */
export type Leaderboard_Public = {
  __typename?: 'leaderboard_public';
  score?: Maybe<Scalars['bigint']>;
  team_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  team_name?: Maybe<Teams>;
};

/** aggregated selection of "leaderboard_public" */
export type Leaderboard_Public_Aggregate = {
  __typename?: 'leaderboard_public_aggregate';
  aggregate?: Maybe<Leaderboard_Public_Aggregate_Fields>;
  nodes: Array<Leaderboard_Public>;
};

/** aggregate fields of "leaderboard_public" */
export type Leaderboard_Public_Aggregate_Fields = {
  __typename?: 'leaderboard_public_aggregate_fields';
  avg?: Maybe<Leaderboard_Public_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Leaderboard_Public_Max_Fields>;
  min?: Maybe<Leaderboard_Public_Min_Fields>;
  stddev?: Maybe<Leaderboard_Public_Stddev_Fields>;
  stddev_pop?: Maybe<Leaderboard_Public_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Leaderboard_Public_Stddev_Samp_Fields>;
  sum?: Maybe<Leaderboard_Public_Sum_Fields>;
  var_pop?: Maybe<Leaderboard_Public_Var_Pop_Fields>;
  var_samp?: Maybe<Leaderboard_Public_Var_Samp_Fields>;
  variance?: Maybe<Leaderboard_Public_Variance_Fields>;
};

/** aggregate fields of "leaderboard_public" */
export type Leaderboard_Public_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Leaderboard_Public_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "leaderboard_public" */
export type Leaderboard_Public_Aggregate_Order_By = {
  avg?: Maybe<Leaderboard_Public_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Leaderboard_Public_Max_Order_By>;
  min?: Maybe<Leaderboard_Public_Min_Order_By>;
  stddev?: Maybe<Leaderboard_Public_Stddev_Order_By>;
  stddev_pop?: Maybe<Leaderboard_Public_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Leaderboard_Public_Stddev_Samp_Order_By>;
  sum?: Maybe<Leaderboard_Public_Sum_Order_By>;
  var_pop?: Maybe<Leaderboard_Public_Var_Pop_Order_By>;
  var_samp?: Maybe<Leaderboard_Public_Var_Samp_Order_By>;
  variance?: Maybe<Leaderboard_Public_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Leaderboard_Public_Avg_Fields = {
  __typename?: 'leaderboard_public_avg_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Avg_Order_By = {
  score?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "leaderboard_public". All fields are combined with a logical 'AND'. */
export type Leaderboard_Public_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Leaderboard_Public_Bool_Exp>>>;
  _not?: Maybe<Leaderboard_Public_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Leaderboard_Public_Bool_Exp>>>;
  score?: Maybe<Bigint_Comparison_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  team_name?: Maybe<Teams_Bool_Exp>;
};

/** aggregate max on columns */
export type Leaderboard_Public_Max_Fields = {
  __typename?: 'leaderboard_public_max_fields';
  score?: Maybe<Scalars['bigint']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Max_Order_By = {
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Leaderboard_Public_Min_Fields = {
  __typename?: 'leaderboard_public_min_fields';
  score?: Maybe<Scalars['bigint']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Min_Order_By = {
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "leaderboard_public" */
export type Leaderboard_Public_Order_By = {
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  team_name?: Maybe<Teams_Order_By>;
};

/** select columns of table "leaderboard_public" */
export enum Leaderboard_Public_Select_Column {
  /** column name */
  Score = 'score',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate stddev on columns */
export type Leaderboard_Public_Stddev_Fields = {
  __typename?: 'leaderboard_public_stddev_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Stddev_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Leaderboard_Public_Stddev_Pop_Fields = {
  __typename?: 'leaderboard_public_stddev_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Stddev_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Leaderboard_Public_Stddev_Samp_Fields = {
  __typename?: 'leaderboard_public_stddev_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Stddev_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Leaderboard_Public_Sum_Fields = {
  __typename?: 'leaderboard_public_sum_fields';
  score?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Sum_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Leaderboard_Public_Var_Pop_Fields = {
  __typename?: 'leaderboard_public_var_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Var_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Leaderboard_Public_Var_Samp_Fields = {
  __typename?: 'leaderboard_public_var_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Var_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Leaderboard_Public_Variance_Fields = {
  __typename?: 'leaderboard_public_variance_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "leaderboard_public" */
export type Leaderboard_Public_Variance_Order_By = {
  score?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contest" */
  delete_contest?: Maybe<Contest_Mutation_Response>;
  /** delete single row from the table: "contest" */
  delete_contest_by_pk?: Maybe<Contest>;
  /** delete data from the table: "control" */
  delete_control?: Maybe<Control_Mutation_Response>;
  /** delete single row from the table: "control" */
  delete_control_by_pk?: Maybe<Control>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "participants" */
  delete_participants?: Maybe<Participants_Mutation_Response>;
  /** delete single row from the table: "participants" */
  delete_participants_by_pk?: Maybe<Participants>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "status" */
  delete_status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "status" */
  delete_status_by_pk?: Maybe<Status>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "teams_scores" */
  delete_teams_scores?: Maybe<Teams_Scores_Mutation_Response>;
  /** delete single row from the table: "teams_scores" */
  delete_teams_scores_by_pk?: Maybe<Teams_Scores>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "contest" */
  insert_contest?: Maybe<Contest_Mutation_Response>;
  /** insert a single row into the table: "contest" */
  insert_contest_one?: Maybe<Contest>;
  /** insert data into the table: "control" */
  insert_control?: Maybe<Control_Mutation_Response>;
  /** insert a single row into the table: "control" */
  insert_control_one?: Maybe<Control>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "participants" */
  insert_participants?: Maybe<Participants_Mutation_Response>;
  /** insert a single row into the table: "participants" */
  insert_participants_one?: Maybe<Participants>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "status" */
  insert_status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "status" */
  insert_status_one?: Maybe<Status>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "teams_scores" */
  insert_teams_scores?: Maybe<Teams_Scores_Mutation_Response>;
  /** insert a single row into the table: "teams_scores" */
  insert_teams_scores_one?: Maybe<Teams_Scores>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "contest" */
  update_contest?: Maybe<Contest_Mutation_Response>;
  /** update single row of the table: "contest" */
  update_contest_by_pk?: Maybe<Contest>;
  /** update data of the table: "control" */
  update_control?: Maybe<Control_Mutation_Response>;
  /** update single row of the table: "control" */
  update_control_by_pk?: Maybe<Control>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "participants" */
  update_participants?: Maybe<Participants_Mutation_Response>;
  /** update single row of the table: "participants" */
  update_participants_by_pk?: Maybe<Participants>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "status" */
  update_status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "status" */
  update_status_by_pk?: Maybe<Status>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "teams_scores" */
  update_teams_scores?: Maybe<Teams_Scores_Mutation_Response>;
  /** update single row of the table: "teams_scores" */
  update_teams_scores_by_pk?: Maybe<Teams_Scores>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_ContestArgs = {
  where: Contest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_ControlArgs = {
  where: Control_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Control_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_ParticipantsArgs = {
  where: Participants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Participants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  role: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  status: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Teams_ScoresArgs = {
  where: Teams_Scores_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Teams_Scores_By_PkArgs = {
  game_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  auth0_id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootInsert_ContestArgs = {
  objects: Array<Contest_Insert_Input>;
  on_conflict?: Maybe<Contest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contest_OneArgs = {
  object: Contest_Insert_Input;
  on_conflict?: Maybe<Contest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ControlArgs = {
  objects: Array<Control_Insert_Input>;
  on_conflict?: Maybe<Control_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Control_OneArgs = {
  object: Control_Insert_Input;
  on_conflict?: Maybe<Control_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ParticipantsArgs = {
  objects: Array<Participants_Insert_Input>;
  on_conflict?: Maybe<Participants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Participants_OneArgs = {
  object: Participants_Insert_Input;
  on_conflict?: Maybe<Participants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: Maybe<Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: Maybe<Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Teams_ScoresArgs = {
  objects: Array<Teams_Scores_Insert_Input>;
  on_conflict?: Maybe<Teams_Scores_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Teams_Scores_OneArgs = {
  object: Teams_Scores_Insert_Input;
  on_conflict?: Maybe<Teams_Scores_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ContestArgs = {
  _inc?: Maybe<Contest_Inc_Input>;
  _set?: Maybe<Contest_Set_Input>;
  where: Contest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contest_By_PkArgs = {
  _inc?: Maybe<Contest_Inc_Input>;
  _set?: Maybe<Contest_Set_Input>;
  pk_columns: Contest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ControlArgs = {
  _set?: Maybe<Control_Set_Input>;
  where: Control_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Control_By_PkArgs = {
  _set?: Maybe<Control_Set_Input>;
  pk_columns: Control_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _set?: Maybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _set?: Maybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ParticipantsArgs = {
  _inc?: Maybe<Participants_Inc_Input>;
  _set?: Maybe<Participants_Set_Input>;
  where: Participants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Participants_By_PkArgs = {
  _inc?: Maybe<Participants_Inc_Input>;
  _set?: Maybe<Participants_Set_Input>;
  pk_columns: Participants_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _set?: Maybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _set?: Maybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _set?: Maybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Teams_ScoresArgs = {
  _inc?: Maybe<Teams_Scores_Inc_Input>;
  _set?: Maybe<Teams_Scores_Set_Input>;
  where: Teams_Scores_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Teams_Scores_By_PkArgs = {
  _inc?: Maybe<Teams_Scores_Inc_Input>;
  _set?: Maybe<Teams_Scores_Set_Input>;
  pk_columns: Teams_Scores_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "participants" */
export type Participants = {
  __typename?: 'participants';
  /** An object relationship */
  contest_submission?: Maybe<Contest>;
  contribution: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  emergency_vote: Scalars['Boolean'];
  id: Scalars['uuid'];
  imposter_vote_count: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  picometer: Scalars['Boolean'];
  role: Roles_Enum;
  score: Scalars['Int'];
  status: Status_Enum;
  submission: Scalars['Boolean'];
  /** An object relationship */
  team: Teams;
  team_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  viewfinder: Scalars['Boolean'];
  vote: Scalars['Boolean'];
};

/** aggregated selection of "participants" */
export type Participants_Aggregate = {
  __typename?: 'participants_aggregate';
  aggregate?: Maybe<Participants_Aggregate_Fields>;
  nodes: Array<Participants>;
};

/** aggregate fields of "participants" */
export type Participants_Aggregate_Fields = {
  __typename?: 'participants_aggregate_fields';
  avg?: Maybe<Participants_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Participants_Max_Fields>;
  min?: Maybe<Participants_Min_Fields>;
  stddev?: Maybe<Participants_Stddev_Fields>;
  stddev_pop?: Maybe<Participants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Participants_Stddev_Samp_Fields>;
  sum?: Maybe<Participants_Sum_Fields>;
  var_pop?: Maybe<Participants_Var_Pop_Fields>;
  var_samp?: Maybe<Participants_Var_Samp_Fields>;
  variance?: Maybe<Participants_Variance_Fields>;
};

/** aggregate fields of "participants" */
export type Participants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Participants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "participants" */
export type Participants_Aggregate_Order_By = {
  avg?: Maybe<Participants_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Participants_Max_Order_By>;
  min?: Maybe<Participants_Min_Order_By>;
  stddev?: Maybe<Participants_Stddev_Order_By>;
  stddev_pop?: Maybe<Participants_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Participants_Stddev_Samp_Order_By>;
  sum?: Maybe<Participants_Sum_Order_By>;
  var_pop?: Maybe<Participants_Var_Pop_Order_By>;
  var_samp?: Maybe<Participants_Var_Samp_Order_By>;
  variance?: Maybe<Participants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "participants" */
export type Participants_Arr_Rel_Insert_Input = {
  data: Array<Participants_Insert_Input>;
  on_conflict?: Maybe<Participants_On_Conflict>;
};

/** aggregate avg on columns */
export type Participants_Avg_Fields = {
  __typename?: 'participants_avg_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "participants" */
export type Participants_Avg_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "participants". All fields are combined with a logical 'AND'. */
export type Participants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Participants_Bool_Exp>>>;
  _not?: Maybe<Participants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Participants_Bool_Exp>>>;
  contest_submission?: Maybe<Contest_Bool_Exp>;
  contribution?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  emergency_vote?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  imposter_vote_count?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picometer?: Maybe<Boolean_Comparison_Exp>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Status_Enum_Comparison_Exp>;
  submission?: Maybe<Boolean_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  viewfinder?: Maybe<Boolean_Comparison_Exp>;
  vote?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "participants" */
export enum Participants_Constraint {
  /** unique or primary key constraint */
  ParticipantsPkey = 'participants_pkey',
  /** unique or primary key constraint */
  ParticipantsUserIdKey = 'participants_user_id_key'
}

/** input type for incrementing integer column in table "participants" */
export type Participants_Inc_Input = {
  contribution?: Maybe<Scalars['Int']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "participants" */
export type Participants_Insert_Input = {
  contest_submission?: Maybe<Contest_Obj_Rel_Insert_Input>;
  contribution?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  emergency_vote?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picometer?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Roles_Enum>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Status_Enum>;
  submission?: Maybe<Scalars['Boolean']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
  viewfinder?: Maybe<Scalars['Boolean']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Participants_Max_Fields = {
  __typename?: 'participants_max_fields';
  contribution?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "participants" */
export type Participants_Max_Order_By = {
  contribution?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Participants_Min_Fields = {
  __typename?: 'participants_min_fields';
  contribution?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "participants" */
export type Participants_Min_Order_By = {
  contribution?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "participants" */
export type Participants_Mutation_Response = {
  __typename?: 'participants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Participants>;
};

/** input type for inserting object relation for remote table "participants" */
export type Participants_Obj_Rel_Insert_Input = {
  data: Participants_Insert_Input;
  on_conflict?: Maybe<Participants_On_Conflict>;
};

/** on conflict condition type for table "participants" */
export type Participants_On_Conflict = {
  constraint: Participants_Constraint;
  update_columns: Array<Participants_Update_Column>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** ordering options when selecting data from "participants" */
export type Participants_Order_By = {
  contest_submission?: Maybe<Contest_Order_By>;
  contribution?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  emergency_vote?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picometer?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submission?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  viewfinder?: Maybe<Order_By>;
  vote?: Maybe<Order_By>;
};

/** primary key columns input for table: "participants" */
export type Participants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "participants" */
export enum Participants_Select_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  Description = 'description',
  /** column name */
  EmergencyVote = 'emergency_vote',
  /** column name */
  Id = 'id',
  /** column name */
  ImposterVoteCount = 'imposter_vote_count',
  /** column name */
  Name = 'name',
  /** column name */
  Picometer = 'picometer',
  /** column name */
  Role = 'role',
  /** column name */
  Score = 'score',
  /** column name */
  Status = 'status',
  /** column name */
  Submission = 'submission',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Viewfinder = 'viewfinder',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "participants" */
export type Participants_Set_Input = {
  contribution?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  emergency_vote?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picometer?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Roles_Enum>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Status_Enum>;
  submission?: Maybe<Scalars['Boolean']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
  viewfinder?: Maybe<Scalars['Boolean']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Participants_Stddev_Fields = {
  __typename?: 'participants_stddev_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "participants" */
export type Participants_Stddev_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Participants_Stddev_Pop_Fields = {
  __typename?: 'participants_stddev_pop_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "participants" */
export type Participants_Stddev_Pop_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Participants_Stddev_Samp_Fields = {
  __typename?: 'participants_stddev_samp_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "participants" */
export type Participants_Stddev_Samp_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Participants_Sum_Fields = {
  __typename?: 'participants_sum_fields';
  contribution?: Maybe<Scalars['Int']>;
  imposter_vote_count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "participants" */
export type Participants_Sum_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** update columns of table "participants" */
export enum Participants_Update_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  Description = 'description',
  /** column name */
  EmergencyVote = 'emergency_vote',
  /** column name */
  Id = 'id',
  /** column name */
  ImposterVoteCount = 'imposter_vote_count',
  /** column name */
  Name = 'name',
  /** column name */
  Picometer = 'picometer',
  /** column name */
  Role = 'role',
  /** column name */
  Score = 'score',
  /** column name */
  Status = 'status',
  /** column name */
  Submission = 'submission',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Viewfinder = 'viewfinder',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Participants_Var_Pop_Fields = {
  __typename?: 'participants_var_pop_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "participants" */
export type Participants_Var_Pop_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Participants_Var_Samp_Fields = {
  __typename?: 'participants_var_samp_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "participants" */
export type Participants_Var_Samp_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Participants_Variance_Fields = {
  __typename?: 'participants_variance_fields';
  contribution?: Maybe<Scalars['Float']>;
  imposter_vote_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "participants" */
export type Participants_Variance_Order_By = {
  contribution?: Maybe<Order_By>;
  imposter_vote_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table: "control" */
  control: Array<Control>;
  /** fetch aggregated fields from the table: "control" */
  control_aggregate: Control_Aggregate;
  /** fetch data from the table: "control" using primary key columns */
  control_by_pk?: Maybe<Control>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "leaderboard_public" */
  leaderboard_public: Array<Leaderboard_Public>;
  /** fetch aggregated fields from the table: "leaderboard_public" */
  leaderboard_public_aggregate: Leaderboard_Public_Aggregate;
  /** fetch data from the table: "participants" */
  participants: Array<Participants>;
  /** fetch aggregated fields from the table: "participants" */
  participants_aggregate: Participants_Aggregate;
  /** fetch data from the table: "participants" using primary key columns */
  participants_by_pk?: Maybe<Participants>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "teams_scores" */
  teams_scores: Array<Teams_Scores>;
  /** fetch aggregated fields from the table: "teams_scores" */
  teams_scores_aggregate: Teams_Scores_Aggregate;
  /** fetch data from the table: "teams_scores" using primary key columns */
  teams_scores_by_pk?: Maybe<Teams_Scores>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootContestArgs = {
  distinct_on?: Maybe<Array<Contest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contest_Order_By>>;
  where?: Maybe<Contest_Bool_Exp>;
};

/** query root */
export type Query_RootContest_AggregateArgs = {
  distinct_on?: Maybe<Array<Contest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contest_Order_By>>;
  where?: Maybe<Contest_Bool_Exp>;
};

/** query root */
export type Query_RootContest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootControlArgs = {
  distinct_on?: Maybe<Array<Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Control_Order_By>>;
  where?: Maybe<Control_Bool_Exp>;
};

/** query root */
export type Query_RootControl_AggregateArgs = {
  distinct_on?: Maybe<Array<Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Control_Order_By>>;
  where?: Maybe<Control_Bool_Exp>;
};

/** query root */
export type Query_RootControl_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** query root */
export type Query_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** query root */
export type Query_RootGames_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootLeaderboard_PublicArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Public_Order_By>>;
  where?: Maybe<Leaderboard_Public_Bool_Exp>;
};

/** query root */
export type Query_RootLeaderboard_Public_AggregateArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Public_Order_By>>;
  where?: Maybe<Leaderboard_Public_Bool_Exp>;
};

/** query root */
export type Query_RootParticipantsArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** query root */
export type Query_RootParticipants_AggregateArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** query root */
export type Query_RootParticipants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};

/** query root */
export type Query_RootStatusArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};

/** query root */
export type Query_RootStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};

/** query root */
export type Query_RootStatus_By_PkArgs = {
  status: Scalars['String'];
};

/** query root */
export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** query root */
export type Query_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** query root */
export type Query_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootTeams_ScoresArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** query root */
export type Query_RootTeams_Scores_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** query root */
export type Query_RootTeams_Scores_By_PkArgs = {
  game_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  auth0_id: Scalars['String'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  role: Scalars['String'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

export enum Roles_Enum {
  Admin = 'ADMIN',
  Crewmate = 'CREWMATE',
  Imposter = 'IMPOSTER'
}

/** expression to compare columns of type roles_enum. All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "status" */
export type Status = {
  __typename?: 'status';
  /** An array relationship */
  participants: Array<Participants>;
  /** An aggregated array relationship */
  participants_aggregate: Participants_Aggregate;
  status: Scalars['String'];
};

/** columns and relationships of "status" */
export type StatusParticipantsArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** columns and relationships of "status" */
export type StatusParticipants_AggregateArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** aggregated selection of "status" */
export type Status_Aggregate = {
  __typename?: 'status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_Fields = {
  __typename?: 'status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "status" */
export type Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Status_Max_Order_By>;
  min?: Maybe<Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "status" */
export type Status_Arr_Rel_Insert_Input = {
  data: Array<Status_Insert_Input>;
  on_conflict?: Maybe<Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Status_Bool_Exp>>>;
  _not?: Maybe<Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Status_Bool_Exp>>>;
  participants?: Maybe<Participants_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint */
  StatusPkey = 'status_pkey'
}

export enum Status_Enum {
  Alive = 'ALIVE',
  Dead = 'DEAD'
}

/** expression to compare columns of type status_enum. All fields are combined with logical 'AND'. */
export type Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Status_Enum>;
  _in?: Maybe<Array<Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Status_Enum>;
  _nin?: Maybe<Array<Status_Enum>>;
};

/** input type for inserting data into table "status" */
export type Status_Insert_Input = {
  participants?: Maybe<Participants_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'status_max_fields';
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "status" */
export type Status_Max_Order_By = {
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'status_min_fields';
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "status" */
export type Status_Min_Order_By = {
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "status" */
export type Status_Mutation_Response = {
  __typename?: 'status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  on_conflict?: Maybe<Status_On_Conflict>;
};

/** on conflict condition type for table "status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns: Array<Status_Update_Column>;
  where?: Maybe<Status_Bool_Exp>;
};

/** ordering options when selecting data from "status" */
export type Status_Order_By = {
  participants_aggregate?: Maybe<Participants_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "status" */
export type Status_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "status" */
export type Status_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Status = 'status'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table: "control" */
  control: Array<Control>;
  /** fetch aggregated fields from the table: "control" */
  control_aggregate: Control_Aggregate;
  /** fetch data from the table: "control" using primary key columns */
  control_by_pk?: Maybe<Control>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "leaderboard_public" */
  leaderboard_public: Array<Leaderboard_Public>;
  /** fetch aggregated fields from the table: "leaderboard_public" */
  leaderboard_public_aggregate: Leaderboard_Public_Aggregate;
  /** fetch data from the table: "participants" */
  participants: Array<Participants>;
  /** fetch aggregated fields from the table: "participants" */
  participants_aggregate: Participants_Aggregate;
  /** fetch data from the table: "participants" using primary key columns */
  participants_by_pk?: Maybe<Participants>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "teams_scores" */
  teams_scores: Array<Teams_Scores>;
  /** fetch aggregated fields from the table: "teams_scores" */
  teams_scores_aggregate: Teams_Scores_Aggregate;
  /** fetch data from the table: "teams_scores" using primary key columns */
  teams_scores_by_pk?: Maybe<Teams_Scores>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootContestArgs = {
  distinct_on?: Maybe<Array<Contest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contest_Order_By>>;
  where?: Maybe<Contest_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContest_AggregateArgs = {
  distinct_on?: Maybe<Array<Contest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contest_Order_By>>;
  where?: Maybe<Contest_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootControlArgs = {
  distinct_on?: Maybe<Array<Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Control_Order_By>>;
  where?: Maybe<Control_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootControl_AggregateArgs = {
  distinct_on?: Maybe<Array<Control_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Control_Order_By>>;
  where?: Maybe<Control_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootControl_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootLeaderboard_PublicArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Public_Order_By>>;
  where?: Maybe<Leaderboard_Public_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLeaderboard_Public_AggregateArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Public_Order_By>>;
  where?: Maybe<Leaderboard_Public_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootParticipantsArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootParticipants_AggregateArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootParticipants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};

/** subscription root */
export type Subscription_RootStatusArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStatus_By_PkArgs = {
  status: Scalars['String'];
};

/** subscription root */
export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootTeams_ScoresArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTeams_Scores_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTeams_Scores_By_PkArgs = {
  game_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  auth0_id: Scalars['String'];
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  emergency_meeting: Scalars['Boolean'];
  id: Scalars['uuid'];
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  participants: Array<Participants>;
  /** An aggregated array relationship */
  participants_aggregate: Participants_Aggregate;
  picture_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  scores: Array<Teams_Scores>;
  /** An aggregated array relationship */
  scores_aggregate: Teams_Scores_Aggregate;
};

/** columns and relationships of "teams" */
export type TeamsParticipantsArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsParticipants_AggregateArgs = {
  distinct_on?: Maybe<Array<Participants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Participants_Order_By>>;
  where?: Maybe<Participants_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsScoresArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Scores_Order_By>>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  emergency_meeting?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  motto?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  participants?: Maybe<Participants_Bool_Exp>;
  picture_url?: Maybe<String_Comparison_Exp>;
  scores?: Maybe<Teams_Scores_Bool_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsNameKey = 'teams_name_key',
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  emergency_meeting?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Participants_Arr_Rel_Insert_Input>;
  picture_url?: Maybe<Scalars['String']>;
  scores?: Maybe<Teams_Scores_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  id?: Maybe<Scalars['uuid']>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  id?: Maybe<Order_By>;
  motto?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  id?: Maybe<Scalars['uuid']>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  id?: Maybe<Order_By>;
  motto?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  emergency_meeting?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  motto?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  participants_aggregate?: Maybe<Participants_Aggregate_Order_By>;
  picture_url?: Maybe<Order_By>;
  scores_aggregate?: Maybe<Teams_Scores_Aggregate_Order_By>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "teams_scores" */
export type Teams_Scores = {
  __typename?: 'teams_scores';
  /** An object relationship */
  game: Games;
  game_id: Scalars['uuid'];
  score: Scalars['Int'];
  /** An object relationship */
  team: Teams;
  team_id: Scalars['uuid'];
};

/** aggregated selection of "teams_scores" */
export type Teams_Scores_Aggregate = {
  __typename?: 'teams_scores_aggregate';
  aggregate?: Maybe<Teams_Scores_Aggregate_Fields>;
  nodes: Array<Teams_Scores>;
};

/** aggregate fields of "teams_scores" */
export type Teams_Scores_Aggregate_Fields = {
  __typename?: 'teams_scores_aggregate_fields';
  avg?: Maybe<Teams_Scores_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Scores_Max_Fields>;
  min?: Maybe<Teams_Scores_Min_Fields>;
  stddev?: Maybe<Teams_Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Scores_Sum_Fields>;
  var_pop?: Maybe<Teams_Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Scores_Var_Samp_Fields>;
  variance?: Maybe<Teams_Scores_Variance_Fields>;
};

/** aggregate fields of "teams_scores" */
export type Teams_Scores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Scores_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams_scores" */
export type Teams_Scores_Aggregate_Order_By = {
  avg?: Maybe<Teams_Scores_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Scores_Max_Order_By>;
  min?: Maybe<Teams_Scores_Min_Order_By>;
  stddev?: Maybe<Teams_Scores_Stddev_Order_By>;
  stddev_pop?: Maybe<Teams_Scores_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Teams_Scores_Stddev_Samp_Order_By>;
  sum?: Maybe<Teams_Scores_Sum_Order_By>;
  var_pop?: Maybe<Teams_Scores_Var_Pop_Order_By>;
  var_samp?: Maybe<Teams_Scores_Var_Samp_Order_By>;
  variance?: Maybe<Teams_Scores_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teams_scores" */
export type Teams_Scores_Arr_Rel_Insert_Input = {
  data: Array<Teams_Scores_Insert_Input>;
  on_conflict?: Maybe<Teams_Scores_On_Conflict>;
};

/** aggregate avg on columns */
export type Teams_Scores_Avg_Fields = {
  __typename?: 'teams_scores_avg_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teams_scores" */
export type Teams_Scores_Avg_Order_By = {
  score?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams_scores". All fields are combined with a logical 'AND'. */
export type Teams_Scores_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Scores_Bool_Exp>>>;
  _not?: Maybe<Teams_Scores_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Scores_Bool_Exp>>>;
  game?: Maybe<Games_Bool_Exp>;
  game_id?: Maybe<Uuid_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams_scores" */
export enum Teams_Scores_Constraint {
  /** unique or primary key constraint */
  TeamsScoresPkey = 'teams_scores_pkey'
}

/** input type for incrementing integer column in table "teams_scores" */
export type Teams_Scores_Inc_Input = {
  score?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "teams_scores" */
export type Teams_Scores_Insert_Input = {
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Teams_Scores_Max_Fields = {
  __typename?: 'teams_scores_max_fields';
  game_id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "teams_scores" */
export type Teams_Scores_Max_Order_By = {
  game_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Scores_Min_Fields = {
  __typename?: 'teams_scores_min_fields';
  game_id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "teams_scores" */
export type Teams_Scores_Min_Order_By = {
  game_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams_scores" */
export type Teams_Scores_Mutation_Response = {
  __typename?: 'teams_scores_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams_Scores>;
};

/** input type for inserting object relation for remote table "teams_scores" */
export type Teams_Scores_Obj_Rel_Insert_Input = {
  data: Teams_Scores_Insert_Input;
  on_conflict?: Maybe<Teams_Scores_On_Conflict>;
};

/** on conflict condition type for table "teams_scores" */
export type Teams_Scores_On_Conflict = {
  constraint: Teams_Scores_Constraint;
  update_columns: Array<Teams_Scores_Update_Column>;
  where?: Maybe<Teams_Scores_Bool_Exp>;
};

/** ordering options when selecting data from "teams_scores" */
export type Teams_Scores_Order_By = {
  game?: Maybe<Games_Order_By>;
  game_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "teams_scores" */
export type Teams_Scores_Pk_Columns_Input = {
  game_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** select columns of table "teams_scores" */
export enum Teams_Scores_Select_Column {
  /** column name */
  GameId = 'game_id',
  /** column name */
  Score = 'score',
  /** column name */
  TeamId = 'team_id'
}

/** input type for updating data in table "teams_scores" */
export type Teams_Scores_Set_Input = {
  game_id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Teams_Scores_Stddev_Fields = {
  __typename?: 'teams_scores_stddev_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teams_scores" */
export type Teams_Scores_Stddev_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teams_Scores_Stddev_Pop_Fields = {
  __typename?: 'teams_scores_stddev_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teams_scores" */
export type Teams_Scores_Stddev_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teams_Scores_Stddev_Samp_Fields = {
  __typename?: 'teams_scores_stddev_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teams_scores" */
export type Teams_Scores_Stddev_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Teams_Scores_Sum_Fields = {
  __typename?: 'teams_scores_sum_fields';
  score?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teams_scores" */
export type Teams_Scores_Sum_Order_By = {
  score?: Maybe<Order_By>;
};

/** update columns of table "teams_scores" */
export enum Teams_Scores_Update_Column {
  /** column name */
  GameId = 'game_id',
  /** column name */
  Score = 'score',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate var_pop on columns */
export type Teams_Scores_Var_Pop_Fields = {
  __typename?: 'teams_scores_var_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teams_scores" */
export type Teams_Scores_Var_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teams_Scores_Var_Samp_Fields = {
  __typename?: 'teams_scores_var_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teams_scores" */
export type Teams_Scores_Var_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Teams_Scores_Variance_Fields = {
  __typename?: 'teams_scores_variance_fields';
  score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teams_scores" */
export type Teams_Scores_Variance_Order_By = {
  score?: Maybe<Order_By>;
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  EmergencyMeeting = 'emergency_meeting',
  /** column name */
  Id = 'id',
  /** column name */
  Motto = 'motto',
  /** column name */
  Name = 'name',
  /** column name */
  PictureUrl = 'picture_url'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  emergency_meeting?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  EmergencyMeeting = 'emergency_meeting',
  /** column name */
  Id = 'id',
  /** column name */
  Motto = 'motto',
  /** column name */
  Name = 'name',
  /** column name */
  PictureUrl = 'picture_url'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  admin: Scalars['Boolean'];
  auth0_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  participant?: Maybe<Participants>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  admin?: Maybe<Boolean_Comparison_Exp>;
  auth0_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  participant?: Maybe<Participants_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  participant?: Maybe<Participants_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  admin?: Maybe<Order_By>;
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  participant?: Maybe<Participants_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  auth0_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpdateParticipantDetailsMutationVariables = Exact<{
  description: Scalars['String'];
  name: Scalars['String'];
  auth0_id: Scalars['String'];
}>;

export type UpdateParticipantDetailsMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'participants' }
      & Pick<Participants, 'description' | 'name' | 'role' | 'team_id' | 'user_id' | 'score' | 'contribution' | 'status' | 'emergency_vote'>
      & { team: (
        { __typename?: 'teams' }
        & Pick<Teams, 'motto' | 'name' | 'picture_url' | 'emergency_meeting'>
        & { scores: Array<(
          { __typename?: 'teams_scores' }
          & Pick<Teams_Scores, 'score'>
        )>; }
      ); }
    )>; }
  )>; }
);

export type UpdateGameScoreMutationVariables = Exact<{
  game_id: Scalars['uuid'];
  score: Scalars['Int'];
  team_id: Scalars['uuid'];
}>;

export type UpdateGameScoreMutation = (
  { __typename?: 'mutation_root' }
  & { update_teams_scores?: Maybe<(
    { __typename?: 'teams_scores_mutation_response' }
    & Pick<Teams_Scores_Mutation_Response, 'affected_rows'>
  )>; }
);

export type SubmitContestMutationVariables = Exact<{
  submission_url: Scalars['String'];
  participant_id: Scalars['uuid'];
  auth0_id: Scalars['String'];
}>;

export type SubmitContestMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contest?: Maybe<(
    { __typename?: 'contest_mutation_response' }
    & Pick<Contest_Mutation_Response, 'affected_rows'>
  )>; update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type SubmitContestVoteMutationVariables = Exact<{
  participant_id: Scalars['uuid'];
  auth0_id: Scalars['String'];
}>;

export type SubmitContestVoteMutation = (
  { __typename?: 'mutation_root' }
  & { update_contest?: Maybe<(
    { __typename?: 'contest_mutation_response' }
    & Pick<Contest_Mutation_Response, 'affected_rows'>
  )>; update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type SubmissionControlMutationVariables = Exact<{
  submission: Scalars['Boolean'];
  auth0_id: Scalars['String'];
}>;

export type SubmissionControlMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type VotingControlMutationVariables = Exact<{
  vote: Scalars['Boolean'];
}>;

export type VotingControlMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type UpdateParticipantsScoreMutationVariables = Exact<{
  participant_id: Scalars['uuid'];
  score: Scalars['Int'];
}>;

export type UpdateParticipantsScoreMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type AddScoreToTeamMutationVariables = Exact<{
  crewmate: Scalars['Int'];
  team: Scalars['Int'];
  auth0_id: Scalars['String'];
}>;

export type AddScoreToTeamMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'participants' }
      & Pick<Participants, 'description' | 'name' | 'role' | 'team_id' | 'user_id' | 'score' | 'contribution'>
      & { team: (
        { __typename?: 'teams' }
        & Pick<Teams, 'motto' | 'name' | 'picture_url'>
        & { scores: Array<(
          { __typename?: 'teams_scores' }
          & Pick<Teams_Scores, 'score'>
        )>; }
      ); }
    )>; }
  )>; update_teams_scores?: Maybe<(
    { __typename?: 'teams_scores_mutation_response' }
    & Pick<Teams_Scores_Mutation_Response, 'affected_rows'>
  )>; }
);

export type UpdateLeadershipboardStateMutationVariables = Exact<{
  leaderboard: Scalars['Boolean'];
}>;

export type UpdateLeadershipboardStateMutation = (
  { __typename?: 'mutation_root' }
  & { update_control?: Maybe<(
    { __typename?: 'control_mutation_response' }
    & Pick<Control_Mutation_Response, 'affected_rows'>
  )>; }
);

export type UpdateContestStateMutationVariables = Exact<{
  submission: Scalars['Boolean'];
  vote: Scalars['Boolean'];
}>;

export type UpdateContestStateMutation = (
  { __typename?: 'mutation_root' }
  & { update_control?: Maybe<(
    { __typename?: 'control_mutation_response' }
    & Pick<Control_Mutation_Response, 'affected_rows'>
  )>; update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type EmergencyMeetingVoteMutationVariables = Exact<{
  participant_id: Scalars['String'];
  user_id: Scalars['String'];
}>;

export type EmergencyMeetingVoteMutation = (
  { __typename?: 'mutation_root' }
  & { update_participants?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; update_my_vote?: Maybe<(
    { __typename?: 'participants_mutation_response' }
    & Pick<Participants_Mutation_Response, 'affected_rows'>
  )>; }
);

export type GetOneParticipantDetailsQueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;

export type GetOneParticipantDetailsQuery = (
  { __typename?: 'query_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'description' | 'name' | 'role' | 'team_id' | 'user_id' | 'score' | 'contribution' | 'status' | 'emergency_vote'>
    & { team: (
      { __typename?: 'teams' }
      & Pick<Teams, 'motto' | 'name' | 'picture_url' | 'emergency_meeting'>
      & { scores: Array<(
        { __typename?: 'teams_scores' }
        & Pick<Teams_Scores, 'score'>
      )>; }
    ); }
  )>; }
);

export type GetContestSubmissionQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetContestSubmissionQuery = (
  { __typename?: 'query_root' }
  & { contest: Array<(
    { __typename?: 'contest' }
    & Pick<Contest, 'submission_url' | 'participant_id'>
  )>; }
);

export type GetParticipantVotingDetailsQueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;

export type GetParticipantVotingDetailsQuery = (
  { __typename?: 'query_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'id' | 'submission' | 'vote'>
  )>; }
);

export type GetControlStateQueryVariables = Exact<{ [key: string]: never }>;

export type GetControlStateQuery = (
  { __typename?: 'query_root' }
  & { control: Array<(
    { __typename?: 'control' }
    & Pick<Control, 'vote' | 'submission' | 'leaderboard'>
  )>; }
);

export type GetArtifactsDetailsQueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;

export type GetArtifactsDetailsQuery = (
  { __typename?: 'query_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'viewfinder' | 'picometer'>
  )>; }
);

export type GetEmergencyMeetingResultQueryVariables = Exact<{ [key: string]: never }>;

export type GetEmergencyMeetingResultQuery = (
  { __typename?: 'query_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'name' | 'role'>
  )>; }
);

export type SubscribePublicLeaderboardSubscriptionVariables = Exact<{ [key: string]: never }>;

export type SubscribePublicLeaderboardSubscription = (
  { __typename?: 'subscription_root' }
  & { leaderboard_public: Array<(
    { __typename?: 'leaderboard_public' }
    & Pick<Leaderboard_Public, 'score' | 'team_id'>
    & { team_name?: Maybe<(
      { __typename?: 'teams' }
      & Pick<Teams, 'name' | 'picture_url'>
    )>; }
  )>; }
);

export type SubscibeToAllGamesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type SubscibeToAllGamesSubscription = (
  { __typename?: 'subscription_root' }
  & { games: Array<(
    { __typename?: 'games' }
    & Pick<Games, 'game_name' | 'id'>
    & { teams_scores: Array<(
      { __typename?: 'teams_scores' }
      & Pick<Teams_Scores, 'score' | 'team_id'>
      & { team: (
        { __typename?: 'teams' }
        & Pick<Teams, 'name'>
      ); }
    )>; }
  )>; }
);

export type GetParticipantsScoreSubscriptionVariables = Exact<{ [key: string]: never }>;

export type GetParticipantsScoreSubscription = (
  { __typename?: 'subscription_root' }
  & { teams: Array<(
    { __typename?: 'teams' }
    & Pick<Teams, 'name' | 'id'>
    & { participants: Array<(
      { __typename?: 'participants' }
      & Pick<Participants, 'name' | 'score' | 'id'>
    )>; }
  )>; }
);

export type EmergencyMeetingDetailsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type EmergencyMeetingDetailsSubscription = (
  { __typename?: 'subscription_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'emergency_vote' | 'imposter_vote_count' | 'name' | 'status' | 'user_id'>
  )>; }
);

export const UpdateParticipantDetailsDocument = gql`
    mutation UpdateParticipantDetails($description: String!, $name: String!, $auth0_id: String!) {
  update_participants(
    where: {user_id: {_eq: $auth0_id}}
    _set: {description: $description, name: $name}
  ) {
    affected_rows
    returning {
      description
      name
      role
      team_id
      user_id
      score
      contribution
      status
      emergency_vote
      team {
        motto
        name
        picture_url
        emergency_meeting
        scores {
          score
        }
      }
    }
  }
}
    `;

/**
 * __useUpdateParticipantDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateParticipantDetailsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParticipantDetailsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateParticipantDetailsMutation({
 *   variables: {
 *     description: // value for 'description'
 *     name: // value for 'name'
 *     auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useUpdateParticipantDetailsMutation(options: VueApolloComposable.UseMutationOptions<UpdateParticipantDetailsMutation, UpdateParticipantDetailsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateParticipantDetailsMutation, UpdateParticipantDetailsMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateParticipantDetailsMutation, UpdateParticipantDetailsMutationVariables>(UpdateParticipantDetailsDocument, options);
}
export type UpdateParticipantDetailsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateParticipantDetailsMutation, UpdateParticipantDetailsMutationVariables>;
export const UpdateGameScoreDocument = gql`
    mutation UpdateGameScore($game_id: uuid!, $score: Int!, $team_id: uuid!) {
  update_teams_scores(
    where: {game_id: {_eq: $game_id}, team_id: {_eq: $team_id}}
    _inc: {score: $score}
  ) {
    affected_rows
  }
}
    `;

/**
 * __useUpdateGameScoreMutation__
 *
 * To run a mutation, you first call `useUpdateGameScoreMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameScoreMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateGameScoreMutation({
 *   variables: {
 *     game_id: // value for 'game_id'
 *     score: // value for 'score'
 *     team_id: // value for 'team_id'
 *   },
 * });
 */
export function useUpdateGameScoreMutation(options: VueApolloComposable.UseMutationOptions<UpdateGameScoreMutation, UpdateGameScoreMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateGameScoreMutation, UpdateGameScoreMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateGameScoreMutation, UpdateGameScoreMutationVariables>(UpdateGameScoreDocument, options);
}
export type UpdateGameScoreMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateGameScoreMutation, UpdateGameScoreMutationVariables>;
export const SubmitContestDocument = gql`
    mutation SubmitContest($submission_url: String!, $participant_id: uuid!, $auth0_id: String!) {
  insert_contest(
    objects: {submission_url: $submission_url, participant_id: $participant_id}
  ) {
    affected_rows
  }
  update_participants(
    where: {user_id: {_eq: $auth0_id}}
    _set: {submission: false}
  ) {
    affected_rows
  }
}
    `;

/**
 * __useSubmitContestMutation__
 *
 * To run a mutation, you first call `useSubmitContestMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubmitContestMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubmitContestMutation({
 *   variables: {
 *     submission_url: // value for 'submission_url'
 *     participant_id: // value for 'participant_id'
 *     auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useSubmitContestMutation(options: VueApolloComposable.UseMutationOptions<SubmitContestMutation, SubmitContestMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SubmitContestMutation, SubmitContestMutationVariables>>) {
  return VueApolloComposable.useMutation<SubmitContestMutation, SubmitContestMutationVariables>(SubmitContestDocument, options);
}
export type SubmitContestMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SubmitContestMutation, SubmitContestMutationVariables>;
export const SubmitContestVoteDocument = gql`
    mutation SubmitContestVote($participant_id: uuid!, $auth0_id: String!) {
  update_contest(
    where: {participant_id: {_eq: $participant_id}}
    _inc: {vote_count: 1}
  ) {
    affected_rows
  }
  update_participants(where: {user_id: {_eq: $auth0_id}}, _set: {vote: false}) {
    affected_rows
  }
}
    `;

/**
 * __useSubmitContestVoteMutation__
 *
 * To run a mutation, you first call `useSubmitContestVoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubmitContestVoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubmitContestVoteMutation({
 *   variables: {
 *     participant_id: // value for 'participant_id'
 *     auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useSubmitContestVoteMutation(options: VueApolloComposable.UseMutationOptions<SubmitContestVoteMutation, SubmitContestVoteMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SubmitContestVoteMutation, SubmitContestVoteMutationVariables>>) {
  return VueApolloComposable.useMutation<SubmitContestVoteMutation, SubmitContestVoteMutationVariables>(SubmitContestVoteDocument, options);
}
export type SubmitContestVoteMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SubmitContestVoteMutation, SubmitContestVoteMutationVariables>;
export const SubmissionControlDocument = gql`
    mutation SubmissionControl($submission: Boolean!, $auth0_id: String!) {
  update_participants(where: {}, _set: {submission: $submission}) {
    affected_rows
  }
}
    `;

/**
 * __useSubmissionControlMutation__
 *
 * To run a mutation, you first call `useSubmissionControlMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubmissionControlMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubmissionControlMutation({
 *   variables: {
 *     submission: // value for 'submission'
 *     auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useSubmissionControlMutation(options: VueApolloComposable.UseMutationOptions<SubmissionControlMutation, SubmissionControlMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SubmissionControlMutation, SubmissionControlMutationVariables>>) {
  return VueApolloComposable.useMutation<SubmissionControlMutation, SubmissionControlMutationVariables>(SubmissionControlDocument, options);
}
export type SubmissionControlMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SubmissionControlMutation, SubmissionControlMutationVariables>;
export const VotingControlDocument = gql`
    mutation VotingControl($vote: Boolean!) {
  update_participants(where: {}, _set: {vote: $vote}) {
    affected_rows
  }
}
    `;

/**
 * __useVotingControlMutation__
 *
 * To run a mutation, you first call `useVotingControlMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useVotingControlMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useVotingControlMutation({
 *   variables: {
 *     vote: // value for 'vote'
 *   },
 * });
 */
export function useVotingControlMutation(options: VueApolloComposable.UseMutationOptions<VotingControlMutation, VotingControlMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<VotingControlMutation, VotingControlMutationVariables>>) {
  return VueApolloComposable.useMutation<VotingControlMutation, VotingControlMutationVariables>(VotingControlDocument, options);
}
export type VotingControlMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<VotingControlMutation, VotingControlMutationVariables>;
export const UpdateParticipantsScoreDocument = gql`
    mutation UpdateParticipantsScore($participant_id: uuid!, $score: Int!) {
  update_participants(where: {id: {_eq: $participant_id}}, _inc: {score: $score}) {
    affected_rows
  }
}
    `;

/**
 * __useUpdateParticipantsScoreMutation__
 *
 * To run a mutation, you first call `useUpdateParticipantsScoreMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParticipantsScoreMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateParticipantsScoreMutation({
 *   variables: {
 *     participant_id: // value for 'participant_id'
 *     score: // value for 'score'
 *   },
 * });
 */
export function useUpdateParticipantsScoreMutation(options: VueApolloComposable.UseMutationOptions<UpdateParticipantsScoreMutation, UpdateParticipantsScoreMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateParticipantsScoreMutation, UpdateParticipantsScoreMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateParticipantsScoreMutation, UpdateParticipantsScoreMutationVariables>(UpdateParticipantsScoreDocument, options);
}
export type UpdateParticipantsScoreMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateParticipantsScoreMutation, UpdateParticipantsScoreMutationVariables>;
export const AddScoreToTeamDocument = gql`
    mutation AddScoreToTeam($crewmate: Int!, $team: Int!, $auth0_id: String!) {
  update_participants(
    where: {user_id: {_eq: $auth0_id}}
    _inc: {score: $crewmate, contribution: $team}
  ) {
    affected_rows
    returning {
      description
      name
      role
      team_id
      user_id
      score
      contribution
      team {
        motto
        name
        picture_url
        scores {
          score
        }
      }
    }
  }
  update_teams_scores(where: {}, _inc: {score: $team}) {
    affected_rows
  }
}
    `;

/**
 * __useAddScoreToTeamMutation__
 *
 * To run a mutation, you first call `useAddScoreToTeamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddScoreToTeamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddScoreToTeamMutation({
 *   variables: {
 *     crewmate: // value for 'crewmate'
 *     team: // value for 'team'
 *     auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useAddScoreToTeamMutation(options: VueApolloComposable.UseMutationOptions<AddScoreToTeamMutation, AddScoreToTeamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddScoreToTeamMutation, AddScoreToTeamMutationVariables>>) {
  return VueApolloComposable.useMutation<AddScoreToTeamMutation, AddScoreToTeamMutationVariables>(AddScoreToTeamDocument, options);
}
export type AddScoreToTeamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddScoreToTeamMutation, AddScoreToTeamMutationVariables>;
export const UpdateLeadershipboardStateDocument = gql`
    mutation UpdateLeadershipboardState($leaderboard: Boolean!) {
  update_control(where: {}, _set: {leaderboard: $leaderboard}) {
    affected_rows
  }
}
    `;

/**
 * __useUpdateLeadershipboardStateMutation__
 *
 * To run a mutation, you first call `useUpdateLeadershipboardStateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeadershipboardStateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateLeadershipboardStateMutation({
 *   variables: {
 *     leaderboard: // value for 'leaderboard'
 *   },
 * });
 */
export function useUpdateLeadershipboardStateMutation(options: VueApolloComposable.UseMutationOptions<UpdateLeadershipboardStateMutation, UpdateLeadershipboardStateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateLeadershipboardStateMutation, UpdateLeadershipboardStateMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateLeadershipboardStateMutation, UpdateLeadershipboardStateMutationVariables>(UpdateLeadershipboardStateDocument, options);
}
export type UpdateLeadershipboardStateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateLeadershipboardStateMutation, UpdateLeadershipboardStateMutationVariables>;
export const UpdateContestStateDocument = gql`
    mutation UpdateContestState($submission: Boolean!, $vote: Boolean!) {
  update_control(where: {}, _set: {submission: $submission, vote: $vote}) {
    affected_rows
  }
  update_participants(where: {}, _set: {submission: $submission, vote: $vote}) {
    affected_rows
  }
}
    `;

/**
 * __useUpdateContestStateMutation__
 *
 * To run a mutation, you first call `useUpdateContestStateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContestStateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateContestStateMutation({
 *   variables: {
 *     submission: // value for 'submission'
 *     vote: // value for 'vote'
 *   },
 * });
 */
export function useUpdateContestStateMutation(options: VueApolloComposable.UseMutationOptions<UpdateContestStateMutation, UpdateContestStateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateContestStateMutation, UpdateContestStateMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateContestStateMutation, UpdateContestStateMutationVariables>(UpdateContestStateDocument, options);
}
export type UpdateContestStateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateContestStateMutation, UpdateContestStateMutationVariables>;
export const EmergencyMeetingVoteDocument = gql`
    mutation EmergencyMeetingVote($participant_id: String!, $user_id: String!) {
  update_participants: update_participants(
    where: {user_id: {_eq: $participant_id}}
    _inc: {imposter_vote_count: 1}
  ) {
    affected_rows
  }
  update_my_vote: update_participants(
    where: {user_id: {_eq: $user_id}}
    _set: {emergency_vote: true}
  ) {
    affected_rows
  }
}
    `;

/**
 * __useEmergencyMeetingVoteMutation__
 *
 * To run a mutation, you first call `useEmergencyMeetingVoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useEmergencyMeetingVoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useEmergencyMeetingVoteMutation({
 *   variables: {
 *     participant_id: // value for 'participant_id'
 *     user_id: // value for 'user_id'
 *   },
 * });
 */
export function useEmergencyMeetingVoteMutation(options: VueApolloComposable.UseMutationOptions<EmergencyMeetingVoteMutation, EmergencyMeetingVoteMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<EmergencyMeetingVoteMutation, EmergencyMeetingVoteMutationVariables>>) {
  return VueApolloComposable.useMutation<EmergencyMeetingVoteMutation, EmergencyMeetingVoteMutationVariables>(EmergencyMeetingVoteDocument, options);
}
export type EmergencyMeetingVoteMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<EmergencyMeetingVoteMutation, EmergencyMeetingVoteMutationVariables>;
export const GetOneParticipantDetailsDocument = gql`
    query getOneParticipantDetails($auth0_id: String!) {
  participants(where: {user_id: {_eq: $auth0_id}}) {
    description
    name
    role
    team_id
    user_id
    score
    contribution
    status
    emergency_vote
    team {
      motto
      name
      picture_url
      emergency_meeting
      scores {
        score
      }
    }
  }
}
    `;

/**
 * __useGetOneParticipantDetailsQuery__
 *
 * To run a query within a Vue component, call `useGetOneParticipantDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneParticipantDetailsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOneParticipantDetailsQuery({
 *   auth0_id: // value for 'auth0_id'
 * });
 */
export function useGetOneParticipantDetailsQuery(variables: GetOneParticipantDetailsQueryVariables | VueCompositionApi.Ref<GetOneParticipantDetailsQueryVariables> | ReactiveFunction<GetOneParticipantDetailsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>(GetOneParticipantDetailsDocument, variables, options);
}
export type GetOneParticipantDetailsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>;
export const GetContestSubmissionDocument = gql`
    query GetContestSubmission($limit: Int!, $offset: Int!) {
  contest(offset: $offset, limit: $limit, order_by: {submission_time: asc}) {
    submission_url
    participant_id
  }
}
    `;

/**
 * __useGetContestSubmissionQuery__
 *
 * To run a query within a Vue component, call `useGetContestSubmissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContestSubmissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetContestSubmissionQuery({
 *   limit: // value for 'limit'
 *   offset: // value for 'offset'
 * });
 */
export function useGetContestSubmissionQuery(variables: GetContestSubmissionQueryVariables | VueCompositionApi.Ref<GetContestSubmissionQueryVariables> | ReactiveFunction<GetContestSubmissionQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetContestSubmissionQuery, GetContestSubmissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetContestSubmissionQuery, GetContestSubmissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetContestSubmissionQuery, GetContestSubmissionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetContestSubmissionQuery, GetContestSubmissionQueryVariables>(GetContestSubmissionDocument, variables, options);
}
export type GetContestSubmissionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetContestSubmissionQuery, GetContestSubmissionQueryVariables>;
export const GetParticipantVotingDetailsDocument = gql`
    query getParticipantVotingDetails($auth0_id: String!) {
  participants(where: {user_id: {_eq: $auth0_id}}) {
    id
    submission
    vote
  }
}
    `;

/**
 * __useGetParticipantVotingDetailsQuery__
 *
 * To run a query within a Vue component, call `useGetParticipantVotingDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParticipantVotingDetailsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetParticipantVotingDetailsQuery({
 *   auth0_id: // value for 'auth0_id'
 * });
 */
export function useGetParticipantVotingDetailsQuery(variables: GetParticipantVotingDetailsQueryVariables | VueCompositionApi.Ref<GetParticipantVotingDetailsQueryVariables> | ReactiveFunction<GetParticipantVotingDetailsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetParticipantVotingDetailsQuery, GetParticipantVotingDetailsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetParticipantVotingDetailsQuery, GetParticipantVotingDetailsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetParticipantVotingDetailsQuery, GetParticipantVotingDetailsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetParticipantVotingDetailsQuery, GetParticipantVotingDetailsQueryVariables>(GetParticipantVotingDetailsDocument, variables, options);
}
export type GetParticipantVotingDetailsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetParticipantVotingDetailsQuery, GetParticipantVotingDetailsQueryVariables>;
export const GetControlStateDocument = gql`
    query GetControlState {
  control {
    vote
    submission
    leaderboard
  }
}
    `;

/**
 * __useGetControlStateQuery__
 *
 * To run a query within a Vue component, call `useGetControlStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetControlStateQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetControlStateQuery();
 */
export function useGetControlStateQuery(options: VueApolloComposable.UseQueryOptions<GetControlStateQuery, GetControlStateQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetControlStateQuery, GetControlStateQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetControlStateQuery, GetControlStateQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetControlStateQuery, GetControlStateQueryVariables>(GetControlStateDocument, {}, options);
}
export type GetControlStateQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetControlStateQuery, GetControlStateQueryVariables>;
export const GetArtifactsDetailsDocument = gql`
    query GetArtifactsDetails($auth0_id: String!) {
  participants(where: {user_id: {_eq: $auth0_id}}) {
    viewfinder
    picometer
  }
}
    `;

/**
 * __useGetArtifactsDetailsQuery__
 *
 * To run a query within a Vue component, call `useGetArtifactsDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtifactsDetailsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetArtifactsDetailsQuery({
 *   auth0_id: // value for 'auth0_id'
 * });
 */
export function useGetArtifactsDetailsQuery(variables: GetArtifactsDetailsQueryVariables | VueCompositionApi.Ref<GetArtifactsDetailsQueryVariables> | ReactiveFunction<GetArtifactsDetailsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetArtifactsDetailsQuery, GetArtifactsDetailsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetArtifactsDetailsQuery, GetArtifactsDetailsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetArtifactsDetailsQuery, GetArtifactsDetailsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetArtifactsDetailsQuery, GetArtifactsDetailsQueryVariables>(GetArtifactsDetailsDocument, variables, options);
}
export type GetArtifactsDetailsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetArtifactsDetailsQuery, GetArtifactsDetailsQueryVariables>;
export const GetEmergencyMeetingResultDocument = gql`
    query GetEmergencyMeetingResult {
  participants(where: {status: {_eq: DEAD}}) {
    name
    role
  }
}
    `;

/**
 * __useGetEmergencyMeetingResultQuery__
 *
 * To run a query within a Vue component, call `useGetEmergencyMeetingResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmergencyMeetingResultQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetEmergencyMeetingResultQuery();
 */
export function useGetEmergencyMeetingResultQuery(options: VueApolloComposable.UseQueryOptions<GetEmergencyMeetingResultQuery, GetEmergencyMeetingResultQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetEmergencyMeetingResultQuery, GetEmergencyMeetingResultQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetEmergencyMeetingResultQuery, GetEmergencyMeetingResultQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetEmergencyMeetingResultQuery, GetEmergencyMeetingResultQueryVariables>(GetEmergencyMeetingResultDocument, {}, options);
}
export type GetEmergencyMeetingResultQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetEmergencyMeetingResultQuery, GetEmergencyMeetingResultQueryVariables>;
export const SubscribePublicLeaderboardDocument = gql`
    subscription SubscribePublicLeaderboard {
  leaderboard_public {
    score
    team_id
    team_name {
      name
      picture_url
    }
  }
}
    `;

/**
 * __useSubscribePublicLeaderboardSubscription__
 *
 * To run a query within a Vue component, call `useSubscribePublicLeaderboardSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribePublicLeaderboardSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useSubscribePublicLeaderboardSubscription();
 */
export function useSubscribePublicLeaderboardSubscription(options: VueApolloComposable.UseSubscriptionOptions<SubscribePublicLeaderboardSubscription, SubscribePublicLeaderboardSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<SubscribePublicLeaderboardSubscription, SubscribePublicLeaderboardSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<SubscribePublicLeaderboardSubscription, SubscribePublicLeaderboardSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<SubscribePublicLeaderboardSubscription, SubscribePublicLeaderboardSubscriptionVariables>(SubscribePublicLeaderboardDocument, {}, options);
}
export type SubscribePublicLeaderboardSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<SubscribePublicLeaderboardSubscription, SubscribePublicLeaderboardSubscriptionVariables>;
export const SubscibeToAllGamesDocument = gql`
    subscription SubscibeToAllGames {
  games {
    game_name
    id
    teams_scores {
      score
      team_id
      team {
        name
      }
    }
  }
}
    `;

/**
 * __useSubscibeToAllGamesSubscription__
 *
 * To run a query within a Vue component, call `useSubscibeToAllGamesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscibeToAllGamesSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useSubscibeToAllGamesSubscription();
 */
export function useSubscibeToAllGamesSubscription(options: VueApolloComposable.UseSubscriptionOptions<SubscibeToAllGamesSubscription, SubscibeToAllGamesSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<SubscibeToAllGamesSubscription, SubscibeToAllGamesSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<SubscibeToAllGamesSubscription, SubscibeToAllGamesSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<SubscibeToAllGamesSubscription, SubscibeToAllGamesSubscriptionVariables>(SubscibeToAllGamesDocument, {}, options);
}
export type SubscibeToAllGamesSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<SubscibeToAllGamesSubscription, SubscibeToAllGamesSubscriptionVariables>;
export const GetParticipantsScoreDocument = gql`
    subscription GetParticipantsScore {
  teams {
    name
    id
    participants {
      name
      score
      id
    }
  }
}
    `;

/**
 * __useGetParticipantsScoreSubscription__
 *
 * To run a query within a Vue component, call `useGetParticipantsScoreSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetParticipantsScoreSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useGetParticipantsScoreSubscription();
 */
export function useGetParticipantsScoreSubscription(options: VueApolloComposable.UseSubscriptionOptions<GetParticipantsScoreSubscription, GetParticipantsScoreSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<GetParticipantsScoreSubscription, GetParticipantsScoreSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<GetParticipantsScoreSubscription, GetParticipantsScoreSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<GetParticipantsScoreSubscription, GetParticipantsScoreSubscriptionVariables>(GetParticipantsScoreDocument, {}, options);
}
export type GetParticipantsScoreSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<GetParticipantsScoreSubscription, GetParticipantsScoreSubscriptionVariables>;
export const EmergencyMeetingDetailsDocument = gql`
    subscription EmergencyMeetingDetails {
  participants {
    emergency_vote
    imposter_vote_count
    name
    status
    user_id
  }
}
    `;

/**
 * __useEmergencyMeetingDetailsSubscription__
 *
 * To run a query within a Vue component, call `useEmergencyMeetingDetailsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useEmergencyMeetingDetailsSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useEmergencyMeetingDetailsSubscription();
 */
export function useEmergencyMeetingDetailsSubscription(options: VueApolloComposable.UseSubscriptionOptions<EmergencyMeetingDetailsSubscription, EmergencyMeetingDetailsSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<EmergencyMeetingDetailsSubscription, EmergencyMeetingDetailsSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<EmergencyMeetingDetailsSubscription, EmergencyMeetingDetailsSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<EmergencyMeetingDetailsSubscription, EmergencyMeetingDetailsSubscriptionVariables>(EmergencyMeetingDetailsDocument, {}, options);
}
export type EmergencyMeetingDetailsSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<EmergencyMeetingDetailsSubscription, EmergencyMeetingDetailsSubscriptionVariables>;
