import { Link } from "react-router";
import {
  ChevronRight,
  FileText,
  ShoppingCart,
  CreditCard,
  Truck,
  RotateCcw,
  Scale,
  Gavel,
  Briefcase,
  Shield,
  AlertTriangle,
  ImageIcon,
  Handshake,
  Zap,
} from "lucide-react";

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  content: (
    | string
    | { type: "list"; items: string[] }
    | { type: "numbered"; items: string[] }
    | { type: "highlight"; text: string }
    | { type: "sub"; title: string; text: string }
  )[];
}

const sections: Section[] = [
  {
    id: "scope",
    icon: FileText,
    title: "1. Validity & Scope",
    content: [
      "1.1. These Terms and Conditions of Sale govern the rights and obligations arising between a customer of the Nana OÜ online shop (hereafter: Purchaser) and Nana OÜ, registry code 12741701 (hereafter: Nanails) with the purchase of goods (hereafter: Product/Products).",
      "1.2. In addition to these Terms and Conditions, the legal relationships arising from the purchase of Products from the Nanails online shop shall be regulated by the legislation applicable in the Republic of Estonia.",
      "1.3. Nanails reserves the right to change the Terms and Conditions of Sale and the sales prices. These changes will be made available on Nanails' web page www.nanails.eu.",
      "1.4. By accepting these conditions, the Purchaser confirms that they have read the Terms and Conditions of Sale, agrees to them, and will follow them.",
    ],
  },
  {
    id: "pricing",
    icon: CreditCard,
    title: "2. Price Information",
    content: [
      "2.1. All prices at the Nanails online shop include a value added tax of 22%.",
      "2.2. Discounted prices are rounded off to full figures.",
    ],
  },
  {
    id: "orders",
    icon: ShoppingCart,
    title: "3. Placing an Order",
    content: [
      "3.1. On Nanails's website, you can order Products that have an 'Add to shopping cart' icon next to them. To order the desired Product, simply add it to your shopping cart. Products intended for professional use can be ordered only by business customers employed in the beauty-service industry, provided that they have been registered and confirmed by Nana.",
      "3.2. The availability and prices of Products are subject to change without notice. Product's in-store availability can be viewed under 'Availability' information located under the Product description. The prices of Products are indicated on the Products page. Discounted prices are indicated next to Products together with the full prices.",
      "3.3. The Purchaser can check the items in their shopping cart by clicking on the 'Cart' icon at the top of the webpage. The number of Products in a shopping cart can be changed by writing the desired number in the appropriate field. Products can be removed by clicking on the cross located on the same line with the Product.",
      "3.4. Before completing the order, choose the most suitable delivery method. Delivery is free for all Estonia orders over €50. International delivery thresholds vary by destination. For more detailed information on parcel delivery, check our Shipping & Delivery page.",
      "3.5. To complete the order, click 'Proceed to checkout'. If you are a registered user of Nana online shop, proceed to log in to your account. If you are ordering Products for the first time, click 'New client' and insert your contact information.",
      "3.6. To confirm your order, click 'Order and pay'. An invoice will be generated and you can proceed with a payment using your credit card, online banking link, or bank transfer. The confirmation of the order (proforma invoice) will be sent to the Purchaser's email address. Purchase history and invoices can be managed under 'My account'.",
      "3.7. Nana will dispatch Products only after the receipt of the payment.",
    ],
  },
  {
    id: "contract",
    icon: Handshake,
    title: "4. Entry into Force of the Sale Contract",
    content: [
      "4.1. The Purchaser undertakes to pay for the order by clicking on 'Order and pay'.",
      "4.2. The sales contract enters into force after the receipt of the payment made by the Purchaser to Nana OÜ's bank account.",
    ],
  },
  {
    id: "delivery",
    icon: Truck,
    title: "5. Delivery",
    content: [
      "5.1. After the entry into force of the sales contract (after receipt of payment), Nanails assembles the order and hands it over to Nanails' logistics partners for delivery.",
      "5.2. Orders placed and paid for on workdays before 13:00 will be delivered to the Purchaser the next day or according to the delivery times indicated on the product card. Delivery to islands may take up to 3 days. If the delivery is delayed, Nanails' customer support will arrange a convenient delivery time with the Purchaser.",
      "5.3. In order to avoid delivery delays, order forms must be filled in carefully and the delivery information submitted should be accurate and valid.",
      "5.4. If the Products are non-compliant with the contract's terms and conditions, the Purchaser shall have the right to:",
      {
        type: "list",
        items: [
          "Refuse to order or fulfil outstanding obligations",
          "Demand a reimbursement or a reduction of the price",
          "Demand the payment of interest if Nanails delays fulfilment of its monetary obligations",
        ],
      },
      "Products damaged (but not packaging) during transportation must be replaced. If replacement proves impossible, the Purchaser will receive a reimbursement equal to the price of the goods.",
      "5.5. Nanails shall not be held responsible for a delay in delivery if the goods were handed over to logistics partners on time but the delivery was delayed due to circumstances that Nanails could not foresee or control.",
    ],
  },
  {
    id: "withdrawal",
    icon: RotateCcw,
    title: "6. Right of Withdrawal",
    content: [
      "6.1. After receiving the Products from Nanails online shop, the Purchaser has the right to withdraw from the contract within 14 days. If the Purchaser finds the Product unsuitable, they can return it without giving any reason. The withdrawal term expires 14 days from the day when the Purchaser or a third person appointed by the Purchaser came into possession of the Products.",
      {
        type: "highlight",
        text: "The right of withdrawal shall not apply to goods that cannot be returned due to their nature, goods delivered in sealed packaging that were unsealed after delivery, goods not suitable for return due to health protection or hygiene reasons if unsealed, goods where Nanails is unable to check packaging integrity or non-use (e.g., missing foil cap liners and seals), products manufactured to Purchaser's specifications, products mixed or diluted with other products, and products used for business and professional purposes.",
      },
      "6.3. Nanails will refund the sum paid for the returned Product without delay, but not later than within 14 days from the date the Purchaser notified Nanails of the decision to return. To return the Product, the Purchaser must submit a return form.",
      "6.3.1. The Purchaser shall bear the return costs, except for cases when the Product being returned does not comply with the order (e.g., wrong or faulty product).",
      "6.4. The Product must be returned to Nanails immediately but not later than within 14 days from the day the Purchaser informed Nanails of their wish to return. The Product can be returned to the Nanails shop located at Pärnu maantee 23, 10141 Tallinn, Estonia.",
      "6.5. The deadline is deemed met if the Purchaser returns the Product before the expiry of the 14-day period.",
      "6.6. Nanails has the right to refuse repayment until the returned Product is received back or the Purchaser has submitted evidence of having sent the Product back, whichever takes place earlier.",
      "6.7. To avoid compensating for decreased value, the Purchaser must treat and use the Product only in the manner generally allowed in a store. The Product must be returned in its original packaging and in its entirety (all items in the product packaging must be present, along with any gifts added by Nanails). If the Product is used in any other way or returned without original packaging and full set, the Purchaser shall be held responsible for the decrease in value.",
      "6.7.1. If the condition of the returned Product has deteriorated, the Purchaser is responsible for the decreased value only if the Product has been used beyond what is necessary to verify its nature, qualities, and functioning.",
      "6.8. Nanails has the right to present claims regarding the decrease in value within one month of receiving the returned Product. If the Purchaser does not agree with the assessed decrease, they may involve an independent expert. The costs of the expert assessment shall be borne by the party whose opinion proved unfounded.",
      "6.10. If the Purchaser does not receive the Product ordered, or the Product delivered does not correspond to the description, or the Product appears defective, the Purchaser can — instead of submitting a withdrawal request within 14 days — use their lawful right to present a complaint.",
    ],
  },
  {
    id: "business",
    icon: Briefcase,
    title: "7. Business & Professional Use",
    content: [
      "7.1. If the purchased Product has been used for business or professional purposes, or used by a legal person, the regular complaints procedure shall not apply. In such cases, the period for submitting a complaint is usually 6 months.",
      "7.2. The Product shall not be subject to return if:",
      {
        type: "list",
        items: [
          "The Product is produced taking into account the Purchaser's individual needs",
          "The Product is produced according to conditions set out by the Purchaser",
          "The Product cannot be returned for hygiene or health protection reasons, and has been opened by the Purchaser after delivery (cosmetic product, etc.)",
        ],
      },
    ],
  },
  {
    id: "complaints",
    icon: Scale,
    title: "8. Liability & Complaints",
    content: [
      "8.1. Nana OÜ (registry code 12741701) and the Purchaser shall be held liable for damage caused to the non-breaching party in the events and to the extent provided for in the legislation of the Republic of Estonia.",
      "8.2. Nana OÜ shall be liable for non-compliance of the Product sold to the Purchaser with the terms and conditions, or for defects that existed at the time of handover and occur within two years. Within the first six months, it is assumed that the defect was present upon handover. It is Nana OÜ's responsibility to prove otherwise.",
      "8.3. The Purchaser has the right to submit complaints regarding a non-conforming Product within two years from the date of handover. A complaint must be submitted without delay but no later than within two months from detecting the defect. Upon detecting a defect, the Purchaser must take all reasonable measures for preservation and protection of the Product, including not using the defective Product if this would further deteriorate its condition.",
      "8.4. If the Product does not conform to contractual terms, the Purchaser may exercise legal remedies provided for in law, including requesting repair or replacement. If repair or replacement proves impossible or unsuccessful or causes unreasonable inconvenience, the Purchaser shall have the right to withdraw from the sales contract and demand a refund.",
      "8.5. Nana OÜ shall not be held liable for defects arising from incorrect usage or improper storage. Defects are Product defects, not defects of packaging.",
      "8.6. If Nana OÜ or the manufacturer has granted warranty to the Product, the warranty conditions in written form shall be given to the Purchaser and/or made electronically available in the online shop.",
      "8.7. The Purchaser must keep purchase documents (invoice, contract, etc.) that verify the purchase for the resolution of possible later problems. Nana OÜ has the right to refuse resolution if a purchase document is missing.",
      "8.8. If the Product purchased has defects, the Purchaser must submit a complaint within the next two months. The complaint can be sent to customer service by emailing info@nanails.eu or calling +372 5696 8888.",
      "8.9. A complaint must be submitted along with the defective Product. Nana OÜ and the Purchaser shall enter into a maintenance and repair agreement if the Product needs to be sent to a diagnostics centre or experts.",
      "8.10. A complaint must contain the following:",
      {
        type: "list",
        items: [
          "Purchaser's name and contact details",
          "Date of presenting the complaint",
          "Description of the Product's defects",
          "Claim presented to Nana OÜ",
          "Reference to documents confirming the transaction or warranty, or copies thereof",
        ],
      },
      "8.11. Nana OÜ will respond to the complaint in writing within 15 days of receipt. If unable to respond within 15 days, Nana OÜ will inform the Purchaser in writing, stating the reason and the expected response date.",
      "8.12. When resolving defects, the parties shall be guided by Nana OÜ's claiming conditions, which are an integral part of these Terms.",
      "8.13. The Purchaser is entitled to address the Estonian Consumer Protection and Technical Regulatory Authority (TTJA) at Sõle 23a, 10614 Tallinn, email: info@ttja.ee.",
      "8.14. If the Purchaser and Nana OÜ fail to settle a dispute by agreement, the Purchaser may address the Consumer Dispute Committee. Resolution of disputes by the Committee is free of charge for the Purchaser.",
      "8.15. The Purchaser may also address the dispute resolution bodies of the European Union. For the out-of-court resolution of online consumer disputes in accordance with EU Regulation 524/2013 of the European Parliament and of the Council, the EU Online Dispute Resolution platform is available.",
    ],
  },
  {
    id: "force-majeure",
    icon: Zap,
    title: "9. Force Majeure",
    content: [
      "9.1. Nanails shall not be held liable for damage caused or for delay in delivery of the Product, if the damage or delay are the result of circumstances that Nanails could not have influenced or foreseen.",
    ],
  },
  {
    id: "data",
    icon: Shield,
    title: "10. Data Processing & Security",
    content: [
      "10.1. For detailed information about the processing of personal data, please see our Privacy Policy.",
      "11.1. Any personal data that the Purchaser/Customer provides while visiting and shopping in the Nana OÜ online shop is considered confidential information, except in cases where a courier requires the Purchaser's name, phone number, or delivery address for goods delivery purposes, or in other cases prescribed by law.",
      "11.2. The use of an encrypted data transmission channel with banks guarantees that personal data and bank particulars of buyers are protected. The Nana OÜ online shop has no access to such data.",
    ],
  },
  {
    id: "other",
    icon: AlertTriangle,
    title: "11. Other Provisions",
    content: [
      "12.1. The images of the products are for illustrative purposes only.",
      "12.2. All prices and availability of the Products are subject to change without notice. Nana OÜ reserves the right to cancel the sales transaction and to refund the money to the Purchaser's bank account within reasonable time.",
      "12.3. Product information is verified and updated on a regular basis. It may happen that Product data has been updated after the Purchaser's last visit. Nana OÜ is not responsible for any inaccuracies or errors in the Product information provided on the website.",
    ],
  },
  {
    id: "disputes",
    icon: Gavel,
    title: "12. Governing Law & Disputes",
    content: [
      "These Terms and Conditions are governed by the laws of the Republic of Estonia. Any disputes shall be resolved in accordance with Estonian legislation.",
      "The competent supervisory authority is the Estonian Consumer Protection and Technical Regulatory Authority (TTJA), Sõle 23a, 10614 Tallinn, Estonia. Email: info@ttja.ee.",
      "For the out-of-court resolution of consumer disputes, the Purchaser may also use the European Commission's Online Dispute Resolution (ODR) platform.",
    ],
  },
];

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-6 sm:mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Terms & Conditions</span>
          </div>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C8A08C]/10 flex items-center justify-center shrink-0 mt-1">
              <FileText size={22} className="text-[#C8A08C]" />
            </div>
            <div>
              <h1 className="text-[28px] sm:text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Terms & Conditions
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#999] mt-2 max-w-[560px]">
                Terms and conditions governing purchases at nanails.eu. Last updated: February 1, 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
          {/* Sticky sidebar nav — desktop */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#C8A08C] mb-4" style={{ fontWeight: 600 }}>On this page</p>
            <nav className="flex flex-col gap-0.5">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[13px] text-[#999] hover:text-[#1A1A1A] py-1.5 px-3 rounded-lg hover:bg-[#F5F3F1] transition-all"
                  style={{ fontWeight: 500 }}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="max-w-[760px]">
            {/* Notice */}
            <div className="bg-[#C8A08C]/8 rounded-2xl p-5 sm:p-6 mb-8 sm:mb-10 border border-[#C8A08C]/12">
              <div className="flex items-start gap-3">
                <FileText size={18} className="text-[#C8A08C] shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-[#8B6F5C] leading-[1.7]">
                  <span style={{ fontWeight: 700 }}>Important:</span> By placing an order on nanails.eu, you confirm that you have read, understood, and agree to these Terms and Conditions. If you are purchasing on behalf of a business, you confirm you have the authority to bind that entity to these terms.
                </p>
              </div>
            </div>

            {/* Mobile TOC */}
            <div className="lg:hidden mb-8">
              <details className="bg-white rounded-2xl border border-[#f0eeec] overflow-hidden">
                <summary className="px-5 py-4 text-[14px] text-[#1A1A1A] cursor-pointer" style={{ fontWeight: 600 }}>
                  Table of Contents
                </summary>
                <nav className="px-5 pb-4 flex flex-col gap-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-[13px] text-[#999] hover:text-[#1A1A1A] py-1.5 px-3 rounded-lg hover:bg-[#F5F3F1] transition-all"
                      style={{ fontWeight: 500 }}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            <div className="flex flex-col gap-10 sm:gap-12">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3F1] flex items-center justify-center shrink-0">
                      <s.icon size={16} className="text-[#C8A08C]" />
                    </div>
                    <h2 className="text-[19px] sm:text-[22px] text-[#1A1A1A] tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                      {s.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    {s.content.map((block, i) => {
                      if (typeof block === "string") {
                        // Linkify known references
                        if (block.includes("Privacy Policy")) {
                          const parts = block.split("Privacy Policy");
                          return (
                            <p key={i} className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.8]">
                              {parts[0]}
                              <Link to="/privacy" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                                Privacy Policy
                              </Link>
                              {parts[1]}
                            </p>
                          );
                        }
                        if (block.includes("Shipping & Delivery")) {
                          const parts = block.split("Shipping & Delivery");
                          return (
                            <p key={i} className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.8]">
                              {parts[0]}
                              <Link to="/shipping" className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                                Shipping & Delivery
                              </Link>
                              {parts[1]}
                            </p>
                          );
                        }
                        return (
                          <p key={i} className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.8]">
                            {block}
                          </p>
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={i} className="space-y-2.5 ml-1">
                            {block.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.7]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A08C] shrink-0 mt-[9px]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.type === "highlight") {
                        return (
                          <div key={i} className="bg-[#FDF8F5] rounded-xl p-4 sm:p-5 border border-[#C8A08C]/12">
                            <p className="text-[13px] sm:text-[14px] text-[#8B6F5C] leading-[1.8]">
                              <span style={{ fontWeight: 700 }}>Note: </span>{block.text}
                            </p>
                          </div>
                        );
                      }
                      if (block.type === "numbered") {
                        return (
                          <ol key={i} className="space-y-2.5 ml-1">
                            {block.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.7]">
                                <span className="text-[12px] text-[#C8A08C] shrink-0 mt-[3px] w-5 h-5 rounded-full bg-[#C8A08C]/10 flex items-center justify-center" style={{ fontWeight: 700 }}>
                                  {j + 1}
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      if (block.type === "sub") {
                        return (
                          <div key={i}>
                            <p className="text-[14px] sm:text-[15px] text-[#1A1A1A] mb-1.5" style={{ fontWeight: 600 }}>{block.title}</p>
                            <p className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.8]">{block.text}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom contact */}
            <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#f0eeec]">
              <div className="bg-[#F5F3F1] rounded-2xl p-5 sm:p-6 border border-[#f0eeec]">
                <p className="text-[14px] text-[#1A1A1A] mb-3" style={{ fontWeight: 700 }}>NANA OÜ</p>
                <div className="text-[13px] text-[#6B6B6B] space-y-1 leading-[1.7]">
                  <p>Registry code: 12741701</p>
                  <p>Address: Pärnu maantee 23, 10141 Tallinn, Estonia</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+37256968888" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                      +372 5696 8888
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@nanails.eu" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                      info@nanails.eu
                    </a>
                  </p>
                </div>
                <div className="h-px bg-[#e5e5e5] my-4" />
                <p className="text-[12px] text-[#999] leading-[1.7]">
                  Supervisory authority: Estonian Consumer Protection and Technical Regulatory Authority (TTJA), Sõle 23a, 10614 Tallinn —{" "}
                  <a href="mailto:info@ttja.ee" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>
                    info@ttja.ee
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
