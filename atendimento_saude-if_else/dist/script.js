let consulta = prompt("Você gostaria de agendar uma consulta médica? (S/N)").toUpperCase();

let continuar = true;

if (consulta != "S") {
  continuar = false;
  alert(
    "Está bem! Se precisar de mais alguma coisa, é só me chamar mais uma vez!"
  );
}

let especialidade = "0";

if (continuar === true) {
  especialidade = prompt(
    "Certo! Para qual especialidade você deseja atendimento? 1 - Clínica médica; 2 - Ortopedia; 3 - Pediatria"
  );
}

let modoAtendimento = "0";

if (continuar === true) {
  if (especialidade === "1" || especialidade === "2" || especialidade === "3") {
    modoAtendimento = prompt(
      "Está bem. Você prefere ser atendido por que modo? 1 - Presencial; 2 - Online"
    );
  } else {
    continuar = false;
    alert("Infelizmente, não entendi. Pode começar nosso atendimento de novo?");
  }
}

turno = "0";

if (continuar === true) {
  if (modoAtendimento === "1" || modoAtendimento === "2") {
    turno = prompt(
      "Em que parte do dia você tem preferência de horário? 1 - Manhã; 2 - Tarde; 3 - Noite"
    );
  } else {
    continuar = false;
    alert("Infelizmente, não entendi. Pode começar nosso atendimento de novo?");
  }
}

if (continuar === true) {
  if (turno === "1" || turno === "2" || turno === "3") {
    continuar = true;
  } else {
    continuar = false;
    alert("Infelizmente, não entendi. Pode começar nosso atendimento de novo?");
  }
}

if (especialidade === "1") {
  especialidade = "Clínica Médica";
} else if (especialidade === "2") {
  especialidade = "Ortopedia";
} else if (especialidade === "3") {
  especialidade = "Pediatria";
}

if (modoAtendimento === "1") {
  modoAtendimento = "presencial";
} else if (modoAtendimento === "2") {
  modoAtendimento = "remota";
}

if (turno === "1") {
  turno = "manhã";
} else if (turno === "2") {
  turno = "tarde";
} else if (turno === "3") {
  turno = "noite";
}

if (continuar === true) {
  alert(
    `Agendamento realizado com sucesso! Será uma consulta de ${especialidade}, de maneira ${modoAtendimento} no turno da ${turno}. Lembramos que o atendimento é feito por ordem de chegada. Agradecemos pela preferência!`
  );
}