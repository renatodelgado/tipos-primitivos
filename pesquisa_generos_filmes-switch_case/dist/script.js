alert("Bem-vindo ao Portal de Gêneros de Cinema. Sobre qual gênero você gostaria de entender mais? No momento temos mais de 20 em nossa base de dados!")

const pesquisa_filme = prompt(
  "Escreva o gênero do filme sobre o qual você deseja saber mais."
);

switch (pesquisa_filme.toUpperCase()) {
  case "COMÉDIA":
    alert(
      "Os filmes de comédia são feitos para provocar risadas. Podem ser leves e descontraídos, com humor físico ou diálogos engraçados."
    );
    break;
  case "AÇÃO":
    alert(
      "Filmes de ação geralmente contêm muitas cenas de lutas, perseguições, explosões e adrenalina. Geralmente focam em heróis enfrentando vilões ou obstáculos de forma física e intensa."
    );
    break;
  case "AVENTURA":
    alert(
      "Filmes de aventura contam histórias que envolvem jornadas épicas, descobertas e exploração. O enredo costuma se passar em locais exóticos e incluir desafios e mistérios."
    );
    break;
  case "DRAMA":
    alert(
      "O filme dramático foca em questões emocionais e pessoais dos personagens. O enredo costuma explorar conflitos internos e externos, sendo mais sério e profundo."
    );
    break;
  case "TERROR":
    alert(
      "Os filmes de terror são projetados para causar medo, tensão e sustos. Podem envolver elementos sobrenaturais, monstros ou psicopatas."
    );
    break;
  case "FICÇÃO CIENTÍFICA":
    alert(
      "Os filmes de ficção científica envolvem tecnologias futuristas, ciência avançada ou viagens no tempo. Explora o impacto da ciência no indivíduo ou na sociedade."
    );
    break;
  case "FANTASIA":
    alert(
      "Os filmes de fantasia contam histórias ambientadas em mundos fictícios ou mágicos, com seres sobrenaturais, magia e aventuras épicas."
    );
    break;
  case "SUSPENSE":
    alert(
      "Filmes de suspense mantêm o público na ponta da cadeira, com enredos cheios de mistérios, reviravoltas e tensão."
    );
    break;
  case "ROMANCE":
    alert(
      "Os filmes de romance focam em relações amorosas e nos desafios emocionais dos personagens. Pode ser leve e doce ou mais dramático."
    );
    break;
  case "DOCUMENTÁRIO":
    alert(
      "Os documentários exploram eventos reais, pessoas ou questões sociais, com a intenção de informar ou gerar reflexão sobre temas específicos."
    );
    break;
  case "MUSICAL":
    alert(
      "Musicais são filmes em que a música e as coreografias desempenham papel central no enredo. Os personagens frequentemente se expressam por meio de canções."
    );
    break;
  case "ANIMAÇÃO":
    alert(
      "Filmes de animação são produzidos com desenhos, CGI ou stop-motion. Podem abranger uma ampla variedade de temas e públicos, desde infantis até adultos."
    );
    break;
  case "BIOGRAFIA":
    alert(
      "Filmes biográficos retratam a vida de uma pessoa real, geralmente famosa ou histórica. Focam em suas realizações, desafios e impacto na sociedade."
    );
    break;
  case "POLICIAL":
    alert(
      "Os enredos dos filmes policiais giram em torno de crimes, investigações, policiais e criminosos. Muitas vezes focam em detetives resolvendo casos complexos."
    );
    break;
  case "CRIME":
    alert(
      "Os enredos dos filmes policiais giram em torno de crimes, investigações, policiais e criminosos. Muitas vezes focam em detetives resolvendo casos complexos."
    );
    break;
  case "NOIR":
    alert(
      "Filmes noir são um subgênero do filme policial/crime, geralmente ambientado em cenários urbanos e sombrios. Tem como característica a moralidade ambígua dos personagens e o uso de sombras e iluminação dramática."
    );
    break;
  case "GUERRA":
    alert(
      "Filmes de guerra exploram conflitos militares, guerras históricas ou fictícias, com foco no impacto psicológico e físico da guerra em indivíduos e na sociedade."
    );
    break;
  case "FAROESTE":
    alert(
      "Filmes de faroeste são ambientados no Velho Oeste dos EUA, com cowboys, duelos e paisagens áridas. Geralmente exploram temas de justiça, vingança e moralidade."
    );
    break;
  case "ÉPICO":
    alert(
      "Filmes épicos são grandiosos, retratam eventos históricos importantes ou lendas, muitas vezes com grandes batalhas e narrativas complexas."
    );
    break;
  case "MISTÉRIO":
    alert(
      "Filmes de mistério se centram em uma trama de investigação, na qual o protagonista (geralmente um detetive ou investigador) tenta resolver um crime ou mistério intrigante."
    );
    break;
  case "SLASHER":
    alert(
      "Slasher é um subgênero de terror. Ele é caracterizado por um assassino que persegue e mata suas vítimas, geralmente de forma violenta, com ênfase em cenas de suspense e medo."
    );
    break;
  case "SOBRENATURAL":
    alert(
      "O filme sobrenatural foca em eventos inexplicáveis, fantasmas, demônios ou outros elementos além da compreensão humana. Pode misturar com terror ou drama."
    );
    break;
  default:
    alert("Esse gênero não está na nossa base de dados. :/");
}