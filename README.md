# Portfolio Pessoal em React 🚀

Bem-vindo ao repositório do meu portfólio pessoal! 

Este é um projeto desenvolvido com o objetivo de aplicar meus conhecimentos em **React.js** e, ao mesmo tempo, criar um espaço centralizado para exibir meus projetos, minha trajetória acadêmica e minhas habilidades.

O site está hospedado na Vercel e você pode acessá-lo aqui:

### 🔗 [https://portfolio-daviddias.vercel.app/](https://portfolio-daviddias.vercel.app/)

---

## 🎯 Sobre o Projeto

A ideia principal foi construir um site "vivo". Em vez de um portfólio estático que eu precisaria atualizar manualmente a cada novo projeto, eu quis criar algo que se atualizasse sozinho.

Por isso, implementei duas funcionalidades principais:
1.  **Projetos Dinâmicos:** A galeria de projetos (tanto na home quanto na página de projetos) é alimentada em tempo real pela **API do GitHub**. Assim que eu publico ou atualizo um repositório público, ele aparece automaticamente no site.
2.  **Formações via JSON:** Para facilitar a manutenção das minhas formações e cursos, todos os dados são carregados a partir de um arquivo `JSON` local.

## ✨ Principais Funcionalidades

* **Integração com API do GitHub:** Busca e exibe todos os meus repositórios públicos, filtrando *forks*.
* **Carregamento de Dados (JSON):** A página de "Formação" é renderizada dinamicamente a partir de um arquivo JSON, facilitando futuras adições.
* **Design Responsivo (Mobile-First):** O layout foi construído com CSS Modules e se adapta a todos os tamanhos de tela, desde monitores grandes até celulares.
* **Menu Mobile Otimizado:** Inclui um menu para telas menores.
* **Roteamento:** Navegação entre as páginas (Home, Projetos, Formação) gerenciada com o `react-router-dom`.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero usando as seguintes tecnologias:

* **React.js**
* **Vite** 
* **React Router DOM**
* **CSS Modules**
* **React Icons** / **Material-UI Icons** 


---

Obrigado pela visita! 
Se tiver qualquer feedback, sinta-se à vontade para abrir uma *issue*.