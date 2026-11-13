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
            { hora: "19h30", titulo: "Exposições", link: "#exposicoes" },
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
            { hora: "14h", titulo: "Exibição dos Pitches nas redes sociais e apresentação de trabalhos remotos" }
          ]
        },
        {
          turno: "Noite",
          atividades: [
            { hora: "19h", titulo: "Exposições", link: "#exposicoes" },
            { hora: "20h", titulo: "Comunicação Oral", link: "#comunicacao-oral" }
          ]
        }
      ]
    }
  ],

  /* ---------- EXPOSIÇÕES (programação noturna) ----------
     Cada dia tem suas exposições; cada exposição pode ter trabalhos.
     Na equipe, escreva cada pessoa como "Nome (Função)".
     Funções com "Orientador" ou "Coorientador" aparecem em "Orientação".
  */
  exposicoes: [
    {
      dia: "18 de novembro", semana: "Quarta-feira", hora: "19h30",
      itens: [
        { nome: "Exposição IDEAHUB", trabalhos: [] },
        {
          nome: "Exposição Hidroponia",
          trabalhos: [
            {
              titulo: "Sistema de gotejamento em vaso",
              equipe: [
                "Juliana Maria Froelich (Autor)",
                "José Antonio de Assis Silva (Autor correspondente)",
                "Victor Vivian Dal Molin (Autor)",
                "Raíssa Ferreira Acco (Autor)"
              ]
            },
            {
              titulo: "Construção de um modelo caseiro de aeroponia",
              equipe: [
                "Camilly de Liz Mengarda (Autor correspondente)",
                "Mariana Macedo de Holanda (Autor)",
                "Ellen Beatriz dos Santos Barbosa (Autor)"
              ]
            },
            {
              titulo: "Hidroponia e cultivos protegidos: demonstração do cultivo pelo método de pavio",
              equipe: [
                "Isabely Furtado Augusto de Melo (Autor)",
                "Emily Tainá da Silva Teixeira (Autor)",
                "Valdir Casali Neto (Autor correspondente)",
                "Sabrina Tavares Faria (Autor)"
              ]
            },
            {
              titulo: "Cultivo hidropônico pelo sistema de raiz flutuante: funcionamento e aplicações",
              equipe: [
                "Luis Otávio Cavicchioli Sgobi (Autor)",
                "Diego Amaral França (Autor)",
                "Bernardo Nespoldo Zaminhan (Autor)",
                "Gustavo Delazeri Assunçao (Autor correspondente)",
                "João Pedro Thomaz Pereira (Autor)"
              ]
            }
          ]
        }
      ]
    },
    {
      dia: "19 de novembro", semana: "Quinta-feira", hora: "19h",
      itens: [
        {
          nome: "Exposição Microbiologia",
          trabalhos: [
            {
              titulo: "Avaliação da produção de enzimas por diferentes fungos isolados de sementes de soja",
              equipe: [
                "Clara Suprani Marques (Orientador; autor correspondente)",
                "Ricardo Marques Macedo (Coorientador)",
                "Verônica Cristina Biolchi (Autor)",
                "Karleide Lima Oliveira (Autor)",
                "José Kauan Max da Silva (Autor)",
                "Thayna Barboza Cavalcante (Autor)",
                "Cristian Miguel Vorpagel Erbice (Autor)",
                "Dielson Santana Santos (Autor)",
                "Renick Iuri de Souza Francisco (Autor)",
                "Izaque Marcelino Pereira (Autor)",
                "Deoclecio Bruno dos Santos (Autor)",
                "Jeniffer Danielle da Silva (Autor)",
                "Helder Pereira dos Santos (Autor)"
              ]
            }
          ]
        },
        {
          nome: "Exposição de Novos Produtos",
          trabalhos: [
            {
              titulo: "Iogurte com caramelo de baru: inovação e valorização de matéria-prima regional",
              equipe: [
                "Adolfo Vicente Araujo (Orientador)",
                "Clara Suprani Marques (Orientador)",
                "Gabriela Fontes Alvarenga (Coorientador)",
                "Lucas Batista da Silva (Autor)",
                "Maria Dayane Tributino Pereira (Autor)",
                "Vithória Maria Gomes da Silva (Autor correspondente)",
                "Pedro Antonio de Araujo Silva (Autor)",
                "Jucieli da Silva Sousa (Autor)"
              ]
            },
            {
              titulo: "Doce de uva em barra com sementes de chia: Roxinho da terra",
              equipe: [
                "Antonia Angetina da Silva Sousa (Autor)",
                "Milka Aveline dos Santos (Autor correspondente)",
                "Maria Roberta de Oliveira Pereira (Autor)",
                "Bruno Pinto (Autor)",
                "Vilani Maria Barbosa Armini (Autor)",
                "Dhiego Alves da Silva Francelino (Autor)"
              ]
            }
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
    { atividade: "Exposição sobre Petróleo", responsavel: "Aline Magela, Dham", descricao: "Trabalhos das turmas de 2º ano EMI", local: "Corredor / Hall de entrada (TV e mesa para exposição)" },
    { atividade: "Indicadores naturais de pH", responsavel: "Dham", descricao: "Apresentação demonstrativa de indicadores de pH", local: "Laboratório de Química" }
  ],

  /* ---------- BANNERS APROVADOS (Sapezal) ----------
     Os trabalhos aparecem agrupados por eixo e em ordem alfabética de título.
     Exemplo de item (orientador é opcional):
     { eixo: "Eixo Temático 01 – Ensino", titulo: "Título do trabalho", autores: "Nome 1, Nome 2", orientador: "Nome" },
  */
  banners: [
    { eixo: "Eixo Temático 01 – Ensino", titulo: "AUSÊNCIA DE ALUMÍNIO TROCÁVEL E NECESSIDADE CALCULADA DE CALAGEM EM SOLO DE VEGETAÇÃO NATIVA", autores: "Maria de Lourdes Andrade Lima, Gilson de Souza Floriano, Renan da Silva Lima, Gustavo Joaquim Ferreira Grava, Guilherme dos Santos Martins, William Fernandes de Além, Lucas Antonio Zanoni" },
    { eixo: "Eixo Temático 01 – Ensino", titulo: "EVOLUÇÃO DO CONTROLE QUÍMICO DA MANCHA-DE-RAMULÁRIA NO ALGODOEIRO", autores: "Maria de Lourdes Andrade Lima, Gilson de Souza Floriano, Renan da Silva Lima, Gustavo Joaquim Ferreira Grava, Guilherme dos Santos Martins, William Fernandes de Além, Lucas Antonio Zanoni" },
    { eixo: "Eixo Temático 02 – Inovação Tecnológica e Transferência de Tecnologia", titulo: "VISÃO COMPUTACIONAL APLICADA AO DIAGNÓSTICO FITOSSANITÁRIO: DESAFIOS NA IDENTIFICAÇÃO DE APHELENCHOIDES BESSEYI VIA DEEP LEARNING", autores: "Edyane Luiza Pires Franco" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "avaliacao de fertilidade", autores: "Felipe Augusto de Castro de Carli" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Avaliação da fertilidade do solo e recomendações de calagem", autores: "Gabriel Silva Meireles, Klécio Ramon da Silva Santos, Maria Vanessa Leandro Rocha, Janaína Almeida Talavieira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Diagnose Nutricional do Gergelim", autores: "Cristiano Martins dos Santos, Guilherme Almeida Silva, Adriana Lopes Araújo, Alisson José Pereira, Willian Carlos dos Santos, Matheus Iuri Damo, Julio Cesar Etiene Pereira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "O DESAFIO DE PROTEGER O MILHO SEM SEU PRINCIPAL ESCUDO", autores: "Cristiano Martins dos Santos, Guilherme Almeida Silva, Adriana Lopes Araújo, Alisson José Pereira, Willian Carlos dos Santos, Matheus Iuri Damo, Julio Cesar Etiene Pereira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "importancia do tratamento de semente de algodao para controle com mela", autores: "Felipe Augusto de Castro de Carli" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Principais fungicidas para controle de Stenocarpella spp. na cultura do milho", autores: "Gabriel Silva Meireles, Ivair Daneli Júnior, Klécio Ramon da Silva Santos, Renata Gabriely Aureliana Pedro, Maria Vanessa Leandro Rocha, Gabriela Cristina Adur, Michelle dos Santos Ribeiro, Eduardo Lirio Carnelossi, Janaína Almeida Talavieira" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "AGRICULTURA ORGANICA E SUA CERTIFICAÇÃO", autores: "Gustavo Henrique da Silva, Pedro Henrique de Souza Alves, Alef Nascimento Sá, Kauan Henrique Alves Matias, Wendrew dos Santos Custódio", orientador: "Ailson Maciel de Almeida" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "FUNGICIDAS PARA MANCHA ALVO", autores: "Angela Vogt Webler, Gutemberg de Carvalho Nogueira, Claudia Matuchak, Landeir Oliveira, Thales Lucio Rodrigues Cavalcante" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "analise de solos - fertilidade", autores: "João Maria da Silva, Luclezio Carvalho Silva, Josue Pereira Alencar Madeira, Nicoly Pinto dos Santos, José Raul Rocha da Trindade, Gabrielle dos Santos Tenorio" }
  ],

  /* ---------- PITCH VIRTUAL APROVADOS ----------
     Os trabalhos aparecem agrupados por eixo e em ordem alfabética de título.
     Exemplo de item (orientador e link do vídeo são opcionais):
     { eixo: "Eixo Temático 01 – Ensino", titulo: "Título", autores: "Nome 1, Nome 2", orientador: "Nome", link: "https://..." },
  */
  pitch: [
    { eixo: "Eixo Temático 01 – Ensino", titulo: "AGRICULTURA BIODINÂMIA: PRINCÍPIOS, PRÁTICAS E CONTRIBUIÇÕES PARA A SUSTENTABILIDADE AGRÍCOLA", autores: "Beatriz Stell Silveira, Williams Augusto Dias dos Santos, Lucas Scholl Bazila, Adrian da Silva Araújo", orientador: "Ailson Maciel de Almeida" },
    { eixo: "Eixo Temático 01 – Ensino", titulo: "cancro cítrico – fitopatologia 1", autores: "Alessandra da Luz Momesso, Renata Luisa Hanauer" },
    { eixo: "Eixo Temático 01 – Ensino", titulo: "PODRIDÃO-MOLE BACTERIANA EM PLANTAS CULTIVADAS: MECANISMOS DE INFECÇÃO, PERDAS E MANEJO PREVENTIVO", autores: "Elis Regina Paz, Francisca Emanuele da Silva Lima, Maria Fernanda de Souza Miranda, Sabrina Minosso Goncalves, Geovanna Aparecida Vieira Zaquel", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 02 – Inovação Tecnológica e Transferência de Tecnologia", titulo: "ANÁLISE DA DISTRIBUIÇÃO ESPACIAL DAS PRAÇAS E DAS ÁREAS ATENDIDAS NO BAIRRO BOA ESPERANÇA POR MEIO DE GEOPROCESSAMENTO", autores: "Gustavo Henrique da Silva, Alef Nascimento Sá, Wendrew dos Santos Custódio", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "MICRORGANISMOS DO SOLO E DA RIZOSFERA COMO ALIADOS NO CONTROLE NATURAL DE FUNGOS FITOPATOGÊNICOS", autores: "Maria Eduarda Macedo de Souza, Analia Laconi Victor Martins, Alan Gomes Sena, Joao Pedro Martinello", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "DINÂMICA DA UMIDADE DOS GRÃOS E DANOS DE PRÉ-COLHEITA NA SOJA", autores: "José Angelo Sarturi, Otavio Augusto Mansur Schimith, Maria Cláudia da Silva Sousa, Heitor Lorenzetti, Victor Vivian Dal Molin" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "POTENCIAL DE FUNGO DO GÊNERO TRICHODERMA NO CONTROLE BIOLÓGICO DE FUNGOS FITOPATOGÊNICOS", autores: "Taynan Luchezi, Thaina Lopes Cançado, Ayumi Horie Rocha de Aguiar, Damylly Iara Tiazokamae" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Índice de vegetação e acesso a praças e bairros", autores: "Maria Eduarda Macedo de Souza, Vitoria de Moraes Santos, Luis Felipe Felix Francisco", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "ACESSIBILIDADE E DISTRIBUIÇÃO DAS ÁREAS VERDES NO BAIRRO ALVORADA, EM CAMPO NOVO DO PARECIS – MATO GROSSO", autores: "Gustavo Gomes dos Santos, Raíssa Ferreira Prinou, Beatriz Stell Silveira", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "ÓLEOS ESSENCIAIS NO CONTROLE DE FUNGOS FITOPATOGÊNICOS: MECANISMOS DE AÇÃO, EFICÁCIA E LIMITAÇÕES", autores: "Gustavo Gomes dos Santos, Raíssa Ferreira Prinou, Leonardo Pereira de Oliveira, Beatriz Stell Silveira", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "ÓLEOS ESSENCIAIS DE AÇAFRÃO-DA-TERRA NO CONTROLE DE FUNGOS FITOPATOGÊNICOS: MECANISMOS DE AÇÃO, EFICÁCIA E LIMITAÇÕES", autores: "Gustavo Henrique da Silva, Pedro Henrique de Souza Alves, Alef Nascimento Sá, Kauan Henrique Alves Matias, Wendrew dos Santos Custódio", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "SISTEMAS AGROFLORESTAIS E SISTEMAS INTEGRADOS DE PRODUÇÃO AGROPECUÁRIA", autores: "Guilherme Bento Silva, Felipe Santos Santiago, Ailson Maciel de Almeida, Lorenzo Gabriel Melo Dellazen, Victória Caroline Mercado Moraes, Benedito Paloco Neto" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "USO DE BACTÉRIAS BENÉFICAS DO GÊNERO BACILLUS NO CONTROLE NATURAL DE DOENÇAS FÚNGICAS EM PLANTAS", autores: "Felipe Santos Santiago, Lorenzo Gabriel Melo Dellazen, Amanda Thays Krilow Schmitt, Victória Caroline Mercado Moraes, Benedito Paloco Neto", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "MANCHA BACTERIANA: DIVERSIDADE DOS AGENTES CAUSAIS, SOBREVIVÊNCIA NO SOLO E DESAFIOS DE CONTROLE", autores: "Matheus Alves Malgarize, Igor Tataira de Andrade, Gabriel Benites de Oliveira, Welitton Ferreira de Souza, Gabriel Alessi Silveira", orientador: "Amanda Ferreira da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "ARBORIZAÇÃO NO JARDIM EUROPA: ÁREAS COM VERDE E ÁREAS SEM ACESSO A ELE", autores: "Pedro Henrique de Souza Alves, Igor Oliveira Goudinho, Kauan Henrique Alves Matias", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "HELICOVERPA ARMIGERA – MIP", autores: "João Maria da Silva, Luclezio Carvalho Silva, Josue Pereira Alencar Madeira, Nicoly Pinto dos Santos, Gabrielle dos Santos Tenorio" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "PRÁTICAS CULTURAIS NO MANEJO DE DOENÇAS FÚNGICAS: CONTRIBUIÇÕES PARA A REDUÇÃO DO USO DE FUNGICIDAS", autores: "Kaique da Silva Brasil, João Victor de Souza, Northon Tenorio Cavalcante, Valdir Casali Neto" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "Controle Biológico de Doença Bacterianas de Plantas: Potencial de Microorganismos, Beneficios e Limitações de Aplicação", autores: "Guilherme do Amaral Pietsch, Mateus Luiz Marchezan, Diego Amaral França, Kawan Rodrigo Mendes da Silva" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "METABÓLITOS SECUNDÁRIOS DE PSEUDOMONAS AERUGINOSA CEPLA LV REDUZEM A SEVERIDADE DA FERRUGEM ASIÁTICA DA SOJA EM PLANTAS INFECTADAS EXPERIMENTALMENTE", autores: "Joyce Fernanda de Almeida, Éllendyane Forte Faria, Débora Eloiza da Silva Xavier, Amanda Francisca dos Santos Costa, Bruno Mateus Pazuch" },
    { eixo: "Eixo Temático 03 – Agrícola e Agronegócio", titulo: "COMBINAÇÃO DE AGENTES DE BIOCONTROLE COM FUNGICIDAS QUÍMICOS NO CONTROLE INTEGRADO DE DOENÇAS FÚNGICAS EM PLANTAS", autores: "Lyandra Cristina Cristo Martins" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "ANÁLISE DA VEGETAÇÃO E DA PROXIMIDADE DE ESPAÇOS PÚBLICOS NO BAIRRO OLENKA, CAMPO NOVO DO PARECIS – MT", autores: "Williams Augusto Dias dos Santos, Adrian da Silva Araújo, Lorenzo Gabriel Melo Dellazen" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "ANÁLISE DA VEGETAÇÃO E DA ACESSIBILIDADE A ÁREAS VERDES NO BAIRRO JARDIM DAS PALMEIRAS, EM CAMPO NOVO DO PARECIS – MT", autores: "Lucas Scholl Bazila, Leonardo Dallazen Pontes, Victória Caroline Mercado Moraes", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "ACESSO A PRAÇAS E PARQUES, E ARBORIZAÇÃO NO BAIRRO NOSSA SENHORA EM CAMPO NOVO DO PARECIS", autores: "Luana Cristina Mori Peruzzo, Igor Tataira de Andrade, Kaique da Silva Brasil", orientador: "Acacio Perboni" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "DOENÇAS CAUSADAS POR PSEUDOMONAS SYRINGAE: MECANISMOS DE PATOGENICIDADE, DIAGNÓSTICO E MANEJO", autores: "Eloá Kauani da Costa Trezzi, Anna Mayumi Lellis Utida, Ághata Guimarães da Silva, Bianca Lima da Cruz, Heloisa Gomes Rosa" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "ÍNDICE DE VEGETAÇÃO BAIRRO GIRASSOL", autores: "Guilherme Bento Silva, Felipe Santos Santiago, Benedito Paloco Neto" },
    { eixo: "Eixo Temático 04 – Outros", titulo: "ÍNDICE DE VEGETAÇÃO E ACESSO ÀS PRAÇAS DO BAIRRO ITÁLIA", autores: "Eluíza Soares Lauersdorf" }
  ],

  /* ---------- COMUNICAÇÃO ORAL ----------
     Exemplo de item:
     { dia: "18 de novembro", hora: "20h20", sala: "Sala 5", titulo: "Título do trabalho", autores: "Nome 1, Nome 2", formato: "Presencial" },
  */
  comunicacao: []
};
