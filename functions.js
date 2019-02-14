const discoverTimeToBoard = (code) => {
  //trim pois vem com espaços
  switch(code.trim()) {
    case "M1":
      return "07:00 às 08:00";
    case "M2":
      return "08:00 às 09:00";
    case "M3":
      return "09:00 às 10:00";
    case "M4":
      return "10:00 às 11:00";
    case "M5":
      return "11:00 às 12:00";

    case "T1":
      return "12:00 às 13:00";
    case "T2":
      return "13:00 às 14:00";
    case "T3":
      return "14:00 às 15:00";
    case "T4":
      return "15:00 às 16:00";
    case "T5":
      return "16:00 às 17:00";

    case "N1":
      return "17:00 às 18:00"
    case "N2":
      return "18:00 às 19:00"
    case "N3":
      return "19:00 às 20:00"
    case "N4":
      return "20:00 às 21:00"
    case "N5":
      return "21:00 às 22:00"
    default:
      return code;
  }
}

function discoverTimeToSubjects(code) {
  /*
    Para cobrir o caso onde por exemplo a disciplina começa às 17 e termina às 
    18, o código vindo do parâmetro será +/- assim (24T5 24N1), por isso o split
    dando match em qualquer valor que não seja por exemplo "white space"
  */
  let splitedCode = code.split(/\W/g);

  /*
    Para melhorar o visual do caso anterior inserindo um <br> é necessário
    guardar em um array os valores de cada código de tempo
  */
  let finalDays = [];
  let finalTimes = [];

  //Se tiver + de 1 código (vide o caso do split acima), formata ele bonitinho
  for(let i = 0; i<splitedCode.length; i++) {
    if(splitedCode[i] == "") //No split anterior, vem um caractere vazio (why?)
      continue; //Pula o caractere vazio
    
    let splitedString = splitedCode[i].split(/(\D)/g);//Separo os dias dos horarios
    finalDays.push(mapDays(splitedString[0])); //Descubro o dia
    finalTimes.push(mapTimes(splitedString[1], splitedString[2])); //Descubro o horario
  }

  //String final que será trocada pelos códigos de disciplinas
  let finalString = "";
  for(let i = 0; i < finalDays.length; i++) {
    finalString += finalDays[i] + " | " + finalTimes[i];
    finalString += "<br>";
  }
  return finalString;
}

function mapTimes(turn, time) {
  let finalStringTime = "";

  //Se nao tiver horario definido.
  if(turn == undefined || time == undefined) {
    return "";
  }

  //Double switch para checar o turno e o horario (ex: M1, T3...)
  for(let i = 0; i<time.length; i++) {
    switch(turn) {
      case "M": {
        switch(time[i]) {
          case "1":
            finalStringTime += "07:00 - 08:00 | "
            break;
          case "2":
            finalStringTime += "08:00 - 09:00 | "
            break;
          case "3":
            finalStringTime += "09:00 - 10:00 | "
            break;
          case "4":
            finalStringTime += "10:00 - 11:00 | "
            break;
          case "5":
            finalStringTime += "11:00 - 12:00 | "
            break;
        }
      }
      break;
      case "T": {
        switch(time[i]) {
          case "1":
            finalStringTime += "12:00 - 13:00 | "
            break;
          case "2":
            finalStringTime += "13:00 - 14:00 | "
            break;
          case "3":
            finalStringTime += "14:00 - 15:00 | "
            break;
          case "4":
            finalStringTime += "15:00 - 16:00 | "
            break;
          case "5":
            finalStringTime += "16:00 - 17:00 | "
            break;
        }
      }
      break;
      case "N": {
        switch(time[i]) {
          case "1":
            finalStringTime += "17:00 - 18:00 | "
            break;
          case "2":
            finalStringTime += "18:00 - 19:00 | "
            break;
          case "3":
            finalStringTime += "19:00 - 20:00 | "
            break;
          case "4":
            finalStringTime += "20:00 - 21:00 | "
            break;
          case "5":
            finalStringTime += "21:00 - 22:00 | "
            break;
        }
      }
      break;
    }
  }
  return finalStringTime;
}

function mapDays(days) {
  let finalStringDays = "";

  //For para caso tenha mais de um dia.
  for(let i = 0; i<days.length; i++) {
    switch(days[i]) {
      case '1': finalStringDays += "Dom ";
        break;
      case '2': finalStringDays += "Seg ";
        break;      
      case '3': finalStringDays += "Ter ";
        break;      
      case '4': finalStringDays += "Qua ";
        break;
      case '5': finalStringDays += "Qui ";
        break;
      case '6': finalStringDays += "Sex ";
        break;
      case '7': finalStringDays += "Sab ";
        break;
    }
  }
  return finalStringDays;
}