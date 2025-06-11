# 📋 Checklist de Code Review

> Pra não ficar no LGTM!

Code review não é para ganhar medalha de participação! Bora revisar de verdade e sem enrolar.

::: tip 🧠 Lembre-se
Use esse checklist como uma referência para não deixar passar nada importante e garantir que o código do time está redondo (e sem cornojobs).
:::

## 🎯 Requisitos & Escopo

- O PR está entregando o que foi pedido ou só mostrando serviço?
- Stakeholders vão ficar felizes ou vão voltar reclamando depois?
- Tá focando no que realmente importa ou tá perdendo tempo com detalhe besta?

## 🧹 Limpeza & Legibilidade

- Código tá limpo ou virou depósito de gambiarra e variável morta?
- DRY de verdade ou copiou e colou porque tava com pressa?
- Nome de variável faz sentido ou é “x”, “foo” e “banana”?
- Comentou só o que precisa (e explicou o porquê, não o óbvio)?
- Dá pra entender sem precisar de um tradutor de aramaico?
- Fluxo do código da de acompanhar de boa ou virou script do Hideo Kojima?
- Funções pequenas e focadas ou virou novela?

## 🧪 Testes

- Teste passando no CI ou está no “na minha máquina funciona”?
- Tem teste pros casos bizarros ou só pro caminho feliz?
- Cobertura decente ou tem teste só pra enganar o Sonar?

## 🛡️ Segurança & Robustez

- Tem alguma porta escancarada pro ladrão entrar?
- Tem segredo exposto no código (senha, token, CPF, etc.)?
- Validação de entrada tá firme ou deixa passar qualquer coisa?
- Sanitização de dados tá lá ou vai deixar o SQL Injection cantar?
- Tratamento de erro tá na mão ou vai deixar o usuário na mão?
- Concorrência tá segura ou vai dar deadlock na sexta à noite?
- Tem dependência desatualizada ou vulnerável?
- Dependência nova é segura ou baixou do site do tiozão?

## ⚡ Performance

- Tem loop infinito, query N+1 ou código que faz o PC chorar?
- Tá usando recurso direito ou abriu arquivo e esqueceu de fechar?
- Escala ou vai cair com 10 usuários?

## 📐 Arquitetura & Design

- Seguiu o padrão do projeto ou inventou moda?
- Responsabilidade separada ou virou função de 300 linhas?
- Tem acoplamento desatualizado ou dependência cíclica?
- Parâmetro é configurável ou tá tudo no código?
- API vaza dado interno ou quebra contrato de quem usa?
- Uso de design pattern é onde faz sentido ou só pra mostrar que sabe?
- Abstração útil ou só pra enfeitar?
- É KISS ou está complicando à toa?

## 📊 Observabilidade

- Loga o que importa ou expõe senha, CPF e segredo do cofre?
- Tem métricas e alertas ou só descobre problema quando o cliente liga?
- Informações registradas são úteis ou só dizem “deu ruim”? Ou pior, só “deu bom”?

## 📚 Documentação & Comunicação

- README e docs atualizados? Ou estão no “depois eu faço”?
- PR explica o que mudou? Ou é só “feat: coisas”?
- Comentários antigos foram resolvidos ou só ignorados?
- Comentários estão buscando compartilhar conhecimento ou buscando comer cimento? Review é pra melhorar, não pra criticar.

## 🚀 Pronto pra produção?

- Tem plano de deploy ou é CMD+V, coloca na mão de Deus e vai?
- Se der ruim, tem plano B ou vai rezar?
- Tá pagando dívida técnica ou só empurrando pra frente?
