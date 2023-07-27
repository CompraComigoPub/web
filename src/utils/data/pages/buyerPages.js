// used by router
const buyerPages = [
  {
    path: "/newpassword",
    name: "NewPassword",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/cadastro/:inviterId",
    name: "register",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/landing",
    name: "landing",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/compra/nova",
    name: "purchaseNew",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/compra/:purchaseId/participar/",
    name: "purchaseJoin",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/compra/:purchaseId",
    name: "purchaseInfo",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/pedidos/:requestId",
    name: "buyer-requests-detail",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/pedidos",
    name: "buyer-requests",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/orcamentos/:budgetId",
    name: "buyer-budget-detail",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/orcamentos",
    name: "buyer-budgets",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/inicio",
    name: "home",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/equipe",
    name: "team",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/minha-rede",
    name: "my-network",
    title: null,
    loadMessage: "",
    data: {},
  },
  // {
  //   path: "/test-components",
  //   // level: 1, // 2 is the default value
  //   name: "test", // the page file name
  //   title: null, // null, or the title to show in the blue area in the header
  //   loadMessage: "Indo para a página inicial", // shown while the inner page's content loads
  // },
  {
    path: "/",
    name: "explore", // comprador
    title: null,
    loadMessage: "Carregando a página inicial", // shown while the inner page's content loads
    data: {
      // ...
    },
  },
];

export default buyerPages;
