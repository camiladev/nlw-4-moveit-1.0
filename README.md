# Move.it 1.0
Projeto proposto pela Rocketseat :rocket: durante a realização do Next Level Week 4º.

**Tela Inicial**

![Screenshot_2021-03-01 Início move it](https://user-images.githubusercontent.com/63053569/109548042-e8946380-7aaa-11eb-97df-9a229bc242a3.png)

**Tela ciclo encerrado e novo desafio**

![Screenshot_2021-03-01 Início move it(1)](https://user-images.githubusercontent.com/63053569/109548131-082b8c00-7aab-11eb-94b4-ccecfa5a5bdf.png)

**Tela desafio concluído e subiu de nível**

![Screenshot_2021-03-01 Início move it(2)](https://user-images.githubusercontent.com/63053569/109548202-1c6f8900-7aab-11eb-89ef-99b53ddf09cd.png)

### :page_with_curl: Informações sobre o Projeto

A ideia surgiu da necessidade de ajudar as milhares de pessoas que trabalham usando o computador a evitar futuros problemas de saúde, como:

- Tendinite;
- Dores nas costas;
- Má circulação nas pernas;
- Problemas de visão.

E ajudar a manter o foco e melhorar a produtividade de forma que não prejudique a saúde.

Para isso juntamos a técnica de gestão do tempo Pomodoro, como exercícios para o corpo e para os olhos e para dar aquela estimulada aplicamos a ideia de level que nos jogos online são usados para definir a experiência do personagem.

### :clipboard: Resolução

**Pomodoro - Técnica de gestão do tempo**

Para realizar o controle do tempo foi criado um componente de cronometro, que chamamos de Countdown. Com variáveis de controle de estado recebe o tempo de 25 min convertido em segundos, e quando o relógio é inicializado o tempo inicial é atualizado em um intervalo de 1 segundo, sempre diminuindo um segundo até que o contador chegue a zero.

**Desafios Aleatórios**

A dada termino de ciclo do Pomodoro é sugerido ao usuário um desafio para o corpo ou para os olhos, a escolha do desafio é realizada de forma aleatória. A lista de desafios é passada em um documento JSON, e para garantir a aleatoriedade é realizado uma multiplicação entre um numero randômico e a quantidade de itens no JSON.

**Subir de Nível**

Sempre que o usuário recebe a sugestão do desafio, já possível visualizar quanto de experiencia que ira ganhar, e quando o usuário receber a quantidade necessária de experiencia, ele passa para o  próximo nível. Para saber o valor necessário de xp foi realizado um calculo de potencia que os jogos usam para definir a dificuldade do desafio.

Para que o usuário não perca as informações de nível atual e desafios realizados, caso ele decida fechar o navegador, foi utilizado os cookies do browser para salvar as informações de nível, experiência e desafios concluídos, assim quando o usuário retornar vai poder voltar onde parou.

### :hammer_and_wrench: Tecnologias usadas

- Next.js
- React.js
- TypeScript
- CSS3
- HTML5
- Biblioteca Js-Cookies
- Biblioteca React-Icons

### :computer: Execução

Para você rodar o projeto localmente é necessário que realize o clone do projeto e executar o comando:

```bash
npm install
```

E para executar a aplicação de o seguinte comando:

```bash
npm run dev
```
Agora no navegar acesse http://localhost:3000/

### :octocat: Deploy

Essa aplicação eu não vou realizar o deploy, pois pretendo realizar mudanças e acrescentar funcionalidades nos próximos dias e a nova versão será disponibilizada publicamente.

### :running: Milha Extra

A Next Level Week 4º acabou mas o projeto continua, fomos incentivados a colocar a nossa cara no projeto e colocar novas funcionalidades, eu vou fazer isso em outro repositório. Algumas das novas funcionalidades são:

- Autenticação de usuário;
- Deixar a aplicação responsiva para as outras plataformas;
- Alterar o tema, e deixar o usuário escolher entre tema claro ou escuro;
- E outras...

### :link: Link do novo repositório

:hourglass_flowing_sand: Em construção
