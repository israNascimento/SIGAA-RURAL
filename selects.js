const SHCEDULEBOARD_HEADER = document.querySelector(
  '#conteudo > div.box-geral > '+'div:nth-child(4) > table > thead > tr'
);

const SCHEDULEBOARD_BODY = document.querySelector(
  '#conteudo > div.box-geral >' +'div:nth-child(4) > table > tbody'
);

//Seleciona elemento cujo id contenha NívelTR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_29001t_05s_0º NívelTR
const SUBJECTS = document.querySelectorAll('[id*="NívelTR"]');

const TIME_BOARD = {
  "M1": "07:00 às 08:00",
  "M2": "08:00 às 09:00",
  "M3": "09:00 às 10:00",
  "M4": "10:00 às 11:00",
  "M5": "11:00 às 12:00",
  "T1": "12:00 às 13:00",
  "T2": "13:00 às 14:00",
  "T3": "14:00 às 15:00",
  "T4": "15:00 às 16:00",
  "T5": "16:00 às 17:00",
  "N1": "17:00 às 18:00",
  "N2": "18:00 às 19:00",
  "N3": "19:00 às 20:00",
  "N4": "20:00 às 21:00",
  "N5": "21:00 às 22:00"
}

const DAYS = {
    "1": "Dom ",
    "2": "Seg ",
    "3": "Ter ",
    "4": "Qua ",
    "5": "Qui ",
    "6": "Sex ",
    "7": "Sab ",
}

console.log("Ola mundo!");
