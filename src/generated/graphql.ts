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
  timestamp: any;
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

/** columns and relationships of "contest" */
export type Contest = {
  __typename?: 'contest';
  id: Scalars['uuid'];
  submission_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  team?: Maybe<Teams>;
  team_id?: Maybe<Scalars['uuid']>;
  vote_count?: Maybe<Scalars['Int']>;
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
  submission_url?: Maybe<String_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  vote_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contest" */
export enum Contest_Constraint {
  /** unique or primary key constraint */
  ContestPkey = 'contest_pkey',
  /** unique or primary key constraint */
  ContestTeamIdKey = 'contest_team_id_key'
}

/** input type for incrementing integer column in table "contest" */
export type Contest_Inc_Input = {
  vote_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contest" */
export type Contest_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  submission_url?: Maybe<Scalars['String']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Contest_Max_Fields = {
  __typename?: 'contest_max_fields';
  id?: Maybe<Scalars['uuid']>;
  submission_url?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "contest" */
export type Contest_Max_Order_By = {
  id?: Maybe<Order_By>;
  submission_url?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  vote_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contest_Min_Fields = {
  __typename?: 'contest_min_fields';
  id?: Maybe<Scalars['uuid']>;
  submission_url?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  vote_count?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "contest" */
export type Contest_Min_Order_By = {
  id?: Maybe<Order_By>;
  submission_url?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
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
  submission_url?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
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
  SubmissionUrl = 'submission_url',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  VoteCount = 'vote_count'
}

/** input type for updating data in table "contest" */
export type Contest_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  submission_url?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
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
  SubmissionUrl = 'submission_url',
  /** column name */
  TeamId = 'team_id',
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

/** columns and relationships of "imposter" */
export type Imposter = {
  __typename?: 'imposter';
  cooldown?: Maybe<Scalars['timestamp']>;
  id: Scalars['uuid'];
  /** An object relationship */
  participant?: Maybe<Participants>;
  sabotage?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "imposter" */
export type Imposter_Aggregate = {
  __typename?: 'imposter_aggregate';
  aggregate?: Maybe<Imposter_Aggregate_Fields>;
  nodes: Array<Imposter>;
};

/** aggregate fields of "imposter" */
export type Imposter_Aggregate_Fields = {
  __typename?: 'imposter_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Imposter_Max_Fields>;
  min?: Maybe<Imposter_Min_Fields>;
};

/** aggregate fields of "imposter" */
export type Imposter_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Imposter_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "imposter" */
export type Imposter_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Imposter_Max_Order_By>;
  min?: Maybe<Imposter_Min_Order_By>;
};

/** input type for inserting array relation for remote table "imposter" */
export type Imposter_Arr_Rel_Insert_Input = {
  data: Array<Imposter_Insert_Input>;
  on_conflict?: Maybe<Imposter_On_Conflict>;
};

/** Boolean expression to filter rows from the table "imposter". All fields are combined with a logical 'AND'. */
export type Imposter_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Imposter_Bool_Exp>>>;
  _not?: Maybe<Imposter_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Imposter_Bool_Exp>>>;
  cooldown?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  participant?: Maybe<Participants_Bool_Exp>;
  sabotage?: Maybe<Boolean_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "imposter" */
export enum Imposter_Constraint {
  /** unique or primary key constraint */
  ImposterPkey = 'imposter_pkey',
  /** unique or primary key constraint */
  ImposterUserIdKey = 'imposter_user_id_key'
}

/** input type for inserting data into table "imposter" */
export type Imposter_Insert_Input = {
  cooldown?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  participant?: Maybe<Participants_Obj_Rel_Insert_Input>;
  sabotage?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Imposter_Max_Fields = {
  __typename?: 'imposter_max_fields';
  cooldown?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "imposter" */
export type Imposter_Max_Order_By = {
  cooldown?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Imposter_Min_Fields = {
  __typename?: 'imposter_min_fields';
  cooldown?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "imposter" */
export type Imposter_Min_Order_By = {
  cooldown?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "imposter" */
export type Imposter_Mutation_Response = {
  __typename?: 'imposter_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Imposter>;
};

/** input type for inserting object relation for remote table "imposter" */
export type Imposter_Obj_Rel_Insert_Input = {
  data: Imposter_Insert_Input;
  on_conflict?: Maybe<Imposter_On_Conflict>;
};

/** on conflict condition type for table "imposter" */
export type Imposter_On_Conflict = {
  constraint: Imposter_Constraint;
  update_columns: Array<Imposter_Update_Column>;
  where?: Maybe<Imposter_Bool_Exp>;
};

/** ordering options when selecting data from "imposter" */
export type Imposter_Order_By = {
  cooldown?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  participant?: Maybe<Participants_Order_By>;
  sabotage?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "imposter" */
export type Imposter_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "imposter" */
export enum Imposter_Select_Column {
  /** column name */
  Cooldown = 'cooldown',
  /** column name */
  Id = 'id',
  /** column name */
  Sabotage = 'sabotage',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "imposter" */
export type Imposter_Set_Input = {
  cooldown?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  sabotage?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "imposter" */
export enum Imposter_Update_Column {
  /** column name */
  Cooldown = 'cooldown',
  /** column name */
  Id = 'id',
  /** column name */
  Sabotage = 'sabotage',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "leaderboard" */
export type Leaderboard = {
  __typename?: 'leaderboard';
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  overall?: Maybe<Scalars['Int']>;
  /** An object relationship */
  team?: Maybe<Teams>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "leaderboard" */
export type Leaderboard_Aggregate = {
  __typename?: 'leaderboard_aggregate';
  aggregate?: Maybe<Leaderboard_Aggregate_Fields>;
  nodes: Array<Leaderboard>;
};

/** aggregate fields of "leaderboard" */
export type Leaderboard_Aggregate_Fields = {
  __typename?: 'leaderboard_aggregate_fields';
  avg?: Maybe<Leaderboard_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Leaderboard_Max_Fields>;
  min?: Maybe<Leaderboard_Min_Fields>;
  stddev?: Maybe<Leaderboard_Stddev_Fields>;
  stddev_pop?: Maybe<Leaderboard_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Leaderboard_Stddev_Samp_Fields>;
  sum?: Maybe<Leaderboard_Sum_Fields>;
  var_pop?: Maybe<Leaderboard_Var_Pop_Fields>;
  var_samp?: Maybe<Leaderboard_Var_Samp_Fields>;
  variance?: Maybe<Leaderboard_Variance_Fields>;
};

/** aggregate fields of "leaderboard" */
export type Leaderboard_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Leaderboard_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "leaderboard" */
export type Leaderboard_Aggregate_Order_By = {
  avg?: Maybe<Leaderboard_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Leaderboard_Max_Order_By>;
  min?: Maybe<Leaderboard_Min_Order_By>;
  stddev?: Maybe<Leaderboard_Stddev_Order_By>;
  stddev_pop?: Maybe<Leaderboard_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Leaderboard_Stddev_Samp_Order_By>;
  sum?: Maybe<Leaderboard_Sum_Order_By>;
  var_pop?: Maybe<Leaderboard_Var_Pop_Order_By>;
  var_samp?: Maybe<Leaderboard_Var_Samp_Order_By>;
  variance?: Maybe<Leaderboard_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "leaderboard" */
export type Leaderboard_Arr_Rel_Insert_Input = {
  data: Array<Leaderboard_Insert_Input>;
  on_conflict?: Maybe<Leaderboard_On_Conflict>;
};

/** aggregate avg on columns */
export type Leaderboard_Avg_Fields = {
  __typename?: 'leaderboard_avg_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "leaderboard" */
export type Leaderboard_Avg_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "leaderboard". All fields are combined with a logical 'AND'. */
export type Leaderboard_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Leaderboard_Bool_Exp>>>;
  _not?: Maybe<Leaderboard_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Leaderboard_Bool_Exp>>>;
  game_1?: Maybe<Int_Comparison_Exp>;
  game_2?: Maybe<Int_Comparison_Exp>;
  game_3?: Maybe<Int_Comparison_Exp>;
  game_4?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  overall?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "leaderboard" */
export enum Leaderboard_Constraint {
  /** unique or primary key constraint */
  LeaderboardPkey = 'leaderboard_pkey',
  /** unique or primary key constraint */
  LeaderboardTeamIdKey = 'leaderboard_team_id_key'
}

/** input type for incrementing integer column in table "leaderboard" */
export type Leaderboard_Inc_Input = {
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  overall?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "leaderboard" */
export type Leaderboard_Insert_Input = {
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  overall?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Leaderboard_Max_Fields = {
  __typename?: 'leaderboard_max_fields';
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  overall?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "leaderboard" */
export type Leaderboard_Max_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Leaderboard_Min_Fields = {
  __typename?: 'leaderboard_min_fields';
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  overall?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "leaderboard" */
export type Leaderboard_Min_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "leaderboard" */
export type Leaderboard_Mutation_Response = {
  __typename?: 'leaderboard_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Leaderboard>;
};

/** input type for inserting object relation for remote table "leaderboard" */
export type Leaderboard_Obj_Rel_Insert_Input = {
  data: Leaderboard_Insert_Input;
  on_conflict?: Maybe<Leaderboard_On_Conflict>;
};

/** on conflict condition type for table "leaderboard" */
export type Leaderboard_On_Conflict = {
  constraint: Leaderboard_Constraint;
  update_columns: Array<Leaderboard_Update_Column>;
  where?: Maybe<Leaderboard_Bool_Exp>;
};

/** ordering options when selecting data from "leaderboard" */
export type Leaderboard_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "leaderboard" */
export type Leaderboard_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "leaderboard" */
export enum Leaderboard_Select_Column {
  /** column name */
  Game_1 = 'game_1',
  /** column name */
  Game_2 = 'game_2',
  /** column name */
  Game_3 = 'game_3',
  /** column name */
  Game_4 = 'game_4',
  /** column name */
  Id = 'id',
  /** column name */
  Overall = 'overall',
  /** column name */
  TeamId = 'team_id'
}

/** input type for updating data in table "leaderboard" */
export type Leaderboard_Set_Input = {
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  overall?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Leaderboard_Stddev_Fields = {
  __typename?: 'leaderboard_stddev_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "leaderboard" */
export type Leaderboard_Stddev_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Leaderboard_Stddev_Pop_Fields = {
  __typename?: 'leaderboard_stddev_pop_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "leaderboard" */
export type Leaderboard_Stddev_Pop_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Leaderboard_Stddev_Samp_Fields = {
  __typename?: 'leaderboard_stddev_samp_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "leaderboard" */
export type Leaderboard_Stddev_Samp_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Leaderboard_Sum_Fields = {
  __typename?: 'leaderboard_sum_fields';
  game_1?: Maybe<Scalars['Int']>;
  game_2?: Maybe<Scalars['Int']>;
  game_3?: Maybe<Scalars['Int']>;
  game_4?: Maybe<Scalars['Int']>;
  overall?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "leaderboard" */
export type Leaderboard_Sum_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** update columns of table "leaderboard" */
export enum Leaderboard_Update_Column {
  /** column name */
  Game_1 = 'game_1',
  /** column name */
  Game_2 = 'game_2',
  /** column name */
  Game_3 = 'game_3',
  /** column name */
  Game_4 = 'game_4',
  /** column name */
  Id = 'id',
  /** column name */
  Overall = 'overall',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate var_pop on columns */
export type Leaderboard_Var_Pop_Fields = {
  __typename?: 'leaderboard_var_pop_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "leaderboard" */
export type Leaderboard_Var_Pop_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Leaderboard_Var_Samp_Fields = {
  __typename?: 'leaderboard_var_samp_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "leaderboard" */
export type Leaderboard_Var_Samp_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Leaderboard_Variance_Fields = {
  __typename?: 'leaderboard_variance_fields';
  game_1?: Maybe<Scalars['Float']>;
  game_2?: Maybe<Scalars['Float']>;
  game_3?: Maybe<Scalars['Float']>;
  game_4?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "leaderboard" */
export type Leaderboard_Variance_Order_By = {
  game_1?: Maybe<Order_By>;
  game_2?: Maybe<Order_By>;
  game_3?: Maybe<Order_By>;
  game_4?: Maybe<Order_By>;
  overall?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contest" */
  delete_contest?: Maybe<Contest_Mutation_Response>;
  /** delete single row from the table: "contest" */
  delete_contest_by_pk?: Maybe<Contest>;
  /** delete data from the table: "imposter" */
  delete_imposter?: Maybe<Imposter_Mutation_Response>;
  /** delete single row from the table: "imposter" */
  delete_imposter_by_pk?: Maybe<Imposter>;
  /** delete data from the table: "leaderboard" */
  delete_leaderboard?: Maybe<Leaderboard_Mutation_Response>;
  /** delete single row from the table: "leaderboard" */
  delete_leaderboard_by_pk?: Maybe<Leaderboard>;
  /** delete data from the table: "participants" */
  delete_participants?: Maybe<Participants_Mutation_Response>;
  /** delete single row from the table: "participants" */
  delete_participants_by_pk?: Maybe<Participants>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "contest" */
  insert_contest?: Maybe<Contest_Mutation_Response>;
  /** insert a single row into the table: "contest" */
  insert_contest_one?: Maybe<Contest>;
  /** insert data into the table: "imposter" */
  insert_imposter?: Maybe<Imposter_Mutation_Response>;
  /** insert a single row into the table: "imposter" */
  insert_imposter_one?: Maybe<Imposter>;
  /** insert data into the table: "leaderboard" */
  insert_leaderboard?: Maybe<Leaderboard_Mutation_Response>;
  /** insert a single row into the table: "leaderboard" */
  insert_leaderboard_one?: Maybe<Leaderboard>;
  /** insert data into the table: "participants" */
  insert_participants?: Maybe<Participants_Mutation_Response>;
  /** insert a single row into the table: "participants" */
  insert_participants_one?: Maybe<Participants>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "contest" */
  update_contest?: Maybe<Contest_Mutation_Response>;
  /** update single row of the table: "contest" */
  update_contest_by_pk?: Maybe<Contest>;
  /** update data of the table: "imposter" */
  update_imposter?: Maybe<Imposter_Mutation_Response>;
  /** update single row of the table: "imposter" */
  update_imposter_by_pk?: Maybe<Imposter>;
  /** update data of the table: "leaderboard" */
  update_leaderboard?: Maybe<Leaderboard_Mutation_Response>;
  /** update single row of the table: "leaderboard" */
  update_leaderboard_by_pk?: Maybe<Leaderboard>;
  /** update data of the table: "participants" */
  update_participants?: Maybe<Participants_Mutation_Response>;
  /** update single row of the table: "participants" */
  update_participants_by_pk?: Maybe<Participants>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
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
export type Mutation_RootDelete_ImposterArgs = {
  where: Imposter_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Imposter_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_LeaderboardArgs = {
  where: Leaderboard_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Leaderboard_By_PkArgs = {
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
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsert_ImposterArgs = {
  objects: Array<Imposter_Insert_Input>;
  on_conflict?: Maybe<Imposter_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Imposter_OneArgs = {
  object: Imposter_Insert_Input;
  on_conflict?: Maybe<Imposter_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LeaderboardArgs = {
  objects: Array<Leaderboard_Insert_Input>;
  on_conflict?: Maybe<Leaderboard_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Leaderboard_OneArgs = {
  object: Leaderboard_Insert_Input;
  on_conflict?: Maybe<Leaderboard_On_Conflict>;
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
export type Mutation_RootUpdate_ImposterArgs = {
  _set?: Maybe<Imposter_Set_Input>;
  where: Imposter_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Imposter_By_PkArgs = {
  _set?: Maybe<Imposter_Set_Input>;
  pk_columns: Imposter_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LeaderboardArgs = {
  _inc?: Maybe<Leaderboard_Inc_Input>;
  _set?: Maybe<Leaderboard_Set_Input>;
  where: Leaderboard_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Leaderboard_By_PkArgs = {
  _inc?: Maybe<Leaderboard_Inc_Input>;
  _set?: Maybe<Leaderboard_Set_Input>;
  pk_columns: Leaderboard_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ParticipantsArgs = {
  _set?: Maybe<Participants_Set_Input>;
  where: Participants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Participants_By_PkArgs = {
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
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  imposter?: Maybe<Imposter>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Enum>;
  /** An object relationship */
  team?: Maybe<Teams>;
  team_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']>;
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Participants_Max_Fields>;
  min?: Maybe<Participants_Min_Fields>;
};

/** aggregate fields of "participants" */
export type Participants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Participants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "participants" */
export type Participants_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Participants_Max_Order_By>;
  min?: Maybe<Participants_Min_Order_By>;
};

/** input type for inserting array relation for remote table "participants" */
export type Participants_Arr_Rel_Insert_Input = {
  data: Array<Participants_Insert_Input>;
  on_conflict?: Maybe<Participants_On_Conflict>;
};

/** Boolean expression to filter rows from the table "participants". All fields are combined with a logical 'AND'. */
export type Participants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Participants_Bool_Exp>>>;
  _not?: Maybe<Participants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Participants_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  imposter?: Maybe<Imposter_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "participants" */
export enum Participants_Constraint {
  /** unique or primary key constraint */
  ParticipantsPkey = 'participants_pkey',
  /** unique or primary key constraint */
  ParticipantsUserIdKey = 'participants_user_id_key'
}

/** input type for inserting data into table "participants" */
export type Participants_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imposter?: Maybe<Imposter_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Enum>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Participants_Max_Fields = {
  __typename?: 'participants_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "participants" */
export type Participants_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Participants_Min_Fields = {
  __typename?: 'participants_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "participants" */
export type Participants_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imposter?: Maybe<Imposter_Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "participants" */
export type Participants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "participants" */
export enum Participants_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "participants" */
export type Participants_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Enum>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "participants" */
export enum Participants_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table: "imposter" */
  imposter: Array<Imposter>;
  /** fetch aggregated fields from the table: "imposter" */
  imposter_aggregate: Imposter_Aggregate;
  /** fetch data from the table: "imposter" using primary key columns */
  imposter_by_pk?: Maybe<Imposter>;
  /** fetch data from the table: "leaderboard" */
  leaderboard: Array<Leaderboard>;
  /** fetch aggregated fields from the table: "leaderboard" */
  leaderboard_aggregate: Leaderboard_Aggregate;
  /** fetch data from the table: "leaderboard" using primary key columns */
  leaderboard_by_pk?: Maybe<Leaderboard>;
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
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
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
export type Query_RootImposterArgs = {
  distinct_on?: Maybe<Array<Imposter_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Imposter_Order_By>>;
  where?: Maybe<Imposter_Bool_Exp>;
};

/** query root */
export type Query_RootImposter_AggregateArgs = {
  distinct_on?: Maybe<Array<Imposter_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Imposter_Order_By>>;
  where?: Maybe<Imposter_Bool_Exp>;
};

/** query root */
export type Query_RootImposter_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootLeaderboardArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Order_By>>;
  where?: Maybe<Leaderboard_Bool_Exp>;
};

/** query root */
export type Query_RootLeaderboard_AggregateArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Order_By>>;
  where?: Maybe<Leaderboard_Bool_Exp>;
};

/** query root */
export type Query_RootLeaderboard_By_PkArgs = {
  id: Scalars['uuid'];
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

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table: "imposter" */
  imposter: Array<Imposter>;
  /** fetch aggregated fields from the table: "imposter" */
  imposter_aggregate: Imposter_Aggregate;
  /** fetch data from the table: "imposter" using primary key columns */
  imposter_by_pk?: Maybe<Imposter>;
  /** fetch data from the table: "leaderboard" */
  leaderboard: Array<Leaderboard>;
  /** fetch aggregated fields from the table: "leaderboard" */
  leaderboard_aggregate: Leaderboard_Aggregate;
  /** fetch data from the table: "leaderboard" using primary key columns */
  leaderboard_by_pk?: Maybe<Leaderboard>;
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
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
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
export type Subscription_RootImposterArgs = {
  distinct_on?: Maybe<Array<Imposter_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Imposter_Order_By>>;
  where?: Maybe<Imposter_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImposter_AggregateArgs = {
  distinct_on?: Maybe<Array<Imposter_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Imposter_Order_By>>;
  where?: Maybe<Imposter_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImposter_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootLeaderboardArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Order_By>>;
  where?: Maybe<Leaderboard_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLeaderboard_AggregateArgs = {
  distinct_on?: Maybe<Array<Leaderboard_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leaderboard_Order_By>>;
  where?: Maybe<Leaderboard_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLeaderboard_By_PkArgs = {
  id: Scalars['uuid'];
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
  /** An object relationship */
  contest?: Maybe<Contest>;
  id: Scalars['uuid'];
  /** An object relationship */
  leaderboard?: Maybe<Leaderboard>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  participants: Array<Participants>;
  /** An aggregated array relationship */
  participants_aggregate: Participants_Aggregate;
  picture_url?: Maybe<Scalars['String']>;
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
  contest?: Maybe<Contest_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  leaderboard?: Maybe<Leaderboard_Bool_Exp>;
  motto?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  participants?: Maybe<Participants_Bool_Exp>;
  picture_url?: Maybe<String_Comparison_Exp>;
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
  contest?: Maybe<Contest_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  leaderboard?: Maybe<Leaderboard_Obj_Rel_Insert_Input>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Participants_Arr_Rel_Insert_Input>;
  picture_url?: Maybe<Scalars['String']>;
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
  contest?: Maybe<Contest_Order_By>;
  id?: Maybe<Order_By>;
  leaderboard?: Maybe<Leaderboard_Order_By>;
  motto?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  participants_aggregate?: Maybe<Participants_Aggregate_Order_By>;
  picture_url?: Maybe<Order_By>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
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
  id?: Maybe<Scalars['uuid']>;
  motto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Motto = 'motto',
  /** column name */
  Name = 'name',
  /** column name */
  PictureUrl = 'picture_url'
}

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  admin: Scalars['Boolean'];
  auth0_id: Scalars['String'];
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
  participant?: Maybe<Participants_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
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
  Auth0Id = 'auth0_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Auth0Id = 'auth0_id'
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

export type GetOneParticipantDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type GetOneParticipantDetailsQuery = (
  { __typename?: 'query_root' }
  & { participants: Array<(
    { __typename?: 'participants' }
    & Pick<Participants, 'description' | 'name' | 'role' | 'team_id' | 'user_id'>
    & { team?: Maybe<(
      { __typename?: 'teams' }
      & Pick<Teams, 'motto' | 'name' | 'picture_url'>
    )>; }
  )>; }
);

export const GetOneParticipantDetailsDocument = gql`
    query getOneParticipantDetails {
  participants {
    description
    name
    role
    team_id
    user_id
    team {
      motto
      name
      picture_url
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
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOneParticipantDetailsQuery();
 */
export function useGetOneParticipantDetailsQuery(options: VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>(GetOneParticipantDetailsDocument, {}, options);
}
export type GetOneParticipantDetailsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetOneParticipantDetailsQuery, GetOneParticipantDetailsQueryVariables>;
