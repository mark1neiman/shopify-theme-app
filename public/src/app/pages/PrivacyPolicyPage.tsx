import { Link } from "react-router";
import {
  ChevronRight,
  Shield,
  Eye,
  Database,
  Lock,
  UserCheck,
  Globe,
  Mail,
  CreditCard,
  Trash2,
  Send,
  Megaphone,
  Scale,
  Building2,
  FileText,
} from "lucide-react";

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  content: (string | { type: "list"; items: string[] } | { type: "highlight"; text: string } | { type: "contact"; lines: string[] })[];
}

const sections: Section[] = [
  {
    id: "controller",
    icon: Building2,
    title: "1. Data Controller",
    content: [
      {
        type: "contact",
        lines: [
          "NANA OÜ (registry code 12741701)",
          "Pärnu maantee 23, Tallinn, Estonia",
          "Phone: +372 5696 8888",
          "Email: info@nanails.eu",
        ],
      },
      "NANA OÜ is the controller of the personal data collected through the nanails.eu online shop and is responsible for ensuring that your data is processed lawfully, fairly, and transparently.",
    ],
  },
  {
    id: "what-data",
    icon: Database,
    title: "2. What Personal Data We Collect",
    content: [
      "We collect and process the following categories of personal data:",
      {
        type: "list",
        items: [
          "Name, phone number, and email address",
          "Delivery address",
          "Bank account number (for refunds)",
          "Cost of goods and services, payment details, and purchase history",
          "Customer support correspondence and data",
          "IP address and other web identifiers (collected automatically)",
        ],
      },
    ],
  },
  {
    id: "why",
    icon: Eye,
    title: "3. Why We Process Your Data",
    content: [
      "Your personal data is processed for the following purposes:",
      {
        type: "list",
        items: [
          "Managing your orders and delivering goods to you",
          "Preparing summaries and analysing customer preferences based on purchase history (date of purchase, goods, quantity, customer data)",
          "Reimbursing payments using your bank account number when applicable",
          "Handling issues relating to the provision of goods and services — customer support uses your email, phone number, and name",
          "Providing the online shop as an information society service and generating web usage statistics (IP address and web identifiers)",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    icon: Scale,
    title: "4. Legal Grounds for Processing",
    content: [
      "We process your personal data on the following legal bases:",
      {
        type: "list",
        items: [
          "Performance of a contract — processing is necessary to fulfil the contract concluded with you (orders, delivery, returns)",
          "Legal obligation — processing is necessary for compliance with legal requirements such as accounting and the settlement of consumer complaints",
          "Consent — where you have given explicit consent, such as for receiving our newsletter. You may withdraw consent at any time",
        ],
      },
    ],
  },
  {
    id: "recipients",
    icon: Send,
    title: "5. Recipients of Personal Data",
    content: [
      "Your personal data may be shared with the following recipients, strictly on a need-to-know basis:",
      {
        type: "list",
        items: [
          "Customer support staff — for managing purchases, purchase history, and resolving customer issues",
          "Transport service providers — your name, phone number, and email address are transmitted to the carrier selected by you. For courier deliveries, your address is also shared",
          "Accounting service providers — if external accounting is used, personal data is transmitted for performing accounting operations",
          "IT service providers — personal data may be shared where necessary to ensure the functionality of the online shop or for data hosting",
          "Payment service providers — data is forwarded for the provision of payment initiation services",
        ],
      },
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "6. Security & Access to Data",
    content: [
      "Personal data is stored on servers located within the territory of a member state of the European Union or states of the European Economic Area. Data may be transferred to countries whose data protection levels have been assessed as adequate by the European Commission.",
      "We take appropriate physical, organisational, and IT security measures to protect personal data against accidental or unlawful destruction, loss, alteration, or unauthorised access and disclosure.",
      "Access to personal data is limited to staff members of the online shop who require it to settle technical issues or provide customer support.",
      "Personal data transmitted to data processors (such as transport and hosting providers) is processed under contracts that require appropriate safeguards.",
    ],
  },
  {
    id: "card-payments",
    icon: CreditCard,
    title: "7. Card Payments",
    content: [
      "The authorised processor of card payments is Nets Estonia AS, who handles card data exclusively for the purpose of processing card transactions. Your card details are never stored on our servers.",
    ],
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "8. Your Rights",
    content: [
      "You have the following rights regarding your personal data:",
      {
        type: "list",
        items: [
          "Access & rectification — you can view and correct your personal data through your user profile. If you made a purchase without an account, contact customer support",
          "Withdrawal of consent — where processing is based on consent, you may withdraw it at any time by contacting customer support via email",
          "Erasure — to request deletion of your personal data, contact customer support via email. We will respond within one month and specify the erasure timeline",
          "Data portability — you may request transmission of your personal data by contacting customer support via email. We will respond within one month, verify your identity, and provide the requested data",
          "Right to object — you may object to processing based on legitimate interests, including profiling related to direct marketing",
        ],
      },
    ],
  },
  {
    id: "retention",
    icon: FileText,
    title: "9. Data Retention",
    content: [
      "We retain personal data only for as long as necessary:",
      {
        type: "list",
        items: [
          "Account data is erased upon closure of your customer account, unless further storage is required for accounting or consumer dispute resolution",
          "Purchase history for orders made without a customer account is stored for three years",
          "In case of payment or consumer disputes, data is retained until the claim is satisfied or the limitation period expires",
          "Accounting data is stored for seven years as required by law",
        ],
      },
    ],
  },
  {
    id: "direct-marketing",
    icon: Megaphone,
    title: "10. Direct Marketing",
    content: [
      "Your email address and phone number may be used for sending direct marketing messages only if you have given consent.",
      "If you no longer wish to receive marketing communications, you can unsubscribe via the link at the footer of any marketing email or by contacting customer support.",
      "You have the right to object at any time to the processing of your personal data for direct marketing purposes, including profiling related to direct marketing, by notifying customer support via email.",
    ],
  },
  {
    id: "disputes",
    icon: Globe,
    title: "11. Dispute Resolution",
    content: [
      "Disputes concerning the processing of personal data are settled through our customer support:",
      {
        type: "contact",
        lines: [
          "Phone: +372 5696 8888",
          "Email: info@nanails.eu",
        ],
      },
      "The supervisory authority is the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon), which can be contacted at info@aki.ee.",
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero */}
      <div className="bg-white border-b border-[#f0eeec]">
        <div className="max-w-[1415px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#999] mb-6 sm:mb-8">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>Privacy Policy</span>
          </div>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2E4A3E]/8 flex items-center justify-center shrink-0 mt-1">
              <Shield size={22} className="text-[#2E4A3E]" />
            </div>
            <div>
              <h1 className="text-[28px] sm:text-[38px] text-[#1A1A1A] tracking-[-0.03em]" style={{ fontWeight: 700 }}>
                Privacy Policy
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#999] mt-2 max-w-[560px]">
                How NANA OÜ collects, uses, and protects your personal data. Last updated: February 1, 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
          {/* Sticky sidebar nav */}
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
            {/* GDPR badge */}
            <div className="bg-[#2E4A3E]/5 rounded-2xl p-5 sm:p-6 mb-8 sm:mb-10 border border-[#2E4A3E]/8">
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-[#2E4A3E] shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-[#2E4A3E] leading-[1.7]">
                  <span style={{ fontWeight: 700 }}>GDPR Compliant.</span> NANA OÜ is committed to protecting your privacy in accordance with the EU General Data Protection Regulation (GDPR) and Estonian data protection legislation. This policy explains how we handle your personal data when you use nanails.eu.
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
                      if (block.type === "contact") {
                        return (
                          <div key={i} className="bg-[#F5F3F1] rounded-xl p-4 sm:p-5 border border-[#f0eeec]">
                            {block.lines.map((line, j) => (
                              <p key={j} className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-[1.8]" style={{ fontWeight: j === 0 ? 700 : 500 }}>
                                {line}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      if (block.type === "highlight") {
                        return (
                          <div key={i} className="bg-[#C8A08C]/5 rounded-xl p-4 sm:p-5 border border-[#C8A08C]/10">
                            <p className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.7]">{block.text}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#f0eeec]">
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail size={18} className="text-[#C8A08C] shrink-0 mt-1" />
                <div>
                  <p className="text-[14px] sm:text-[15px] text-[#6B6B6B] leading-[1.7] mb-3">
                    If you have any questions about this privacy policy or wish to exercise your rights regarding your personal data, please contact us:
                  </p>
                  <div className="bg-[#F5F3F1] rounded-xl p-4 sm:p-5 border border-[#f0eeec]">
                    <p className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>NANA OÜ</p>
                    <p className="text-[13px] text-[#6B6B6B] mt-1">Pärnu maantee 23, Tallinn, Estonia</p>
                    <p className="text-[13px] text-[#6B6B6B]">
                      Phone: <a href="tel:+37256968888" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>+372 5696 8888</a>
                    </p>
                    <p className="text-[13px] text-[#6B6B6B]">
                      Email: <a href="mailto:info@nanails.eu" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>info@nanails.eu</a>
                    </p>
                    <div className="h-px bg-[#e5e5e5] my-3" />
                    <p className="text-[12px] text-[#999]">
                      Supervisory authority: Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) — <a href="mailto:info@aki.ee" className="text-[#1A1A1A] hover:text-[#C8A08C] transition-colors" style={{ fontWeight: 500 }}>info@aki.ee</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
