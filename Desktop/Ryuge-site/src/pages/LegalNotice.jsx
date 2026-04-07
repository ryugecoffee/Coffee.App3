const LEGAL_TEXT = {
  ja: {
    eyebrow: "Legal",
    title: "特定商取引法に基づく表記",
    lead: "Ryuge Coffee に関する通信販売上の表示です。",

    company: "販売事業者",
    companyValue: "株式会社龍華",

    owner: "運営責任者",
    ownerValue: "今井 龍華",

    address: "所在地",
    addressValue: "神奈川県鎌倉市山ノ内1543 円応寺",

    phone: "電話番号",
    phoneValue: "090-6312-1717",

    email: "メールアドレス",
    emailValue: "ryugecoffee@gmail.com",

    price: "販売価格",
    priceValue: "各商品ページに表示された価格（税込）によります。",

    extra: "商品代金以外の必要料金",
    extraValue: "送料、決済手数料等が発生する場合があります。",

    payment: "支払方法",
    paymentValue: "クレジットカード決済、その他当サイトが定める方法",

    timing: "支払時期",
    timingValue: "ご注文時に決済が確定します。",

    delivery: "商品の引渡時期",
    deliveryValue: "ご注文確定後、5日以内に発送します。",

    cancel: "返品・交換・キャンセル",
    cancelValue:
      "食品のため、お客様都合による返品・交換・キャンセルは原則としてお受けしておりません。",
  },

  en: {
    eyebrow: "Legal",
    title: "Legal Notice",
    lead: "Information based on Japanese commercial law.",

    company: "Company",
    companyValue: "Ryuge Co., Ltd.",

    owner: "Representative",
    ownerValue: "Ryuge Imai",

    address: "Address",
    addressValue: "Engakuji Temple, 1543 Yamanouchi, Kamakura, Kanagawa, Japan",

    phone: "Phone",
    phoneValue: "+81 90-6312-1717",

    email: "Email",
    emailValue: "ryugecoffee@gmail.com",

    price: "Price",
    priceValue: "Prices are listed on each product page (tax included).",

    extra: "Additional Fees",
    extraValue: "Shipping fees and payment processing fees may apply.",

    payment: "Payment Method",
    paymentValue: "Credit card and other methods provided on this site.",

    timing: "Payment Timing",
    timingValue: "Payment is confirmed at the time of order.",

    delivery: "Delivery",
    deliveryValue: "Items will be shipped within 5 days after order confirmation.",

    cancel: "Returns / Cancellation",
    cancelValue:
      "Due to the nature of food products, returns or cancellations are not accepted unless the product is defective.",
  },

  es: {
    eyebrow: "Legal",
    title: "Aviso Legal",
    lead: "Información conforme a la legislación comercial japonesa.",

    company: "Empresa",
    companyValue: "Ryuge Co., Ltd.",

    owner: "Responsable",
    ownerValue: "Ryuge Imai",

    address: "Dirección",
    addressValue: "Templo Engakuji, 1543 Yamanouchi, Kamakura, Kanagawa, Japón",

    phone: "Teléfono",
    phoneValue: "+81 90-6312-1717",

    email: "Correo",
    emailValue: "ryugecoffee@gmail.com",

    price: "Precio",
    priceValue: "Los precios se indican en cada página de producto (impuestos incluidos).",

    extra: "Costes adicionales",
    extraValue: "Pueden aplicarse gastos de envío y comisiones de pago.",

    payment: "Método de pago",
    paymentValue: "Tarjeta de crédito y otros métodos disponibles.",

    timing: "Momento del pago",
    timingValue: "El pago se confirma al realizar el pedido.",

    delivery: "Entrega",
    deliveryValue: "Los productos se envían dentro de 5 días tras la confirmación del pedido.",

    cancel: "Devoluciones / Cancelación",
    cancelValue:
      "Debido a la naturaleza de los productos alimenticios, no se aceptan devoluciones salvo defecto del producto.",
  },
};

export default function LegalNotice() {
  const lang = localStorage.getItem("site-lang") || "ja";
  const t = LEGAL_TEXT[lang];

  return (
    <section className="legal-document">
      <p className="legal-eyebrow">{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <p className="legal-lead">{t.lead}</p>

      <div className="legal-table">
        <div className="legal-row">
          <dt>{t.company}</dt>
          <dd>{t.companyValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.owner}</dt>
          <dd>{t.ownerValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.address}</dt>
          <dd>{t.addressValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.phone}</dt>
          <dd>{t.phoneValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.email}</dt>
          <dd>{t.emailValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.price}</dt>
          <dd>{t.priceValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.extra}</dt>
          <dd>{t.extraValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.payment}</dt>
          <dd>{t.paymentValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.timing}</dt>
          <dd>{t.timingValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.delivery}</dt>
          <dd>{t.deliveryValue}</dd>
        </div>

        <div className="legal-row">
          <dt>{t.cancel}</dt>
          <dd>{t.cancelValue}</dd>
        </div>
      </div>
    </section>
  );
}