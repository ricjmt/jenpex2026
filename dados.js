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
            { hora: "20h20", titulo: "Comunicação Oral", detalhe: "Polo JP – salas 1 a 4", link: "#comunicacao-oral" }
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
            { hora: "20h", titulo: "Comunicação Oral", detalhe: "Polo JP – salas 1 a 4", link: "#comunicacao-oral" }
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

  /* ---------- COMUNICAÇÃO ORAL (ensalamento) ----------
     Polo JP, salas 1 a 4. Estrutura: dias → salas → trabalhos.
     Orientador e coorientador são opcionais; "eixo" no trabalho
     só é usado quando a sala reúne mais de um eixo.
  */
  comunicacaoInfo: "As comunicações orais acontecem nas salas 1 a 4 do Polo JP, em sessões simultâneas organizadas por eixo temático. Cada trabalho tem 15 minutos: 10 para a apresentação e 5 para a arguição.",
  comunicacao: [
    {
      dia: "18 de novembro",
      semana: "Quarta-feira",
      salas: [
        {
          sala: "Sala 1",
          eixo: "Eixo 01 – Ensino",
          trabalhos: [
            {
              hora: "20h20",
              titulo: "Desenvolvimento profissional docente",
              orientador: "Vera Cristina de Quadros",
              autores: "Fernanda Chagas Ferreira, Taina Malheiro Alves, Keylla Silva de Oliveira, Jhonata Cosmo dos Santos"
            },
            {
              hora: "20h35",
              titulo: "Uma reflexão sobre a tradução da linguagem matemática para a Libras",
              orientador: "Ricardo Marques Macedo",
              autores: "Taina Malheiro Alves, Keylla Silva de Oliveira, Jhonata Cosmo dos Santos"
            },
            {
              hora: "20h50",
              titulo: "Ensino de Matemática e uma proposta de aula sob uma perspectiva antirracista",
              orientador: "Rafael Adão",
              autores: "Maria Marlene, Josmael Silva Costa, Gabriel Morais Souza Carvalho"
            },
            {
              hora: "21h05",
              titulo: "RPG matemático: narrativas imersivas como estratégia pedagógica para o ensino de Matemática nos anos iniciais",
              orientador: "Paula Torres Fernandes",
              autores: "Halyson Manosso, Simone Cristiane Cattaneo, Consuelo Lima da Silva"
            },
            {
              hora: "21h20",
              titulo: "Sementes crioulas e conservação da agrobiodiversidade",
              autores: "Maria Vitória da Conceição Nunes dos Santos, Matheus Alves Malgarize, Nayara Sbabo, Marcelo Augusto Behling de Andrade, Djalma Vicente Gomes Netto, Laura Eduarda da Costa Neves, João Lucas Gonçalves Waltrick"
            },
            {
              hora: "21h35",
              titulo: "Contagem de pessoas em tempo real com visão computacional em Python: projeto de ensino na educação profissional",
              orientador: "Adolfo Vicente Araujo",
              autores: "Gustavo Alves do Nascimento, Thiago Jose Vilas Boas Souza"
            },
            {
              hora: "21h50",
              titulo: "Apoio escolar: regência e monitoria em uma perspectiva lúdica de ensino-aprendizagem da Matemática",
              orientador: "Vera Cristina de Quadros",
              coorientador: "Guilherme de Lima Farias",
              autores: "Marcos Gilberto Cavalcante Alves Rodrigues, Luclecio Araujo Alves, Jhonata Cosmo dos Santos, Keylla Silva de Oliveira, Taina Malheiro Alves, Kaandra Carvalho Schauren"
            }
          ],
          horario: "20h20 às 22h05",
          responsavel: "Rafael Adão"
        },
        {
          sala: "Sala 2",
          eixo: "Eixo 01 – Ensino",
          trabalhos: [
            {
              hora: "20h20",
              titulo: "Gincana tecnológica gamificada com ranking em tempo real: protagonismo estudantil no 1º ano do curso técnico em Manutenção e Suporte em Informática",
              orientador: "Adolfo Vicente Araujo",
              autores: "Elvira de Avila del Barco Santos, Fernando Lucas Menim Perez Filho, Luiz Antonio Andrade Silva Nunes, Gustavo Alves do Nascimento, Thiago Jose Vilas Boas Souza"
            },
            {
              hora: "20h35",
              titulo: "Mesa interativa de reconhecimento de objetos com inteligência artificial: aprendizagem de visão computacional no ensino técnico em Informática",
              orientador: "Adolfo Vicente Araujo",
              autores: "Elvira de Avila del Barco Santos, Fernando Lucas Menim Perez Filho, Luiz Antonio Andrade Silva Nunes, Gustavo Alves do Nascimento, Thiago Jose Vilas Boas Souza"
            },
            {
              hora: "20h50",
              titulo: "Oficinas de Matemática no ensino médio: experiências e reflexões na formação docente",
              orientador: "Tania de Souza Oliveira",
              autores: "Milena Lopes Krein, Rafaela dos Santos Leite"
            },
            {
              hora: "21h05",
              titulo: "Projeto de extensão Matemática sem Segredos: uma análise das expectativas e avaliações dos professores participantes",
              orientador: "Tania de Souza Oliveira",
              coorientador: "Vera Cristina de Quadros",
              autores: "Marcos Gilberto Cavalcante Alves Rodrigues, Jhonata Cosmo dos Santos, Keylla Silva de Oliveira, Taina Malheiro Alves"
            },
            {
              hora: "21h20",
              titulo: "Discalculia: quando a dificuldade em aprender Matemática é um “transtorno”",
              autores: "Leticia Pereira"
            },
            {
              hora: "21h35",
              titulo: "Resumo de como utilizar as ferramentas para coleta de solos",
              autores: "Maria de Lourdes Andrade Lima, Ivair Daneli Júnior, Michelle dos Santos Ribeiro, Eduardo Lirio Carnelossi"
            },
            {
              hora: "21h50",
              titulo: "Modelagem matemática do crescimento populacional do município de Campo Novo do Parecis, Mato Grosso",
              orientador: "Marcio Tadeu Vione",
              autores: "Milena Lopes Krein, Rafaela dos Santos Leite"
            }
          ],
          horario: "20h20 às 22h05",
          responsavel: "Letícia Pereira"
        },
        {
          sala: "Sala 3",
          eixo: "Eixos 03 – Agrícola e Agronegócio e 04 – Outros",
          trabalhos: [
            {
              hora: "20h20",
              titulo: "Gestão de pessoas e liderança em propriedades rurais de Campo Novo do Parecis-MT",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Jefferson Davi Ferreira dos Santos",
              autores: "Felipe Santos Santiago, Phablo Henrique Fortes"
            },
            {
              hora: "20h35",
              titulo: "Diagnóstico financeiro – La Belles",
              eixo: "Eixo 04 – Outros",
              autores: "Simone da Silva Clemente, Dayanne Jouse Santos Fernandes, Maria Eduarda Gonçalves Costa, Maria Rafaela da Silva"
            },
            {
              hora: "20h50",
              titulo: "Sucessão familiar e governança rural no município de Campo Novo do Parecis-MT",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Jefferson Davi Ferreira dos Santos",
              autores: "Analia Laconi Victor Martins, Maria Eduarda Mendes Lampert"
            },
            {
              hora: "21h05",
              titulo: "Relatório Fitotecnia 1",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Luis Otávio Cavicchioli Sgobi, Bruno Neves Barros",
              autores: "João Felipe Tataíra Silva, André Rafael Siqueira Corrêa, Sabrina Araldi do Prado"
            },
            {
              hora: "21h20",
              titulo: "Maturação desuniforme e interferência de plantas daninhas de final de ciclo na cultura da soja",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              autores: "Milena Fronha Marques, Mariana Vilasbôas Both, Ezequiel Matheus Brugnera Milani, Juliana Matos de Oliveira, Welberton Vittorazzi Candido do Nascimento, Larissa Stell Silveira"
            },
            {
              hora: "21h35",
              titulo: "Planejamento de safra e tomada de decisão",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Jefferson Davi Ferreira dos Santos",
              autores: "Joyce Fernanda de Almeida, Zilda Tureta Batista Silva"
            },
            {
              hora: "21h50",
              titulo: "Gestão financeira e controle dos custos de produção em propriedades rurais de Campo Novo do Parecis-MT",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Jefferson Davi Ferreira dos Santos",
              autores: "Milena Fronha Marques, Juliana Matos de Oliveira"
            }
          ],
          horario: "20h20 às 22h05",
          responsavel: "Jefferson Davi Ferreira dos Santos"
        },
        {
          sala: "Sala 4",
          eixo: "Eixos 04 – Outros e 03 – Agrícola e Agronegócio",
          trabalhos: [
            {
              hora: "20h20",
              titulo: "Dinâmica da formação de preços no setor de lanchonetes em Campo Novo do Parecis-MT",
              eixo: "Eixo 04 – Outros",
              orientador: "Lorena Gomes dos Santos",
              autores: "Amanda Vitoria da Silva Roberto, Maria Clara Silva dos Santos"
            },
            {
              hora: "20h35",
              titulo: "Tendências tecnológicas para produção de aves e suínos no Brasil versus desafios da sanidade animal",
              eixo: "Eixo 03 – Agrícola e Agronegócio",
              orientador: "Ailson Maciel de Almeida",
              autores: "Milena Fronha Marques, Juliana Matos de Oliveira, Heitor Lorenzetti, Welberton Vittorazzi Candido do Nascimento"
            },
            {
              hora: "20h50",
              titulo: "JENPEX",
              eixo: "Eixo 04 – Outros",
              autores: "Natallia Ritielle de Lima Santos, Aline Fraga Reis da Silva, Mirella Camila dos Santos Silva, Elaine Ortiz Anastacio"
            },
            {
              hora: "21h05",
              titulo: "Preço justo: a economia do dia a dia no comércio de vestuário em Campo Novo do Parecis",
              eixo: "Eixo 04 – Outros",
              autores: "Jadrielly Almeida dos Santos, Eberth Hiago do Nascimento Lins, Gustavo Bortolini dos Santos"
            },
            {
              hora: "21h20",
              titulo: "Diagnóstico financeiro de construtora microempresa (ME): análise de fluxo de caixa, mão de obra e capital de giro na construção civil",
              eixo: "Eixo 04 – Outros",
              autores: "Bárbara Natália Ricardo de Meneses, Jayane Ramos de Lima, Jhonny Santana da Silva, Juvenilio Ferreira Gomes Neto"
            },
            {
              hora: "21h35",
              titulo: "Mini consultoria: gestão financeira e orçamentária e marketing estratégico",
              eixo: "Eixo 04 – Outros",
              autores: "Josiane Pereira de Souza, Lincoln dos Santos Braga"
            },
            {
              hora: "21h50",
              titulo: "Preço justo",
              eixo: "Eixo 04 – Outros",
              autores: "Maria Eduarda Franco de Oliveira Bilibio, Vitor Daniel Vidal Cristalino, Jonas Santos de Oliveira"
            }
          ],
          horario: "20h20 às 22h05",
          responsavel: "Vanessa Polli"
        }
      ],
      inicio: "20h20"
    },
    {
      dia: "19 de novembro",
      semana: "Quinta-feira",
      salas: [
        {
          sala: "Sala 1",
          eixo: "Eixo 01 – Ensino",
          trabalhos: [
            {
              hora: "20h",
              titulo: "Uma experiência de pesquisa estatística nas aulas de Matemática no âmbito do IFMT-CNP acerca da rotina de estudo dos estudantes do ensino médio",
              autores: "Felipe Moraes Kurtz, Luana Ramos Belandi, Marieler Edwirgen Justino Gomes, Annelize Martins de Sousa"
            },
            {
              hora: "20h15",
              titulo: "Poesia compilada: escrita poética em Python, Tkinter e tecnologias front-end (HTML, CSS e JavaScript) como prática interdisciplinar no ensino técnico integrado em Informática",
              autores: "Thiago Jose Vilas Boas Souza, Silbene Rosa Paoliello"
            },
            {
              hora: "20h30",
              titulo: "Leitura e interpretação de enunciados de problemas matemáticos: contribuições da Língua Portuguesa para a formação do professor de Matemática",
              orientador: "Ricardo Marques Macedo",
              autores: "Maria Marlene, Josmael Silva Costa, Gabriel Morais Souza Carvalho"
            },
            {
              hora: "20h45",
              titulo: "Escape room educacional: protagonismo estudantil no curso técnico em Manutenção e Suporte em Informática",
              autores: "Monique Casagranda, Gustavo Alves do Nascimento"
            },
            {
              hora: "21h",
              titulo: "Extensão tecnológica para formação profissional em bioenergia",
              autores: "Tiago Alquaz Matias, Adolfo Vicente Araujo, Fernando Lucas Menim Perez Filho, Jefferson Davi Ferreira dos Santos, Luiz Antonio Andrade Silva Nunes, Luana Gabrand Fernandes, Marcos Aurelio Bitencourt dos Santos"
            }
          ],
          horario: "20h às 21h15",
          responsavel: "Ricardo Marques Macedo"
        },
        {
          sala: "Sala 2",
          eixo: "Eixo 03 – Agrícola e Agronegócio",
          trabalhos: [
            {
              hora: "20h",
              titulo: "Polinização e conservação de insetos benéficos",
              orientador: "Ailson Maciel de Almeida",
              autores: "Maria Eduarda Macedo de Souza, Kaique da Silva Brasil, Vitoria de Moraes Santos, Sabrina Minosso Gonçalves, Zilda Tureta Batista Silva"
            },
            {
              hora: "20h15",
              titulo: "Bioinsumos na agroecologia: alternativas sustentáveis para a produção agrícola",
              autores: "Ellen Camila Kochen"
            },
            {
              hora: "20h30",
              titulo: "Análise sensorial do café produzido na área experimental do Campus Campo Novo do Parecis do IFMT, submetido a diferentes processos de secagem e torra",
              autores: "Acacio Perboni, Líssia Leticia de Paiva Oliveira"
            },
            {
              hora: "20h45",
              titulo: "Cadeia de produção de aves em Mato Grosso: panorama, mercado e oportunidades para engenheiros agrônomos",
              autores: "Mariana Vilasbôas Both, Maria Cláudia da Silva Sousa, Maria Eduarda Mendes Lampert, Leonardo Pereira de Oliveira, Ezequiel Matheus Brugnera Milani"
            }
          ],
          horario: "20h às 21h",
          responsavel: "Aline Magela"
        },
        {
          sala: "Sala 3",
          eixo: "Eixo 03 – Agrícola e Agronegócio",
          trabalhos: [
            {
              hora: "20h",
              titulo: "Desperdício ambiental de fibra de algodão na colheita mecanizada: quantificação da pluma remanescente em Campo Novo do Parecis-MT",
              orientador: "Melkezedeque Alves Lira",
              autores: "Francyeli Celestino Aureliano, Wellisson Ryan Aureliano da Silva"
            },
            {
              hora: "20h15",
              titulo: "A evolução da suinocultura em Mato Grosso: crescimento da produção, consumo e importância econômica",
              autores: "Isabely Furtado Augusto de Melo, Gabriel Benites de Oliveira, Bruno Neves Barros, Matheus Alves Malgarize, João Felipe Tataíra Silva"
            },
            {
              hora: "20h30",
              titulo: "Ferrugem-asiática da soja no Brasil: evolução do controle químico e desafios da resistência a fungicidas",
              autores: "João Maria da Silva, Luclezio Carvalho Silva, Josue Pereira Alencar Madeira, Nicoly Pinto dos Santos, José Raul Rocha da Trindade, Gabrielle dos Santos Tenorio"
            }
          ],
          horario: "20h às 20h45",
          responsavel: "Regiane Gomes"
        },
        {
          sala: "Sala 4",
          eixo: "Eixos 02 – Inovação Tecnológica e Transferência de Tecnologia e 04 – Outros",
          trabalhos: [
            {
              hora: "20h",
              titulo: "Preço justo: a economia do dia a dia em Campo Novo do Parecis – uma análise das lojas de materiais de construção",
              eixo: "Eixo 02 – Inovação Tecnológica e Transferência de Tecnologia",
              autores: "Fernanda Feliciano de Almeida Saturnino, Dâmaris Cássia Pereira de Oliveira, Ezenira Ferreira da Luz Santos"
            },
            {
              hora: "20h15",
              titulo: "A tecnologia da informação como elemento estratégico para a gestão e o funcionamento de um campus no interior",
              eixo: "Eixo 02 – Inovação Tecnológica e Transferência de Tecnologia",
              autores: "Rafael Rodrigues Marquesi, Carlos Eduardo Welter Mombach, Marcos Aurelio Vargas, Adolfo Vicente Araujo"
            },
            {
              hora: "20h30",
              titulo: "Título preço justo",
              eixo: "Eixo 02 – Inovação Tecnológica e Transferência de Tecnologia",
              autores: "Julia Estevão Beliski, Paula Karolina dos Santos, Jhemylle Elaine Tome de Oliveira de Franca"
            },
            {
              hora: "20h45",
              titulo: "Trabalho economia",
              eixo: "Eixo 02 – Inovação Tecnológica e Transferência de Tecnologia",
              autores: "Lucas dos Santos Clemente, Ivanildo da Silva Pascoal, Rian Dantas Lima"
            },
            {
              hora: "21h",
              titulo: "Preço justo, a economia do dia a dia em CNP, agronegócio e economia local",
              eixo: "Eixo 04 – Outros",
              autores: "Willian Matheus da Silva Dias, Hevillyn Milhomem de Matos dos Santos, Vitor Hugo Henik, Kawana de Almeida Carvalho"
            }
          ],
          horario: "20h às 21h15",
          responsavel: "Adolfo Vicente Araujo"
        }
      ],
      inicio: "20h"
    }
  ]
};
