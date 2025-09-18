# biAnalyst
An BI analyst collects, cleans, and analyzes data to identify trends, transforming complex information into actionable insights. They create visual reports and dashboards to help companies make strategic decisions, improve efficiency, and achieve business goals.
---

[ESTUDOS](#estudos)

---
## **ANALISTA DE BI E MIS JUNIOR - DIDI**

### **Plano de Carreira**

Neste processo, buscamos conhecer profissionais de diversas áreas, incluindo **Especialistas em Interação**, **Líderes Educadores**, **Monitores de Qualidade**, **Supervisores de Atendimento** e **Analistas das Áreas de Staff** com mais de 3 meses de experiência.

---

### **Requisitos**

* **Necessário**: Ensino Superior cursando ou completo.

* **Desejável**:
    * Experiência na área de **BI e MIS**.
    * Conhecimentos em linguagem **SQL**.
    * Conhecimento dos principais **Key Performance Indicators (KPIs)** utilizados em Call Centers.
    * Conhecimento em ferramentas de **Business Intelligence (BI)**.
    * Disponibilidade total de horário.
    * Disponibilidade para atuar no campus Água Branca.

---

### **Atividades da Posição**

O profissional será responsável por:

* **Extrair, transformar e analisar** dados transacionais das ferramentas da Teleperformance ou de seus clientes. Isso será feito por meio de processos manuais ou automatizados, respeitando os métodos e direitos de acesso de cada ferramenta.
* **Atualizar e publicar** demonstrativos de resultados e controles de **KPIs** (relatórios, dashboards, etc.), de acordo com a periodicidade definida entre o cliente e a Teleperformance. Esta etapa inclui a análise e validação da integridade dos dados.
* **Elaborar novos demonstrativos** de resultados e **controles de KPIs** solicitados por clientes internos e externos, oferecendo visões analíticas e comparativos históricos.

---

### **Etapas do Processo Seletivo**

1.  Validação de cadastro e salário.
2.  Etapa de provas.
3.  Entrevista com o time de carreira e requisitante.

---

**Prazo de Inscrição**: 15/09/2025 às 23h59.  
**Meses Avaliados**: 3 últimos meses.  

---
### A Rotina do Vendedor-Analista: João e o Power BI na Ótica

Com a ausência do gerente, a rotina de João, o vendedor responsável, se transforma. Ele não é mais apenas um vendedor, mas também o analista de dados da loja. Sua rotina diária e semanal é meticulosamente organizada para extrair o máximo de valor dos dados da ótica.

#### Extração, Transformação e Análise de Dados

**Diariamente, pela manhã, João começa a rotina com a extração de dados.** Ele acessa as diferentes ferramentas da ótica, como o sistema de vendas (PDV), o sistema de estoque e, em alguns casos, até mesmo planilhas de controle de clientes e agendamentos. Como não tem acesso de administrador, ele utiliza as ferramentas de exportação de relatórios disponíveis, geralmente salvando os dados em formato de planilha (`.csv` ou `.xlsx`).

Em seguida, ele parte para a **transformação**. Ele importa esses arquivos para o **Power BI**. É aqui que a mágica acontece. Ele usa o "Power Query Editor" para limpar os dados, removendo duplicatas, corrigindo inconsistências e padronizando formatos. Por exemplo, ele garante que todos os nomes de produtos sejam escritos da mesma forma e que as datas estejam no formato correto. Esse processo, que antes era manual e demorado, agora é semi-automatizado, pois ele já tem os scripts prontos no Power BI.

A etapa final do dia é a **análise**. Com os dados limpos e organizados, ele atualiza seu painel principal. Ele observa os **KPIs (Key Performance Indicators)**:

* **Vendas por Vendedor**: Ele identifica quem está vendendo mais e quais produtos estão sendo mais vendidos por cada membro da equipe.
* **Ticket Médio**: Ele verifica se o valor médio das vendas está subindo ou descendo e ajusta as estratégias de vendas adicionais (acessórios, lentes especiais) com a equipe.
* **Conversão de Vendas**: Ele analisa o percentual de clientes que entram na loja e realmente compram algo, buscando otimizar o atendimento.

#### Publicação e Elaboração de Demonstrativos

**Semanas, João tem uma responsabilidade maior.** Ele precisa **atualizar e publicar** os demonstrativos de resultados para a gerência regional e para a equipe da loja. Ele acessa o painel de KPIs que criou no Power BI, garante que todos os dados estejam atualizados e exporta um resumo em PDF ou PowerPoint, que é enviado por e-mail para os gestores. Ele também projeta o painel em uma televisão na sala de descanso da loja, para que todos os vendedores possam acompanhar os resultados da equipe.

**Além disso, ele se torna o ponto focal para solicitações de relatórios.** Por exemplo, o gerente de marketing da rede pede um relatório sobre a performance de vendas de uma nova linha de óculos de sol lançada na semana anterior. João, usando suas habilidades, cria um novo relatório no Power BI, comparando as vendas dessa nova linha com as vendas de coleções anteriores, e inclui um comparativo histórico para mostrar a evolução. O relatório, que antes levaria horas para ser compilado manualmente, agora é gerado em poucos minutos.

Ao final do dia, João continua exercendo sua função principal de vendedor. As insights que ele obtém dos dados o ajudam a direcionar melhor o seu próprio trabalho, a dar orientações mais precisas à equipe e a tomar decisões rápidas e eficazes, garantindo que a loja continue a prosperar mesmo na ausência da liderança principal.

---
### A Rotina do Vendedor-Analista com SQL

Para integrar o **SQL (Structured Query Language)** na rotina do vendedor-analista, podemos adicionar uma etapa crucial: a extração e manipulação dos dados diretamente do banco de dados da ótica.

### A Rotina do Vendedor-Analista com SQL

João, o vendedor-analista, percebe que a extração manual de dados para planilhas é repetitiva e ineficiente. Com a permissão da gerência, ele obtém acesso de leitura ao banco de dados principal da ótica. Agora, sua rotina matinal ganha um novo poder.

#### Extração de Dados com SQL

Em vez de exportar relatórios de cada sistema, João abre uma ferramenta de gerenciamento de banco de dados (como SQL Server Management Studio ou DBeaver) e **escreve scripts SQL para extrair exatamente os dados de que precisa**. Ele não precisa mais lidar com planilhas enormes cheias de dados irrelevantes. Por exemplo:

* **Para obter as vendas diárias**: ele executa um comando como:
```sql
SELECT
DataVenda,
SUM(ValorTotal) AS VendasDiarias
FROM
Vendas
WHERE
DataVenda = GETDATE()
GROUP BY
DataVenda;
```

---

### **Principais Indicadores de Call Center (KPIs)**

Com base nas atividades de um analista de BI e MIS em uma empresa como a Teleperformance, os principais indicadores que um cliente de call center tem como meta estão diretamente relacionados à eficiência operacional e à qualidade do serviço. Os KPIs mencionados — **ABS**, **HT**, **Aderência** e **Qualidade** — são centrais, mas há outros igualmente importantes.

Os KPIs são geralmente divididos em categorias para cobrir todos os aspectos da operação: produtividade, qualidade e satisfação do cliente.

#### **1. Produtividade e Eficiência**

* **ABS (Absenteeism)**: Taxa de ausência dos colaboradores. Uma taxa alta pode indicar problemas de engajamento da equipe e impactar a capacidade de atendimento, gerando sobrecarga.
* **HT (Handle Time) ou TMA (Tempo Médio de Atendimento)**: Tempo médio que um operador leva para resolver uma interação. Um HT baixo indica eficiência, mas um valor excessivamente baixo pode sinalizar pressa e impactar a qualidade.
* **Aderência (Adherence to Schedule)**: Percentual de tempo em que um operador segue a programação de trabalho. A baixa aderência pode prejudicar o dimensionamento de pessoal e a qualidade do serviço.
* **TMO (Tempo Médio Operacional)**: Mede o tempo médio gasto pelo operador para resolver uma interação do cliente, incluindo o tempo de espera, o tempo de atendimento e o tempo de pós-atendimento.

#### **2. Qualidade e Satisfação**

* **Qualidade**: Esse é um indicador mais amplo, medido através de diferentes métricas, como a **taxa de FCR (First Call Resolution)**.
* **FCR (First Call Resolution)**: Percentual de problemas que são resolvidos na primeira chamada ou contato. Um alto FCR é uma meta importante, pois reduz o retrabalho e aumenta a satisfação do cliente.
* **NPS (Net Promoter Score)**: Mede a satisfação e lealdade do cliente com base em uma única pergunta. O resultado é categorizado em promotores, neutros e detratores.
* **Satisfação do Cliente (CSAT - Customer Satisfaction)**: Avalia o quão satisfeito um cliente está com uma interação ou um serviço específico. Geralmente é medido por meio de uma pesquisa rápida ao final da chamada.

### **Como o Analista de BI e MIS Atua**

O **Analista de BI e MIS** coleta, transforma e analisa dados de todas essas métricas. Ele cria painéis e relatórios no **Power BI** (ou outra ferramenta de BI) para monitorar o desempenho em tempo real. Por exemplo, ele pode criar um dashboard que mostre a aderência por operador, o FCR por tipo de problema ou o NPS por campanha de atendimento, permitindo que os supervisores tomem decisões rápidas e estratégicas.

---

## Projeto

O projeto cobre todas as etapas essenciais de um fluxo de trabalho de Business Intelligence, o que o torna um portfólio completo e atraente para recrutadores. Além disso, ele demonstra seu conhecimento em diversas áreas-chave.

### **Pontos Fortes e Oportunidades**

* **Ampla Visibilidade de Habilidades**: O projeto mostra a cadeia de valor completa dos dados: da **coleta** (frontend), passando pela **engenharia e extração** (função no servidor com SQL), até a **análise e visualização** (BI e página web). Isso é um grande diferencial.
* **Tecnologias Modernas**: A combinação de um **frontend** (pode usar React, Vue.js, etc.), uma função de **backend** (Node.js, Python/Flask, etc.) e **SQL** demonstra um ecossistema de desenvolvimento moderno.
* **Foco em Resultados**: O objetivo final de exibir os dados em uma página web (possivelmente incorporando um dashboard do Power BI ou Tableau) mostra que você não apenas manipula dados, mas também os transforma em **insights acessíveis e úteis para o negócio**.

---

### **Pontos de Crítica e Melhoria**

Apesar da viabilidade, há alguns pontos para considerar e aprimorar, garantindo que o projeto seja robusto e profissional:

* **Complexidade da Camada de Backend**: A "função no server" é o ponto mais crítico, sendo preciso garantir que ela seja segura e eficiente.
* **Conexão Segura**: O frontend **não deve se conectar diretamente ao banco de dados**. A função do servidor atuará como uma **API**, recebendo os dados do frontend e fazendo a extração no banco de dados com SQL. Isso é crucial para a segurança.
* **Cenário de Negócio**: Para tornar o projeto mais relevante, é fundamental **definir um cenário de negócio claro**. Isso dá um propósito aos dados e torna a análise mais significativa.
* **Detalhes da Visualização**: O ideal é **usar uma ferramenta como o Power BI ou Tableau** e depois incorporar o painel na página.
 
## **Análise Crítica do Cenário**

Ao incluir os setores de **Comercial, Suporte, Retenção e SAC**, cria-se um ambiente rico em dados e desafios que são comuns nesse setor.

A estrutura proposta é completa e viável, mas vamos aprofundar alguns pontos para garantir que o projeto de portfólio seja robusto e profissional.

---

### **1. O Papel do WFM (Workforce Management)**

O **WFM** não é apenas útil, é **essencial**. Ele é o coração da operação. É o WFM que lida com o planejamento de horários, a previsão de volume de chamadas e a alocação de pessoal para cada uma das suas 8 equipes. Sem ele, seria quase impossível garantir que o número certo de agentes estivesse na hora certa para atender as diferentes filas de chamadas (Comercial, Suporte, etc.).

### **2. O Setor de Qualidade**

O **Setor de Qualidade** também é crítico. Ele não apenas ouve as ligações, mas também audita o desempenho dos operadores e fornece feedback. O Analista de BI poderia criar um painel que relacione a pontuação de qualidade com o desempenho de vendas ou o **FCR (First Call Resolution)**. Isso mostra a correlação entre a qualidade do atendimento e o resultado financeiro, um insight valioso para qualquer empresa.

### **3. O RH (Recursos Humanos)**

O **RH** não é opcional; ele é uma peça-chave, especialmente na área de **Absenteeism (ABS)** e **Turnover (Rotatividade)**. O RH lida com as ausências, as licenças e a contratação de novos talentos. O projeto de BI pode cruzar dados de ABS e Turnover do RH com as métricas de produtividade das equipes. Por exemplo, um alto turnover em uma equipe de Retenção pode estar diretamente ligado a um baixo HT ou a um tipo de chamada mais estressante.

---

### **Sugestões para o Projeto de Portfólio**

#### **Pontos de Análise de Dados**

* **Dashboards Específicos**: Crie dashboards diferentes para cada público.
    * **Dashboard para Agentes**: Focado em métricas individuais, como HT, FCR e Aderência.
    * **Dashboard para Supervisores**: Visão de equipe, comparando o desempenho das 8 equipes em relação às metas.
    * **Dashboard para Gerentes**: Focado em resultados de negócio, como receita gerada (Comercial), taxa de retenção (Retenção) e satisfação do cliente (SAC).
* **Análise de Dados Cruzados**: Você pode cruzar dados para encontrar insights valiosos.
    * Relacione o **HT** com a qualidade da ligação. Um HT muito baixo pode estar relacionado a uma baixa nota de qualidade.
    * Analise o impacto do **Absenteeism (ABS)** do RH na **Aderência** das equipes e no **TMA** geral.

* **Narrativa de Negócio**: Para cada dashboard, inclua uma breve análise. Por exemplo: "O painel abaixo mostra que a equipe de 'Suporte' no turno da noite tem o maior FCR, mas um HT acima da meta, sugerindo que os operadores estão resolvendo problemas complexos, mas precisam de treinamento para otimizar o tempo."

A complexidade de ter 4 áreas e 2 turnos, com diferentes níveis de gestão, oferece uma oportunidade perfeita para demonstrar suas habilidades analíticas.

---

### Escolha final do tipo de Projeto

Tenho a habilidade de manipular códigos e, atualmente, utilizo uma aplicação que combina a minha escala com a de outra pessoa. Mensalmente, nós extraímos as nossas escalas do sistema da empresa para alimentar o aplicativo. Nele, basta ticar os dias de folga, e o código em JavaScript faz a combinação. No servidor, tenho uma função que utiliza uma variável de ambiente com um token, e, ao carregar a aplicação, é feita uma solicitação desse token para garantir que somente eu e essa pessoa tenhamos acesso.

Tenho considerado entre começar com um projeto menor, como uma ótica com um gerente e dois vendedores que tabulam cada atendimento no sistema para alimentar a inteligência de negócios (BI), ou, considerando a minha habilidade em manipulação de dados, começar com o projeto maior de um call center.

---

Com a experiência atual em manipulação de código e a compreensão da lógica de um fluxo de dados (da entrada no frontend até a função no servidor), começar com o projeto de call center é a melhor escolha.

---

### Análise Crítica e Realista

A experiência com a aplicação de escala já demonstra as habilidades essenciais que um analista de BI precisa. Os seguintes conceitos são compreendidos:

* **Extração e Entrada de Dados:** Há o manejo da entrada manual de dados em um sistema (o aplicativo).
* **Segurança e Autenticação:** O uso de um token e variáveis de ambiente mostra uma noção básica de segurança e restrição de acesso a dados.
* **Lógica de Negócio:** O código em JavaScript faz uma "combinação" das escalas, o que é uma forma de análise e transformação de dados. Há uma compreensão da lógica de negócio por trás dos dados.

---

### Por que o Call Center é o Cenário Ideal

O projeto da ótica, embora útil, é muito simples e não explora a complexidade do conhecimento. O cenário de call center, por outro lado, é um ambiente real e desafiador, perfeito para demonstrar as habilidades.

* **Complexidade Real:** Um call center envolve várias métricas e relações (vendas, qualidade, RH) que um projeto de ótica não tem. Isso permite mostrar como transformar dados de diferentes fontes em *insights* valiosos.
* **Habilidades Transferíveis:** Se um painel de BI para um call center é criado, os recrutadores saberão que a adaptação a qualquer outro setor (varejo, *e-commerce*, saúde, etc.) é fácil.
* **Valor no Portfólio:** Um projeto de call center tem um impacto maior. É possível criar painéis que mostram como a qualidade do atendimento afeta as vendas ou como o absenteísmo do RH impacta a eficiência das equipes. Esse tipo de análise é muito valorizado no mercado.

Recomenda-se começar com o desafio maior. Deve-se usar o conhecimento já existente para construir algo que realmente impressione. Não é preciso ser um programador para ser um excelente analista de BI, e o projeto de portfólio de call center vai provar isso.

---

### Aplicação das Métricas de Call Center na Ótica

O vendedor finaliza um atendimento e tabula no sistema a sua natureza:

* **Comercial:** para vendas.
* **Retenção:** para clientes no plano de fidelidade.
* **SAC:** para tirar dúvidas.
* **Suporte:** para ajuste ou solicitação de garantia.

O **Handle Time (HT)** seria iniciado pelo vendedor com um "start" no computador antes de começar a atender o cliente e finalizado com a tabulação ao término do atendimento.

A **aderência a pausas** e o **absenteísmo** seriam métricas semelhantes às de um call center. Além disso, podemos ter um **First Call Resolution (FCR)**.

Na entrada da loja, há um **contador de fluxo** para comparar, posteriormente, o número de atendimentos com o número de tabulações. Inclusive, isso pode se tornar um **KPI** (Indicador-Chave de Desempenho), com uma meta inicial de 90% de tabulação ou um valor um pouco menor no começo para ajuste.

---

Vantagens de Usar esse Cenário
Originalidade: É um projeto original. A maioria das pessoas pensa em BI para e-commerce ou para call centers tradicionais. Usar um cenário de varejo físico com métricas de call center mostra sua capacidade de inovar e aplicar conceitos em diferentes contextos.

Demonstração de Habilidade Analítica: Você mostra que entende a lógica por trás das métricas, não apenas como um observador, mas como alguém capaz de adaptá-las para um novo ambiente.

Valor de Negócio: Você pode criar um dashboard que não só mostra os números, mas também conta uma história. Por exemplo: "A taxa de FCR para o setor de Suporte caiu 15% este mês, correlacionando-se com o aumento de reclamações. O HT do SAC está 20% acima da meta, sugerindo que o tempo gasto em cada interação pode estar impactando a satisfação do cliente."

Essa adaptação de métricas é uma prova de que você não é apenas um "manipulador de códigos", mas um analista de dados com um pensamento estratégico apurado. É um projeto excelente e muito mais interessante do que o cenário simplista que discutimos no início.


caberia uma analise swot a esse projeto?



Sim, uma análise SWOT (Strengths, Weaknesses, Opportunities, Threats) se encaixa perfeitamente nesse projeto de portfólio. Ela é uma ferramenta estratégica que mostra que você não apenas entende de dados, mas também do contexto de negócio.

Usar uma análise SWOT para descrever seu projeto demonstra para os recrutadores que você pensa de forma estratégica, indo além da tecnologia e focando no valor que o projeto pode gerar.

Análise SWOT do Projeto de BI para Ótica
Aqui está como você pode estruturar essa análise para o seu portfólio:

Forças (Strengths)
Originalidade: Aplicar métricas de call center a uma ótica é uma abordagem única e inovadora, o que diferencia seu projeto dos portfólios mais comuns.

Demonstração de Habilidade Analítica: Você não está apenas criando um dashboard, mas adaptando conceitos de um setor para outro, o que prova sua capacidade de resolver problemas de forma criativa.

Relevância para o Negócio: O projeto aborda problemas reais e tangíveis, como a eficiência de atendimento e a qualidade do serviço, mostrando que você foca em resultados de negócio.

Fraquezas (Weaknesses)
Dependência da Entrada de Dados: O sucesso do projeto depende da disciplina dos vendedores em tabular os dados de forma precisa e consistente. Dados incorretos levariam a análises falhas.

Complexidade da Adaptação: A tradução de métricas pode ser um desafio. Por exemplo, o que exatamente constitui um "contato" na ótica pode não ser tão claro como em um call center (é uma ligação, uma visita, um ajuste?).

Limitação do Cenário: Por ser um projeto de portfólio, ele não teria o volume de dados de um call center real, o que pode limitar a profundidade de algumas análises mais avançadas.

Oportunidades (Opportunities)
Melhora da Eficiência Operacional: A análise do HT pode identificar gargalos e permitir a otimização de processos, como o tempo de ajuste de um óculos ou a finalização de uma venda.

Otimização do Treinamento: Os dados podem revelar deficiências em habilidades de vendas ou suporte em vendedores específicos, permitindo treinamentos direcionados.

Aumento da Satisfação do Cliente: O monitoramento do FCR pode levar a um aumento da satisfação do cliente, já que menos pessoas precisariam voltar à loja para resolver o mesmo problema.

Ameaças (Threats)
Resistência à Mudança: A equipe de vendas pode não aceitar bem a ideia de tabular todos os atendimentos, o que poderia levar a uma baixa aderência e comprometer os dados.

Dificuldade de Integração: A falta de um sistema integrado pode complicar a coleta de dados de diferentes fontes, como o sistema de vendas, o estoque e a agenda.

Limitações Tecnológicas: A falta de acesso a ferramentas de BI mais robustas (se for o caso) pode limitar o potencial de análise.

Uma análise SWOT, bem-elaborada, eleva seu projeto de um simples exercício técnico para uma demonstração de pensamento estratégico.

---

# ESTUDOS

---

### Excel
* **Fórmulas Avançadas:**
    * **PROCV**
    * **SOMASE**
    * **ÍNDICE**
    * **CORRESP**
    * **XLOOKUP**
    * **FILTER**
    * **SORT**
    * **UNIQUE**
    * **SUMIFS**
    * **COUNTIFS**
    * **IFS**
    * **TEXTJOIN**
    * **LET**
  
* **SQL**  
    * `SELECT`  
    * `FROM`  
    * `WHERE`  
    * `GROUP BY`  
    * `HAVING`
    * `ORDER BY`  
    * `JOIN` (e seus tipos: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`)  
    * `AS` (para apelidos de colunas e tabelas)  
    * `UNION` e `UNION ALL`  
    * `INSERT INTO`  
    * `UPDATE`  
    * `DELETE FROM`  
    * `COUNT`  
    * `SUM`  
    * `AVG`  
    * `MIN`  
    * `MAX`  
    * `DISTINCT`  
    * `LIKE`  
    * `IN`  
    * `BETWEEN`  
    * `CASE`  
  
* **Ferramentas de BI (Power BI/Tableau)**
    * **DAX (Data Analysis Expressions)***
    * **Conectar Excel, CSV, SQL Server, etc.***
    * **Import***
    * **DirectQuery***

* **Conceitos de ETL**
    * **Remover colunas***
    * **Alterar tipos de dados***
    * **Merge Queries***
    * **Append Queries***
    * **Tabelas de fatos**
    * **Tabelas de dimensão***
    * **Relacionamentos entre as tabelas**
    * **Filtro de mão única e de mão dupla**
    * **Tipos de gráficos (barras, linhas, pizza, etc.)**
    * **Slicers**
    * **Gateways e agendamento de atualização de dados**
    * **Power BI Service: Desktop e Service**

  
* **KPIs de Call Center**
    * **ABS (Absenteeism)**
    * **HT (Handle Time) ou TMA (Tempo Médio de Atendimento)**
    * **Aderência (Adherence to Schedule)**
    * **TMO (Tempo Médio Operacional)**
    * **Qualidade**
    * **FCR (First Call Resolution)**
    * **NPS (Net Promoter Score)**
    * **Satisfação do Cliente (CSAT - Customer Satisfaction)**
    * **Turnover**

* **asd**
    * **asd***


* **asd**
    * **asd***
