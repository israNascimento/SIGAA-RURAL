//Estou na tela principal
if(MAIN_SCHEDULEBOARD_BODY != null) {

  for(let i = 0; i<MAIN_SCHEDULEBOARD_BODY.children.length; i++) {
    const currentLine = MAIN_SCHEDULEBOARD_BODY.children[i];

    let horaryColumn = currentLine.children[2];
    if(horaryColumn != null){
      horaryColumn.style.padding = "7px";
      horaryColumn.setAttribute("width", "50%");
      horaryColumn.children[0].innerHTML = discoverTimeToSubjects(horaryColumn.children[0].innerHTML);
    }
  }
}

//Estou na tela de mostrar horários
if(SHCEDULEBOARD_HEADER != null) {
  const horary =  SHCEDULEBOARD_HEADER.children[0];
  horary.setAttribute("width", "5%"); //Adiciona width igual as outras colunas para a coluna de horários

  const day = SHCEDULEBOARD_HEADER.children[1];
  day.style.padding = "7px"; //Adiciona padding para deixar o header mais bonito
  
  //Para cada linha da tabela de horarios...
  for(let i = 0; i<SCHEDULEBOARD_BODY.children.length; i++) {
    const currentLine = SCHEDULEBOARD_BODY.children[i];

    if(i % 2 == 0) {
      currentLine.classList.add("linhaPar"); //Para melhorar visualização da tabela
    } else {
      currentLine.classList.add("linhaImpar"); //Para melhorar visualização da tabela
    }
  
    let horaryColumn = currentLine.children[0];
  
    //Se a coluna de horário tiver colspan, significa que é uma linha vazia para separar Manhã, tarde e noite.
    if(horaryColumn.getAttribute("colspan") != null) {
      horaryColumn.setAttribute("colspan", "7");
      horaryColumn.style.backgroundColor = "#DDDDE2";
      continue;
    }
  
    //Melhorando visualização da coluna de horário
    horaryColumn.style.padding = "7px";
    horaryColumn.style.fontWeight = "bold";

    //Onde a mágica acontece, troca o código pelo horário.
    horaryColumn.innerHTML = discoverTimeToBoard(horaryColumn.innerHTML);
  
    //Necessário para alinhar os itens à esquerda ao invés de centralizado
    for(let j = 1; j < 7; j++) {
      currentLine.children[j].removeAttribute("class");
    }
    horaryColumn.removeAttribute("align");
  }
}

//Estou na parte de se inscrever em disciplinas
if(SUBJECTS != null) {
  for(let i = 0; i<SUBJECTS.length; i++) {
    //OK, THIS IS EPIC...
    /*Para cada linha de disciplina (SUBJECTS[I]), 
      seleciona a coluna que contém o código de horário (children[5]),
      e dentro do <td> de horário, existe uma tag <label>,
      logo é necessário descer mais um nível na árvore (children[0]) para
      conseguir acessar o código com o horário da disciplina
    */ 
    SUBJECTS[i].children[5].children[0].innerHTML = 
      discoverTimeToSubjects(SUBJECTS[i].children[5].children[0].innerHTML);
  }
}
 