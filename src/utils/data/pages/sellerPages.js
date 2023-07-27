// used by router
const sellerPages = [
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
    path: "/pedidos/:requestId",
    name: "seller-request-detail",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/pedidos",
    name: "seller-requests",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/orcamentos/:budgetId",
    name: "seller-budget-detail",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/orcamentos",
    name: "seller-budgets",
    title: null,
    loadMessage: "",
    data: {},
  },
  {
    path: "/",
    name: "seller-budgets", // comprador
    title: null,
    loadMessage: "Carregando a página inicial", // shown while the inner page's content loads
    data: {
      // ...
    },
  },
];

export default sellerPages;
