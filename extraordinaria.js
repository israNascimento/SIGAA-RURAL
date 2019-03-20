if(MATRICULA_EXTRAORDIONARIA_TABLE != null) {

  for(let i = 0; i<MATRICULA_EXTRAORDIONARIA_TABLE.children.length; i++) {
    const currentLine = MATRICULA_EXTRAORDIONARIA_TABLE.children[i];
    if(currentLine.className.indexOf('destaque') > -1) {
      continue;
    }
    let code = currentLine.children[4].innerHTML;
    code = code.split('(')[0];
    if(code.length > 0) {
      currentLine.children[4].innerHTML = discoverTimeToSubjects(code);
    }
    console.log(code);
  }
}