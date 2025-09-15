# biAnalyst
An BI analyst collects, cleans, and analyzes data to identify trends, transforming complex information into actionable insights. They create visual reports and dashboards to help companies make strategic decisions, improve efficiency, and achieve business goals.

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
