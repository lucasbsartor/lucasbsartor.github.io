---
outline: deep
---

# Manual de Sobrevivência do Tech Lead

> Caiu de paraquedas no papel de Tech Lead e pensou "Ferrou, e agora?"

Relaxa, respira e bora juntos! Esse aqui é o manual de sobrevivência pra quem virou líder técnico e não recebeu manual de instruções. Também conhecido como "O que eu queria ter tido quando jogaram essa bomba no meu colo".

## ✨ O que é Liderança Técnica

> Seu trabalho é multiplicar o impacto do time, não só o seu. Fácil né, né?

Ser Tech Lead não é só codar bonito. Você vira facilitador, mentor, psicólogo de plantão e, às vezes, bombeiro. O segredo? Criar um ambiente seguro pra galera errar, aprender e crescer junto. Seu objetivo é fazer o time voar mais alto, não ser o herói solitário do teclado. Ah, e uma coisa importante: você não virou o chefe de RH. Gerenciar carreira, salários e questões administrativas mais burocráticas geralmente fica a cargo do seu gerente (ou de quem faz gestão de pessoas, as vezes é você mesmo). Seu foco é ser a **engrenagem técnica** e **multiplicar o impacto do time**, dando uma força para galera crescer. Se o seu time performa, se o código é bom e se o povo está feliz... parabéns, você está no caminho certo!

## 👨‍💻 TM vs TL vs IC

> O que cada amiguinho faz no parquinho?

Antes de mais nada, vamos esclarecer os papéis:

- **Tech Lead (TL):** Foca em guiar o time tecnicamente, garantir qualidade, facilitar comunicação e resolver pepinos. É o elo entre o time de engenharia e o resto da empresa.
- **Tech Manager (TM):** Além do papel de TL, também cuida da gestão de pessoas, carreira e desenvolvimento do time. É o cara que entende de código e gente.
- **Individual Contributor (IC):** É o dev que foca em entregar código, sem as responsabilidades de liderança. Pode ser júnior, pleno ou sênior, mas não tem a carga de guiar o time.

## 🧭 Áreas de Foco

> O que você vai fazer mesmo?

Ser Tech Lead é equilibrar três pratos ao mesmo tempo: Pessoas, Produto e Processos. Se focar só em um, o resto cai. Bora detalhar cada um:

### Pessoas

Seu maior ativo é gente. Invista tempo em:

- **Desenvolvimento e bem-estar:** Ajude o time a crescer, dê feedback, incentive aprendizado e cuide do clima. Gente feliz entrega melhor.
- **Mentoria e suporte:** Seja referência técnica, mas também ouça, apoie e tire bloqueios. Não é só resolver bug, é destravar pessoas.
- **Cultura e segurança:** Crie ambiente seguro pra errar, perguntar e discordar. Time bom é time que confia um no outro.
- **Contratação e onboarding:** Ajude a trazer gente boa e garantir que ninguém fica perdido nos primeiros dias.

### Produto

Não adianta código lindo se não resolve problema real. Seu papel é:

- **Entregar valor:** Garanta que o time entende o “porquê” das tarefas, não só o “como”. Foque no impacto pro usuário e pro negócio.
- **Alinhar expectativas:** Traduza o papo de negócio pra linguagem do time e vice-versa. Evite telefone sem fio.
- **Priorizar junto:** Ajude a escolher o que faz mais sentido entregar agora, equilibrando dívida técnica e novas features.
- **Métricas e sucesso:** Meça resultado, não só entrega. O que importa é o produto rodando bem e gerando valor.

### Processos

Processo não é burocracia, é pra ajudar o time a fluir melhor:

- **Planejamento e visibilidade:** Mantenha todo mundo alinhado sobre o que vem pela frente. Transparência evita crise.
- **Ritos ágeis:** Daily, planning, retro... Use pra destravar, não só pra preencher agenda.
- **Qualidade e entrega:** Puxe boas práticas de teste, revisão, documentação e deploy. Done é done mesmo.
- **Melhoria contínua:** Sempre ajuste o processo com o time. O que não serve, muda. O que funciona, mantém.

::: tip 🧠 Lembre-se
Tech Lead bom cuida de gente, entrega produto que faz diferença e garante processo que não trava. Se equilibrar os três, o resto vem.
:::

## 🎯 Planejamento e Visibilidade

> É chato e ninguém gosta, mas pular essa parte é pedir pra se enrolar depois!

Planejamento não é só preencher o Jira ou seja lá o board que sua empresa paga ou ganha de brinde com uma suíte de ferramentas. É garantir que todo mundo sabe o que vai rolar, por que e onde pode dar ruim. Ah e mais importante: Se der ruim, avisa logo, ninguém curte surpresa de última hora.

### Time no Centro

> Planejamento não é solo

Ninguém entende melhor o trabalho do que quem vai botar a mão na massa. Se for construir uma casa, você não vai só ler a planta do engenheiro e dizer pra executar sem falar com o pedreiro né? Software é a mesma coisa, chame o time pra planejar junto: isso evita chute errado, engaja a galera e deixa todo mundo dono do resultado.

- **Na prática:** Traga todo mundo pro planejamento e refinamento. Não precisa virar debate infinito, mas todo mundo deve ser ouvido.
- **Exemplo:** Vai começar uma feature nova? Pergunte pro time: "O que pode dar ruim aqui? Tem dependência? Que dados precisamos? Algum risco de performance?" Troque ideia sobre abordagens e _trade-offs_.

### Refinamento

> Clareza é Meio Caminho Andado

História mal explicada = retrabalho na certa. Refinamento é processo, não evento. O time precisa entender o que vai fazer antes de codar.

- **Na prática:** Faça sessões regulares pra quebrar épicos em tarefas pequenas, discutir dependências e critérios de aceitação.
- **Exemplo:** Antes do sprint, reserve 30-60 min pra refinar as próximas histórias. Use quadro branco, desenhe fluxo, pergunte: "E se o usuário fizer X?", "Como lida com erro Y?", "Tem caso de borda Z?". Saia da reunião com todo mundo na mesma página.

### Transparência

> Ninguém gosta de surpresa ruim

Comunicação clara evita crise. Se aparecer problema, avise rápido e não espere reunião.

- **Na prática:** Tenha canais claros pra avisar gestão e produto. Não espere perguntarem, antecipe.
- **Exemplo:** Deu ruim numa integração? Manda mensagem no Slack: "Atenção: bloqueio na integração com Serviço X, impacto de ~2 dias. Já estamos vendo alternativas." E siga atualizando.

### "Done" de Verdade

> O que é "pronto" para você?

"Pronto" pra um pode não ser pra outro. Defina junto o que é "Done" pra não ter surpresa na entrega.

- **Na prática:** Crie e revise a DoD do time, cobrindo tudo: código, testes, docs, monitoramento, etc.
- **Exemplo:** Pra uma feature de SSO, "Done" pode ser: código revisado, testes passando, docs atualizadas, alertas configurados, runbook pronto e aprovação do PM/QA. Assim ninguém acha que terminou quando ainda falta metade.
- **DoD sem dor de cabeça:**
  - **Reuna o time:** Chame a galera para conversar e ententeder o que cada um acha que é "Done".
  - **Liste o básico:** Do óbvio mesmo, como "código revisado", "testes passando", etc
  - **Vá além do código:** Literalmente o que o nome diz, "Done" é mais que código. Inclua testes, documentação, monitoramento, etc.
  - **Especifique:** Filtre e detalhe os itens. Em vez de testado, use "testes unitários cobrindo 80% do código".
  - **Revise e atualize:** DoD não é escrito em pedra, revise regularmente com o time e ajuste, faça perguntar como: "O DoD esta funcionando? Faz sentido?" e "Devemos adicionar ou remover algo?"

## 🧠 Gerenciamento de Pessoas e Dinâmicas de Equipe

> Gente feliz, time feliz

Virou Tech Lead? Agora seu maior impacto é nas pessoas, não só no código. Liderar gente é desafio e recompensa na mesma medida. Não basta ser bom de teclado: tem que ser bom de gente.

### Contratação e Onboarding

> Comece com o pé direito

- **Contratação esperta:** Não basta saber codar, tem que combinar com o time. Avalie técnica e cultura. Faça desafios práticos, pair programming, veja como o candidato lida com feedback e conflito. TL/TM participa de tudo e tem voz forte na decisão.
- **Onboarding de verdade:** Plano claro pros primeiros 90 dias, buddy system, acesso a tudo, PR pequeno logo de cara, depois feature simples, depois autonomia. TL/TM garante que ninguém fica perdido e todo mundo se sente parte do time rápido.

### Desempenho e Carreira

> Crescimento é o nome do jogo

- **Avaliação de desempenho:** Faça review regular, com objetivo claro e feedback direto. Use framework de carreira, destaque pontos fortes e o que precisa melhorar. TL/TM coleta feedback, escreve avaliação e apresenta pro dev.
- **Desenvolvimento de carreira:** Converse sobre futuro, ajude a traçar plano, indique projetos, cursos, mentorias. TL/TM é coach, não chefe de cobrança.

### Ambiente Saudável

> Cultura, psicologia e clima

- **Feedback sempre:** Feedback é via de mão dupla. TL/TM dá o exemplo e cria ambiente seguro pra todo mundo falar.
- **Segurança psicológica:** Errou? Fala, aprende e segue. TL/TM protege o time, incentiva vulnerabilidade e humildade.
- **Conflito? Resolve logo:** Conflito é normal, mas não pode virar novela. TL/TM media, foca no problema, não na pessoa, e ensina o time a resolver junto.
- **Motivação e engajamento:** Descubra o que motiva cada um (autonomia, desafio, reconhecimento). Dê espaço, celebre vitórias, fique de olho em sinais de desânimo ou burnout.
- **Retenção:** Gente boa fica onde sente que cresce, aprende e é reconhecida. TL/TM cuida do clima, oferece desafio, mentoria e defende o time na empresa.

::: tip 🧠 Lembre-se
Invista tanto no time quanto no software. Gente engajada é o maior ativo que você pode ter.
:::

## 🤝 Colaboração e Conhecimento Compartilhado

> Silo de conhecimento é cilada, Bino!

Time bom compartilha tudo: código, pepino e aprendizado. O Tech Lead tem que puxar esse bonde.

### Quadro é Fonte de Verdade

- Mantenha o board (Jira, Trello, Azure DevOps, post-it na parede, tanto faz) sempre atualizado e visível.
- Tarefa parada? Bloqueio? Tem que estar lá, com motivo e dono.
- Daily é na frente do quadro, pra ninguém fingir que não viu.

### Mão na Massa Juntos

- **Pair Programming:** Dois devs, um teclado, revezando. Um dirige, outro navega. Troca ideia, aprende junto e pega bug antes de virar lenda urbana.
- **Mob Programming:** Time inteiro focado numa tarefa só. Bom pra problema cabeludo ou pra todo mundo pegar contexto novo. Só não vale virar reunião infinita.
- **Code Review de Verdade:** Não é só caçar bug. É pra trocar conhecimento, sugerir melhoria, ensinar e aprender. PR pequeno, discussão respeitosa e foco no que importa. Automatize o que der (lint, formatação) e use o review pra lógica e design.

### Quebrando Silos

- **Rotação (Buddy System):** Faça a galera rodar entre módulos. Quem manja ajuda quem tá chegando, todo mundo aprende e ninguém vira gargalo.
- **Guildas e Comunidades:** Junte quem curte o mesmo assunto pra trocar ideia, mostrar solução, fazer workshop.
- **Documentação Viva:** Wiki, README, runbook, ADR: tudo atualizado e fácil de achar. Decisão importante? Documenta. Serviço novo? README decente.

::: tip 🧠 Lembre-se
Tech Lead não só participa, mas puxa, incentiva e dá o exemplo. Crie um ambiente seguro pra galera perguntar, errar, aprender e compartilhar. Silo é sintoma de time travado!
:::

## 🗣️ Boas Práticas de Comunicação

> Fale Direito, não enrole

Comunicação é a arma secreta do Tech Lead. Se não for clara, direta e sem mimimi, vira telefone sem fio e só dá ruim.

### Seja Direto e Objetivo

- Vai direto ao ponto. Comece pelo que importa, sem rodeio.
- Exemplo: Nada de “Oi, tudo bem? Posso perguntar uma coisa?”. Manda logo: “Preciso de ajuda no módulo X, tem 5 minutos?”

### Use o Canal Certo

- **Chat:** Dúvida rápida, status, link, alerta. Não inventa de discutir a vida aqui.
- **Vídeo:** Pra resolver treta, brainstorm, feedback, ou quando o texto não resolve.
- **Docs compartilhados:** Decisão importante, especificação, runbook, conhecimento pra galera.
- **E-mail:** Só pra anúncio formal ou quando precisa registrar. Não espere resposta rápida.

### Decisão Boa é Decisão Registrada

- Toda decisão técnica importante tem que estar documentada (ADR, doc, wiki, o que for).
- Exemplo: Terminou reunião sobre banco de dados? Escreve um ADR com o que foi decidido e por quê. Compartilha com o time.

### Jogue Limpo e Tenha Empatia

- Sempre assuma boa intenção. Se pintar ruído, chama no vídeo e resolve na hora.
- Evite tretar por texto, sarcasmo ou julgamento. Texto não tem tom, só aumenta o fogo.
- Exemplo: Mensagem atravessada? “Vamos conversar rapidinho por vídeo pra alinhar?”

### Comunique Antes do Problema Virar Crise

- Deu ruim, achou bloqueio ou atraso? Fala na hora, não espera daily ou reunião.
- Exemplo: “Integração com serviço X travou, pode atrasar 2 dias. Já estamos correndo atrás, aviso quando destravar.”

### Feedback é Via de Mão Dupla

- Pergunte se foi claro e peça feedback sobre sua comunicação.
- TL/TM tem que puxar esse padrão e ajudar o time a melhorar. Comunicação ruim é metade dos bugs do projeto.

::: tip 🧠 Lembre-se
No fim, Tech Lead não é só quem resolve pepino, mas quem faz o time se entender sem precisar de tradutor.
:::

## 📏 Estimativas e Refinamento

> Chutando com Consciência

Estimar é tipo prever o tempo: arte, ciência e um pouco de fé. Não é só sobre horas, mas sobre o tamanho da encrenca, o tanto de dúvida e o esforço pra resolver. Bora deixar isso menos chato e mais útil pro time.

### Pontos Fibonacci

> Pra saber onde está se metendo

Fibonacci (1, 2, 3, 5, 8, 13, 21...) serve pra medir o tamanho do pepino. Quanto maior o número, mais difícil prever o que vem pela frente.

| Pontos | O que significa na real                                                                      |
| ------ | -------------------------------------------------------------------------------------------- |
| 1      | **Muito Pequena:** Coisa rápida, tipo arrumar um texto ou mexer num CSS.                     |
| 2      | **Pequena:** Bugzinho, campo novo, ajuste simples.                                           |
| 3      | **Média:** Feature simples, integração conhecida, refatoração leve.                          |
| 5      | **Grande:** Feature com várias telas, integração nova, refatoração de peso.                  |
| 8      | **Muito Grande:** Módulo novo, migração, integração cabulosa. Quase sempre precisa quebrar.  |
| 13     | **Épica:** Projeto gigante, cheio de risco. Se cair aqui, já sabe: quebra em partes menores! |

### T-Shirt Sizing

> Não é só pra roupa, é pra estimar tarefa também!

Quer estimar rapidão? Usa P, M, G, GG. Serve pra agrupar tarefas parecidas e ver se não tá exagerando, se funciona para você comprar roupa então funciona aqui também.

| Parâmetro         | P (1)      | M (2)           | G (3)          | GG (4)           |
| ----------------- | ---------- | --------------- | -------------- | ---------------- |
| **Dependências**  | Isolada    | Algumas         | Muitas         | Um caos          |
| **Testabilidade** | Fácil      | Ok              | Difícil        | Quase impossível |
| **Incertezas**    | Tudo claro | Algumas dúvidas | Muitas dúvidas | Só Deus sabe     |
| **Complexidade**  | Tranquilo  | Médio           | Complicado     | Altíssimo        |

::: tip 🥇 Regra de Ouro
Passou de 10 pontos? Liga o alerta. Passou de 13? Quebra sem dó.
:::

### Como Converter T-Shirt pra Fibonacci

Pra não ficar perdido, usa essa tabela:

| Soma T-Shirt | Fibonacci     | O que quer dizer                 |
| ------------ | ------------- | -------------------------------- |
| 4-6          | 1             | Trivial, sem risco.              |
| 7-8          | 2             | Pequena, de boa.                 |
| 9-10         | 3             | Média, atenção nos detalhes.     |
| 11-12        | 5             | Grande, já começa a complicar.   |
| 13-14        | 8             | Muito grande, cuidado!           |
| 15           | 13            | Épica, quebra já!                |
| >15          | Quebra tarefa | Tá gigante, não vai rolar assim. |

> **Dica:** Use a tabela pra puxar papo no refinamento e alinhar com o time. Ajuste conforme o contexto.

::: warning 🚨 Pontos de Atenção

- **Viés de Otimismo:** Todo dev acha que faz rápido. Sempre põe um “plus a mais” pro imprevisto.
- **Incerteza:** Quanto mais dúvida, maior o ponto. 13 ou 21 não é tempo, é sinal de “quebra essa tarefa!”.
- **É do time, não da pessoa:** Estime pensando no grupo, não só em você.
- **Não é contrato:** Estimativa é chute informado, não promessa. Pode (e deve) mudar se aparecer novidade.

:::

## 🃏 Planning Poker

> Não é aposta do Tigrinho, é para estimar sem sofrimento

Planning Poker é aquele joguinho maroto pra estimar tarefas sem cair no papo do “fulano falou 3, então vou de 3 também, hihi levei vantagem”. Cada um escolhe seu número escondido, todo mundo revela junto e, se sair um 2 e um 13 pra mesma tarefa, bora discutir até alinhar.

### Por que usar?

Evita efeito manada, força a galera a pensar e discutir de verdade, e todo mundo sai sabendo onde tá pisando.

### Como fazer

1. PM ou Tech Lead lê a história e tira dúvidas.
2. Cada dev escolhe seu número (Fibonacci, claro) sem mostrar.
3. Todo mundo revela junto.
4. Se tiver diferença grande, quem chutou mais alto e mais baixo explica o motivo.
5. O time discute, tira as dúvidas e vota de novo até chegar num consenso (ou pelo menos perto disso).

::: tip 🧠 Lembre-se

O objetivo não é acertar na mosca, é aprender junto, nivelar entendimento e achar as tretas antes de virar problema. No fim, é mais sobre conversa do que sobre número.

:::

## 🧩 Tipos de Tarefas

> Organização é a chave para não virar bagunça

Pra não virar telefone sem fio, bora alinhar o que é cada coisa no board:

### Theme (Tema)

O “grande objetivo” da empresa. Tipo: “Melhorar o checkout” ou “Expandir pra fora do Brasil”. TL/TM ajuda a garantir que tudo que o time faz puxa pra esse lado.

### Epic (Épico)

Um projetão que não cabe numa sprint só. Exemplo: “Novo fluxo de pagamento com Pix”. TL/TM garante que o épico tá bem definido e quebrado em histórias menores.

### Story (História)

Entrega pequena, valor direto pro usuário, cabe numa sprint. Sempre no formato “Como X, quero Y, pra Z”. TL/TM ajuda a refinar, quebrar e deixar tudo claro.

### Task (Tarefa)

Passo técnico pra entregar uma história ou épico. Não aparece pro usuário, mas sem ela nada anda. TL/TM ajuda o time a listar tudo que precisa ser feito.

### Bug

Algo que quebrou ou não tá funcionando como deveria. TL/TM ajuda a priorizar e resolve logo o que for crítico.

### Technical Debt (Dívida Técnica)

Gambiarras, atalhos ou código velho que atrapalha o futuro. TL/TM defende tempo pra arrumar e explica por que isso importa.

::: tip 🧠 Lembre-se
Usar esses nomes direito evita confusão, facilita o planejamento e todo mundo sabe o que tá rolando. Board organizado, vida mais fácil!
:::

::: warning 🚨 Atenção
Os tipos de tarefa acima não são uma lei, mas sim diretrizes. Adapte, adicione e remova conforme o que funciona melhor pro seu time. O importante é todo mundo entender e falar a mesma língua.
:::

## 🗓️ Ritos do Time

> Ritmo é tudo, mas não precisa ser maratona

Ritos ágeis são o ritmo do time: alinham, destravam e melhoram o que precisa. O Tech Lead tem que garantir que eles servem pra algo e não viram reunião só pra bater ponto.

### Ritos do Dia a Dia

- **Daily (Stand-up):**  
  Bate-papo rápido (até 15 min) pra ver o que cada um fez, vai fazer e se tem pepino no caminho. Nada de status pro chefe, é do time pro time. Impedimento? Anota e resolve depois, sem virar debate técnico ali.

- **Refinamento (Grooming):**  
  Quebra tarefa grande, tira dúvida, discute solução e deixa o backlog pronto pro próximo sprint. Pode ser reunião ou um papo rápido em par/mob. TL/TM ajuda a puxar cenário de erro, dependência e valor de negócio.

- **1:1 (One-on-One):**  
  Conversa individual entre TL/Gerente e cada dev. Serve pra falar de carreira, feedback, desafios, bem-estar e o que mais pintar. TL tem que ouvir, apoiar, dar feedback real e ajudar a destravar. Não é só pra cobrar entrega.

### Ritos da Sprint

- **Sprint Planning:**  
  Time define o objetivo da sprint e escolhe o que vai entregar. TL/TM ajuda a não abraçar o mundo, foca no que dá pra fazer e quebra as histórias em tarefas.

- **Sprint Review (Demo):**  
  Mostra o que foi entregue pra galera de fora (PM, gerente, vendas, etc.), recebe feedback e comemora. TL/TM ajuda a preparar a demo e garantir que o valor foi entregue de verdade.

- **Retrospectiva (Retro):**  
  Hora de falar o que foi bom, o que deu ruim e o que pode melhorar. Ambiente seguro, sem caça às bruxas. TL/TM facilita, ajuda a transformar reclamação em ação e garante que o combinado vai ser acompanhado.

::: tip 🏅 Dicas de Ouro

- Sempre explique o porquê de cada rito. Se não faz sentido, ninguém engaja.
- Adapte o formato pro que funciona no seu time. Não precisa seguir receita de bolo.
- Reunião boa é reunião rápida e útil.
- Crie espaço seguro pra todo mundo falar, principalmente na retro.
- O que combinar, cobre depois. Se não acompanhar, ninguém leva a sério.

:::

::: warning 🚨 Atenção
No fim, rito bom é o que faz o time andar pra frente sem virar reunião só pra preencher agenda.
:::

## ✅ Qualidade e Operabilidade

> Vai passar vergonha se shippar sem isso!

Qualidade e operabilidade não são bônus, são o mínimo. Antes de mandar pra produção, tem que passar no “checklist do Tech Lead”. Bug em prod custa caro e “Done” só existe se tá redondo.

### Testes no CI/CD

Todo tipo de teste (unitário, integração, E2E, performance, segurança) tem que rodar automático no pipeline. Falhou? Não sobe. O TL/TM garante que a cobertura é boa de verdade e que o pipeline é rápido e confiável.  
 _Exemplo:_ PR só faz merge se todos os testes passarem no CI.

### Análise Estática

Ferramentas tipo SonarQube, ESLint, etc. pegam bug, código feio e risco de segurança antes de virar dor de cabeça. TL/TM mantém as regras e cobra que ninguém ignore alerta crítico.  
 _Exemplo:_ PR barrado se achar vulnerabilidade grave.

### APM (Monitoramento de Performance)

Ferramentas tipo New Relic, Datadog, Prometheus mostram se a aplicação tá saudável em produção. TL/TM garante que tudo novo tá monitorado e alerta dispara se der ruim.  
 _Exemplo:_ Deploy de API novo? Tem que ter métrica de latência e erro, alerta se passar do limite.

### Health Check

Serviço tem que ter endpoint de health check mostrando se tá vivo e conectado nas dependências.  
 _Exemplo:_ `/health` retorna 200 se tá tudo ok, erro se não tá.

### Alertas Ativos

Alerta no Slack/PagerDuty se métrica crítica passar do limite. TL/TM define o que importa e garante que alerta é útil, não só barulho.  
 _Exemplo:_ Caiu taxa de sucesso de pagamento? Alerta na hora.

### Release Versionada

Segue SemVer (MAJOR.MINOR.PATCH). Ajuda a rastrear, voltar atrás e saber o que mudou. TL/TM garante que todo release tem tag e nome certo.  
 _Exemplo:_ Mudou API de forma incompatível? Sobe pra 2.0.0.

### Runbook Atualizado

Tem que ter passo a passo pra operar, diagnosticar e resolver pepino. TL/TM cobra runbook junto com a feature, não depois do incêndio.  
 _Exemplo:_ Feature nova? Tem runbook explicando como monitorar, reiniciar e resolver erro.

::: tip 🧠 Lembre-se

Adotando isso, o time deixa de ser só “codador” e vira engenheiro de verdade, entregando software pronto pra guerra.

:::

::: warning 🚨 Atenção
Bug em produção não é só problema do dev que fez, é do time todo. Tech Lead tem que puxar a responsabilidade coletiva e garantir que todo mundo tá na mesma página sobre qualidade e operabilidade.
:::

## 📝 Documentação

> Não seja o único que sabe das coisas

Documentação é o seguro de vida do time: evita dor de cabeça, acelera onboarding e salva geral quando alguém sai ou esquece o que fez. Tech Lead bom puxa a cultura de documentar, não deixa virar cemitério de informação perdida.

### Princípios da Boa Documentação

- **Fácil de achar:** Nada de “onde tá aquele doc mesmo?”
- **Atualizada:** Não serve doc velha.
- **Direta ao ponto:** Sem enrolação.
- **Clara:** Pra qualquer um entender, até quem não é dev.
- **Com propósito:** Cada doc tem que ter motivo pra existir.
- **Com dono:** Alguém cuida e mantém.

### O que não pode faltar

1. **User Flow:**  
   Diagrama mostrando o caminho do usuário. Ajuda dev, QA e produto a falarem a mesma língua.  
   _Dica:_ Use Miro, Excalidraw, Lucidchart, etc. e linka no card da história.

2. **BPMN:**  
   Processo de negócio desenhado, com quem faz o quê. Pra fluxo complexo, desenha e deixa no wiki.

3. **ADRs:**  
   Decisões arquiteturais registradas: problema, opções, escolha e porquê. Salva no repositório ou wiki.

4. **README:**  
   O cartão de visitas do projeto. Como roda, testa, deploya e o que usa. Tem que estar sempre atualizado.

5. **Runbook/Playbook:**  
   Passo a passo pra operar e resolver pepino em produção. Escreve junto com a feature, não depois do incêndio.

6. **Doc de API (Swagger/OpenAPI):**  
   Especificação formal da API. Ajuda integração, tira dúvida e evita retrabalho.  
   _Dica:_ API-first sempre que der.

::: tip 📝 Papel do Tech Lead

- Define padrão, cobra e revisa doc.
- Incentiva o time a documentar (não é só “coisa de dev júnior”).
- Garante ferramenta boa pra galera (wiki, diagramador, etc).
- Dá o exemplo: documenta também.

:::

::: warning 🚨 Atenção
Documentar faz parte da tarefa. Sem doc, sem entrega. Conhecimento só na cabeça é dívida, não ativo.  
Invista em documentação e pare de ser o dev que some e leva metade do sistema junto. Conhecimento bom é o que fica pra todo mundo.
:::

## 📈 Estratégia e Execução Técnica

> Da visão ao código que aguenta o tranco

Não basta meter a mão no código, mas garantir que o sistema vai durar, escalar e não virar dor de cabeça amanhã.

### Decisões Arquitetônicas

- **ADR não é frescura:** Decisão grande? Documenta! Mostre o problema, as opções, o que escolheu e por quê. Assim ninguém fica perdido depois.
- **Trade-off é vida:** Não existe escolha perfeita. Sempre tem prós e contras. O papel do TL é ajudar o time a enxergar isso e não cair em modinha.

### Dívida Técnica

> Pague Antes que Vire Bola de Neve

- **Radar ligado:** Mapeie e registre as dívidas técnicas. Priorize junto com o PM e explique o custo de não resolver.
- **Dívida boa vs. dívida ruim:** Prototipou rápido? Ok, mas não esquece de pagar depois. Atalho por preguiça? Corta logo.
- **Automatize pra não acumular:** Invista em testes, CI/CD, linters e padrões pra evitar que a dívida volte.

### Escalabilidade e Confiabilidade

- **Pense grande desde cedo:** Faça serviços stateless, use cache, fila, banco que escala. Mesmo que não precise agora, já deixa o caminho pronto.
- **Observabilidade não é opcional:** Log decente, métrica, tracing e alerta. Se der ruim, tem que saber o que, onde e por quê.
- **Incidente? TL lidera:** Na treta, mantenha a calma, coordene a galera, comunique e documente tudo. Depois faz post-mortem sem caça às bruxas e garante que as lições viram ação.

### Inovação e Exploração

- **Hack Day é sagrado:** Separe tempo pra galera testar coisa nova, brincar com tech diferente ou refatorar aquele módulo jurássico.
- **POC antes de casar:** Vai adotar tech nova? Faz uma prova de conceito, aprende, valida e só depois mergulha de cabeça.

::: tip 🧠 Lembre-se
Estratégia técnica boa é aquela que faz o sistema rodar liso hoje e não vira bomba-relógio amanhã. TL de verdade constrói pra durar e não deixa o time virar refém das próprias escolhas.
:::

## 🤝 Colaboração com Produto e Negócio

> Ninguém vive no Vácuo

Tech Lead bom joga junto com Produto e Negócio pra garantir que o time entrega valor de verdade e não só código bonito.

### Comunicação com Product Managers (PMs)

- **Parceria de verdade:** TL e PM são sócios no sucesso do produto. Não é só receber backlog: participe das discussões, entenda o problema e traga visão técnica desde o começo.
- **Tradutor oficial:** TL traduz o “businessês” do PM pra linguagem do time e vice-versa. Se pedirem “pagamento instantâneo”, explique o que isso significa na prática e os limites técnicos. Nada de telefone sem fio!

### Sucesso e Métricas

- **Defina sucesso junto:** Combine com o PM o que é sucesso pra cada feature, tanto em negócio quanto em tech. Exemplo: “Queremos +X% de cliques (negócio) e latência < Z ms (tech)”.
- **Monitore e aja:** Métricas não são só pra bonito. Time e PM revisam dashboards juntos, ajustam rota se algo sair do esperado. TL garante que tudo tá medido e visível.

### Expectativas e Riscos

- **Estimativa pé no chão:** Dê prazos realistas, explique riscos e incertezas. Se tem dependência externa, já avisa e coloca buffer. TL defende o time de pressão por prazo impossível.
- **Risco na mesa:** Identifique riscos cedo, discuta com o PM e proponha plano B. Exemplo: “Se a API do parceiro atrasar, a gente usa mock pra não travar o time”.

### Stakeholders sem Drama

- **Reporte sem enrolar:** Mantenha todo mundo informado (vendas, marketing, suporte, chefia). Fale a língua de cada área: benefício pro cliente, data de entrega, custo, risco.
- **TL é ponte:** Seja o porta-voz do time de engenharia e construa pontes, não muros.

::: tip 🧠 Lembre-se
Tech Lead que joga junto com Produto e Negócio faz a diferença: entrega software que resolve problema real e ainda vira parceiro estratégico da empresa.
:::

## 🌐 Liderança Organizacional e Influência

> Jogando no Mapa da Firma

Quando você cresce como Tech Lead, seu impacto vai além do time: você começa a mexer na cultura, nos processos e até nas decisões da empresa. Aqui é onde entra o jogo de cintura, visão estratégica e saber navegar a política sem virar político.

### Gerenciando para Cima (Managing Up)

> Falando com a Chefia

- **Fale a língua do negócio:** Não adianta chegar com papo técnico. Mostre como a decisão impacta resultado, grana ou velocidade. Traga solução, não só problema.
  - Exemplo: Em vez de “preciso de 2 sprints pra refatorar”, diga “2 sprints aqui e a gente entrega feature nova 20% mais rápido e reduz bug crítico”.
- **Antecipe riscos:** Avise antes do BO. Se vê risco, já chega com plano B.
  - Exemplo: “Se a API do parceiro atrasar, a gente faz mock pra não travar o time.”
- **Venda bem suas ideias:** Quer ferramenta nova? Mostre ganho, custo e benefício. TL bom é quase vendedor quando precisa.

### Gerenciando para o Lado (Managing Sideways)

> Falando com os coleguinhas

- **Construa pontes:** Fale com outros TLs, PMs, líderes de áreas. Ajude, troque ideia, seja referência quando o assunto é técnico entre times.
- **Resolva dependências:** Se precisa de algo de outro time, converse, alinhe, acompanhe. Não espere virar bloqueio pra correr atrás.

### Cultura e Mudança

> Puxando a Cultura

- **Viva a cultura:** Seja o primeiro a compartilhar, colaborar e puxar o bonde. Se a empresa valoriza transparência, seja transparente. Se valoriza colaboração, incentive pair programming.
- **Lidere mudanças:** Mudou processo, tech ou estratégia? Explique o porquê, tire dúvidas, ajude o time a embarcar junto.

### Política sem Drama

> Jogando o Jogo

- **Entenda o jogo:** Nem tudo é técnico. Saiba quem decide, o que cada área quer e como se comunicar com cada um.
- **Faça alianças:** Tenha aliados em outras áreas pra apoiar suas ideias e projetos. Ajuda mútua é o segredo.
- **Seja político, não politiqueiro:** Use a política pra construir, não pra criar guerra.

::: tip 🧠 Lembre-se
Liderança organizacional é sobre ampliar seu impacto, puxar a cultura pra cima e garantir que a engenharia tem voz e vez na empresa. TL bom não joga só no time, joga o campeonato inteiro.
:::

## 🌱 Crescimento Pessoal para o Líder

> Não Dá pra Cuidar do Time se Você Não Cuida de Si

Liderança é maratona, não tiro curto. Pra ser Tech Lead de verdade, tem que investir em você mesmo – senão, não aguenta o tranco.

### Delegação Eficaz

> Não é só passar a batata quente

- **Por que delegar?**  
  Libera seu tempo pra o que importa (estratégia, mentoria), faz o time crescer e evita virar gargalo. Não caia na armadilha do “é mais rápido eu fazer”.
- **Como delegar bem:**  
  Escolha a pessoa certa, explique o contexto, defina o que espera, dê suporte e feedback. Comece pequeno e vá aumentando a responsabilidade. Não delegue só o que não gosta – delegue pra desenvolver a galera.
- **Exemplo:**  
  Em vez de resolver todo bug cabeludo, peça pra alguém investigar e traga opções. Você revisa junto.

### Gestão de Tempo e Priorização

> Tempo é o recurso mais escasso

- **Priorize de verdade:**  
  Saúde do time, qualidade técnica, alinhamento com produto e tirar impedimento. Não viva só apagando incêndio.
- **Proteja seu tempo:**  
  Bloqueie agenda pra trabalho focado, 1:1 e planejamento. Aprenda a dizer “não” e automatize o que der.
- **Ferramentas ajudam:**  
  Use Trello, Asana, o que for. Seja exemplo de organização.

### Prevenção de Burnout

> Cuidar de si é cuidar do time

- **Fique esperto com os sinais:**  
  Exaustão, irritação, desânimo? Acende o alerta.
- **Defina limites:**  
  Desconecte fora do horário, tire férias, incentive o time a fazer o mesmo.
- **Tenha vida fora do trabalho:**  
  Durma bem, coma direito, faça exercício, tenha hobbies. Mostre pro time que equilíbrio é prioridade.

### Aprendizado Contínuo e Mentoria

> Nunca pare de aprender

- **Busque conhecimento:**  
  Leia, faça cursos, troque ideia com outros líderes. Separe um tempinho na semana pra aprender.
- **Tenha mentores:**  
  Converse com quem já passou pelo que você tá passando. Peça feedback real.
- **Peça feedback pro time:**  
  Pergunte nos 1:1: “O que posso melhorar como líder?” – vulnerabilidade é força, não fraqueza.

::: tip 🧠 Lembre-se
Cuidar de você é pré-requisito pra cuidar do time. Líder bom é exemplo – inclusive de equilíbrio e evolução.
:::

## ♾️ Feedback e Melhoria Contínua

> Crescendo Sem Mimimi

Feedback não é bronca, é presente. Serve pra todo mundo crescer junto e evitar repetir os mesmos vacilos. Tech Lead bom não só cobra, mas também pede feedback e cria um ambiente seguro pra galera falar o que pensa.

### Feedback na Prática

- **Seja rápido e direto:** Deu ruim ou mandou bem? Fala logo, sem enrolar.
- **Foque no comportamento, não na pessoa:** Nada de “você é desorganizado”. Prefira: “O PR X veio sem teste, isso atrasou a aprovação. Bora melhorar?”
- **Equilíbrio:** Elogie o que tá funcionando, aponte o que precisa melhorar. Feedback positivo abre porta pra feedback de ajuste.
- **Todo mundo dá e recebe:** Não é só o TL que fala, o time também tem que dar feedback pra cima e pros lados.
- **Ouça de verdade:** Recebeu feedback? Escuta, pergunta, agradece. Não é hora de justificar, é hora de entender.

**Exemplo:**

- **Positivo:** “Mandou bem facilitando o refinamento hoje, Maria. Todo mundo saiu alinhado.”
- **Pra melhorar:** “No último incidente, demorou pra acionar o SRE. Bora criar um checklist de emergência?”

### Retro de Verdade

Retro não é terapia de grupo nem caça às bruxas. É pra aprender, ajustar e sair melhor do que entrou.

- **Ambiente seguro:** Ninguém aponta dedo, foco é no processo.
- **Ação concreta:** Nada de “vamos melhorar a comunicação”. Tem que sair com tarefa, dono e prazo.
- **Acompanhe:** O que combinou, cobre na próxima retro. Se não, ninguém leva a sério.
- **Mude o formato:** Use Start/Stop/Continue, Mad/Sad/Glad, Lean Coffee… O que engajar o time.

**Exemplo:**

- “PR menor agilizou o review, bora manter.”
- “Comunicação entre front e back tá ruim? Vamos marcar um sync semanal de 30 min.”

### Bora Experimentar

- **Teste coisas novas:** Ferramenta, processo, formato de reunião… Se não der certo, aprende e tenta outra.
- **Post-mortem sem caça às bruxas:** Deu ruim? Descobre o porquê, aprende e segue.
- **Adapte sempre:** O processo do time é vivo. Ajuste, melhore, repita.

::: tip 🧠 Lembre-se
No fim, feedback e melhoria contínua é o que faz o time sair do modo “só entrega” pra “evolui junto”. TL bom puxa esse ciclo e não deixa a peteca cair.
:::
