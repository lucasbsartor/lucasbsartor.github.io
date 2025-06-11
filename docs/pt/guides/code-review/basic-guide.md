# Guia Básico de Code Review

> Bora revisar e receber reviews sem querer pular da janela ou estrangular o coleguinha

Code review é o segredo pra projeto bom e time afiado. Na teoria, parece fácil: só olhar o PR, comentar e aprovar. Na prática? Tem dia que você lê e pensa “não entendi nada” ou só quer largar um LGTM e sumir. Ou você pode ser a pessoa que caiu aqui e esta "O que é um code review? É um lanche novo do McDonald's?" Relaxa, independente do que for o seu caso todo mundo já passou por isso.

::: tip 🧠 Lembre-se
Code Review é como um jogo cooperativo e não um competitivo: é pra todo mundo sair ganhando no final. Seja gente boa, curioso e sempre tente deixar o código melhor do que encontrou.
:::

## ❓ Porque se faz Code Review?

> Boa pergunta, por que não da só para deixar o autor fazer o que quiser?

Respondendo as duas perguntas acima: é para deixar o código melhor e não pra zoar o coleguinha (mas se você commitar a node_modules, aí não tem como te defender 👀) e por que se não fizermos em algum momento alguém vai commitar o node_modules.

::: tip 🧠 Lembre-se
Code review serve para:

- **Garantia de qualidade:** Caçar bug, evitar gambiarra e facilitar manutenção.
- **Troca de conhecimento:** Todo mundo aprende, todo mundo ensina.
- **Consistência:** Código com a mesma cara e padrão do time.
- **Colaboração:** Feedback que ajuda, não que derruba.
- **Menos risco:** Pega pepino de segurança, performance e escalabilidade antes de virar incêndio.

:::

::: warning ⚠️ Erros clássicos

- Revisar só por revisar, sem olhar de verdade.
- Levar pro lado pessoal, em vez de focar no código.
- Só olhar estilo e esquecer arquitetura ou lógica.
- Pular revisão porque “é só um detalhe”.

:::

## 🤼 Para Todos do Time

> O básico é: todo mundo revisa, todo mundo aprende.

- **Processo na mão de todo mundo:** Deixe claro como funciona o fluxo, quem faz o quê e onde achar as infos. Ninguém gosta de caça ao tesouro.
- **Sem ego, só código:** Review é pra melhorar o projeto, não pra medir quem é o mais esperto do rolê.
- **PR pronto é PR redondo:** Teste passando, doc atualizada, tudo revisado. Não empurra pepino pro coleguinha.
- **Padrão é padrão:** Todo mundo segue o mesmo processo e estilo. Se não tá automatizado, bora automatizar (linter, CI, etc).
- **Conflito? Resolve logo:** Discordou? Troca ideia, chama o tech lead se precisar, mas não deixa virar novela.
- **Mentoria na prática:** Review é hora de ensinar, aprender e puxar quem tá chegando.
- **Revisão não é só do seu módulo:** Olhe o código do time todo, assim ninguém vira “dono do castelo”.
- **Feedback bom é feedback rápido:** Não deixa PR mofando. Combine um prazo e respeite.
- **Sessão de review não é reunião chata:** Marque um horário, foque e bora revisar junto se precisar.
- **Reconheça quem manda bem:** Valorize feedback construtivo, não só quem aponta erro.

::: warning ⚠️ Erros clássicos

- Processo perdido ou desatualizado.
- Review travando entrega porque ninguém olha o PR.
- Confiar só no robô e esquecer o olhar humano.
- Deixar gosto pessoal falar mais alto que o padrão do time.

:::

## 👷 Para o Autor do PR

> O PR é seu, mas o código é do time. Então bora fazer direito!

### Durante o Desenvolvimento

- **Siga os padrões:** Não inventa moda, segue o guia do time.
- **Teste de verdade:** Unitário, integração, E2E... O que fizer sentido. E nada de “na minha máquina funciona”.
- **PR pequeno é amor:** Quebre mudanças grandes. PR gigante só serve pra dar sono no revisor.
- **Pense no todo:** Performance, segurança e escalabilidade não são opcionais.
- **Comunique o que importa:** Decisão diferente? Deixa claro no PR. Não faça o time adivinhar.
- **Doc em dia:** README e docs atualizados, sempre.

::: warning ⚠️ Erros clássicos

- Mandar PR monstro impossível de revisar.
- Esquecer dos testes (ou só fazer pra inglês ver).
- Não avisar sobre decisões ou trade-offs.

:::

### Antes de Abrir o PR

- **Revise seu próprio código:** Olhe com carinho, limpe debug, comentário inútil e gambiarras. Se achar estranho, o revisor vai achar pior.
- **Tudo no lugar:** Teste passando, doc atualizada, configs certinhas. Não deixa pepino pro coleguinha.
- **Testou local?** Nada de “na minha máquina funciona”. Rode tudo antes de abrir o PR.
- **Destaque o que importa:** Mudança cabeluda? Aponta no PR pra ninguém ser pego de surpresa.
- **Descrição decente:** Título claro, resumo direto, link pra ticket, print se for UI, instrução de teste se precisar.
- **Cabeça aberta:** Feedback não morde. PR é pra aprender junto.

::: warning ⚠️ Erros clássicos

- Esquecer de limpar debug/gambiarra.
- Subir PR sem rodar os testes.
- Descrição vaga ou “feat: coisas”.

:::

### Respondendo Reviews

- **Resolva tudo:** Fez ajuste? Explica, implementa ou pergunta se não entendeu.
- **Testa de novo:** Mudou algo? Roda os testes antes de pedir novo review.
- **Atualize docs e comentários:** Não deixa nada desatualizado.
- **Chame reforço se travar:** Não entendeu ou discordou? Pede opinião extra.
- **Pede revisão de novo:** Terminou? Sinaliza pro revisor voltar.

::: warning ⚠️ Erros clássicos

- Ignorar feedback ou só responder pela metade.
- Esquecer de rodar testes depois de mexer.
- Não atualizar docs/comentários.

:::

## 👀 Para o Revisor do PR

> Você é o guardião do código. Não é pra ser super-herói, mas também não pode ser o vilão.

### Antes de Revisar

- **Entenda o contexto:** Leia a descrição do PR, ticket e docs. Não caia de paraquedas.
- **Checklist na cabeça (ou no papel):** Segurança, performance, estilo, testes... não revise no modo aleatório.
- **Não sabe? Pergunta:** Se ficou perdido, pede walkthrough. Ninguém nasce sabendo tudo.
- **Confere docs e requisitos:** Veja se tá alinhado com o combinado.
- **Olho vivo nos riscos:** Performance, segurança, breaking change... não deixa passar pepino.
- **Foco em melhorar:** Review é pra somar, não pra criticar.
- **Ajuste o zoom:** Mudança grande, revisão profunda. Mudança pequena, revisão rápida.
- **Colabore:** Review é troca, não monólogo.

::: warning ⚠️ Erros clássicos

- Ignorar descrição do PR ou docs.
- Não preparar checklist e deixar passar coisa importante.
- Revisar sem entender o contexto.

:::

### Durante o Review

- **Seja gente boa:** Feedback direto, educado e que dá pra agir.
- **Fale o que importa:** Seja específico (“Renomeia `xyz` pra `customerId` que fica mais claro”).
- **Explique o porquê:** Cita guia, padrão ou boa prática. Não é só “porque sim”.
- **Sugira, não imponha:** Mostre caminhos, mas deixa o autor decidir.
- **Foco no que pesa:** Performance, segurança, manutenção. Não gaste tempo só com firula.
- **Dê prioridade:** Se for pepino grande, marca como crítico. O resto, vai no fluxo.
- **Olho nos testes:** Cobertura, qualidade e edge case. Não deixa passar batido.
- **Padrão é padrão:** Código, doc, tudo alinhado com o combinado.
- **Evite gosto pessoal:** Siga o padrão do time, não só o que você curte.
- **Não busque perfeição:** Melhor feito e entregue do que perfeito e travado.
- **Pair programming salva:** Mudança cabeluda? Chama pra revisar junto.
- **Elogie também:** Viu algo massa? Fala! Review não é só pra apontar erro.

::: warning ⚠️ Erros clássicos

- Feedback vago ou só pra criticar.
- Ficar só no estilo e esquecer lógica/design.
- Ignorar testes ou docs.
- Deixar gosto pessoal falar mais alto que o padrão.

:::

### Depois de Deixar o Review

- **Resolva conflitos:** Se deu treta, discute e escala se precisar.
- **Confere as mudanças:** Vê se todo feedback foi tratado mesmo.
- **Re-revise se mudou coisa:** Foca no que foi alterado.
- **Testa de novo:** Mudança grande? Garante que o CI passou.
- **Flexibilidade:** Aberto pra novos insights ou ajustes.
- **Anote aprendizados:** Problema recorrente? Já registra pra próxima.
- **Comunique:** Avise quando tá tudo certo ou se ficou pendência.

::: warning ⚠️ Erros clássicos

- Aprovar sem checar se feedback foi resolvido.
- Focar só no código e esquecer docs/testes.
- Não avisar sobre pendências.
- Ignorar pepino novo que apareceu no rework.

:::

## 🚀 Etapas Finais Após Aprovação

> PR aprovado? Ta esperando o que? Só não passa vergonha em produção!

- **Manda o merge:** PR aprovado? Autor ou responsável faz o merge sem enrolar.
- **Olho na produção:** Fique de olho no deploy, monitore e resolva rápido se der ruim.
- **Comemore:** Reconheça o esforço e bora celebrar o aprendizado do time!

::: warning ⚠️ Erros Comuns

- Fazer merge sem checar mudanças de última hora ou conflitos.
- Esquecer de monitorar produção depois do deploy.
- Não registrar aprendizados ou problemas pós-merge.

:::

## 📖 Leituras e Recursos Adicionais

- [Atlassian - Why code reviews matter (and actually save time!)](https://www.atlassian.com/agile/software-development/code-reviews)
- [Google - How to Code Review](https://google.github.io/eng-practices/review/reviewer/)
- [FreeCodeCamp - How to Perform Code Reviews in Tech: The Painless Way](https://www.freecodecamp.org/news/how-to-perform-code-reviews-in-tech-the-painless-way/)
