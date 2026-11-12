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
     Exemplo de item:
     { titulo: "Título do trabalho", autores: "Nome 1, Nome 2", orientador: "Nome", local: "Sapezal – Sala X" },
  */
  banners: [],

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
