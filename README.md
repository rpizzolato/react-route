### Demo para entendimento do Router em React

- `react-router` é o pacote _core_ para o _router_, enquanto que `react-router-dom` e `react-router-native` são específicos do ambiente;
- caso esteja construindo um _website_, use o `react-router-dom`. Caso seja aplicação _mobile_, use `react-router-native`;

### Instalação do `react-router-dom`
- `npm install --save react-router-dom`

### Componente Router
- existem 2 componentes para aplicações baseadas no navegador:
    - `<BrowserRouter>` cria `http://example.com/about`;
    - `<HashRouter>` cria `http://example.com/#/about`.
- `<BrowserRouter>` é mais popular pois usa o _HTML5 History API_, já `<HashRouter>` por usar _hash portion_ de uma URL (`window.location.hash`) é mais indicada para navegadores legado.

### Aplicação em `index.js`
- Empacote o `<BrowserRouter>` sobre o componente `<App>`
```javascript
<BrowserRouter>
    <App />
</BrowserRouter>
```
- lembrando que é preciso importá-lo:
```javascript
import { BrowserRouter } from 'react-router-dom';
```
- **Observação**: Um componente router pode apenas ter um elemento filho, podendo ser um elemento HTML ou um componente React;

### Links e Routes
- `<Route>` é o componente mais importante em React _router_. Ele faz o _render_ de alguma UI se a _location_ atual corresponde com o _path_ da _route_. De preferência, esse componente deve ter uma propriedade chamada `path`, a qual, se corresponder com a _location_ atual, é feito o _render_;
- `<Link>` por outro lado, esse componente é utilizado para navegar entre páginas, quase que como um âncora HTML, só que faz a navegação sem _refresh_ de toda a página.
- No exemplo citado é necessário usar a propriedade `exact={true}` para não fazer o _render_ de _Home_ e _Category_, pois ambos começam com `/`.
```javascript
<Menu />
<Route exact={true} path="/" component={Home} />
<Route path="/category" component={Category} />
<Route path="/products" component={Products} />
```
- ### Nested Routing
 - Antes é preciso entender bem como `<Route>` funciona:
    - `component`: quando a URL corresponde, o route cria um elemento React;
    - `render`: é apropriado para _inline rendering_. Essa propriedade espera uma função que retorne um elemento React quando a _location_ corresponde ao caminho da rota;
    - `children` similar ao `render`, ou seja, espera uma função que retorne um elemento React. No entanto, filhos (_children_) são renderizados independente se os caminhos correspondem ou não