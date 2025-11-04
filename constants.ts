
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'informatica',
    name: 'Informática',
    decks: [
      {
        id: 'informatica-geral',
        name: 'Conceitos Gerais (4 questões)',
        cards: [
          {
            question: 'O que é um firewall?',
            answer: 'Um dispositivo de segurança de rede que monitora o tráfego de rede de entrada e saída e decide permitir ou bloquear tráfegos específicos com base em um conjunto definido de regras de segurança.'
          },
          {
            question: 'Qual a diferença entre RAM e ROM?',
            answer: 'RAM (Random Access Memory) é volátil e usada para armazenamento temporário de dados. ROM (Read-Only Memory) é não-volátil e armazena o firmware do sistema.'
          },
          {
            question: 'O que significa a sigla HTTP?',
            answer: 'Hypertext Transfer Protocol. É o protocolo usado para transferir dados pela web.'
          },
          {
            question: 'O que é um ataque de Phishing?',
            answer: 'Uma tentativa de obter informações sensíveis, como nomes de usuário, senhas e detalhes de cartão de crédito, disfarçando-se como uma entidade confiável em uma comunicação eletrônica.'
          }
        ]
      }
    ]
  },
  {
    id: 'historia-ro',
    name: 'História de Rondônia',
    decks: [
      {
        id: 'historia-ro-geral',
        name: 'História Geral (3 questões)',
        cards: [
          {
            question: 'Qual foi o principal ciclo econômico que impulsionou a ocupação de Rondônia no final do século XIX e início do XX?',
            answer: 'O ciclo da borracha, com a extração de látex das seringueiras na Floresta Amazônica.'
          },
          {
            question: 'Qual o nome da ferrovia construída para escoar a produção de borracha na região?',
            answer: 'A Estrada de Ferro Madeira-Mamoré, conhecida como "Ferrovia do Diabo" devido às dificuldades de sua construção.'
          },
          {
            question: 'Em que ano Rondônia foi elevado à categoria de Estado?',
            answer: 'Em 1982. Anteriormente, era um Território Federal desde 1943.'
          }
        ]
      }
    ]
  },
  {
    id: 'jornalismo',
    name: 'Jornalismo Específico',
    decks: [
      {
        id: 'prova-jornalismo-01',
        name: 'Prova 01 (40 questões)',
        cards: [
          {
            question: 'Segundo Galtung e Ruge, qual critério de noticiabilidade envolve a relevância e proximidade cultural de um fato?',
            answer: 'O critério da "Significação", que afirma que um fato se torna notícia não apenas pela proximidade geográfica, mas também por sua relevância e proximidade cultural.'
          },
          {
            question: 'Qual a principal lição do "Caso Escola Base" para a mídia?',
            answer: 'A mídia deve assumir a responsabilidade de relatar apenas fatos verificados, evitando a disseminação de informações não confirmadas para não causar danos aos envolvidos.'
          },
          {
            question: 'Segundo Adorno e Horkheimer, qual o principal efeito dos produtos da "Indústria Cultural"?',
            answer: 'A homogeneização da cultura, estimulando a alienação e a passividade nos consumidores.'
          },
          {
            question: 'Quais são as cinco categorias de valores-notícia propostas por Mauro Wolf?',
            answer: '1. Substantivas (relevância do fato), 2. Relativas ao produto (formato), 3. Relativas ao meio de informação (acessibilidade), 4. Relativas ao público (interesse), 5. Relativas à concorrência (exclusividade).'
          },
          {
            question: 'Quais são os quatro pontos de atenção ao usar IA para criar conteúdo, segundo o EducaMídia?',
            answer: '1. Desinformação (IA não garante precisão), 2. Degradação (perda de qualidade ao resumir), 3. Viés (reforço de preconceitos), e 4. Uniformização (textos padronizados sem criatividade).'
          },
          {
            question: 'O que significa a redução de "desertos de notícias", segundo o Atlas da Notícia?',
            answer: 'Significa a queda no número de municípios que não possuem nenhum veículo de jornalismo local para cobrir assuntos de interesse da comunidade.'
          },
          {
            question: 'Como a OpenAI chama as informações falsas, mas plausíveis, criadas por seus modelos de IA?',
            answer: 'São chamadas de "alucinações". A empresa alertou para o risco de uma "tempestade de desinformação" gerada por IA.'
          },
          {
            question: 'No Guia da First Draft, como é classificado o uso de humor e exagero para criticar situações reais, mesmo que possa ser mal interpretado?',
            answer: 'É classificado como "Sátira ou Paródia". O objetivo não é enganar, mas fazer uma crítica, embora haja o risco de ser confundido com um fato real.'
          },
          {
            question: 'Qual a punição prevista no Código de Ética para um jornalista que expõe indevidamente a vida privada de uma pessoa?',
            answer: 'A punição pode ser a suspensão ou exclusão do jornalista do quadro social do sindicato. O registro profissional não pode ser cassado por comissões de ética.'
          },
          {
            question: 'Como se chama o fenômeno em que algoritmos nos mostram conteúdos que confirmam nossas crenças, nos isolando de perspectivas diferentes?',
            answer: 'Bolha informacional ou câmara de eco (echo chamber).'
          },
          {
            question: 'O que popularizou o termo "interatividade" na mídia de massa no Brasil em 2002 e qual tipo de "leitura" a internet inaugurou?',
            answer: 'Os "reality shows" popularizaram o termo. A internet inaugurou a navegação por "hipertexto", rompendo com a leitura linear de jornais e revistas.'
          },
          {
            question: 'Qual NÃO é uma característica de uma boa pauta jornalística?',
            answer: 'Uma pauta não deve limitar ou engessar a apuração do repórter, ditando conclusões ou o limitando aos interesses de anunciantes.'
          },
          {
            question: 'Qual locutor esportivo brasileiro ficou conhecido como "speaker metralhadora" por sua narração rápida e pioneira no rádio?',
            answer: 'Nicolau Tuma.'
          },
          {
            question: 'Qual jornalista NÃO participou da emblemática reforma gráfica do Jornal do Brasil nos anos 1950?',
            answer: 'Vladimir Herzog. Nomes como Ferreira Gullar, Amilcar de Castro e Reynaldo Jardim participaram do projeto.'
          },
          {
            question: 'Quais as diferenças conceituais entre notícia e reportagem?',
            answer: 'Reportagem tem mais profundidade e autonomia do jornalista. A notícia preza pelo imediatismo. Uma notícia pode gerar uma reportagem, mas nem toda reportagem parte de uma notícia.'
          },
          {
            question: 'Qual característica NÃO é esperada de um texto noticioso?',
            answer: 'Verborragia (prolixidade). O texto deve ser claro, preciso, conciso e objetivo.'
          },
          {
            question: 'Qual foi um princípio fundamental na atuação de Ivy Lee, pioneiro das Relações Públicas?',
            answer: 'Estabelecer um compromisso com a confiabilidade, fornecendo notícias e respostas honestas aos jornalistas, em oposição à propaganda enganosa.'
          },
          {
            question: 'Qual a base para a construção da identidade de uma empresa?',
            answer: 'Sua missão, visão e valores. A realidade interna da empresa é o ponto de partida para a percepção de sua imagem institucional.'
          },
          {
            question: 'Segundo Philip Kotler, quais eram os focos do Marketing 1.0, 2.0 e 3.0, respectively?',
            answer: '1.0: Produto; 2.0: Consumidor; 3.0: Ser humano (valores).'
          },
          {
            question: 'Na organização de eventos, em quais fases ocorrem a "prestação de contas" e a "identificação de objetivos"?',
            answer: 'A prestação de contas ocorre no "pós-evento" e a identificação dos objetivos ocorre na "concepção".'
          },
          {
            question: 'De acordo com a teoria da Espiral do Silêncio, o que as pessoas tendem a fazer para evitar o isolamento social?',
            answer: 'Elas tendem a expressar publicamente suas opiniões quando percebem que são compartilhadas pela maioria, e a silenciar quando se sentem em minoria.'
          },
          {
            question: 'Qual a estratégia de comunicação mais eficaz para o lançamento de um produto inovador e de alto custo?',
            answer: 'Desenvolver uma narrativa forte e convincente, personalizar as mensagens para diferentes meios e construir um relacionamento de credibilidade com jornalistas-chave da área.'
          },
          {
            question: 'Qual orientação NÃO se deve dar a um assessorado para uma entrevista de TV?',
            answer: 'Usar roupas coloridas e acessórios chamativos ou uma linguagem muito rebuscada e técnica. A comunicação deve ser clara, e a informação, o foco.'
          },
          {
            question: 'Como é chamado o processo de preparação de uma fonte (porta-voz) para interagir com a imprensa?',
            answer: 'Media Training.'
          },
          {
            question: 'Como as novas tecnologias impactaram o "press release"?',
            answer: 'Ele perdeu a exclusividade de formato tradicional, passando a ser um conteúdo direto para diversas plataformas, enriquecido com elementos multimídia (vídeos, links, infográficos).'
          },
          {
            question: 'Em qual fase do planejamento estratégico de comunicação se faz o levantamento de missão, visão e valores da organização?',
            answer: 'Na Fase I: Pesquisa, mapeamento e diagnóstico.'
          },
          {
            question: 'Correlacione os formatos aos gêneros de Marques de Melo: Indicadores econômicos, Dossiê, Crônica.',
            answer: 'Indicadores econômicos: Gênero Utilitário. Dossiê: Gênero Interpretativo. Crônica: Gênero Opinativo.'
          },
          {
            question: 'Um texto que expressa a opinião institucional de um veículo de comunicação sobre um fato é classificado como qual gênero jornalístico?',
            answer: 'Editorial.'
          },
          {
            question: 'Segundo Nilson Lage, como se chama o tipo de lead que apresenta fatos em sequência até um clímax, como um pequeno conto?',
            answer: 'Lead narrativo.'
          },
          {
            question: 'Como se diferenciam os modelos de pirâmide invertida e pirâmide deitada?',
            answer: 'Na pirâmide invertida, a importância da informação decresce ao longo do texto, o que não ocorre no modelo da pirâmide deitada.'
          },
          {
            question: 'Qual fato marca o início do Jornal Nacional na TV brasileira?',
            answer: 'Sua estreia em 1969 na TV Globo, quatro anos após a fundação da emissora, sendo idealizado por Armando Nogueira.'
          },
          {
            question: 'Qual foi o primeiro canal de notícias 24 horas (all news) da TV brasileira, lançado nos anos 90?',
            answer: 'GloboNews.'
          },
          {
            question: 'Qual programa é um exemplo longevo do gênero "revista eletrônica" na TV brasileira?',
            answer: 'O Fantástico. Programas como Silvio Santos e Domingão do Faustão são do gênero "variedades".'
          },
          {
            question: 'Como deve ser o texto que acompanha as imagens em um telejornal?',
            answer: 'Deve ser claro e conciso, com frases curtas e linguagem simples, para complementar e não apenas descrever o que já está sendo visto.'
          },
          {
            question: 'Quais são os vértices do modelo de produção noticiosa "News Diamond"?',
            answer: 'Interatividade, ineditismo e crossmídia.'
          },
          {
            question: 'Qual é a característica da quarta geração do jornalismo na web?',
            answer: 'O surgimento de novas narrativas baseadas no uso intenso de recursos de interatividade, multimidialidade e personalização.'
          },
          {
            question: 'Qual jornalista dá nome ao principal prêmio de Jornalismo de Dados no Brasil?',
            answer: 'Cláudio Weber Abramo.'
          },
          {
            question: 'O que é o Jornalismo de Precisão, proposto por Philip Meyer?',
            answer: 'É a defesa do uso de métodos científicos (análise de dados) na apuração jornalística, em oposição às técnicas puramente literárias do "New Journalism".'
          },
          {
            question: 'No Jornalismo de Soluções, qual é a abordagem correta?',
            answer: 'É uma prática criteriosa focada na resposta a um problema social, explicando como funciona, suas evidências de eficácia e suas limitações, sem ser mera propaganda ou história de "heróis".'
          },
          {
            question: 'Pela metodologia do Comprova, como é classificado um conteúdo real (foto, vídeo) usado fora de seu contexto original para enganar?',
            answer: 'Enganoso. O conteúdo é autêntico, mas a forma como é apresentado (com legenda, data ou local falsos) induz a uma interpretação errada.'
          }
        ]
      },
      {
        id: 'prova-jornalismo-02',
        name: 'Prova 02 (30 questões)',
        cards: [
          {
            question: 'Segundo Mauro Wolf, em que categoria de valor-notícia se enquadra a exclusividade de uma informação (furo de reportagem)?',
            answer: 'Na categoria "Relativas à concorrência", pois se refere à capacidade de um meio de comunicação de antecipar a divulgação de uma informação.'
          },
          {
            question: 'Nos primórdios da TV brasileira, como eram chamadas as câmeras que gravavam imagens externas sem som?',
            answer: "Eram câmeras 'a corda'. A narração dos fatos era feita ao vivo no estúdio, num formato conhecido como 'rádio ilustrado'."
          },
          {
            question: 'No modelo de Comunicação Integrada de Margarida Kunsch, o que o Marketing Direto compõe?',
            answer: 'O Marketing Direto é uma das áreas ou ações que compõem a comunicação mercadológica.'
          },
          {
            question: 'Quais revistas no Brasil são exemplos históricos de "magazines" que, assim como as internacionais Life e Look, usavam a fotografia como principal atrativo?',
            answer: 'Manchete e O Cruzeiro.'
          },
          {
            question: 'Qual a principal diferença entre a pauta de uma notícia e a de uma reportagem, segundo Nilson Lage?',
            answer: 'Pautas de reportagens são mais completas, sugerindo tratamento editorial, custos e prazos, enquanto as de notícias são mais focadas no imediatismo.'
          },
          {
            question: 'Segundo Nilson Lage, uma entrevista é classificada por objetivo ou por circunstância. A "entrevista em profundidade" é classificada por qual critério?',
            answer: 'É classificada por seu OBJETIVO. Entrevistas coletivas ou ocasionais são classificadas pela CIRCUNSTÂNCIA.'
          },
          {
            question: 'Qual orientação o Manual de Redação da Folha de S. Paulo dá para a criação de títulos noticiosos?',
            answer: 'Evitar o uso de siglas pouco conhecidas e/ou mais de uma sigla no mesmo título, além de preferir a ordem direta e uma linguagem clara.'
          },
          {
            question: 'De acordo com a pesquisa da Aberje (2023), qual o canal de comunicação mais utilizado pelas empresas para se comunicar com o público EXTERNO?',
            answer: 'As redes sociais, utilizadas por 87% das empresas participantes.'
          },
          {
            question: "No seu famoso ensaio, o que Walter Benjamin analisa sobre a 'reprodutibilidade técnica' da arte?",
            answer: 'Ele discute os impactos de tecnologias como a fotografia e o cinema sobre a "aura" (autenticidade e unicidade) das obras de arte.'
          },
          {
            question: 'Como Margarida Kunsch define a comunicação interna no seu modelo de Comunicação Integrada?',
            answer: 'Como uma ferramenta estratégica para compatibilizar os interesses dos empregados e da empresa, estimulando o diálogo e a participação.'
          },
          {
            question: 'No jargão do telejornalismo, como é chamada a notícia lida pelo apresentador sem a cobertura de imagens?',
            answer: 'Nota Pelada.'
          },
          {
            question: "Qual elemento NÃO faz parte do modelo 'News Diamond' de Paul Bradshaw, que descreve as etapas de uma grande notícia?",
            answer: 'Checagem (Checking). O modelo inclui etapas como Alerta, Contexto, Interatividade e Customização, mas a checagem é um pressuposto geral, não uma etapa do diamante.'
          },
          {
            question: 'Além de se relacionar com jornalistas, qual novo papel o assessor de imprensa assumiu com o advento das mídias digitais?',
            answer: 'Passou a informar diretamente um público final mais amplo, sem a intermediação exclusiva da imprensa tradicional.'
          },
          {
            question: 'Qual das seguintes ações NÃO é considerada um atributo essencial de um bom assessor de imprensa?',
            answer: 'Distribuir brindes. As qualidades essenciais são ter acesso à direção, conhecer a empresa, conhecer a mídia e ser um mediador qualificado.'
          },
          {
            question: 'Quando é mais apropriado organizar uma entrevista coletiva?',
            answer: 'Quando há necessidade de passar informações relevantes e de interesse público imediato para jornalistas de vários veículos ao mesmo tempo.'
          },
          {
            question: 'Como se chama a atividade de monitorar sistematicamente os veículos de comunicação para identificar e organizar citações sobre uma determinada organização ou tema?',
            answer: 'Clipping.'
          },
          {
            question: "Na comunicação interna, qual 'atitude' (segundo House) corresponde a ouvir reclamações sem resistência e dar espaço para as opiniões dos funcionários?",
            answer: 'Atitude receptiva.'
          },
          {
            question: 'Na "Classificação Marques de Melo", a quais gêneros jornalísticos pertencem, respectivamente, os formatos: Perfil, Caricatura e Nota?',
            answer: 'Gênero Interpretativo, Gênero Opinativo e Gênero Informativo.'
          },
          {
            question: 'Um texto opinativo, assinado por um especialista ou personalidade, que não representa necessariamente a opinião do veículo, é um exemplo de qual gênero?',
            answer: 'Artigo.'
          },
          {
            question: "Como o IJNet descreve o papel das ferramentas de IA para jornalistas?",
            answer: "Como um recurso 'inestimável', mas que exige supervisão humana para evitar a publicação de dados imprecisos e garantir a credibilidade."
          },
          {
            question: "Segundo Nilson Lage, como é chamado o lead que organiza os elementos da notícia (quem, o que, etc.) a partir do mais importante e com uma estrutura frasal direta?",
            answer: 'Lead clássico.'
          },
          {
            question: 'Qual dos seguintes NÃO é um valor-notícia contextual (de produção) segundo Nelson Traquina?',
            answer: "Dramatização. Este é um valor-notícia de conteúdo. Critérios contextuais se referem à produção, como Disponibilidade, Visualidade e Concorrência."
          },
          {
            question: 'Qual preceito do Código de Ética do Jornalista foi violado na cobertura da morte da cantora Marília Mendonça, ao exibir imagens de seu corpo?',
            answer: 'O preceito de não divulgar imagens de caráter mórbido ou sensacionalista em cobertura de crimes e acidentes.'
          },
          {
            question: 'Se uma pesquisa revela que os cidadãos querem mais transparência e participação de uma organização pública, qual a estratégia de comunicação adequada?',
            answer: 'Implementar uma comunicação bidirecional, com informações claras e canais que incentivem a participação dos cidadãos.'
          },
          {
            question: 'De acordo com a pesquisa de tendências da Aberje (2023), qual é um dos principais desafios atuais da Comunicação Interna?',
            answer: 'Comunicar eficientemente a estratégia e a cultura da empresa aos colaboradores.'
          },
          {
            question: 'Segundo a Constituição do Estado do Tocantins, qual matéria deve ser regulada por lei complementar?',
            answer: 'Os casos de contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público.'
          },
          {
            question: 'Pelo Regimento Interno da Assembleia Legislativa do Tocantins (Aleto), para que servem os projetos de resolução?',
            answer: 'Servem para regular, com eficácia de lei ordinária, matéria de competência privativa da própria Assembleia Legislativa.'
          },
          {
            question: 'No Estatuto dos Servidores de Tocantins, qual sanção pode ser aplicada a um servidor que revela um segredo do cargo?',
            answer: 'A sanção varia conforme a gravidade, podendo ir de advertência a demissão, após processo administrativo disciplinar.'
          },
          {
            question: 'Qual é um requisito para a progressão na carreira dos servidores da Aleto, segundo a Lei nº 4.208/2023?',
            answer: 'Obter conceito igual ou superior a 70% dos pontos possíveis nos procedimentos de avaliação de desempenho.'
          },
          {
            question: 'Qual é uma das competências do Controlador Interno da Assembleia Legislativa do Tocantins?',
            answer: 'Planejar, coordenar e dirigir as atividades administrativas, orçamentárias, financeiras, de comunicação social, de T.I. e de apoio legislativo da Casa.'
          }
        ]
      }
    ]
  }
];
