/* =====================================================================
   DADOS DO SITE DA VII JENPEX 2026
   ---------------------------------------------------------------------
   Para atualizar o site, edite apenas este arquivo.
   - Mantenha as aspas "..." em volta de cada texto.
   - Separe os itens com vírgula.
   - Enquanto uma lista estiver vazia [ ], a página mostra "Em breve".
   ===================================================================== */

const JENPEX = {

  /* ---------- LINK DE INSCRIÇÃO (SUAP) ----------
     Para esconder os botões de inscrição, deixe as aspas vazias: "" */
  inscricao: "https://suap.ifmt.edu.br/eventos/inscricao/1/37/",

  /* ---------- PROGRAMAÇÃO GERAL ---------- */
  programacao: [
    {
      dia: "18 de novembro",
      semana: "Quarta-feira",
      turnos: [
        {
          turno: "Noite",
          atividades: [
            { hora: "19h",   titulo: "Abertura do evento – Polo JP", detalhe: "Apresentações artísticas" },
            { hora: "19h30", titulo: "Exposição IDEAHUB" },
            { hora: "19h30", titulo: "Exposição Hidroponia" },
            { hora: "20h20", titulo: "Comunicação Oral", link: "#comunicacao-oral" }
          ]
        }
      ]
    },
    {
      dia: "19 de novembro",
      semana: "Quinta-feira",
      turnos: [
        {
          turno: "Manhã",
          atividades: [
            { hora: "8h", titulo: "Mostra Científica", link: "#mostra-cientifica" }
          ]
        },
        {
          turno: "Tarde",
          atividades: [
            { hora: "14h", titulo: "Exibição dos PITs nas redes sociais e apresentação de trabalhos remotos" }
          ]
        },
        {
          turno: "Noite",
          atividades: [
            { hora: "19h", titulo: "Exposição Microbiologia" },
            { hora: "19h", titulo: "Exposição Novos Produtos I" },
            { hora: "19h", titulo: "Exposição Novos Produtos II" },
            { hora: "20h", titulo: "Comunicação Oral", link: "#comunicacao-oral" }
          ]
        }
      ]
    }
  ],

  /* ---------- MOSTRA CIENTÍFICA ---------- */
  mostraInfo: "19 de novembro, quinta-feira, a partir das 8h",

  mostraTurmas: [
    { turma: "1º Agro A", orientador: "Daniel Valadão", trabalho: "Oleaginosas", local: "Sala 6" },
    { turma: "1º Agro B", orientador: "Talita", trabalho: "Campo de atuação de TA – Fruticultura", local: "Sala 7" },
    { turma: "1º Agro C", orientador: "Fábio", trabalho: "Olericultura", local: "Sala 16" },
    { turma: "1º MSI", orientador: "Gustavo", trabalho: "Gincana Tecnológica", local: "Sala do 1º MSI" },
    { turma: "2º Agro A", orientador: "Ailson", trabalho: "Produção animal: avicultura, piscicultura e apicultura", local: "Sala 9" },
    { turma: "2º Agro B", orientador: "Amanda", trabalho: "Pecuária: animais monogástricos", local: "Sala 12" },
    { turma: "2º Agro C", orientador: "Késia", trabalho: "Ruminantes", local: "Sala 10" },
    { turma: "2º MSI", orientador: "Monique e Gustavo", trabalho: "Escape Room", local: "Sala de Recursos e Atendimentos Individualizados" },
    { turma: "3º Agro A", orientador: "José Vanor", trabalho: "Mecanização agrícola: exposição de implementos e conceitos práticos de mecanização agrícola", local: "Gramado entre o bloco de salas de aula e os laboratórios de Agronomia" },
    { turma: "3º Agro B", orientador: "Alan Jacob, Ailson e Acácio", trabalho: "A confirmar", local: "A confirmar" },
    { turma: "3º Agro C", orientador: "Melquisedeque", trabalho: "Exposição de maquetes", local: "Sala 3" },
    { turma: "3º MSI", orientador: "Silbene, Thiago e Gustavo", trabalho: "Poesia compilada", local: "A definir" }
  ],

  mostraOutras: [
    { atividade: "Laboratório de Biologia", responsavel: "Simoni Anese", descricao: "Apresentação do Laboratório de Biologia", local: "Laboratório de Biologia" },
    { atividade: "Espaço de Zootecnia", responsavel: "Quézia", descricao: "Apresentação do espaço de Zootecnia", local: "Espaço de Zootecnia" },
    { atividade: "Trabalhos de Linguagens – 1º anos", responsavel: "Aline Moraes", descricao: "Exposição de trabalhos desenvolvidos nas disciplinas de Linguagens", local: "Sala 22" },
    { atividade: "Ditadura e questões raciais", responsavel: "Rafael, Alexandre e Gisele", descricao: "Exposição de trabalhos sobre ditadura e questões raciais", local: "Corredor / Hall de entrada" },
    { atividade: "Laboratório de Solos", responsavel: "Daniel Valadão", descricao: "Apresentação do Laboratório de Solos", local: "Laboratório de Solos" },
    { atividade: "Laboratório de Microbiologia", responsavel: "Clara Suprani", descricao: "Apresentação do Laboratório de Microbiologia", local: "Laboratório de Microbiologia" },
    { atividade: "Exposição sobre Petróleo", responsavel: "Aline Magela, Dham", descricao: "Trabalhos das turmas de 2º ano EMI", local: "Corredor / Hall de entrada (TV e mesa para exposição)" }
  ],

  /* ---------- BANNERS APROVADOS (Sapezal) ----------
     Os trabalhos aparecem agrupados por eixo e em ordem alfabética de título.
     Exemplo de item (orientador é opcional):
     { eixo: "Eixo Temático 01 – Ensino", titulo: "Título do trabalho", autores: "Nome 1, Nome 2", orientador: "Nome" },
  */
  banners: [
    { eixo: "Eixo Temático 01 – Ensino", titulo: "AUSÊNCIA DE ALUMÍNIO TROCÁVEL E NECESSIDADE CALCULADA DE CALAGEM EM SOLO DE VEGETAÇÃO NATIVA", autores: "Maria de Lourdes Andrade Lima, Gilson de Souza Floriano, Renan da Silva Lima, Gustavo Joaquim Ferreira Grava, Guilherme Dos Santos Martins, William Fernandes de Além, Lucas Antonio Zanoni" },
    { eixo: "Eixo Temático 01 – Ensino", titulo: "EVOLUÇÃO DO CONTROLE QUÍMICO DA MANCHA-DE-RAMULÁRIA NO ALGODOEIRO", autores: "Maria de Lourdes Andrade Lima, Gilson de Souza Floriano, Renan da Silva Lima, Gustavo Joaquim Ferreira Grava, Guilherme Dos Santos Martins, William Fernandes de Além, Lucas Antonio Zanoni" },
    { eixo: "Eixo Temático 02 – Inovação Tecnológica e Transferência de Tecnologia", titulo: "VISÃO COMPUTACIONAL APLICADA AO DIAGNÓSTICO FITOSSANITÁRIO: DESAFIOS NA IDENTIFICAÇÃO DE APHELENCHOIDES BESSEYI VIA DEEP LEARNING", autores: "Edyane Luiza Pires Franco" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "avaliacao de fertilidade", autores: "Felipe Augusto de Castro de Carli" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Avaliação da fertilidade do solo e recomendações de calagem", autores: "Gabriel Silva Meireles, Klécio Ramon Da Silva Santos, Maria Vanessa Leandro Rocha, Janaína Almeida Talavieira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Diagnose Nutricional do Gergelim", autores: "Cristiano Martins dos Santos, Guilherme Almeida Silva, Adriana Lopes Araújo, Alisson José Pereira, Willian Carlos dos Santos, Matheus Iuri Damo, Julio Cesar Etiene Pereira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "O DESAFIO DE PROTEGER O MILHO SEM SEU PRINCIPAL ESCUDO", autores: "Cristiano Martins dos Santos, Guilherme Almeida Silva, Adriana Lopes Araújo, Alisson José Pereira, Willian Carlos dos Santos, Matheus Iuri Damo, Julio Cesar Etiene Pereira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "importancia do tratamento de semente de algodao para controle com mela", autores: "Felipe Augusto de Castro de Carli" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Principais fungicidas para controle de Stenocarpella spp. na cultura do milho", autores: "Gabriel Silva Meireles, Ivair Daneli Júnior, Klécio Ramon Da Silva Santos, Renata Gabriely Aureliana Pedro, Maria Vanessa Leandro Rocha, Gabriela Cristina adur, Michelle dos Santos Ribeiro, Eduardo Lirio Carnelossi, Janaína Almeida Talavieira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "AGRICULTURA ORGANICA E SUA CERTIFICAÇÃO", autores: "Gustavo Henrique da Silva, Pedro Henrique De Souza Alves, Alef Nascimento Sá, Kauan Henrique Alves Matias, Wendrew Dos Santos Custódio", orientador: "Ailson Maciel de Almeida" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "FUNGICIDAS PARA MANCHA ALVO", autores: "Angela Vogt Webler, Gutemberg de Carvalho Nogueira, Claudia Matuchak, Landeir Oliveira, thales lucio rodrigues cavalcante" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "analise de solos - fertilidade", autores: "João Maria da Silva, Luclezio Carvalho Silva, Josue Pereira Alencar Madeira, Nicoly Pinto dos Santos, José Raul Rocha Da Trindade, Gabrielle Dos Santos Tenorio" }
  ],

  /* ---------- PITCH VIRTUAL APROVADOS ----------
     Exemplo de item (o link do vídeo é opcional):
     { titulo: "Título do trabalho", autores: "Nome 1, Nome 2", orientador: "Nome", link: "https://..." },
  */
  pitch: [],

  /* ---------- COMUNICAÇÃO ORAL ----------
     Exemplo de item:
     { dia: "18 de novembro", hora: "20h20", sala: "Sala 5", titulo: "Título do trabalho", autores: "Nome 1, Nome 2", formato: "Presencial" },
  */
  comunicacao: []
};
