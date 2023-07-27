import jsPDF from "jspdf";
import { toPng } from "html-to-image";
export const identity = (t) => t;

export function getFormatedDate(d) {
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return `${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}

export function normalize(str, separator = null) {
  let newStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (separator) {
    newStr = newStr.replace(/[ \t\n]/g, separator);
  }
  return newStr;
}

export function debounce(fn, to = 350) {
  let debounceTO = null;
  return function (...args) {
    if (args?.[0]?.constructor?.name === "SyntheticEvent") {
      args?.[0].persist();
    }

    window.clearTimeout(debounceTO);
    debounceTO = window.setTimeout((_) => {
      fn(...args);
    }, to);
  };
}

const DEFAULT_UNIT = "Unidades";
export function getUnitTypeFromProduct(attrList) {
  if (!attrList) {
    return DEFAULT_UNIT;
  }
  const found = attrList.find((attr) => {
    return attr.attribute.label.toLowerCase() === "unidade";
  });

  return found ? found.value : DEFAULT_UNIT;
}

// eslint-disable-next-line
export function md5(r){function n(r,n){return r<<n|r>>>32-n}function t(r,n){var t,o,e,u,f;return e=2147483648&r,u=2147483648&n,f=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(o=1073741824&n)?2147483648^f^e^u:t|o?1073741824&f?3221225472^f^e^u:1073741824^f^e^u:f^e^u}function o(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r&n|~r&t}(o,e,u),f),a)),i),o)}function e(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r&t|n&~t}(o,e,u),f),a)),i),o)}function u(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return r^n^t}(o,e,u),f),a)),i),o)}function f(r,o,e,u,f,i,a){return t(n(r=t(r,t(t(function(r,n,t){return n^(r|~t)}(o,e,u),f),a)),i),o)}function i(r){var n,t="",o="";for(n=0;n<=3;n++)t+=(o="0"+(r>>>8*n&255).toString(16)).substr(o.length-2,2);return t}var a,c,C,g,h,d,m,S,v,l=Array();for(l=function(r){for(var n,t=r.length,o=t+8,e=16*((o-o%64)/64+1),u=Array(e-1),f=0,i=0;i<t;)f=i%4*8,u[n=(i-i%4)/4]=u[n]|r.charCodeAt(i)<<f,i++;return f=i%4*8,u[n=(i-i%4)/4]=u[n]|128<<f,u[e-2]=t<<3,u[e-1]=t>>>29,u}(r=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var o=r.charCodeAt(t);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n}(r)),d=1732584193,m=4023233417,S=2562383102,v=271733878,a=0;a<l.length;a+=16)c=d,C=m,g=S,h=v,m=f(m=f(m=f(m=f(m=u(m=u(m=u(m=u(m=e(m=e(m=e(m=e(m=o(m=o(m=o(m=o(m,S=o(S,v=o(v,d=o(d,m,S,v,l[a+0],7,3614090360),m,S,l[a+1],12,3905402710),d,m,l[a+2],17,606105819),v,d,l[a+3],22,3250441966),S=o(S,v=o(v,d=o(d,m,S,v,l[a+4],7,4118548399),m,S,l[a+5],12,1200080426),d,m,l[a+6],17,2821735955),v,d,l[a+7],22,4249261313),S=o(S,v=o(v,d=o(d,m,S,v,l[a+8],7,1770035416),m,S,l[a+9],12,2336552879),d,m,l[a+10],17,4294925233),v,d,l[a+11],22,2304563134),S=o(S,v=o(v,d=o(d,m,S,v,l[a+12],7,1804603682),m,S,l[a+13],12,4254626195),d,m,l[a+14],17,2792965006),v,d,l[a+15],22,1236535329),S=e(S,v=e(v,d=e(d,m,S,v,l[a+1],5,4129170786),m,S,l[a+6],9,3225465664),d,m,l[a+11],14,643717713),v,d,l[a+0],20,3921069994),S=e(S,v=e(v,d=e(d,m,S,v,l[a+5],5,3593408605),m,S,l[a+10],9,38016083),d,m,l[a+15],14,3634488961),v,d,l[a+4],20,3889429448),S=e(S,v=e(v,d=e(d,m,S,v,l[a+9],5,568446438),m,S,l[a+14],9,3275163606),d,m,l[a+3],14,4107603335),v,d,l[a+8],20,1163531501),S=e(S,v=e(v,d=e(d,m,S,v,l[a+13],5,2850285829),m,S,l[a+2],9,4243563512),d,m,l[a+7],14,1735328473),v,d,l[a+12],20,2368359562),S=u(S,v=u(v,d=u(d,m,S,v,l[a+5],4,4294588738),m,S,l[a+8],11,2272392833),d,m,l[a+11],16,1839030562),v,d,l[a+14],23,4259657740),S=u(S,v=u(v,d=u(d,m,S,v,l[a+1],4,2763975236),m,S,l[a+4],11,1272893353),d,m,l[a+7],16,4139469664),v,d,l[a+10],23,3200236656),S=u(S,v=u(v,d=u(d,m,S,v,l[a+13],4,681279174),m,S,l[a+0],11,3936430074),d,m,l[a+3],16,3572445317),v,d,l[a+6],23,76029189),S=u(S,v=u(v,d=u(d,m,S,v,l[a+9],4,3654602809),m,S,l[a+12],11,3873151461),d,m,l[a+15],16,530742520),v,d,l[a+2],23,3299628645),S=f(S,v=f(v,d=f(d,m,S,v,l[a+0],6,4096336452),m,S,l[a+7],10,1126891415),d,m,l[a+14],15,2878612391),v,d,l[a+5],21,4237533241),S=f(S,v=f(v,d=f(d,m,S,v,l[a+12],6,1700485571),m,S,l[a+3],10,2399980690),d,m,l[a+10],15,4293915773),v,d,l[a+1],21,2240044497),S=f(S,v=f(v,d=f(d,m,S,v,l[a+8],6,1873313359),m,S,l[a+15],10,4264355552),d,m,l[a+6],15,2734768916),v,d,l[a+13],21,1309151649),S=f(S,v=f(v,d=f(d,m,S,v,l[a+4],6,4149444226),m,S,l[a+11],10,3174756917),d,m,l[a+2],15,718787259),v,d,l[a+9],21,3951481745),d=t(d,c),m=t(m,C),S=t(S,g),v=t(v,h);return(i(d)+i(m)+i(S)+i(v)).toLowerCase()}

export function getValidOrder(values) {
  let data = values;
  const floatValues = ["quantity", "ipi", "icms", "cost"];
  for (let index = 0; index < data.items.length; index++) {
    data.items[index].productId = data.products[index].id;
    data.items[index].addressId = data.address[0].id;
    data.items[index].shippingAt =
      data.items[index].shippingAt && getISODate(data.items[index]?.shippingAt);
    floatValues.forEach(
      (values) =>
        (data.items[index][values] = data.items[index][values]
          ? parseFloat(data.items[index][values])
          : 0)
    );
  }
  return data;
}

function getISODate(value) {
  const date = new Date(value);
  return new Date(date).toISOString();
}

export function getFormatedStatus(status) {
  if (status === "UNDER_EVALUATION") {
    return "Pendente";
  } else if (status === "INVALID") {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
}

export function getStatusVariant(status) {
  if (status === "UNDER_EVALUATION") {
    return "attention";
  } else if (status === "INVALID") {
    return "error";
  } else {
    return "success";
  }
}

export function getFormatedInvoiceStatus(status) {
  switch (status) {
  case "UNDER_EVALUATION":
    return {
      text: "Pendente",
      variant: "attention",
    };
  case "CANCELED":
    return {
      text: "Cancelado",
      variant: "error",
    };
  case "PAID":
    return {
      text: "Pago",
      variant: "success",
    };
  default:
    return {
      text: "Esperando pagamento",
      variant: "attention",
    };
  }
}

export async function createAndSavePdf(input) {
  const dataUrl = await toPng(input, {
    style: {
      scale: 0.72,
      marginTop: "-230px",
    },
  });
  const pdf = new jsPDF();
  const imgProps = pdf.getImageProperties(dataUrl);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("download.pdf");
}

export function formatPersonalInfoMessage(form) {
  let formatForm = form;
  const consumptionVariables = [
    ["AG", "Aço Lam. Quente : "],
    ["ALF", "Aço Lam. Frio : "],
    ["ALQ", "Chapas Grossas : "],
    ["AP", "Aço Galvanizado : "],
    ["AI", "Aço Inox : "],
  ];

  formatForm.consumption = {
    label: "Qual o seu consumo estimado atual? (Toneladas) ",
    value: consumptionVariables.map((item) => {
      const value = formatForm[item[0]];
      delete formatForm[item[0]];
      return item[1] + (value || "Não Informado");
    }),
  };


  return Object.keys(formatForm).reduce((acc, key) => {
    const title = "<h3>" + formatForm[key]?.label + "</h3>";
    const description = formatForm[key]?.value.reduce((acc, msg) => {
      return acc + `</br><p>${msg}</p>`;
    }, "");

    return (acc + title + description);
  }, "");

}

export function formatCurrencyValue(value) {
  if (!value) {
    return 0;
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
}

export function formatFloatNumberToText(value) {
  if (!value) {
    return 0;
  }
  return String(value.toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 }));
}

export function formatRoleText(role){
  switch (role) {
  case 'OPERATOR':
    return 'Operador';
  case 'BUYER' :
    return 'Comprador';
  case 'SELLER' :
    return 'Vendedor';
  default :
    return '';
  }
}
