-- Project Name : 外国人材
-- Date/Time    : 2018/09/26 15:20:43
-- Author       : グループA
-- RDBMS Type   : PostgreSQL
-- Application  : A5:SQL Mk-2

/*
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
*/

-- 職務履歴
--* RestoreFromTempTable
create table WORK_HISTORIES (
  DFA_NUM character varying(20) not null
  , WORK_START_DT date not null
  , WORK_END_DT date not null
  , EMPLOYER character varying
  , RESULT character(1)
  , constraint WORK_HISTORIES_PKC primary key (DFA_NUM,WORK_START_DT)
) ;

-- 国マスタ
--* RestoreFromTempTable
create table COUNTRIES (
  COUNRTY_CD character(3) not null
  , COUNTRY_NAME character(50) not null
  , COUNTRY_NAME_ENG character(25) not null
  , SYSTEM_UPDATE_ID character(20)
  , SYSTEM_UPDATE_DT timestamp
  , constraint COUNTRIES_PKC primary key (COUNRTY_CD)
) ;

create index COUNTRIES_IX1
  on COUNTRIES(COUNRTY_CD);

-- 外国人材情報
--* RestoreFromTempTable
create table WORKERS (
  DFA_NUM character varying(20) not null
  , SYSTEM_MAKE_DT timestamp not null
  , SYSTEM_UPDATE_DT timestamp
  , NAME character varying(40) not null
  , BIRTH_YMD date not null
  , SEIBETSU character(1) not null
  , ADDRESS character varying(100) not null
  , COUNTRY_CD character(3) not null
  , constraint WORKERS_PKC primary key (DFA_NUM)
) ;

create index WORKERS_IX1
  on WORKERS(DFA_NUM);

comment on table WORK_HISTORIES is '職務履歴';
comment on column WORK_HISTORIES.DFA_NUM is 'DFA認証番号(レッドリボン)';
comment on column WORK_HISTORIES.WORK_START_DT is '開始日';
comment on column WORK_HISTORIES.WORK_END_DT is '終了日';
comment on column WORK_HISTORIES.EMPLOYER is '雇用者';
comment on column WORK_HISTORIES.RESULT is '雇用者確認結果？';

comment on table COUNTRIES is '国マスタ:ISO 3166-1に基づく。
ISO 3166-1は、ISOによって発行されているISO 3166の第一の部分で国名コードの標準。';
comment on column COUNTRIES.COUNRTY_CD is '国籍（国コード：alpha-3）';
comment on column COUNTRIES.COUNTRY_NAME is '国名称';
comment on column COUNTRIES.COUNTRY_NAME_ENG is '国名称（英名）';
comment on column COUNTRIES.SYSTEM_UPDATE_ID is 'システム更新ID';
comment on column COUNTRIES.SYSTEM_UPDATE_DT is 'システム更新日時';

comment on table WORKERS is '外国人材情報';
comment on column WORKERS.DFA_NUM is 'DFA認証番号(レッドリボン)';
comment on column WORKERS.SYSTEM_MAKE_DT is 'システム作成日時';
comment on column WORKERS.SYSTEM_UPDATE_DT is 'システム更新日時';
comment on column WORKERS.NAME is '名前';
comment on column WORKERS.BIRTH_YMD is '生年月日';
comment on column WORKERS.SEIBETSU is '性別:0:女, 1:男';
comment on column WORKERS.ADDRESS is '住所';
comment on column WORKERS.COUNTRY_CD is '国籍（国コード：alpha-3）';
