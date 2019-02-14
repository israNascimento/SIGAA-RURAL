const discoverTimeToBoard = (code) => {
  //trim pois vem com espaços
  const time = TIME_BOARD[code.trim()] ? TIME_BOARD[code.trim()] : code.trim() ;

  return time;
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
    if(!splitedCode[i]) //No split anterior, vem um caractere vazio (why?)
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
  let daysArray = [];
  // Tradando o caso de poder ser array
  if (Array.isArray(days)) {
    daysArray = [...days];
  } else {
    daysArray = [...days.split('')];
  }

  let finalStringDays = daysArray.reduce(function (acc, cur) {
    acc += DAYS[cur] ? DAYS[cur] : "" ; // DAYS vem do select.js
    return acc;
  }, " ")

  return finalStringDays;
}
