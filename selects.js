const SHCEDULEBOARD_HEADER = document.querySelector(
  "#conteudo > div.box-geral > " + "div:nth-child(4) > table > thead > tr"
);

const SCHEDULEBOARD_BODY = document.querySelector(
  "#conteudo > div.box-geral >" + "div:nth-child(4) > table > tbody"
);

const MAIN_SCHEDULEBOARD_HEADER = document.querySelector(
  "#conteudo > #portal-docente > #main-docente > #turmas-portal > table.subFormulario > thead > tr"
);

const MAIN_SCHEDULEBOARD_BODY = document.querySelector(
  "#conteudo > #portal-docente > #main-docente > #turmas-portal >" +
    "table:nth-child(3) > tbody"
);

const MATRICULA_EXTRAORDIONARIA_TABLE = document.querySelector(
  "#lista-turmas-extra > tbody"
);

const SIGAA_BETA = document.querySelector(
  "#j_id_jsp_1306271468_3 > div:nth-child(5) > div > div > table > tbody"
);

const SIGAA_BETA_SCHEDULE_TIME_HEADER = document.querySelector(
  "#j_id_jsp_1306271468_3 > div:nth-child(5) > div > div > table > thead > tr > th.text-center"
);

//Seleciona elemento cujo id contenha NívelTR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_29001t_05s_0º NívelTR
const SUBJECTS = document.querySelectorAll('[id*="NívelTR"]');

//Seleciona elemento cujo id contenha _TR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_30847c_24803t_01s_TR
const EQUIVALENT_SUBJECTS = document.querySelectorAll('[id*="_TR"]');

//Seleciona elemento cujo id contenha turma_ e seja da tag tr
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> turma_142381TR
const OPEN_SUBJECTS = document.querySelectorAll('tr[id*="turma_"]');

const TIME_BOARD = {
  M1: "07:00 às 08:00",
  M2: "08:00 às 09:00",
  M3: "09:00 às 10:00",
  M4: "10:00 às 11:00",
  M5: "11:00 às 12:00",
  T1: "12:00 às 13:00",
  T2: "13:00 às 14:00",
  T3: "14:00 às 15:00",
  T4: "15:00 às 16:00",
  T5: "16:00 às 17:00",
  N1: "17:00 às 18:00",
  N2: "18:00 às 19:00",
  N3: "19:00 às 20:00",
  N4: "20:00 às 21:00",
  N5: "21:00 às 22:00",
};

const DAYS = {
  1: "Dom",
  2: "Seg",
  3: "Ter",
  4: "Qua",
  5: "Qui",
  6: "Sex",
  7: "Sab",
};
