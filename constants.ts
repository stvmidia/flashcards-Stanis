export const CATEGORIES = [
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
          name: 'História e Geografia de Rondônia',
          decks: [
            {
              id: 'dpe-ro-2025-hist-geo',
              name: 'Prova DPE-RO 2025 (10 questões)',
              cards: [
                {
                  question: 'No Tratado de Madri, firmado em 1750, a área de domínio da aliança luso-Tupi-Guarani se transformava em unidade reconhecida juridicamente pelo direito internacional e identificada pelo nome de Brasil. Os muitos atos tidos até a véspera como impróprios ou ilegais adquiriram o estatuto de atos fundadores do domínio jurídico. (CALDEIRA, Jorge. História da riqueza no Brasil. Rio de Janeiro: Estação Brasil, 2017. Adaptado.) O Tratado de Madri foi um marco no estabelecimento e reconhecimento formal do território brasileiro no século XVIII. É correto afirmar que o tratado:',
                  shortQuestion: "Qual a principal característica do Tratado de Madri (1750) na definição do território brasileiro?",
                  answer: 'Baseou-se na posse efetiva da terra como critério para definir os limites territoriais, consolidando a expansão portuguesa na América.',
                  alternatives: [
                    'ignorou as expedições bandeirantes e outras formas de expansão territorial, restabelecendo os antigos limites das capitanias hereditárias.',
                    'baseou-se na posse efetiva da terra como critério para definir os limites territoriais, consolidando a expansão portuguesa na América.',
                    'desconsiderou a presença dos povos indígenas e estipulou a expulsão de todas as populações nativas das áreas delimitadas.',
                    'foi firmado sob a mediação do Vaticano, que determinou as fronteiras entre Portugal e Espanha de acordo com critérios religiosos e missionários.',
                    'estabeleceu a devolução de todas as terras espanholas ocupadas por Portugal, reafirmando a validade das divisões estabelecidas no século XV.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'Segundo o antropólogo Darcy Ribeiro, a inovação do pensamento do marechal Cândido Rondon foi "o estabelecimento pioneiro do princípio, só hoje reconhecido internacionalmente, do direito à diferença". Essa afirmação se baseia:',
                  shortQuestion: "Em que se baseia a afirmação de Darcy Ribeiro de que Cândido Rondon foi pioneiro no 'direito à diferença'?",
                  answer: 'Na defesa de uma política de contato pacífico e proteção territorial dos indígenas, garantindo sua autonomia dentro do Estado brasileiro.',
                  alternatives: [
                    'na implementação de um contato progressivo com os indígenas, garantindo sua adaptação gradual à sociedade nacional por meio da introdução dos valores civilizados.',
                    'na formulação de uma política para conciliar o desenvolvimento técnico do Estado brasileiro e a mínima interação possível com os povos indígenas.',
                    'no reconhecimento da importância dos indígenas como parte da identidade nacional, impondo sua participação na construção do projeto republicano brasileiro.',
                    'na concepção de um plano de ocupação territorial da Amazônia, no qual os indígenas seriam mobilizados na integração das fronteiras ao restante do país.',
                    'na defesa de uma política de contato pacífico e proteção territorial dos indígenas, garantindo sua autonomia dentro do Estado brasileiro.'
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: 'O acoplamento entre a extração e a coagulação do látex da Hevea brasiliensis na Amazônia e a demanda crescente pelo produto devido à emergente Revolução Industrial nos EUA e na Europa Ocidental deu início ao Ciclo da Borracha. O auge desse mercado exportador ocorreu entre os anos de 1879 e 1912, quando então se iniciou sua derrocada. Entre os motivos da falência do ciclo, é correto indicar:',
                  shortQuestion: "Qual foi um dos principais motivos para a falência do Ciclo da Borracha na Amazônia?",
                  answer: 'A concorrência da borracha produzida em plantações na Ásia, onde o cultivo em larga escala reduziu os custos e suplantou o produto amazônico.',
                  alternatives: [
                    'a imposição de pesadas tarifas pelos países consumidores, tornando a exportação da borracha amazônica economicamente inviável.',
                    'o esgotamento das seringueiras na Amazônia devido à exploração predatória, que inviabilizou a continuidade da produção de borracha na região.',
                    'a concorrência da borracha produzida em plantações na Ásia, onde o cultivo em larga escala reduziu os custos e suplantou o produto amazônico.',
                    'o fim da demanda por borracha natural, substituída totalmente por polímeros sintéticos desenvolvidos no início do século XX.',
                    'a decisão protecionista do governo brasileiro de proibir a exportação da matéria-prima, priorizando o abastecimento do mercado interno.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: 'O Real Forte Príncipe da Beira foi edificado pelos portugueses às margens do Rio Guaporé no século XVIII. Situava-se na então Capitania de Mato Grosso, a oeste da demarcação do Tratado de Tordesilhas. Sua principal finalidade foi:',
                  shortQuestion: "Qual foi a principal finalidade da construção do Real Forte Príncipe da Beira no século XVIII?",
                  answer: 'Garantir a soberania portuguesa sobre a região fronteiriça e impedir avanços espanhóis, consolidando o domínio lusitano na área.',
                  alternatives: [
                    'servir como entreposto comercial para o escoamento de ouro e diamantes extraídos na região, fortalecendo a economia da colônia.',
                    'estabelecer uma missão religiosa jesuítica, com o objetivo de converter e integrar os povos amazônicos à sociedade colonial portuguesa.',
                    'proteger as fronteiras contra as incursões de corsários franceses e ingleses, que ameaçavam a soberania portuguesa na Amazônia.',
                    'garantir a soberania portuguesa sobre a região fronteiriça e impedir avanços espanhóis, consolidando o domínio lusitano na área.',
                    'controlar e fiscalizar o fluxo de escravos indígenas e africanos no interior da colônia, assegurando o abastecimento de mão de obra para as fazendas.'
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: "O Território Federal de Rondônia passou oficialmente à condição de estado em 1982. Sobre esse tema, analise os itens a seguir. I. O crescimento populacional e econômico acelerado entre as décadas de 1960 e 1980, impulsionado pela migração e pela expansão agropecuária. II. A necessidade de maior autonomia política e financeira, permitindo ao governo local arrecadar impostos e administrar melhor seus desafios. III. A estabilização ambiental e o controle da ocupação territorial na Amazônia, que garantiram um crescimento sustentável na região. Foi motivo para a emancipação de Rondônia o que se afirma em:",
                  shortQuestion: "Quais foram os motivos para a emancipação de Rondônia a estado em 1982?",
                  answer: 'Apenas os itens I e II estão corretos. O crescimento populacional/econômico e a busca por autonomia política/financeira foram os motivos para a emancipação.',
                  alternatives: [
                    'I, II e III.',
                    'I e II, apenas.',
                    'I e III, apenas.',
                    'II e III, apenas.',
                    'III, apenas.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "Com relação aos aspectos físicos da geografia do estado de Rondônia, assinale V para a afirmativa verdadeira e F para a falsa. () A maior parte do estado se encontra sobre o Planalto Residual do Guaporé, formação geológica de altitude média. () O estado abriga zonas de várzeas fluviais e baixas altitudes, como a Depressão da Amazônia Ocidental. () O norte do estado é marcado pela Serra dos Pacaás Novos, cadeia montanhosa elevada que integra um parque nacional. As afirmativas são, respectivamente,",
                  shortQuestion: "Sobre a geografia de Rondônia, qual a sequência correta de V/F para as afirmativas sobre Planalto Residual do Guaporé, várzeas fluviais e Serra dos Pacaás Novos?",
                  answer: "F-F-V. A sequência correta, de acordo com o gabarito, é Falso, Falso, Verdadeiro.",
                  alternatives: [
                    'F-V-F.',
                    'F-V-V.',
                    'V-F-F.',
                    'V-V-F.',
                    'F-F-V.'
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: "Em 2021, uma menina indígena de Rondônia ganhou notoriedade ao discursar na abertura oficial da Conferência da Cúpula do Clima (COP26), denunciando a ameaça das mudanças climáticas e o papel dos povos indígenas. Ela é uma liderança do povo:",
                  shortQuestion: "A qual povo pertence a jovem liderança indígena de Rondônia que discursou na COP26 em 2021?",
                  answer: 'Suruí.',
                  alternatives: [
                    'Suruí.',
                    'Tupari.',
                    'Jabuti.',
                    'Puruborá.',
                    "Wari'."
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: "Rondônia apresenta uma diversidade ambiental singular, marcada pela interação entre distintas formações naturais. O bioma de maior território no estado é:",
                  shortQuestion: "Qual é o principal bioma presente no estado de Rondônia?",
                  answer: 'A Amazônia.',
                  alternatives: [
                    'a Amazônia.',
                    'o Cerrado.',
                    'a Mata Atlântica.',
                    'o Pantanal.',
                    'a Caatinga.'
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: "Com relação à Bacia do Rio Madeira, analise os itens a seguir. I. É o rio de maior vazão do estado de Rondônia e um dos mais caudalosos do mundo, destacando-se como principal afluente meridional do Rio Amazonas. II. Separa Rondônia da Bolívia e atua como principal via de transporte inter-regional, conectando áreas remotas ao sistema logístico da Amazônia. III. Abriga os complexos hidrelétricos de Santo Antônio e Jirau, integrantes do Sistema Interligado Nacional, que fornecem energia para várias regiões do Brasil. Em relação ao Rio Madeira, está correto o que se afirma em:",
                  shortQuestion: "Sobre o Rio Madeira, quais afirmativas sobre sua vazão, fronteira e hidrelétricas estão corretas?",
                  answer: 'Apenas os itens I e III estão corretos. O Rio Madeira é de fato um dos mais caudalosos e abriga as hidrelétricas. O rio que faz fronteira com a Bolívia é o Guaporé-Mamoré.',
                  alternatives: [
                    'I, II e III.',
                    'I e II, apenas.',
                    'I e III, apenas.',
                    'II e III, apenas.',
                    'III, apenas.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "Rondônia desempenha papel estratégico em exportações, potencializado por sua localização geográfica privilegiada, aliada a corredores logísticos dinâmicos e uma rede multimodal de transporte. A principal commodity exportada pelo estado é:",
                  shortQuestion: "Qual é a principal commodity exportada por Rondônia?",
                  answer: 'A carne bovina.',
                  alternatives: [
                    'a soja.',
                    'a madeira serrada.',
                    'o milho.',
                    'a carne bovina.',
                    'o tambaqui.'
                  ],
                  correctAlternativeIndex: 3
                }
              ]
            },
            {
              id: 'pge-ro-2015-hist-geo',
              name: 'Prova PGE-RO 2015 (7 questões)',
              cards: [
                {
                  question: 'Ao longo dos séculos XVI e XVII, durante o período da União Ibérica (1580/1640), verificamos o principal momento na expansão territorial brasileira. O país saiu de uma faixa litorânea para um tamanho continental e tal processo levou à incorporação do território correspondente à atual região norte. Sobre o processo de desbravamento da região norte, incluindo a área do estado de Rondônia, pode-se destacar dois grupos essenciais para o sucesso da ampliação territorial brasileira, que foram:',
                  shortQuestion: "Quais grupos foram essenciais para a expansão territorial brasileira na região norte durante a União Ibérica?",
                  answer: 'Os bandeirantes que visavam escravizar os indígenas e as missões jesuítas.',
                  alternatives: [
                    'os produtores de açúcar e os comerciantes brasileiros denominados tropeiros;',
                    'os produtores de soja e os pecuaristas que expandiram suas atividades para a região norte;',
                    'os produtores de borracha e os missionários que catequizavam os indígenas;',
                    'os bandeirantes que visavam escravizar os indígenas e as missões jesuítas;',
                    'os bandeirantes de sertanismo de contrato e os grandes pecuaristas que serviam aos engenhos.'
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: 'O crescimento da população de Rondônia ganhou destaque a partir da década de 1960. Em 1950, a população do antigo território do Guaporé era de cerca de 14 mil habitantes, enquanto em 1980 esse número chegava próximo a 230 mil habitantes. O intenso crescimento populacional nesse período é explicado principalmente:',
                  shortQuestion: "Qual o principal motivo do intenso crescimento populacional de Rondônia a partir da década de 1960?",
                  answer: 'Pelo acesso fácil à terra, de baixo custo, que atraiu investidores do sul e do sudeste interessados em investir na agropecuária e na atividade madeireira.',
                  alternatives: [
                    'pelos incentivos fiscais e investimentos do governo federal que estimularam a atração de indústrias para a região, gerando postos de trabalho e atraindo população;',
                    'pelo acesso fácil à terra, de baixo custo, que atraiu investidores do sul e do sudeste interessados em investir na agropecuária e na atividade madeireira;',
                    'pela descoberta de reservas de diamantes na década de 1960, que atraiu migrantes de vários estados brasileiros para a atividade do garimpo;',
                    'pelos investimentos da Superintendência do Desenvolvimento da Amazônia na abertura de rodovias e de ferrovias no período, que facilitou a ida de migrantes para o Estado;',
                    'pela crise econômica no Peru e na Bolívia naquele momento, que levou a um grande afluxo de imigrantes vindos desses países e que se estabeleceram em Rondônia.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'A descrição: "A monumental construção de estilo Vauban, de 6ª classe, é constituída por um quadrado de 970 metros de perímetro, com muralhas de 10 metros de altura e com quatro baluartes de 59x43m, armados cada um com quatorze (14) canhoneiras. Circundando-a existia um longo e profundo fosso, sendo que o acesso ao interior da fortaleza só será possível através de ponte elevadiça que conduzia a porta da muralha norte". (Fonte: http://www.geocities.ws/rondonianaweb) se refere ao:',
                  shortQuestion: "A qual monumento se refere a descrição 'A monumental construção de estilo Vauban...'?",
                  answer: 'Real Forte Príncipe da Beira, construído para afastar as pretensões dos espanhóis sobre o Vale do Guaporé-Mamoré.',
                  alternatives: [
                    'Real Forte Príncipe da Beira, construído para garantir a proteção das áreas de exploração de borracha no vale do rio Madeira;',
                    'Forte de Nossa Senhora da Conceição, construído para evitar a invasão dos franceses pelo rio Guaporé;',
                    'Forte de São Gabriel da Cachoeira, com o objetivo de evitar a penetração espanhola em terras portuguesas;',
                    'Real Forte Príncipe da Beira, construído para afastar as pretensões dos espanhóis sobre o Vale do Guaporé-Mamoré;',
                    'Forte de São Joaquim, construído com o objetivo de impedir a entrada de holandeses no vale do rio Branco.'
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: 'A declaração "O barril de pólvora está lá, basta que alguém risque o palito de fósforo para a gente ter uma nova tragédia", do Procurador da República Reginaldo Trindade, diz respeito à problemática envolvendo a Terra Indígena dos Cinta Larga. Em relação à localização dessas terras e à problemática existente atualmente nelas, é correto afirmar que:',
                  shortQuestion: "Qual a problemática e localização da Terra Indígena dos Cinta Larga?",
                  answer: 'Está localizada na porção leste do Estado, onde as invasões de garimpeiros têm gerado conflitos com os indígenas que vivem ali.',
                  alternatives: [
                    'está localizada no norte do Estado e seu principal desafio é combater o avanço da malária na população indígena;',
                    'está localizada no oeste do estado e as invasões por parte de peruanos e bolivianos têm levado a sérios conflitos com os indígenas;',
                    'está localizada na porção nordeste do estado e o avanço da urbanização tem ameaçado a existência da reserva;',
                    'está localizada na porção sul do estado e o avanço da fronteira agropecuária tem comprometido o habitat natural dos indígenas;',
                    'está localizada na porção leste do Estado, onde as invasões de garimpeiros têm gerado conflitos com os indígenas que vivem ali.'
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: 'Ao final do século XIX, o Vale do Madeira foi responsável por um período de avanço econômico e prosperidade para a região. Essa prosperidade foi contínua até o início do século XX. Tal desenvolvimento foi gerado pela:',
                  shortQuestion: "O que gerou o desenvolvimento econômico do Vale do Madeira no final do século XIX?",
                  answer: 'Extração da borracha, que atraiu mão de obra migrante para a região.',
                  alternatives: [
                    'produção aurífera, que se esgotara no Vale do Guaporé e ganhou força no Vale do Madeira;',
                    'produção cafeeira, que dinamizou a economia da região com a presença da imigração japonesa;',
                    'extração da borracha, que atraiu mão de obra migrante para a região;',
                    'criação de uma área de comércio livre na região, que atraiu o capital estrangeiro;',
                    'exploração do algodão, que atraiu investimentos e a mão de obra norte-americana.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: 'A BR-319 foi inaugurada oficialmente em 1976, no governo Ernesto Geisel. Porém, nunca foi concluída integralmente. Nas décadas de 1980 e 1990, a manutenção da estrada foi abandonada pelo poder público. Somente na década de 2000, as obras de pavimentação foram retomadas com o asfaltamento das duas pontas da rodovia. A importância da rodovia citada no texto está relacionada ao fato de ser a via de integração por terra:',
                  shortQuestion: "Qual a importância da rodovia BR-319?",
                  answer: 'Entre Porto Velho e Manaus.',
                  alternatives: [
                    'entre Porto Velho e Manaus;',
                    'de Rondônia com a Bolívia;',
                    'entre as regiões Norte e Nordeste;',
                    'da região Norte com Brasília;',
                    'de Rondônia com o Mato Grosso.'
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: 'No estado de Rondônia, os problemas de degradação socioambiental são muito presentes e estão associados à implantação dos projetos de colonização, principalmente na década de 1970. Como forma de amenizar esses problemas, em 1981 foi criado um programa voltado, dentre outros objetivos, a assegurar o crescimento da produção em harmonia com as preocupações de preservação do sistema ecológico e de proteção às comunidades indígenas, conhecido como:',
                  shortQuestion: "Qual programa foi criado em 1981 para amenizar os problemas socioambientais da colonização em Rondônia?",
                  answer: 'Programa Integrado de Desenvolvimento do Noroeste do Brasil.',
                  alternatives: [
                    'Programa Nacional para o Desenvolvimento da Amazônia;',
                    'Programa Integrado de Desenvolvimento do Noroeste do Brasil;',
                    'Projeto Agropecuário e Florestal de Rondônia;',
                    'Zoneamento Socioeconômico e Ecológico;',
                    'RADAM Brasil.'
                  ],
                  correctAlternativeIndex: 1
                }
              ]
            },
            {
              id: 'simuladas-fgv-hist-geo',
              name: 'Questões Simuladas FGV (13 questões)',
              cards: [
                {
                  question: "A construção da Estrada de Ferro Madeira-Mamoré (EFMM) é indissociável das relações diplomáticas do Brasil no início do século XX. Sua edificação foi uma contrapartida exigida pelo Tratado de Petrópolis (1903) para que o Brasil:",
                  shortQuestion: "A construção da EFMM foi uma contrapartida do Tratado de Petrópolis (1903) para que o Brasil fizesse o quê?",
                  answer: 'Ficasse com o território do Acre, anteriormente pertencente à Bolívia.',
                  alternatives: [
                    'ficasse com o território do Acre, anteriormente pertencente à Bolívia.',
                    'pudesse explorar a cassiterita em território boliviano.',
                    'estabelecesse um entreposto militar em Guajará-Mirim.',
                    'devolvesse o território do Acre à Bolívia após o fim do Ciclo da Borracha.',
                    'garantisse o transporte de migrantes nordestinos para os seringais.'
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: 'O "Segundo Ciclo da Borracha" (1942-1945) foi um fenômeno curto, mas de profundo impacto social. A mão de obra utilizada, conhecida como "Soldados da Borracha", era composta principalmente por:',
                  shortQuestion: "Quem eram os 'Soldados da Borracha' durante o Segundo Ciclo da Borracha (1942-1945)?",
                  answer: 'Migrantes nordestinos recrutados pelo governo Vargas para suprir a demanda de guerra dos Aliados.',
                  alternatives: [
                    'prisioneiros de guerra alemães e italianos enviados à Amazônia.',
                    'trabalhadores especializados da indústria de pneus de São Paulo.',
                    'militares do Exército Brasileiro que assumiram a produção nos seringais.',
                    'migrantes nordestinos recrutados pelo governo Vargas para suprir a demanda de guerra dos Aliados.',
                    'indígenas aldeados e forçados ao trabalho compulsório pelo SPI.'
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: 'A criação do Território Federal do Guaporé em 1943, desmembrado do Amazonas e do Mato Grosso, não foi um ato isolado. Ela se insere na política do governo Getúlio Vargas conhecida como:',
                  shortQuestion: "A criação do Território Federal do Guaporé em 1943 fazia parte de qual política do governo Getúlio Vargas?",
                  answer: 'Marcha para o Oeste, que buscava integrar e povoar as fronteiras do país.',
                  alternatives: [
                    'Plano de Metas, que visava industrializar a Amazônia.',
                    'Política de Valorização do Café, buscando novas áreas de cultivo.',
                    'Marcha para o Oeste, que buscava integrar e povoar as fronteiras do país.',
                    'Reforma Agrária, distribuindo terras dos seringalistas aos migrantes.',
                    'Operação Pan-Americana, para fortalecer laços com a Bolívia e o Peru.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: `"Se a extração da borracha foi a 'febre' do início do século XX, a cassiterita (minério de estanho) foi a 'corrida do ouro' de meados do século. A descoberta de grandes reservas transformou a paisagem e atraiu milhares de garimpeiros, criando um ambiente por vezes chamado de 'Inferno Verde'." O polo central desse ciclo econômico, que se tornou conhecido como a "capital mundial do estanho", foi a região de:`,
                  shortQuestion: "Qual região de Rondônia se tornou o polo do ciclo da cassiterita, sendo conhecida como a 'capital mundial do estanho'?",
                  answer: 'Ariquemes.',
                  alternatives: [
                    'Vilhena.',
                    'Costa Marques.',
                    'Guajará-Mirim.',
                    'Ji-Paraná.',
                    'Ariquemes.'
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: "A ocupação dirigida de Rondônia nos anos 1970 foi implementada pelo INCRA através dos Projetos Integrados de Colonização (PIC), como o PIC Ouro Preto. O modelo de assentamento adotado nesses projetos caracterizava-se:",
                  shortQuestion: "Como se caracterizava o modelo de assentamento dos Projetos Integrados de Colonização (PIC) do INCRA em Rondônia nos anos 1970?",
                  answer: 'Pela distribuição de lotes rurais ao longo de estradas vicinais (linhas) que partiam da BR-364, num padrão conhecido como "espinha de peixe".',
                  alternatives: [
                    'pela criação de grandes latifúndios monocultores para exportação.',
                    'pela distribuição de lotes rurais ao longo de estradas vicinais (linhas) que partiam da BR-364, num padrão conhecido como "espinha de peixe".',
                    'pela urbanização intensiva, com foco na criação de metrópoles planejadas na floresta.',
                    'pela priorização da navegação fluvial, com todos os lotes tendo acesso direto aos grandes rios.',
                    'pela criação de reservas extrativistas, proibindo qualquer tipo de agricultura.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'A rápida "colonização agropastoril" de Rondônia, especialmente nas décadas de 1970 e 1980, gerou graves "questões socioambientais". O principal conflito fundiário desse período estava relacionado:',
                  shortQuestion: "Qual era o principal conflito fundiário em Rondônia durante a colonização agropastoril das décadas de 1970 e 1980?",
                  answer: 'À "grilagem" de terras, com falsificação de títulos, e à expulsão violenta de posseiros, indígenas e seringueiros por grandes fazendeiros.',
                  alternatives: [
                    'à disputa por água entre agricultores e a indústria de Manaus.',
                    'à "grilagem" de terras, com falsificação de títulos, e à expulsão violenta de posseiros, indígenas e seringueiros por grandes fazendeiros.',
                    'à poluição dos rios causada exclusivamente pelo turismo descontrolado.',
                    'à inundação de terras férteis pelas usinas de Santo Antônio e Jirau, que foram construídas nessa época.',
                    'à proibição da caça e da pesca, que gerou fome entre os migrantes.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'A geografia econômica de Rondônia não é uniforme. A região conhecida como "Cone Sul" (municípios como Vilhena e Cerejeiras) se destaca como o principal polo estadual de:',
                  shortQuestion: "A região do 'Cone Sul' de Rondônia (Vilhena, Cerejeiras) se destaca economicamente em qual atividade?",
                  answer: 'Agricultura de grãos, especialmente soja e milho, devido ao solo e à proximidade com o Mato Grosso.',
                  alternatives: [
                    'produção de peixes nativos em larga escala (piscicultura).',
                    'extrativismo de castanha-do-pará e açaí.',
                    'mineração de diamantes e cassiterita.',
                    'agricultura de grãos, especialmente soja e milho, devido ao solo e à proximidade com o Mato Grosso.',
                    'indústria têxtil, aproveitando a produção de algodão.'
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: 'Sobre os impactos socioambientais da implantação das Usinas Hidrelétricas de Santo Antônio e Jirau, no Rio Madeira, analise os itens a seguir. I. Sendo usinas de "fio d\'água", não houve formação de grandes reservatórios, minimizando o impacto em deslocamentos populacionais e na fauna. II. A obra atraiu um intenso fluxo migratório para Porto Velho, gerando pressão sobre os serviços públicos de saúde, moradia e segurança. III. A alteração do regime de cheias do rio e a interrupção da migração de grandes peixes (piracema) afetaram diretamente a vida das comunidades ribeirinhas. Está correto o que se afirma em:',
                  shortQuestion: "Sobre os impactos das usinas de Santo Antônio e Jirau, quais afirmativas sobre reservatórios, migração e piracema estão corretas?",
                  answer: "Apenas os itens II e III estão corretos. A afirmativa I é incorreta pois, apesar de serem 'fio d'água', houve sim formação de reservatórios e impactos significativos em deslocamentos e na fauna.",
                  alternatives: [
                    'I, II e III.',
                    'I e II, apenas.',
                    'II e III, apenas.',
                    'I e III, apenas.',
                    'III, apenas.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "Com relação aos aspectos geológicos e de relevo de Rondônia, assinale V para a afirmativa verdadeira e F para a falsa. () O relevo é predominantemente montanhoso, com altitudes que superam os 2.000 metros na fronteira com o Amazonas. () A maior parte do território assenta-se sobre o Escudo Brasileiro (complexo cristalino), o que explica a riqueza mineral, como a cassiterita. () As planícies sedimentares recentes são encontradas nas margens dos grandes rios, como o Madeira e o Guaporé, formando áreas de várzea. As afirmativas são, respectivamente,",
                  shortQuestion: "Sobre geologia e relevo de Rondônia, qual a sequência V/F correta para as afirmativas sobre relevo montanhoso, Escudo Brasileiro e planícies sedimentares?",
                  answer: 'F-V-V. O relevo não é predominantemente montanhoso. A maior parte do território está sobre o Escudo Brasileiro, e há planícies sedimentares nas margens dos rios.',
                  alternatives: [
                    'V-F-F.',
                    'F-V-V.',
                    'V-V-F.',
                    'F-F-V.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'Enquanto a BR-319 (mencionada na prova da PGE-RO) representa um desafio de engenharia para ligar Porto Velho a Manaus (AM), a BR-364 é considerada a "espinha dorsal" do estado de Rondônia. Sua importância estratégica deve-se ao fato de:',
                  shortQuestion: "Qual a importância estratégica da rodovia BR-364, a 'espinha dorsal' de Rondônia?",
                  answer: 'Ser a única via pavimentada que liga Rondônia ao estado do Mato Grosso e, consequentemente, às regiões Sul e Sudeste do Brasil.',
                  alternatives: [
                    'ser a única via pavimentada que liga Rondônia ao estado do Mato Grosso e, consequentemente, às regiões Sul e Sudeste do Brasil.',
                    'seguir o traçado exato da Estrada de Ferro Madeira-Mamoré, servindo como sua substituta direta para a Bolívia.',
                    'ser uma rodovia exclusivamente turística, ligando as praias do Rio Madeira.',
                    'conectar o Cone Sul diretamente ao porto de Manaus.',
                    'ser a principal rota de escoamento da cassiterita para o Peru.'
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: "Embora a carne bovina e a soja sejam as *commodities* mais famosas (como cobrado na prova da DPE-RO), Rondônia tem se destacado nacionalmente em outra atividade agropecuária:",
                  shortQuestion: "Além da carne bovina e da soja, em qual outra atividade agropecuária Rondônia se destaca nacionalmente?",
                  answer: 'A maior produção de peixe nativo em cativeiro (piscicultura), especialmente o tambaqui.',
                  alternatives: [
                    'a produção de lã de ovelha, adaptada ao clima frio das serras.',
                    'a maior produção de peixe nativo em cativeiro (piscicultura), especialmente o tambaqui.',
                    'o cultivo de trigo, superando a produção do Paraná.',
                    'a exportação de carne de cavalo para o mercado europeu.',
                    'a produção de uvas viníferas no Vale do Guaporé.'
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: 'Além dos povos indígenas (como os Suruí e os Cinta Larga) e dos ribeirinhos, as "populações tradicionais" de Rondônia incluem comunidades quilombolas. Elas estão concentradas historicamente:',
                  shortQuestion: "Onde as comunidades quilombolas de Rondônia estão historicamente concentradas?",
                  answer: 'No Vale do Guaporé, formadas por descendentes de escravizados que fugiram da mineração no século XVIII.',
                  alternatives: [
                    'na área urbana de Porto Velho, onde chegaram para construir a EFMM.',
                    'no Cone Sul, onde fundaram Vilhena.',
                    'no Vale do Guaporé, formadas por descendentes de escravizados que fugiram da mineração no século XVIII.',
                    'na região de Ariquemes, onde trabalhavam na extração de cassiterita.',
                    'às margens da BR-364, tendo chegado com os migrantes do Paraná.'
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "A Assembleia Legislativa do Estado de Rondônia (ALE-RO), órgão para o qual você está prestando concurso, teve sua primeira legislatura instalada e sua primeira Constituição Estadual promulgada no ano de:",
                  shortQuestion: "Em que ano foi promulgada a primeira Constituição Estadual de Rondônia e instalada sua primeira legislatura?",
                  answer: '1983 (Após as eleições de 1982).',
                  alternatives: [
                    '1943 (Criação do Território).',
                    '1970 (Início da colonização).',
                    '1981 (Criação do Estado).',
                    '1983 (Após as eleições de 1982).',
                    '1988 (Junto com a Constituição Federal).'
                  ],
                  correctAlternativeIndex: 3
                }
              ]
            },
            {
              id: 'novas-ineditas-fgv',
              name: 'Questões Inéditas FGV (30 questões)',
              cards: [
                {
                  question: "(Simulada - Estilo FGV) O Real Forte Príncipe da Beira (1776) foi a maior edificação militar portuguesa na América colonial. Além de sua óbvia função de defesa da fronteira contra os espanhóis, o Forte cumpria um papel econômico crucial na região do Vale do Guaporé no século XVIII. Esse papel era:",
                  shortQuestion: "Qual era o papel econômico do Real Forte Príncipe da Beira no século XVIII?",
                  answer: "Funcionar como um entreposto fiscal e comercial para o controle da mineração de ouro e da coleta das \"drogas do sertão\".",
                  alternatives: [
                    "servir como o principal ponto de escoamento da borracha para a Europa.",
                    "funcionar como um entreposto fiscal e comercial para o controle da mineração de ouro e da coleta das \"drogas do sertão\".",
                    "ser o centro de comando para a futura construção da Estrada de Ferro Madeira-Mamoré.",
                    "sediar os primeiros projetos de colonização agrícola do governo, distribuindo terras a imigrantes.",
                    "atuar como um porto livre para o comércio de cassiterita com a Bolívia."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) A Estrada de Ferro Madeira-Mamoré (EFMM) foi concluída em 1912. No entanto, ela é historicamente considerada um \"fracasso econômico\" em seus objetivos iniciais. Isso se deve, principalmente, ao fato de que:",
                  shortQuestion: "Por que a Estrada de Ferro Madeira-Mamoré (EFMM) é considerada um 'fracasso econômico'?",
                  answer: "Sua conclusão coincidiu exatamente com o colapso do Primeiro Ciclo da Borracha, causado pela concorrência asiática.",
                  alternatives: [
                    "a Bolívia se recusou a usar a ferrovia, preferindo escoar sua produção pelo Oceano Pacífico.",
                    "a Comissão Rondon desviou os trilhos para instalar linhas telegráficas, abandonando o projeto original.",
                    "sua conclusão coincidiu exatamente com o colapso do Primeiro Ciclo da Borracha, causado pela concorrência asiática.",
                    "os Estados Unidos bloquearam seu funcionamento, temendo a concorrência com o Canal do Panamá.",
                    "a malária dizimou todos os engenheiros, impedindo a operação dos trens."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) A Comissão Rondon é fundamental na história de Rondônia. Além de sua política indigenista, sua expedição (1907-1915) tinha um objetivo estratégico de integração nacional para o governo republicano. Esse objetivo prático era:",
                  shortQuestion: "Qual era o objetivo prático e estratégico da expedição da Comissão Rondon (1907-2015)?",
                  answer: "Instalar uma linha telegráfica que ligasse Cuiabá a Santo Antônio do Madeira (Porto Velho) e, posteriormente, ao Acre.",
                  alternatives: [
                    "mapear as reservas de cassiterita para exploração industrial.",
                    "construir a rodovia BR-364, ligando o Acre ao Mato Grosso.",
                    "estabelecer a primeira capital do futuro Território, a cidade de Rondonópolis.",
                    "fundar o Real Forte Príncipe da Beira para combater a Bolívia.",
                    "instalar uma linha telegráfica que ligasse Cuiabá a Santo Antônio do Madeira (Porto Velho) e, posteriormente, ao Acre."
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: "(Simulada - Estilo FGV) No período colonial (século XVIII), a economia do Vale do Guaporé e do Vale do Madeira não se resumia à presença militar. A principal atividade econômica que atraiu a cobiça portuguesa para a região, além da busca por ouro, foi:",
                  shortQuestion: "Qual atividade econômica, além do ouro, atraiu a cobiça portuguesa para o Vale do Guaporé no séc. XVIII?",
                  answer: "A coleta das \"drogas do sertão\" (cacau, poaia, castanha) e o apresamento de indígenas.",
                  alternatives: [
                    "o cultivo extensivo de cana-de-açúcar.",
                    "a coleta das \"drogas do sertão\" (cacau, poaia, castanha) e o apresamento de indígenas.",
                    "a criação de gado de corte para exportação.",
                    "a exploração de cassiterita para a indústria europeia.",
                    "a produção de café em larga escala."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) Sobre os dois Ciclos da Borracha em Rondônia, analise as afirmativas a seguir. I. O Primeiro Ciclo (1879-1912) foi marcado por migração espontânea, especialmente de nordestinos, e terminou devido à concorrência asiática. II. O Segundo Ciclo (1942-1945) foi um evento planejado pelo governo Vargas (Acordos de Washington), usando mão de obra recrutada (Soldados da Borracha) para fins de guerra. III. Ambos os ciclos utilizaram a EFMM como principal meio de transporte, o que garantiu o baixo custo da produção. Está correto o que se afirma em:",
                  shortQuestion: "Sobre os Ciclos da Borracha em Rondônia, quais afirmativas estão corretas?",
                  answer: "Apenas I e II. O item III é falso; a EFMM só funcionou no fim do Primeiro Ciclo e estava desativada no Segundo.",
                  alternatives: [
                    "I, II e III.",
                    "I e II, apenas.",
                    "II e III, apenas.",
                    "I e III, apenas.",
                    "Apenas I."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) A criação do Território Federal do Guaporé, em 1943, foi um ato geopolítico da \"Marcha para o Oeste\" de Getúlio Vargas. O território foi formado a partir de áreas desmembradas de dois estados vizinhos:",
                  shortQuestion: "O Território Federal do Guaporé foi formado a partir de áreas de quais dois estados vizinhos?",
                  answer: "Amazonas e Mato Grosso.",
                  alternatives: [
                    "Acre e Pará.",
                    "Pará e Bolívia.",
                    "Amazonas e Mato Grosso.",
                    "Acre e Amazonas.",
                    "Mato Grosso e Goiás."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) O Ciclo da Cassiterita (1950-1980) redefiniu a economia de Rondônia. Embora tenha gerado riqueza, sua principal consequência socioeconômica foi:",
                  shortQuestion: "Qual foi a principal consequência socioeconômica do Ciclo da Cassiterita em Rondônia?",
                  answer: "O desenvolvimento de uma economia extrativista desordenada (garimpo), atraindo milhares de migrantes e gerando graves conflitos fundiários.",
                  alternatives: [
                    "a industrialização de Porto Velho, com fábricas de beneficiamento de estanho.",
                    "o desenvolvimento de uma economia extrativista desordenada (garimpo), atraindo milhares de migrantes e gerando graves conflitos fundiários.",
                    "a total pacificação do campo, pois os garimpeiros receberam títulos de terra do governo.",
                    "o abandono da BR-364, já que o minério era transportado exclusivamente pela EFMM.",
                    "a criação de vastas áreas de preservação ambiental para proteger os locais de extração."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) A colonização agrícola dos anos 1970, promovida pelo governo militar e pelo INCRA, foi impulsionada por um slogan que se tornou famoso. Esse slogan e a principal origem dos migrantes atraídos por ele eram, respectivamente:",
                  shortQuestion: "Qual o slogan e a origem dos migrantes da colonização agrícola de RO nos anos 1970?",
                  answer: "\"Terra sem homens para homens sem terra\" / migrantes do Sul (Paraná, RS) e Sudeste (ES, MG).",
                  alternatives: [
                    "\"Ouro, terra e progresso\" / migrantes do Pará e Maranhão.",
                    "\"Integrar para não entregar\" / migrantes do Amazonas e Acre.",
                    "\"Terra sem homens para homens sem terra\" / migrantes do Sul (Paraná, RS) e Sudeste (ES, MG).",
                    "\"O petróleo é nosso\" / migrantes de São Paulo e Rio de Janeiro.",
                    "\"Plantar é o que importa\" / imigrantes da Bolívia e Peru."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) A BR-364 é a \"espinha dorsal\" de Rondônia. Sobre ela, é correto afirmar que:",
                  shortQuestion: "O que é correto afirmar sobre a importância da BR-364 para Rondônia?",
                  answer: "Seu asfaltamento nos anos 1980, financiado pelo Banco Mundial (no âmbito do POLONOROESTE), foi o fator logístico que viabilizou a migração em massa.",
                  alternatives: [
                    "foi construída pelo Marechal Rondon no início do século XX para acompanhar a linha telegráfica.",
                    "seu asfaltamento nos anos 1980, financiado pelo Banco Mundial (no âmbito do POLONOROESTE), foi o fator logístico que viabilizou a migração em massa.",
                    "seu traçado original ligava Porto Velho a Guajará-Mirim, seguindo o curso do Rio Madeira.",
                    "ela é uma rodovia de pouca importância atual, tendo sido substituída pela Hidrovia do Madeira.",
                    "ela era originalmente chamada de BR-319, mas teve seu nome alterado."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) O processo de transição de Território Federal para Estado (1981) foi complexo. A figura política nomeada pelo regime militar como o último Governador do Território e que se tornou o primeiro Governador do novo Estado de Rondônia foi:",
                  shortQuestion: "Quem foi o último Governador do Território e o primeiro do Estado de Rondônia?",
                  answer: "Jorge Teixeira de Oliveira (\"Teixeirão\").",
                  alternatives: [
                    "Aluízio Ferreira.",
                    "Marechal Rondon.",
                    "Jorge Teixeira de Oliveira (\"Teixeirão\").",
                    "Jerônimo Santana.",
                    "Osvaldo Piana."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) Em relação à geografia física de Rondônia, assinale a afirmativa correta sobre seu relevo e geologia.",
                  shortQuestion: "Qual a afirmativa correta sobre o relevo e geologia de Rondônia?",
                  answer: "A maior parte do relevo é formada por planaltos (como a Chapada dos Parecis ao sul) e depressões, com o subsolo rico em minerais (Escudo Brasileiro).",
                  alternatives: [
                    "O ponto mais alto do estado é o Pico da Neblina, localizado na fronteira com o Amazonas.",
                    "O relevo é 100% plano (planície alagável), o que impede a agricultura mecanizada.",
                    "O território é geologicamente instável, com alta incidência de terremotos, especialmente em Ji-Paraná.",
                    "A maior parte do relevo é formada por planaltos (como a Chapada dos Parecis ao sul) e depressões, com o subsolo rico em minerais (Escudo Brasileiro).",
                    "O solo do estado é o \"massapê\", de origem vulcânica, idêntico ao encontrado no litoral nordestino."
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: "(Simulada - Estilo FGV) A hidrografia de Rondônia é um de seus maiores ativos. Sobre os rios do estado, assinale a afirmativa INCORRETA.",
                  shortQuestion: "Qual afirmativa sobre a hidrografia de Rondônia é INCORRETA?",
                  answer: "O Rio Amazonas atravessa o norte do estado de Rondônia, sendo a principal via de acesso a Porto Velho.",
                  alternatives: [
                    "O Rio Madeira é o principal, sendo um afluente da margem direita do Rio Amazonas e palco das grandes hidrelétricas.",
                    "O Rio Guaporé forma a fronteira natural com a Bolívia em grande parte do sul do estado e é famoso por sua biodiversidade (Golfinhos-rosas).",
                    "O Rio Ji-Paraná (ou Machado) é o maior rio que nasce e corre exclusivamente dentro do território de Rondônia.",
                    "O Rio Mamoré se junta ao Rio Beni (vindo da Bolívia) para formar o Rio Madeira, na altura de Guajará-Mirim.",
                    "O Rio Amazonas atravessa o norte do estado de Rondônia, sendo a principal via de acesso a Porto Velho."
                  ],
                  correctAlternativeIndex: 4
                },
                {
                  question: "(Simulada - Estilo FGV) O clima predominante em Rondônia é o Equatorial quente e úmido (Am). No entanto, um fenômeno climático específico afeta a região, principalmente nos meses de inverno (junho/julho), causando quedas bruscas de temperatura. Esse fenômeno é conhecido como:",
                  shortQuestion: "Como se chama o fenômeno de queda brusca de temperatura no inverno em Rondônia?",
                  answer: "Friagem.",
                  alternatives: [
                    "El Niño.",
                    "Vento Alísio.",
                    "Friagem.",
                    "Monção Amazônica.",
                    "Zona de Convergência Intertropical."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) Rondônia é um dos estados que compõem o \"Arco do Desmatamento\". Em resposta a isso, uma extensa rede de áreas protegidas foi criada. No contexto dos conflitos de terra, as Unidades de Conservação (UCs) e Terras Indígenas (TIs):",
                  shortQuestion: "No contexto do 'Arco do Desmatamento', qual o papel das Unidades de Conservação e Terras Indígenas em Rondônia?",
                  answer: "Funcionam como barreiras (embora constantemente ameaçadas) contra o avanço da fronteira agropecuária, da grilagem e da extração ilegal de madeira.",
                  alternatives: [
                    "são as áreas mais seguras do estado, livres de qualquer invasão ou pressão.",
                    "funcionam como barreiras (embora constantemente ameaçadas) contra o avanço da fronteira agropecuária, da grilagem e da extração ilegal de madeira.",
                    "foram todas revogadas para permitir a expansão da soja e da pecuária.",
                    "existem apenas no papel, não tendo demarcação física no território.",
                    "são áreas destinadas exclusivamente à mineração de cassiterita pelo governo federal."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) Embora a pecuária bovina e a soja sejam as atividades mais visíveis do agronegócio em Rondônia, o estado também é um dos maiores produtores nacionais de outra cultura agrícola, que se adaptou muito bem ao clima e solo local, especialmente na região de Cacoal. Trata-se do:",
                  shortQuestion: "Além da pecuária e soja, Rondônia é um dos maiores produtores de qual outra cultura agrícola?",
                  answer: "Café (principalmente da variedade Robusta/Conilon).",
                  alternatives: [
                    "Trigo.",
                    "Café (principalmente da variedade Robusta/Conilon).",
                    "Algodão.",
                    "Uva.",
                    "Laranja."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) Rondônia se consolidou como o maior produtor de peixe nativo em cativeiro do Brasil. O principal fator que impulsionou a piscicultura no estado foi:",
                  shortQuestion: "Qual foi o principal fator que impulsionou a piscicultura de peixe nativo em Rondônia?",
                  answer: "O incentivo ao uso de pequenas propriedades (remanescentes dos PICs) e a escavação de tanques (\"açudes\") para a criação de espécies como o Tambaqui.",
                  alternatives: [
                    "a tradição dos migrantes japoneses, que trouxeram a técnica de cultivo de carpas.",
                    "o aproveitamento dos lagos formados pelas usinas de Santo Antônio e Jirau.",
                    "o incentivo ao uso de pequenas propriedades (remanescentes dos PICs) e a escavação de tanques (\"açudes\") para a criação de espécies como o Tambaqui.",
                    "a proibição total da pesca nos rios, forçando a criação em cativeiro.",
                    "a exportação de peixes ornamentais para a Europa."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) A demografia de Rondônia é marcada por fluxos migratórios. A ocupação das décadas de 1970 e 1980, majoritariamente de origem Sul/Sudeste, concentrou-se:",
                  shortQuestion: "Onde se concentrou a ocupação migratória em Rondônia nas décadas de 1970 e 1980?",
                  answer: "No \"Cone Sul\" (Vilhena) e na Zona da Mata (Cacoal, Rolim de Moura) e ao longo da BR-364 (Ji-Paraná, Ouro Preto), para a agricultura.",
                  alternatives: [
                    "no Vale do Guaporé, para trabalhar nas fazendas de gado mais antigas.",
                    "em Porto Velho e Guajará-Mirim, para reativar a EFMM.",
                    "no \"Cone Sul\" (Vilhena) e na Zona da Mata (Cacoal, Rolim de Moura) e ao longo da BR-364 (Ji-Paraná, Ouro Preto), para a agricultura.",
                    "exclusivamente na capital, Porto Velho, para trabalhar na construção das hidrelétricas.",
                    "na fronteira com o Acre, para explorar a borracha."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) Sobre o \"Arco do Desmatamento\" e as \"questões socioambientais\" (termos do edital ALE-RO), assinale a afirmativa correta:",
                  shortQuestion: "Qual a definição correta de 'Arco do Desmatamento'?",
                  answer: "Refere-se a uma área de intensa atividade agrícola e pecuária que avança sobre a floresta, causando altas taxas de desflorestamento e conflitos fundiários.",
                  alternatives: [
                    "É um fenômeno natural de desertificação da floresta que ocorre sem intervenção humana.",
                    "Refere-se a uma área de intensa atividade agrícola e pecuária que avança sobre a floresta, causando altas taxas de desflorestamento e conflitos fundiários.",
                    "Foi um projeto do governo na década de 1970 para criar um cinturão de proteção ao redor da Amazônia.",
                    "É o nome dado à área inundada pelas hidrelétricas do Rio Madeira.",
                    "É uma área onde o desmatamento foi totalmente zerado e revertido, servindo de modelo para o mundo."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) O edital da ALE-RO menciona a \"História do Poder Legislativo de Rondônia\". Antes de se tornar Estado, o Território Federal possuía um órgão legislativo com poderes limitados, que era:",
                  shortQuestion: "Qual era o órgão legislativo do Território Federal de Rondônia antes de se tornar Estado?",
                  answer: "A Assembleia Territorial, cujos membros eram em parte eleitos e em parte nomeados.",
                  alternatives: [
                    "o Senado Federal, que legislava diretamente sobre o Território.",
                    "a Assembleia Territorial, cujos membros eram em parte eleitos e em parte nomeados.",
                    "o Conselho de Intendência Municipal de Porto Velho.",
                    "o Parlamento Indígena, que representava as etnias locais.",
                    "o Território Federal não possuía nenhum tipo de órgão legislativo, sendo governado por decreto."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) A legislação federal define uma \"Faixa de Fronteira\" (Lei 6.634/1979) de 150 km de largura, onde há restrições à aquisição de terras por estrangeiros e à realização de certas atividades sem autorização do Conselho de Defesa Nacional. Em Rondônia, essa faixa abrange:",
                  shortQuestion: "O que a 'Faixa de Fronteira' federal abrange em Rondônia?",
                  answer: "Toda a fronteira com a Bolívia, incluindo municípios como Guajará-Mirim, Costa Marques e Vilhena.",
                  alternatives: [
                    "apenas a capital, Porto Velho, por sua importância estratégica.",
                    "toda a fronteira com a Bolívia, incluindo municípios como Guajará-Mirim, Costa Marques e Vilhena.",
                    "apenas a fronteira com o Amazonas, para controlar o acesso a Manaus.",
                    "todo o território do estado, que é considerado integralmente área de segurança nacional.",
                    "essa legislação não se aplica a Rondônia, apenas ao Sul do país."
                  ],
                  correctAlternativeIndex: 1
                },
                {
                  question: "(Simulada - Estilo FGV) Embora economicamente frustrada, a Estrada de Ferro Madeira-Mamoré (EFMM) deixou um profundo legado cultural e social. Sua construção foi o principal fator para a fundação e desenvolvimento inicial de quais cidades?",
                  shortQuestion: "A construção da EFMM foi fator principal para a fundação de quais cidades?",
                  answer: "Porto Velho e Guajará-Mirim.",
                  alternatives: [
                    "Vilhena e Cacoal.",
                    "Ariquemes e Ji-Paraná.",
                    "Porto Velho e Guajará-Mirim.",
                    "Costa Marques e Pimenta Bueno.",
                    "Cerejeiras e Colorado do Oeste."
                  ],
                  correctAlternativeIndex: 2
                },
                {
                  question: "(Simulada - Estilo FGV) \"A cidade nasceu como um ponto estratégico para a Comissão Rondon, que ali instalou uma das primeiras estações de telegrafia. Seu nome original era 'Urupá', mas foi rebatizada em homenagem ao rio que a corta, que por sua vez homenageia um grupo indígena.\" O texto descreve a origem da cidade de:",
                  shortQuestion: "Qual cidade de Rondônia nasceu como o posto telegráfico 'Urupá'?",
                  answer: "Ji-Paraná.",
                  alternatives: [
                    "Ji-Paraná.",
                    "Vilhena.",
                    "Cacoal.",
                    "Ariquemes.",
                    "Guajará-Mirim."
                  ],
                  correctAlternativeIndex: 0
                },
                {
                  question: "(Simulada - Estilo FGV) Sobre os ciclos econômicos de Rondônia, assinale V para a afirmativa verdadeira e F para a falsa. () O Ciclo da Borracha (I e II) foi o que mais fixou o homem no campo, criando pequenas propriedades agrícolas. () O Ciclo da Cassiterita atraiu mão de obra (garimpeiros), mas não tinha foco na posse da terra, e sim na extração, sendo altamente predatório. () O Ciclo da Agropecuária (pós-1970) é o principal responsável pela atual estrutura fundiária e pelo desmatamento, baseado na posse da terra. As afirmativas são, respectivamente,",
                  shortQuestion: "Sobre os ciclos econômicos de RO, qual a sequência V/F para as afirmativas sobre Borracha, Cassiterita e Agropecuária?",
                  answer: "F-V-V. O item I é falso; a borracha não fixou o homem em pequenas propriedades, era um regime de aviamento em grandes seringais.",
                  alternatives: [
                    "V-F-V.",
                    "F-V-F.",
                    "V-F-F.",
                    "F-V-V.",
                    "F-F-V."
                  ],
                  correctAlternativeIndex: 3
                },
                {
                  question: "(Simulada - Estilo FGV) O Tratado de Madri (1750), que consolidou grande parte do território de Rondônia para Portugal, baseou-se no princípio do uti possidetis (\"quem ocupa de fato, possui de direito\"). Esse novo tratado substituiu qual acordo anterior, que se baseava em linhas imaginárias?",
                  shortQuestion: "O Tratado de Madri (1750) e seu princípio 'uti possidetis' substituíram qual acordo anterior?",
                  answer: "O Tratado de Tordesilhas.",
                  alternatives: [
                    "O Tratado de Tordesilhas.",
                    "O Tratado de Petrópolis.",
                    "Os Acordos de Washington.",
                    "O Tratado de Assunção.",
                    "O Edito de Milão."
                  ],
                  correctAlternativeIndex: 0
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
                  answer: 'A principal lição é a necessidade de responsabilidade e verificação rigorosa dos fatos antes da publicação. O caso demonstrou os danos devastadores que a mídia pode causar ao divulgar acusações sem provas, baseadas em boatos. A ética jornalística exige que o direito à informação seja equilibrado com o respeito à dignidade e à presunção de inocência.',
                  alternatives: [
                    'A velocidade da reportagem é mais importante que a precisão dos fatos.',
                    'A mídia deve assumir a responsabilidade de relatar apenas fatos verificados, evitando a disseminação de informações não confirmadas.',
                    'O direito à liberdade de imprensa se sobrepõe ao direito de privacidade dos cidadãos.',
                    'A opinião pública deve guiar a cobertura jornalística, mesmo sem provas concretas.'
                  ],
                  correctAlternativeIndex: 1
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
                  answer: 'Uma boa pauta serve como um guia inicial, mas deve oferecer flexibilidade para que o repórter explore novos ângulos durante a apuração. Limitar ou engessar o trabalho, ditando conclusões, vai contra o princípio da investigação jornalística e pode comprometer a imparcialidade da matéria.',
                  alternatives: [
                      'Ser clara e objetiva, fornecendo informações essenciais para o repórter.',
                      'Sugerir fontes e entrevistados relevantes para a apuração da matéria.',
                      'Ter flexibilidade para ser adaptada conforme novas informações surgem.',
                      'Limitar ou engessar a apuração do repórter, ditando conclusões.'
                  ],
                  correctAlternativeIndex: 3
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
                  question: 'Na "Classificação Marques de Melo", a quais gêneros jornalísticos pertencem, respectively, os formatos: Perfil, Caricatura e Nota?',
                  answer: 'Gênero Interpretativo, Gênero Opinativo e Gênero Informativo.'
                },
                {
                  question: 'Um texto opinativo, assinado por um especialista ou personalidade, que não representa necessariamente a opinião do veículo, é um exemplo de qual gênero?',
                  answer: 'Artigo.'
                },
                {
                  question: "Como o IJNet descreve o papel das ferramentas de IA para jornalistas?",
                  answer: "Como um recurso 'inestimável', mas que exige supervisão humana para evitar a publicação de dados imprecissos e garantir a credibilidade."
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
            },
            {
              id: 'prova-jornalismo-03',
              name: 'Prova 03 (33 questões)',
              cards: [
                {
                  question: 'No telejornalismo, um redator que escreve editoriais e crônicas se enquadra em qual função, segundo o Decreto-Lei nº 83.284/79, e qual o nome da estrutura narrativa que ele produz para expressar a opinião do veículo?',
                  answer: 'Função de Redator; a estrutura é o Editorial.'
                },
                {
                  question: 'Considerando a premissa da fragmentação informativa, onde a notícia é uma versão do real, qual é a natureza da notícia final apresentada ao público?',
                  answer: 'É um produto de estratégias de seleção e adaptação de ordem editorial.'
                },
                {
                  question: 'Na comédia "Um lugar chamado Notting Hill", a personagem de Julia Roberts concede uma série de entrevistas curtas e individuais. Como essa modalidade de entrevista é conhecida no jornalismo?',
                  answer: 'Entrevista exclusiva.'
                },
                {
                  question: 'Qual é a estrutura correta de uma matéria jornalística que segue o formato de pirâmide invertida, incluindo lead, sublead e duas sonoras com seus respectivos entretítulos?',
                  answer: 'L1 (lead) + L2 (sublead) + E1 (entretítulo 1) + D1 (documentação 1) + E2 (entretítulo 2) + D2 (documentação 2).'
                },
                {
                  question: 'Para automatizar a transcrição de uma entrevista de 30 minutos disponível no YouTube, qual procedimento emergente e eficiente um jornalista pode utilizar?',
                  answer: 'Utilizar uma extensão de navegador com ChatGPT para transcrição e resumo.'
                },
                {
                  question: 'Ao analisar um jornal, um estudante encontra: uma seção com notas variadas, dois textos opinativos longos com pé biográfico, e um texto de uma linha abaixo dos títulos. O que ele identificou, respectivamente?',
                  answer: 'Coluna informativa, artigos e subtítulo.'
                },
                {
                  question: 'Analisando os títulos: "Férias, décimo terceiro e bônus: um terço dos brasileiros não sabe administrar o dinheiro..." e "Estudo inédito revela que 73,5% das famílias paulistanas têm dívidas". Ambos estão corretos quanto ao emprego dos numerais?',
                  answer: 'Sim, ambos estão corretos (títulos III e IV da questão original).'
                },
                {
                  question: 'Na primeira página de uma publicação institucional, qual recurso é usado para coordenar e destacar várias matérias sobre um mesmo tema, geralmente com 10 a 15 linhas?',
                  answer: 'lidao'
                },
                {
                  question: 'Para organizar dados para um espelho de programação, qual a ordem crescente de detalhamento entre os indexadores: editoria, lead flash, retranca e tags?',
                  answer: 'Retranca, lead flash, editoria, tags.'
                },
                {
                  question: 'Qual título de reportagem para um telejornal de Mato Grosso do Sul melhor conjuga os critérios de "proximidade geográfica", "atualidade" e "consequências"?',
                  answer: '"Santa Casa de Campo Grande fica sem energia elétrica neste sábado".'
                },
                {
                  question: 'Em textos radiofônicos factuais com características de "serviço", qual recomendação de redação é comum para aumentar a apreensão da informação pelo ouvinte?',
                  answer: 'Reapresentar, de forma resumida, a informação principal no final da matéria.'
                },
                {
                  question: 'Como a Lei Geral de Proteção de Dados (LGPD) se relaciona com a atividade jornalística?',
                  answer: 'A LGPD prevê exceções para atividades com fins exclusivamente jornalísticos, salvaguardando o interesse público.'
                },
                {
                  question: 'Em um cartaz de campanha com diagramação vertical, qual a ordem decrescente de percepção visual das quatro áreas da página (1=sup. esquerdo, 2=sup. direito, 3=inf. esquerdo, 4=inf. direito)?',
                  answer: '1, 2, 3, 4.'
                },
                {
                  question: 'Em uma estrutura de webjornalismo piramidal de seis camadas, qual mecanismo a sexta camada (reações dos leitores) implementa na relação emissor-receptor?',
                  answer: 'Feedback.'
                },
                {
                  question: 'Para uma transmissão ao vivo com três convidados sentados, visando captar suas vozes de forma clara e individual, qual a configuração de microfones ideal?',
                  answer: 'Três unidades de microfone unidirecional de lapela, um para cada convidado.'
                },
                {
                  question: 'Diante de uma crise institucional, qual a ação mais adequada e equânime que um assessor de imprensa de uma autarquia federal deve tomar?',
                  answer: 'Convocar uma coletiva de imprensa, distribuindo releases de forma ampla para todos os veículos.'
                },
                {
                  question: 'Qual é a ação primordial para conseguir e manter seguidores em um perfil comercial no Instagram?',
                  answer: 'Monitorar e analisar os resultados para ajustar a estratégia.'
                },
                {
                  question: 'Para uma empresa que adota a teoria das "Relações Humanas" e quer valorizar seus funcionários, qual veículo de comunicação interna é mais apropriado?',
                  answer: 'Jornal mural.'
                },
                {
                  question: 'Com o advento da internet, como mudou a dinâmica do "pitching" (follow-up) de releases?',
                  answer: 'O processo tornou-se mais ativo, com jornalistas buscando informações específicas, em vez de apenas receberem passivamente os releases.'
                },
                {
                  question: 'Qual é uma característica fundamental de uma nota oficial emitida por uma instituição pública para se posicionar sobre um tema que repercutiu na imprensa?',
                  answer: 'A inclusão da assinatura da fonte, quando publicada nos canais oficiais da instituição.'
                },
                {
                  question: 'Qual ferramenta nativa do Windows 10 (ou superior) é usada para recortar e salvar partes da tela, sendo essencial para a produção de clipping eletrônico?',
                  answer: 'Ferramenta de Captura de Tela.'
                },
                {
                  question: 'Ao dar uma entrevista para uma rádio popular, o que um porta-voz deve priorizar para se conectar com o público-alvo e gerar retorno positivo?',
                  answer: 'Usar uma vestimenta que promova empatia com o público-alvo, considerando o formato da entrevista (se houver vídeo).'
                },
                {
                  question: 'Qual requisito básico um profissional deve ter para ser um bom porta-voz em uma coletiva de imprensa?',
                  answer: 'Capacidade de argumentação e firmeza para abordar perguntas, mesmo que sejam inesperadas ou fora do contexto inicial.'
                },
                {
                  question: 'Na escolha de ferramentas de marketing como marketing direto, folhetos e marketing viral, quais critérios estratégicos devem ser observados?',
                  answer: 'O perfil do público-alvo e a mensagem principal da campanha.'
                },
                {
                  question: 'No contexto do marketing de retenção, qual conceito descreve a evolução do foco no valor vitalício do cliente para a gestão de um relacionamento duradouro e fiel?',
                  answer: 'A evolução do lifetime value para o Customer Relationship Management (CRM).'
                },
                {
                  question: 'Quais são as especificidades de comunicação do rádio e do outdoor, respectivamente?',
                  answer: 'Rádio: reforço da palavra com música/sonoplastia. Outdoor: mensagens curtas e uso de imagens.'
                },
                {
                  question: 'Em pesquisa de mercado, como é chamado o indicador que mede a eficiência da comunicação e a lembrança de uma marca na mente do consumidor?',
                  answer: 'Top of mind.'
                },
                {
                  question: 'Por que a promoção pessoal de um servidor em publicidade institucional fere os princípios da Administração Pública?',
                  answer: 'Porque a funcionalidade da publicidade institucional veda sua realização quando há o objetivo de promoção pessoal de agentes públicos.'
                },
                {
                  question: 'Qual é a principal crítica à estratégia de veicular comunicação pública exclusivamente em redes sociais, considerando o contexto de mercados emergentes?',
                  answer: 'A necessidade prévia de uma política pública que garanta acesso universal e de qualidade à internet e a dispositivos (inclusão digital).'
                },
                {
                  question: 'Qual alternativa indica, respectivamente, um canal de comunicação para o público interno e um para o público externo?',
                  answer: 'Intranet (interno) e site de relações com investidores (externo).'
                },
                {
                  question: 'Se uma empresa listada no Índice de Sustentabilidade Empresarial (ISEB3) é comprovadamente culpada por prática ambiental nociva, qual dano ela sofre além da remoção do índice?',
                  answer: 'Dano à reputação corporativa e à imagem pública.'
                },
                {
                  question: 'Em uma gestão de crise, por que as equipes de Gerência de Crise e Comunicação devem atuar de forma integrada?',
                  answer: 'Porque conduzir o gerenciamento com eficiência e transparência significa dar autonomia à Comunicação para administrar e debelar a crise.'
                },
                {
                  question: 'O Capítulo V da Constituição Federal dispõe sobre a Comunicação Social e, no que diz respeito às concessões para o funcionamento de empresas de radiodifusão, estabelece que',
                  shortQuestion: "(FGV/Câmara de Fortaleza-CE) Sobre as concessões de radiodifusão na Constituição Federal.",
                  answer: 'O cancelamento da concessão ou permissão, antes de vencido o prazo, depende de decisão judicial. (Art. 223, § 4º, da Constituição Federal)',
                  alternatives: [
                    'a propriedade de empresa de radiodifusão sonora e de sons e imagens é privativa de brasileiros natos, sendo vedada a propriedade de estrangeiros e naturalizados.',
                    'a não renovação de uma concessão ou permissão dependerá de aprovação de, no mínimo, dois terços do Congresso Nacional, em votação secreta.',
                    'o prazo da concessão ou permissão será de cinco anos para as emissoras de rádio e de dez para as de televisão.',
                    'o cancelamento da concessão ou permissão, antes de vencido o prazo, depende de decisão judicial.',
                    'compete ao Poder Legislativo outorgar e renovar concessão, permissão e autorização para o serviço de radiodifusão sonora e de sons e imagens, com prioridade para empresas estatais.'
                  ],
                  correctAlternativeIndex: 3
                }
              ]
            }
          ]
        }
      ];
