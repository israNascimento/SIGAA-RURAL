const SHCEDULEBOARD_HEADER = document.querySelector(
  '#conteudo > div.box-geral > '+'div:nth-child(4) > table > thead > tr'
);

const SCHEDULEBOARD_BODY = document.querySelector(
  '#conteudo > div.box-geral >' +'div:nth-child(4) > table > tbody'
);

//Seleciona elemento cujo id contenha NívelTR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_29001t_05s_0º NívelTR
const SUBJECTS = document.querySelectorAll('[id*="NívelTR"]');

console.log("Ola mundo!");