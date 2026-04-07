const PRIVACY_TEXT = {
  ja: {
    eyebrow: "Privacy",
    title: "プライバシーポリシー",
    lead: "Ryuge Coffee（以下「当社」）は、お客様の個人情報を適切に取り扱います。",
    section1Title: "1. 取得する情報",
    section1Body:
      "当社は、商品購入、お問い合わせ、ニュースレター登録等に際して、氏名、住所、電話番号、メールアドレス、決済関連情報、アクセス情報等を取得することがあります。",
    section2Title: "2. 利用目的",
    section2Body:
      "取得した情報は、商品の発送、本人確認、決済処理、お問い合わせ対応、サービス改善、重要なお知らせの送信、不正利用防止のために利用します。",
    section3Title: "3. 第三者提供",
    section3Body:
      "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。ただし、配送業者、決済事業者、システム提供事業者等、業務遂行上必要な範囲で委託する場合があります。",
    section4Title: "4. 安全管理",
    section4Body:
      "当社は、個人情報への不正アクセス、漏えい、改ざん、滅失等を防止するため、必要かつ適切な安全管理措置を講じます。",
    section5Title: "5. 開示・訂正・削除等",
    section5Body:
      "ご本人から自己の個人情報について開示、訂正、利用停止、削除等のご請求があった場合、法令に従い適切に対応します。",
    section6Title: "6. Cookie 等の利用",
    section6Body:
      "当サイトでは、利便性向上や利用状況分析のため、Cookie その他の類似技術を使用する場合があります。",
    section7Title: "7. お問い合わせ先",
    section7Body:
      "個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。",
    section8Title: "8. 改定",
    section8Body:
      "本ポリシーは、必要に応じて改定することがあります。改定後は当サイト上に掲載した時点で効力を生じます。",
  },
  en: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    lead: "Ryuge Coffee (the “Company”) handles customers’ personal information appropriately.",
    section1Title: "1. Information We Collect",
    section1Body:
      "We may collect names, addresses, phone numbers, email addresses, payment-related information, and access data when you purchase products, contact us, or subscribe to our newsletter.",
    section2Title: "2. Purpose of Use",
    section2Body:
      "Collected information is used for shipping products, identity verification, payment processing, responding to inquiries, service improvement, sending important notices, and preventing unauthorized use.",
    section3Title: "3. Provision to Third Parties",
    section3Body:
      "We do not provide personal information to third parties without consent except as required by law. However, we may entrust necessary information to delivery companies, payment providers, and system service providers within the scope required for business operations.",
    section4Title: "4. Security Management",
    section4Body:
      "We take necessary and appropriate security measures to prevent unauthorized access, leakage, alteration, or loss of personal information.",
    section5Title: "5. Disclosure, Correction, Deletion, etc.",
    section5Body:
      "If you request disclosure, correction, suspension of use, or deletion of your personal information, we will respond appropriately in accordance with applicable laws.",
    section6Title: "6. Use of Cookies",
    section6Body:
      "This site may use cookies and similar technologies to improve convenience and analyze site usage.",
    section7Title: "7. Contact",
    section7Body:
      "For inquiries regarding the handling of personal information, please contact us at:",
    section8Title: "8. Revisions",
    section8Body:
      "This policy may be revised as necessary. Revisions become effective when posted on this site.",
  },
  es: {
    eyebrow: "Privacidad",
    title: "Política de Privacidad",
    lead: "Ryuge Coffee (la “Empresa”) trata adecuadamente la información personal de sus clientes.",
    section1Title: "1. Información que recopilamos",
    section1Body:
      "Podemos recopilar nombres, direcciones, números de teléfono, direcciones de correo electrónico, información relacionada con pagos y datos de acceso cuando compra productos, se comunica con nosotros o se suscribe al boletín.",
    section2Title: "2. Finalidad del uso",
    section2Body:
      "La información recopilada se utiliza para el envío de productos, verificación de identidad, procesamiento de pagos, atención de consultas, mejora del servicio, envío de avisos importantes y prevención del uso no autorizado.",
    section3Title: "3. Cesión a terceros",
    section3Body:
      "No proporcionamos información personal a terceros sin consentimiento, salvo cuando lo exija la ley. Sin embargo, podemos encargar la información necesaria a empresas de entrega, proveedores de pago y proveedores de sistemas dentro del alcance necesario para nuestras operaciones.",
    section4Title: "4. Gestión de seguridad",
    section4Body:
      "Tomamos medidas de seguridad necesarias y adecuadas para evitar el acceso no autorizado, la filtración, la alteración o la pérdida de información personal.",
    section5Title: "5. Divulgación, corrección y eliminación",
    section5Body:
      "Si solicita la divulgación, corrección, suspensión del uso o eliminación de su información personal, responderemos adecuadamente de acuerdo con la legislación aplicable.",
    section6Title: "6. Uso de cookies",
    section6Body:
      "Este sitio puede utilizar cookies y tecnologías similares para mejorar la comodidad y analizar el uso del sitio.",
    section7Title: "7. Contacto",
    section7Body:
      "Para consultas sobre el tratamiento de información personal, contáctenos en:",
    section8Title: "8. Revisiones",
    section8Body:
      "Esta política puede revisarse cuando sea necesario. Las revisiones entrarán en vigor cuando se publiquen en este sitio.",
  },
};

export default function PrivacyPolicy() {
  const lang = localStorage.getItem("site-lang") || "ja";
  const t = PRIVACY_TEXT[lang];

  return (
    <section className="legal-document">
      <p className="legal-eyebrow">{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <p className="legal-lead">{t.lead}</p>

      <div className="legal-sections">
        <section>
          <h2>{t.section1Title}</h2>
          <p>{t.section1Body}</p>
        </section>

        <section>
          <h2>{t.section2Title}</h2>
          <p>{t.section2Body}</p>
        </section>

        <section>
          <h2>{t.section3Title}</h2>
          <p>{t.section3Body}</p>
        </section>

        <section>
          <h2>{t.section4Title}</h2>
          <p>{t.section4Body}</p>
        </section>

        <section>
          <h2>{t.section5Title}</h2>
          <p>{t.section5Body}</p>
        </section>

        <section>
          <h2>{t.section6Title}</h2>
          <p>{t.section6Body}</p>
        </section>

        <section>
          <h2>{t.section7Title}</h2>
          <p>
            {t.section7Body}
            <br />
            ryugecoffee@gmail.com
          </p>
        </section>

        <section>
          <h2>{t.section8Title}</h2>
          <p>{t.section8Body}</p>
        </section>
      </div>
    </section>
  );
}