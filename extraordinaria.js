if (MATRICULA_EXTRAORDIONARIA_TABLE != null) {
  for (let i = 0; i < MATRICULA_EXTRAORDIONARIA_TABLE.children.length; i++) {
    const currentLine = MATRICULA_EXTRAORDIONARIA_TABLE.children[i];
    if (currentLine.className.indexOf("destaque") > -1) {
      continue;
    }
    let code = currentLine.children[4].innerHTML;
    code = code.split("(")[0];
    if (code.length > 0) {
      currentLine.children[4].innerHTML = discoverTimeToSubjects(code);
    }
    console.log(code);
  }
}

if (SIGAA_BETA !== null) {
  SIGAA_BETA_SCHEDULE_TIME_HEADER.removeAttribute("style");
  for (let i = 0; i < SIGAA_BETA.children.length; i++) {
    const currentLine = SIGAA_BETA.children[i];
    if (currentLine.className.indexOf("destaque") > -1) {
      continue;
    }
    let code = currentLine.children[3].innerHTML;
    if (code.length > 0) {
      console.log(discoverTimeToSubjects(code));
      currentLine.children[3].innerHTML = discoverTimeToSubjects(code);
    }
  }
}
