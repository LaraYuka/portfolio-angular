import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [

{
  id: 2,
  title: 'GEMAP – Gerenciamento de Materiais Pedagógicos',
  year: 2025,
  shortDescription: 'Sistema web desenvolvido como TCC para gerenciamento de materiais pedagógicos em instituições de ensino.',
  description: 'Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC), com foco no desenvolvimento de um sistema web para auxiliar instituições de ensino no gerenciamento de materiais pedagógicos. A aplicação permite o controle e a organização do estoque, cadastro de materiais e visualização de informações por diferentes perfis de usuários, além de ter sido projetada com uma arquitetura que possibilita futuras expansões e melhorias.',
  motivation: 'A necessidade de um controle mais eficiente e organizado dos materiais pedagógicos em instituições escolares motivou o desenvolvimento deste sistema, visando reduzir perdas, facilitar o acesso às informações e apoiar a gestão dos recursos educacionais.',
  technologies: ['PHP', 'Laravel', 'Blade', 'HTML', 'CSS'],
  challenges: [
    'Levantamento e análise de requisitos junto aos usuários',
    'Estruturação do projeto utilizando o framework Laravel',
    'Desenvolvimento de uma interface simples, intuitiva e funcional',
    'Organização do sistema visando manutenção e futuras expansões'
  ],
  learnings: [
    'Experiência prática no desenvolvimento de um sistema completo utilizando Laravel',
    'Aprimoramento das habilidades de comunicação com usuários finais',
    'Aplicação de boas práticas de desenvolvimento web',
    'Planejamento, organização e entrega de um projeto de maior complexidade'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/gemap-tcc-3',
  pdfUrl: 'assets/projetos/TCC.pdf',
  videoUrl: 'https://www.youtube.com/watch?v=oVlTerHHBBg'
},
{
  id: 10,
  title: 'Estágio Supervisionado – Sistema para Gestão de Materiais Pedagógicos',
  year: 2024,
  shortDescription: 'Projeto desenvolvido durante estágio supervisionado com foco na organização e controle de materiais pedagógicos em uma creche municipal.',
  description: 'Projeto desenvolvido durante o estágio supervisionado no Centro Municipal de Educação Infantil (CMEI) Sonho Meu, no município de Mariópolis-PR. O trabalho consistiu na análise dos processos existentes relacionados à organização e ao controle de materiais pedagógicos, como livros, brinquedos e jogos educativos, identificando problemas e propondo uma solução tecnológica para otimizar a gestão desses recursos por meio de um sistema informatizado.',
  motivation: 'A experiência de estágio evidenciou dificuldades na gestão dos materiais pedagógicos, como extravios, desperdícios e ausência de controle eficiente. A partir de observações, entrevistas com os profissionais da instituição e pesquisa bibliográfica, surgiu a proposta de desenvolver um sistema capaz de auxiliar nos processos de empréstimo, devolução e monitoramento dos materiais, promovendo maior eficiência, sustentabilidade, transparência e fortalecimento da prática pedagógica. Este projeto também serviu como base conceitual para o desenvolvimento do Trabalho de Conclusão de Curso (TCC).',
  technologies: [
    'Levantamento de requisitos',
    'Análise de processos',
    'Documentação técnica',
    'Pesquisa qualitativa'
  ],
  challenges: [
    'Identificação e análise de problemas reais no ambiente escolar',
    'Levantamento de requisitos junto aos profissionais da instituição',
    'Tradução das necessidades pedagógicas em uma proposta de sistema',
    'Alinhamento entre teoria acadêmica e prática profissional'
  ],
  learnings: [
    'Aplicação da tecnologia como solução para problemas reais',
    'Desenvolvimento de habilidades de análise e comunicação com usuários',
    'Compreensão do impacto social da tecnologia no ambiente educacional',
    'Concepção da ideia que deu origem ao Trabalho de Conclusão de Curso (TCC)'
  ],
  status: 'Finalizado',
  pdfUrl: 'assets/projetos/Est.pdf',
},
{
  id: 6,
  title: 'SPEAKTEC – Plataforma de Comunicação Escolar',
  year: 2022,
  shortDescription: 'Rede social acadêmica desenvolvida como TCC para melhorar a comunicação e divulgação de projetos e eventos escolares.',
  description: 'Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) na ETEC de Lins. O SPEAKTEC é uma plataforma web com proposta de funcionar como uma rede social acadêmica, voltada à melhoria da comunicação e da divulgação de projetos, eventos e informações relevantes no ambiente escolar. A aplicação foi pensada para reduzir falhas de comunicação, perda de informações e dificuldades na divulgação de atividades, oferecendo um espaço centralizado e acessível para alunos, professores e a comunidade externa.',
  motivation: 'Atualmente, muitas instituições de ensino enfrentam dificuldades na comunicação interna e externa, principalmente na divulgação de eventos, projetos e recados importantes. Problemas como ruídos na comunicação, uso de múltiplos canais desconectados e falhas na disseminação de informações motivaram o desenvolvimento do SPEAKTEC, com o objetivo de criar uma solução digital eficiente, organizada e de fácil acesso para a comunidade escolar.',
  technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'PHP', 'Ruby'],
  challenges: [
    'Levantamento e definição dos requisitos do sistema',
    'Planejamento e implementação das principais funcionalidades da plataforma',
    'Desenvolvimento de um sistema acessível para diferentes perfis de usuários',
    'Trabalho colaborativo em equipe durante todo o ciclo do projeto'
  ],
  learnings: [
    'Experiência com desenvolvimento de um projeto completo, do planejamento à entrega final',
    'Aprimoramento das habilidades de trabalho em equipe e comunicação',
    'Compreensão de processos de análise de requisitos e organização de sistemas',
    'Vivência prática em um projeto de maior complexidade e responsabilidade acadêmica'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/NatanIanSouza/SpeakTec',
  pdfUrl: 'assets/projetos/TCC-1.pdf',
},
  {
    id: 1,
    title: 'Portfólio Pessoal',
    year: 2026,
    shortDescription: 'Site pessoal desenvolvido para apresentar meus projetos e habilidades.',
    description: 'Este projeto foi criado com o objetivo de centralizar minhas informações profissionais, projetos e conhecimentos técnicos em um único ambiente, funcionando como meu portfólio online.',

motivation: 'Ter uma presença profissional na web e um espaço organizado para apresentar minha evolução como desenvolvedora.',

    technologies: ['Angular', 'TypeScript', 'CSS', 'HTML'],
    challenges: [
  'Garantir responsividade em diferentes dispositivos',
  'Organizar os componentes de forma reutilizável',
  'Criar uma interface limpa e intuitiva'
],
    learnings: [
  'Uso de Angular com componentes standalone',
  'Boas práticas de UI/UX',
  'Estruturação e organização de projetos front-end'
],
    status: 'Finalizado',
    githubUrl: 'https://github.com/LaraYuka/portfolio-angular',
    liveUrl: 'https://lara-sakanaka.vercel.app/',
  },
{
  id: 11,
  title: 'Site em Angular – Projeto Acadêmico',
  year: 2024,
  shortDescription: 'Projeto desenvolvido em Angular para aprendizado de componentes, listas e estrutura de aplicações SPA.',
  description: 'Projeto desenvolvido durante aulas da faculdade com o objetivo de aprender os fundamentos do framework Angular. A aplicação foi criada para compreender a estrutura de um site em Angular, o uso de componentes, a criação e manipulação de listas e a organização de uma aplicação do tipo Single Page Application (SPA).',
  motivation: 'Aprender na prática como desenvolver aplicações web utilizando Angular, compreendendo conceitos como componentes, data binding e renderização de listas.',
  technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  challenges: [
    'Compreender a estrutura inicial de um projeto Angular',
    'Criar e organizar componentes',
    'Implementar e manipular listas de dados no Angular',
    'Entender o fluxo de dados e a comunicação entre componentes'
  ],
  learnings: [
    'Fundamentos do framework Angular',
    'Uso de TypeScript no desenvolvimento front-end',
    'Criação de componentes reutilizáveis',
    'Trabalho com listas e diretivas estruturais',
    'Noções iniciais de aplicações Single Page Application (SPA)'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/Adocao/tree/main',
},
{
  id: 12,
  title: 'Site de Eventos – Front-end e Back-end Separados',
  year: 2025,
  shortDescription: 'Projeto acadêmico com front-end em Angular e back-end em PHP, desenvolvido com arquitetura separada e testes via API.',
  description: 'Projeto desenvolvido durante aulas da faculdade com o objetivo de aprender a integração entre front-end e back-end de forma desacoplada. O sistema de eventos foi dividido em dois repositórios: um front-end desenvolvido em Angular e um back-end em PHP, estruturado como uma API. O back-end foi testado e validado utilizando o Postman, enquanto o front-end consumia os dados por meio de requisições HTTP.',
  motivation: 'Compreender na prática a separação entre front-end e back-end, aprendendo a construir aplicações web modernas utilizando Angular no consumo de APIs e PHP no desenvolvimento do servidor.',
  technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'PHP', 'Postman'],
  challenges: [
    'Separar corretamente as responsabilidades entre front-end e back-end',
    'Criar e testar endpoints no back-end utilizando o Postman',
    'Integrar o consumo de dados da API no Angular',
    'Garantir a comunicação correta entre as camadas da aplicação'
  ],
  learnings: [
    'Arquitetura de aplicações com front-end e back-end desacoplados',
    'Criação e consumo de APIs REST',
    'Testes de endpoints utilizando Postman',
    'Integração de Angular com back-end em PHP',
    'Melhor compreensão do fluxo de dados em aplicações web'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/Evento-Front/tree/main',
  githubUrl2: 'https://github.com/LaraYuka/Evento-Back',
},
{
  id: 13,
  title: 'Atividades Acadêmicas em Java',
  year: 2025,
  shortDescription: 'Conjunto de atividades acadêmicas desenvolvidas em Java, abordando conceitos fundamentais e avançados.',
  description: 'Projeto desenvolvido durante aulas da faculdade com o objetivo de aprofundar os conhecimentos na linguagem Java. O repositório reúne diferentes atividades práticas, incluindo o uso de Multithreading, comunicação via Sockets, desenvolvimento de aplicações cliente-servidor, manipulação de listas e integração com banco de dados, permitindo a compreensão do funcionamento de aplicações concorrentes e distribuídas.',
  motivation: 'Aprimorar os conhecimentos em Java por meio de atividades práticas, explorando conceitos fundamentais e avançados da linguagem, com foco em concorrência, comunicação entre sistemas e persistência de dados.',
  technologies: ['Java', 'Sockets', 'Threads', 'Multithreading', 'JDBC'],
  challenges: [
    'Compreender e implementar conceitos de Multithreading',
    'Desenvolver aplicações cliente-servidor utilizando Sockets',
    'Gerenciar concorrência e sincronização de threads',
    'Realizar conexão e operações com banco de dados em Java',
    'Organizar múltiplas atividades em um único repositório'
  ],
  learnings: [
    'Compreensão prática de concorrência e paralelismo em Java',
    'Desenvolvimento de aplicações cliente-servidor',
    'Uso de Sockets para comunicação entre aplicações',
    'Integração de aplicações Java com banco de dados utilizando JDBC',
    'Aprimoramento do raciocínio lógico e da organização de código'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/Java.git',
},
{
  id: 14,
  title: 'App de Presenças – Atividade Acadêmica',
  year: 2025,
  shortDescription: 'Funcionalidade de controle de presença desenvolvida em projeto acadêmico em grupo.',
  description: 'Projeto acadêmico desenvolvido em grupo durante aulas da faculdade. A turma foi dividida em equipes, sendo que cada grupo ficou responsável por implementar uma funcionalidade específica do aplicativo. Meu grupo desenvolveu o módulo de controle de presenças, no qual o professor pode marcar se o aluno está presente ou ausente. O projeto foi organizado com separação entre front-end e back-end, onde a pasta "lib" contém o front-end desenvolvido em Flutter e a pasta "AppFamapr(06)" contém o back-end, contribuindo para uma melhor compreensão da integração entre as camadas da aplicação.',
  motivation: 'Aprender na prática o desenvolvimento colaborativo de aplicações móveis, compreendendo a divisão de responsabilidades e a integração entre front-end e back-end.',
  technologies: ['Flutter', 'Dart', 'Java'],
  challenges: [
    'Trabalhar de forma colaborativa em um projeto em grupo',
    'Implementar a lógica de controle de presença dos alunos',
    'Entender a integração entre o front-end mobile e o back-end',
    'Organizar o código conforme a estrutura definida pelo projeto'
  ],
  learnings: [
    'Experiência prática em desenvolvimento de aplicações mobile com Flutter',
    'Compreensão do trabalho em equipe e divisão de tarefas',
    'Integração entre front-end e back-end',
    'Melhoria na organização e leitura de código em projetos colaborativos'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/App_Presenca.git',
},
{
  id: 15,
  title: 'CRUD de Clientes – Laravel',
  year: 2025,
  shortDescription: 'Projeto em Laravel desenvolvido para aprendizado de operações CRUD.',
  description: 'Projeto desenvolvido com o objetivo de aprender e praticar a criação de operações CRUD (Create, Read, Update e Delete) utilizando o framework Laravel. O sistema realiza o cadastro, listagem, edição e exclusão de clientes, aplicando conceitos fundamentais de organização de código, rotas, controllers, views com Blade e interação com banco de dados.',
  motivation: 'Aprender na prática os fundamentos do framework Laravel, compreendendo o funcionamento das operações CRUD e a estrutura básica de aplicações web.',
  technologies: ['Laravel', 'PHP', 'Blade'],
  challenges: [
    'Compreender o fluxo de rotas, controllers e views no Laravel',
    'Implementar corretamente as operações CRUD',
    'Organizar o código seguindo o padrão MVC do framework',
    'Integrar formulários com o back-end'
  ],
  learnings: [
    'Fundamentos do framework Laravel',
    'Implementação de operações CRUD',
    'Uso do Blade para criação de views',
    'Aplicação do padrão MVC em aplicações web',
    'Melhoria na organização e legibilidade do código'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/CRUD-Laravel.git',
},
  {
    id: 3,
    title: 'São João Maria',
    year: 2023,
    shortDescription: 'Atividade da faculdade',
    description: 'Este projeto foi desenvolvido com o intuido de realizar uma atividade proposta pela faculdade na disciplina de historia, onde foi selecionado para criar um site e um quiz sobre uma lenda local da cidade de Clevelandia sobre o São João Maria.',
    motivation: 'Atividade',
    technologies: ['Bootstrap','CSS', 'HTML'],
    challenges: [
      'Encontrar informações',
      'Componentização',
      'Organização do layout'
    ],
    learnings: [
  'Estruturação de páginas com HTML e CSS',
  'Criação de layouts utilizando Bootstrap',
  'Organização de conteúdo para projetos educacionais'
],

    status: 'Finalizado',
    githubUrl: 'https://github.com/LaraYuka/lenda-sao-joao-maria-clevelandia',

  },

{
  id: 7,
  title: 'Intensivão Full Stack – Sistema de Gestão',
  year: 2022,
  shortDescription: 'Projeto full stack desenvolvido durante um intensivão prático, com foco em CRUD, banco de dados e fluxo completo de um sistema web.',
  description: 'Projeto desenvolvido durante o Intensivão Full Stack realizado em 2022, com o objetivo de revisar e consolidar conceitos fundamentais do desenvolvimento web. Ao longo das aulas, foi criado um sistema completo envolvendo autenticação, integração com banco de dados e operações de CRUD para diferentes entidades, simulando um sistema real de gestão. O projeto também abordou boas práticas de versionamento, organização de código e publicação online.',
  motivation: 'Reforçar e aplicar na prática os principais conceitos estudados durante o curso técnico, integrando front-end, back-end, banco de dados e versionamento de código em um único projeto.',
  technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'PHP', 'MySQL'],
  challenges: [
    'Configuração do ambiente de desenvolvimento e integração com Git',
    'Modelagem e correção de relacionamentos no banco de dados',
    'Implementação de sistema de login e autenticação',
    'Desenvolvimento de operações CRUD para múltiplas entidades',
    'Publicação do sistema em ambiente online'
  ],
  learnings: [
    'Integração completa entre front-end, back-end e banco de dados',
    'Desenvolvimento de sistemas com autenticação e controle de acesso',
    'Criação e organização de CRUDs para diferentes tabelas',
    'Uso prático de Git e GitHub no gerenciamento de projetos',
    'Compreensão do fluxo completo de um sistema web do desenvolvimento à publicação'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/intensivao2022_Lara',
},
  {
  id: 4,
  title: 'Sistema de Rifa',
  year: 2022,
  shortDescription: 'Sistema de rifa desenvolvido como atividade do ensino médio.',
  description: 'Projeto desenvolvido como parte de uma atividade acadêmica no ensino médio, na ETEC de Lins. O sistema tem como objetivo gerenciar rifas de forma simples e organizada, permitindo a criação de rifas com numeração definida e o controle de vendedores responsáveis pela venda dos números. A aplicação simula um cenário real de organização e administração de rifas.',
  motivation: 'Projeto acadêmico desenvolvido para aplicar conceitos de programação e lógica aprendidos em sala de aula.',
  technologies: ['JavaScript', 'HTML', 'CSS', 'SCSS', 'Less', 'PHP'],
  challenges: [
    'Planejar a estrutura e a lógica do sistema',
    'Implementar a interação entre diferentes tipos de usuários (administrador e vendedores)',
    'Adaptar o sistema para funcionar de forma responsiva em diferentes dispositivos'
  ],
  learnings: [
    'Compreensão do funcionamento de sistemas com múltiplos tipos de usuários',
    'Aprimoramento do uso de JavaScript para interatividade',
    'Desenvolvimento de habilidades para resolver problemas e lidar com desafios durante o processo de programação'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/Rifa-LAra-02',
},
{
  id: 5,
  title: 'Aprendizado de Arquitetura MVC',
  year: 2022,
  shortDescription: 'Projeto prático para compreensão da arquitetura MVC.',
  description: 'Projeto desenvolvido como parte de uma atividade acadêmica no ensino médio, na ETEC de Lins, com foco no aprendizado prático da arquitetura MVC (Model-View-Controller). O sistema foi criado para compreender a separação de responsabilidades entre as camadas, a organização do código e o fluxo de dados em aplicações web, utilizando PHP e JavaScript.',
  motivation: 'Aplicar na prática os conceitos de arquitetura de software aprendidos em sala de aula, compreendendo a importância da organização do código, manutenção e escalabilidade de sistemas.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  challenges: [
    'Compreender e aplicar corretamente a separação entre Model, View e Controller',
    'Organizar a estrutura de pastas e arquivos do projeto',
    'Entender o fluxo de requisições e respostas em uma aplicação MVC'
  ],
  learnings: [
    'Compreensão prática da arquitetura MVC e seu funcionamento',
    'Melhoria na organização e legibilidade do código',
    'Entendimento do fluxo de dados entre back-end e front-end',
    'Noções iniciais de boas práticas de arquitetura de software'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/PW-MVC/tree/master/aula02/modelo',
},
{
  id: 8,
  title: 'OnePageCourse – Landing Page Educacional',
  year: 2021,
  shortDescription: 'Projeto front-end desenvolvido para aprendizado de layouts one page.',
  description: 'Projeto desenvolvido durante o curso técnico na ETEC de Lins com o objetivo de aprender e aplicar o conceito de sites one page. A aplicação simula uma landing page educacional, explorando organização de seções, navegação por âncoras, estrutura visual e boas práticas de layout e estilização no front-end.',
  motivation: 'Aprender na prática o conceito de páginas one page, compreendendo a organização do conteúdo, a navegação em uma única página e a construção de layouts voltados para uma boa experiência do usuário.',
  technologies: ['HTML', 'CSS', 'SCSS', 'Less', 'JavaScript'],
  challenges: [
    'Estruturar corretamente um site em página única (one page)',
    'Organizar o conteúdo em seções claras e bem definidas',
    'Trabalhar a estilização e o layout de forma consistente',
    'Implementar interações simples com JavaScript'
  ],
  learnings: [
    'Compreensão do conceito e das vantagens de sites one page',
    'Organização de layout e hierarquia visual',
    'Uso de pré-processadores CSS (SCSS e Less)',
    'Aprimoramento das habilidades em HTML, CSS e JavaScript',
    'Noções iniciais de responsividade e experiência do usuário'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/OnePageCourse/tree/master',
},
{
  id: 9,
  title: 'Aprendendo sobre PWA – Receitas',
  year: 2021,
  shortDescription: 'Projeto desenvolvido para aprendizado e aplicação dos conceitos de Progressive Web App (PWA).',
  description: 'Projeto desenvolvido durante o curso técnico na ETEC de Lins com o objetivo de aprender e aplicar, na prática, os conceitos de Progressive Web App (PWA). A aplicação consiste em um site de receitas criado para ser transformado em PWA, permitindo a compreensão de funcionalidades como instalação no dispositivo, funcionamento offline e melhoria da experiência do usuário.',
  motivation: 'Explorar e compreender na prática os conceitos de Progressive Web App, estudando como aplicações web podem se comportar de forma semelhante a aplicativos nativos.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  challenges: [
    'Compreender o funcionamento de Service Workers',
    'Configurar o manifesto da aplicação (Web App Manifest)',
    'Adaptar um site tradicional para funcionar como PWA',
    'Garantir o funcionamento básico da aplicação em modo offline'
  ],
  learnings: [
    'Entendimento dos conceitos fundamentais de Progressive Web Apps (PWA)',
    'Implementação de Service Workers',
    'Configuração de manifestos para aplicações web',
    'Melhoria da experiência do usuário com recursos de instalação e offline',
    'Visão inicial sobre performance e acessibilidade em aplicações web'
  ],
  status: 'Finalizado',
  githubUrl: 'https://github.com/LaraYuka/PAM-PWA-ReceitasDMaki',

}


];

