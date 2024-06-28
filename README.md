# LOADING PAGE (PÁGINA DE CARREGAMENTO)
Esse projeto é simples, porém bem util. Pode parecer simples, mas sem ele a experiência do usuário seria péssima. O que ele faz é basicamente espera um tempo para que exiba a página de uma forma agradável. O máximo que um usuário fica ao carregar uma página é 3 Segundos, se não me falha a memória. O que esse código faz é deixar o usuário esperando um pouco mais de forma mais amigável. Infelizmente, alguns códigos necessitam de tempo para ser carregados. Um exemplo é quando temos que carregar uma API ou um Banco de Dados que seja grande, e nesse caso não tem muito o que fazer mesmo. O que podemos fazer é deixar mais agradável para o usuário. Se temos um símbolo, que é o padrão de carregamento da página, uma mensagem dizendo que está carregando, uma animação de leve, prende o usuário por mais tempo e passa a ser aceitável. Eu usei o JavaScript Assincrono, usando Promises. Porém podia ser uma API ou um Banco de Dados também.<br></br>


# HTML
Usei o HTML de forma semântica, não tem muito o que dizer, são poucas linhas de HTML, apenas usei sections e ID, nada de mais nesse quesito em si.<br></br>

# CSS
No CSS foi utilizado o conceito de Flexbox, utiizado as cores Cinza Escuro, uma mais escura (#101016) que é uma cor que é como 60%, usando como o fundo, a outra é um pouco mais clara, no caso o código hexadecimal dela é (#242428), para dar um contraste do fundo. A Outra cor é o Verde, que é 10%, no caso foi utiizado a cor (#12714E) que é uma cor harmônica, chama a atenção e por ser uma cor fria, remete uma calma, uma tranquilidade. E é muito bom ter cores frias, tipo verde e azul quando utilizamos esses eventos de carregamento, tem que ser algo mais acolhedor digamos assim. As formas são muito circulares ou retangulares. Uma forma circular é uma forma agradável, transmite um elo de ligação com o usuário em si, também o retangular é excelente para UI/UX, pelo fato de as telas dos computadores serem quadradas, dá uma certa harmonia e como dizem "encaixa bem" na tela. A cor que foi utilizada com o 30% é o branco, que é as cores da fonte, dá um bom contraste com o branco (#F0F0F0) e se harmoniza bem com a cor de fundo.<br></br>

Também foi utilizado a tipografia do tipo Sans-Serif, que é adequada para a telas, inclusive de a fonte utiizada ser uma fonte Display. Foi utilizada a fonte Roboto Condensed do Google, que é excelente. Foi aplicado conceitos de hierarquia na fonte, assim levando o foco onde realmente necessita de foco. Também utilizei o Keyframes para fazer a animação, o CSS3 permite fazer animações e uma delas é utilizando o Keyframes. Inicia com o transform rotate, que é o que faz o sentido de rotação como 0 e termina com 360 graus, que é uma volta completa, além de estar com um tempo de 3s, que fica agradável, nem muito rápido e nem muito lento. E por isso, também é o tempo que o usuário espera, deixando como se fosse um ciclo a cada 3 segundos.<br></br>

Também utilizei no botão um leve efeito de aumentar o botão e uma transição suave para que isso aconteça, deixando mais agradável para o usuário e também, aquele principio de levar a atenção para onde realmente importa também. Foi usado os media querys para melhorar a responsividade da tela, deixando adaptavel a todos os tipos de dispositivos que tem no mercado hoje em dia, ou pelo menos com a maioria deles.<br></br>


# JAVASCRIPT
No JavaScript foi utilizado o conceito de Promises e de async/await. O JavaScript Assincrono é quando necessitamos de algo que leva um tempo para fazer, e essa página é uma delas. Só não foi usado o Await, pois não teve necessidade. Ele só recarrega a página em um certo tempo. Foi utilizado o SetTimeout para evitar desperdícios de códigos, então ele espera carregar a página e chama a função. A função só esconde o elemento de carregamento e mostra a página depois de um certo tempo. Foi utilizado o Classlist, pois a responsabilidade de fazer a estilização é do próprio CSS, o JavaScript só adiciona as classes necessárias para o projeto.<br></br>

# LINK DO PROJETO
[ACESSE O PROJETO AQUI](https://paulo19961944.github.io/LoadingPage/)<br></br>

# CONCLUSÃO
Código muito simples, mas muito importante. E o foco aqui está que as coisas simples também fazem diferença. No caso eu quis fazer uma página bonita e com os conceitos de UI/UX para deixar a interface agradável, então foi bastante linhas de CSS, mas fiz o que importa, algo que seja agradável para o usuário.
