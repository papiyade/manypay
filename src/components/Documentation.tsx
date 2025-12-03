import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Copy,
  Check,
  Globe,
  Code,
  Key,
  Send,
  Shield,
  Book,
  Zap,
  Settings
} from "lucide-react";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [language, setLanguage] = useState("fr");
  const [copiedCode, setCopiedCode] = useState("");
  const [expandedSections, setExpandedSections] = useState(
    new Set(["api-basics"])
  );

  const translations = {
    fr: {
      title: "Documentation API",
      subtitle: "Guide complet pour intégrer ManyPayCash dans vos applications",
      gettingStarted: "Introduction",
      authentication: "Authentification",
      endpoints: "Endpoints",
      payments: "Paiements",
      webhooks: "Callbacks (Webhooks)",
      errors: "Gestion des erreurs",
      sdks: "SDKs & Bibliothèques",
      examples: "Exemples pratiques",
      apiBasics: "Bases de l'API",
      withdrawal: "Payout",
      transfer: "Transferts",
      cashin: "Cashin/Collection",
      balance: "Consultation solde",
      copy: "Copier",
      copied: "Copié !",
      switchLang: "Switch to English",
    },
    en: {
      title: "API Documentation",
      subtitle:
        "Complete guide to integrate ManyPayCash into your applications",
      gettingStarted: "Introduction",
      authentication: "Authentication",
      endpoints: "Endpoints",
      payments: "Payments",
      webhooks: "Callbacks (Webhooks)",
      errors: "Error Handling",
      sdks: "SDKs & Libraries",
      examples: "Practical Examples",
      apiBasics: "API Basics",
      withdrawal: "Payout",
      transfer: "Transfers",
      cashin: "Cashin/Collection",
      balance: "Balance Inquiry",
      copy: "Copy",
      copied: "Copied!",
      switchLang: "Passer au Français",
    },
  };

  const t = translations[language];

  const sidebarItems = [
    {
      id: "api-basics",
      title: t.apiBasics,
      icon: <Book className="w-4 h-4" />,
      children: [
        {
          id: "getting-started",
          title: t.gettingStarted,
          icon: <Zap className="w-4 h-4" />,
        },
        {
          id: "authentication",
          title: t.authentication,
          icon: <Key className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "endpoints",
      title: t.endpoints,
      icon: <Code className="w-4 h-4" />,
      children: [
        {
          id: "withdrawal",
          title: t.withdrawal,
          icon: <Send className="w-4 h-4" />,
        },
        {
          id: "transfer",
          title: t.transfer,
          icon: <Send className="w-4 h-4" />,
        },
        {
          id: "cashin",
          title: t.cashin,
          icon: <Send className="w-4 h-4" />,
        },
        {
          id: "balance",
          title: t.balance,
          icon: <Settings className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "advanced",
      title: "Avancé",
      icon: <Shield className="w-4 h-4" />,
      children: [
        {
          id: "webhooks",
          title: t.webhooks,
          icon: <Send className="w-4 h-4" />,
        },
        { id: "errors", title: t.errors, icon: <Shield className="w-4 h-4" /> },
        { id: "sdks", title: t.sdks, icon: <Code className="w-4 h-4" /> },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (text, codeId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  const CodeBlock = ({ code, language: codeLang = "javascript", id }) => (
    <div className="relative group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 my-6">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <span className="text-sm font-medium text-gray-300">{codeLang}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
        >
          {copiedCode === id ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400">{t.copied}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{t.copy}</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const getContent = () => {
    const contents = {
      "getting-started": {
        fr: {
          title: "Introduction",
          content: (
            <div className="space-y-6">
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#632447] to-[#AE3D7D] text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === "fr"
                    ? translations.fr.switchLang
                    : translations.en.switchLang}
                </span>
              </button>

              <div className="bg-blue-50 border border-[#AE3D7D] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  API Sentoolpay
                </h3>
                <p className="text-[#9c3871]">
                  L'API de Sentoolpay offre un moyen sécurisé et fiable de
                  traiter les transactions financières dans votre application.
                  Construite avec la sécurité et la scalabilité à l'esprit,
                  l'API prend en charge plusieurs méthodes de paiement,
                  notamment les cartes de crédit/débit, les virements bancaires
                  et les portefeuilles numériques.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  URL de base
                </h3>
                <CodeBlock
                  code="https://api.manypaycash.com"
                  language="url"
                  id="base-url-fr"
                />
              </div>

<div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Services disponibles
  </h3>
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Code Service
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Nom du Service
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Pays
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              ciwave
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Wave
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Côte d'Ivoire
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              snwave
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Wave
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Sénégal
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              snom
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Sénégal
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-2">
                  Étapes suivantes
                </h4>
                <ul className="text-green-800 space-y-2">
                  <li>• Obtenez vos clés API depuis votre tableau de bord</li>
                  <li>• Configurez l'authentification HMAC</li>
                  <li>• Ajoutez vos IPs à la whitelist</li>
                  <li>• Testez vos premiers payouts</li>
                </ul>
              </div>
            </div>
          ),
        },
        en: {
          title: "Introduction",
          content: (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  ManyPayCash API
                </h3>
                <p className="text-[#AE3D7D]">
                  ManyPayCash API provides a secure and reliable way to process
                  financial transactions within your application. Built with
                  security and scalability in mind, the API supports multiple
                  payment methods including credit/debit cards, bank transfers
                  and digital wallets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Base URL
                </h3>
                <CodeBlock
                  code="https://api.manypaycash.com"
                  language="url"
                  id="base-url-en"
                />
              </div>

<div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Available services
  </h3>
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Service code
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Service name
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Country
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              ciwave
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Wave
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Ivory Coast
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              snwave
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Wave
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Senegal
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
            <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
              snom
            </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
            Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            Senegal
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-2">
                  Next Steps
                </h4>
                <ul className="text-green-800 space-y-2">
                  <li>• Get your API keys from your dashboard</li>
                  <li>• Set up HMAC authentication</li>
                  <li>• Add your IPs to the whitelist</li>
                  <li>• Test your first payouts</li>
                </ul>
              </div>
            </div>
          ),
        },
      },
      authentication: {
        fr: {
          title: "Authentification",
          content: (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  🔐 Sécurité API
                </h3>
                <p className="text-yellow-800">
                  L'API utilise les clés API et le hachage HMAC avec votre clé
                  privée. Étant donné que nous utilisons une whitelist d'IPs,
                  vous devez fournir vos adresses IP.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headers requis
                </h3>
                <CodeBlock
                  code={`{
  "Content-Type": "application/json",
  "x-api-key": "votre clé API",
  "hash": "le hash calculé"
}`}
                  language="json"
                  id="auth-headers-fr"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Calcul du Hash (Node.js)
                </h3>
                <CodeBlock
                  code={`const { createHmac, createHash } = require('crypto');

let hmac = createHmac('sha256', 'votre clé secrète');
let path = "/payout";
hmac.update(path, 'utf8');

let method = "POST";
hmac.update(method, 'utf8');

let bodyHmac = createHash("sha256")
  .update(JSON.stringify(body))
  .digest('base64');
hmac.update(bodyHmac);

let hash = hmac.digest('base64');`}
                  language="javascript"
                  id="hash-calc-fr"
                />
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-900 mb-2">
                  ⚠️ Important
                </h4>
                <p className="text-red-800">
                  Vos adresses IP doivent être ajoutées à la whitelist dans
                  votre tableau de bord pour que les requêtes soient acceptées.
                </p>
              </div>
            </div>
          ),
        },
        en: {
          title: "Authentication",
          content: (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  🔐 API Security
                </h3>
                <p className="text-yellow-800">
                  The API uses API keys and payload hash using HMAC with your
                  private key. Since we are using IP whitelist, you have to
                  provide your IPs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Required Headers
                </h3>
                <CodeBlock
                  code={`{
  "Content-Type": "application/json",
  "x-api-key": "your api key",
  "hash": "the calculated hash"
}`}
                  language="json"
                  id="auth-headers-en"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hash Calculation (Node.js)
                </h3>
                <CodeBlock
                  code={`const { createHmac, createHash } = require('crypto');

let hmac = createHmac('sha256', 'your secret key');
let path = "/payout";
hmac.update(path, 'utf8');

let method = "POST";
hmac.update(method, 'utf8');

let bodyHmac = createHash("sha256")
  .update(JSON.stringify(body))
  .digest('base64');
hmac.update(bodyHmac);

let hash = hmac.digest('base64');`}
                  language="javascript"
                  id="hash-calc-en"
                />
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-900 mb-2">
                  ⚠️ Important
                </h4>
                <p className="text-red-800">
                  Your IP addresses must be added to the whitelist in your
                  dashboard for requests to be accepted.
                </p>
              </div>
            </div>
          ),
        },
      },
      withdrawal: {
        fr: {
          title: "Payout",
          content: (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  API Payout
                </h3>
                <p className="text-[#AE3D7D]">
                  L'API Payout vous permet de transférer des fonds de votre
                  compte vers des destinations externes telles que des comptes
                  bancaires ou des portefeuilles mobiles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono text-gray-800">
                    POST /payout
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headers
                </h3>
                <CodeBlock
                  code={`Content-Type: application/json
x-api-key: 'your api key'
hash: 'the created hash'`}
                  language="http"
                  id="payout-headers-fr"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Corps de la requête
                </h3>
                <CodeBlock
                  code={`{
  "code_service": "snwave",
  "montant": 100,
  "external_id": "ngntest65",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-body-fr"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Réponse de succès (200)
                </h4>
                <CodeBlock
                  code={`{
  "code": 200,
  "etat": "PENDING",
  "id": "ngntest87",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-success-fr"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Réponse d'erreur (400)
                </h4>
                <CodeBlock
                  code={`{
  "code": 400,
  "message": "the id ngntest87 is already used"
}`}
                  language="json"
                  id="payout-error-fr"
                />
              </div>
            </div>
          ),
        },
        en: {
          title: "Payout",
          content: (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  Payout API
                </h3>
                <p className="text-[#AE3D7D]">
                  The payout API allows you to transfer funds from your account
                  to external destinations such as bank accounts or mobile
                  wallets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono text-gray-800">
                    POST /payout
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headers
                </h3>
                <CodeBlock
                  code={`Content-Type: application/json
x-api-key: 'your api key'
hash: 'the created hash'`}
                  language="http"
                  id="payout-headers-en"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Request Body
                </h3>
                <CodeBlock
                  code={`{
  "code_service": "snwave",
  "montant": 100,
  "external_id": "ngntest65",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-body-en"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Success Response (200)
                </h4>
                <CodeBlock
                  code={`{
  "code": 200,
  "etat": "PENDING",
  "id": "ngntest87",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-success-en"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Error Response (400)
                </h4>
                <CodeBlock
                  code={`{
  "code": 400,
  "message": "the id ngntest87 is already used"
}`}
                  language="json"
                  id="payout-error-en"
                />
              </div>
            </div>
          ),
        },
      },
      cashin: {
        fr: {
          title: "Cashin/Collection",
          content: (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  Cashin
                </h3>
                <p className="text-[#AE3D7D]">Le point de terminaison Cash-In(Collection) permet aux marchands de collecter des fonds depuis le portefeuille mobile, le compte bancaire ou le canal de paiement d'un client vers leur compte marchand. Cette opération est généralement utilisée  lorsqu'un client effectue un paiement pour des biens ou services, et que le marchand initie la demande de débit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono text-gray-800">
                    POST /cashin
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headers
                </h3>
                <CodeBlock
                  code={`Content-Type: application/json
x-api-key: 'Votre clé API'
hash: 'le hash calculé'`}
                  language="http"
                  id="payout-headers-fr"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Corps de la requête
                </h3>
                <CodeBlock
                  code={`{
  "code_service": "snwave",
  "montant": 100,
  "external_id": "ngntest65",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-body-fr"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Réponse de succès (200)
                </h4>
                <CodeBlock
                  code={`{
  "code": 200,
  "etat": "PENDING",
  "id": "ngntest87",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-success-fr"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Réponse d'erreur (400)
                </h4>
                <CodeBlock
                  code={`{
  "code": 400,
  "message": "the id ngntest87 is already used"
}`}
                  language="json"
                  id="payout-error-fr"
                />
              </div>

              <div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Services disponibles
  </h3>
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Code Service
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Nom du Service
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Pays
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ciom
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Côte d'Ivoire
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bfom
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Burkina Faso
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          mlmoov
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Moov
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Mali
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bjmtn
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">MTN</td>
          <td className="px-6 py-4 text-sm text-gray-600">Bénin</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bjmoov
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Moov</td>
          <td className="px-6 py-4 text-sm text-gray-600">Bénin</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          snfree
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Free</td>
          <td className="px-6 py-4 text-sm text-gray-600">Sénégal</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ugmtn
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">MTN</td>
          <td className="px-6 py-4 text-sm text-gray-600">Ouganda</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ugairtel
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Airtel</td>
          <td className="px-6 py-4 text-sm text-gray-600">Ouganda</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            </div>

          ),
        },
        en: {
          title: "Cashin/Collection",
          content: (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#AE3D7D] mb-3">
                  Cashin API
                </h3>
                <p className="text-[#AE3D7D]">The Cash-In (Collection) endpoint allows merchants to collect funds from a customer’s mobile wallet, bank account, or payment channel into their merchant account.
This operation is typically used when a customer makes a payment for goods or services, and the merchant initiates the debit request.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono text-gray-800">
                    POST /cashin
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headers
                </h3>
                <CodeBlock
                  code={`Content-Type: application/json
x-api-key: 'your api key'
hash: 'the created hash'`}
                  language="http"
                  id="payout-headers-en"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Request Body
                </h3>
                <CodeBlock
                  code={`{
  "code_service": "snwave",
  "montant": 100,
  "external_id": "ngntest65",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-body-en"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Success Response (200)
                </h4>
                <CodeBlock
                  code={`{
  "code": 200,
  "etat": "PENDING",
  "id": "ngntest87",
  "info_pay": {
    "indicatif": "+221",
    "numero": "77xxxxxxx",
    "otp": "098654",
    "nom": "magor"
  }
}`}
                  language="json"
                  id="payout-success-en"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Error Response (400)
                </h4>
                <CodeBlock
                  code={`{
  "code": 400,
  "message": "the id ngntest87 is already used"
}`}
                  language="json"
                  id="payout-error-en"
                />
              </div>
              <div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Available services
  </h3>
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Service code
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Service name
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Country
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ciom
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Ivory Coast
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bfom
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Orange Money
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Burkina Faso
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          mlmoov
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
        Moov
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
        Mali
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bjmtn
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">MTN</td>
          <td className="px-6 py-4 text-sm text-gray-600">Benin</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          bjmoov
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Moov</td>
          <td className="px-6 py-4 text-sm text-gray-600">Benin</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          snfree
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Free</td>
          <td className="px-6 py-4 text-sm text-gray-600">Senegal</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ugmtn
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">MTN</td>
          <td className="px-6 py-4 text-sm text-gray-600">Uganda</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4">
        <code className="bg-purple-50 text-[#AE3D7D] px-3 py-1.5 rounded-md font-mono text-sm font-medium">
          ugairtel
        </code>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 font-medium">Airtel</td>
          <td className="px-6 py-4 text-sm text-gray-600">Uganda</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            </div>
          ),
        },
      },
      webhooks: {
        fr: {
          title: "Callbacks (Webhooks)",
          content: (
            <div className="space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  🔔 Notifications en temps réel
                </h3>
                <p className="text-purple-800">
                  Étant donné que les payouts peuvent prendre du temps à être
                  confirmés par les banques ou les opérateurs de mobile money,
                  l'API prend en charge les callbacks pour notifier votre
                  système des changements de statut.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Configuration
                </h3>
                <p className="text-gray-600 mb-4">
                  Vous pouvez configurer votre URL de callback dans le tableau
                  de bord client.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Vérification d'authenticité
                </h3>
                <p className="text-gray-600 mb-4">
                  Chaque requête de callback est hachée en utilisant HMAC avec
                  votre clé secrète. Vérifiez le header hash.
                </p>

                <CodeBlock
                  code={`const { createHmac, createHash } = require('crypto');

let hmac = createHmac('sha256', 'your secret key');
let bodyHmac = createHash("sha256")
  .update(JSON.stringify(payload))
  .digest('base64');
hmac.update(bodyHmac);
let hash = hmac.digest('base64');`}
                  language="javascript"
                  id="webhook-verify-fr"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Exemple de Payload Callback
                </h3>
                <CodeBlock
                  code={`{
  "id_transaction": "ngntest60",
  "etat": "TIMED_OUT",
  "type_transaction": "payout",
  "message": "time out",
  "montant": 100,
  "info_pay": "{\\"indicatif\\":\\"+221\\",\\"numero\\":\\"779013878\\",\\"otp\\":\\"098654\\",\\"nom\\":\\"magor\\"}",
  "code_service": "snwave",
  "code_pays": "sn"
}`}
                  language="json"
                  id="webhook-payload-fr"
                />
              </div>
            </div>
          ),
        },
        en: {
          title: "Callbacks (Webhooks)",
          content: (
            <div className="space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  🔔 Real-time Notifications
                </h3>
                <p className="text-purple-800">
                  Since payout may take time to be confirmed by the banks or
                  mobile money operators, the API supports callbacks to notify
                  your system about status changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Configuration
                </h3>
                <p className="text-gray-600 mb-4">
                  You can configure your callback URL in the client dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Verify Authenticity
                </h3>
                <p className="text-gray-600 mb-4">
                  Each callback request is hashed using HMAC with your secret
                  key. Check the hash header.
                </p>

                <CodeBlock
                  code={`const { createHmac, createHash } = require('crypto');

let hmac = createHmac('sha256', 'your secret key');
let bodyHmac = createHash("sha256")
  .update(JSON.stringify(payload))
  .digest('base64');
hmac.update(bodyHmac);
let hash = hmac.digest('base64');`}
                  language="javascript"
                  id="webhook-verify-en"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Example Callback Payload
                </h3>
                <CodeBlock
                  code={`{
  "id_transaction": "ngntest60",
  "etat": "TIMED_OUT",
  "type_transaction": "payout",
  "message": "time out",
  "montant": 100,
  "info_pay": "{\\"indicatif\\":\\"+221\\",\\"numero\\":\\"779013878\\",\\"otp\\":\\"098654\\",\\"nom\\":\\"magor\\"}",
  "code_service": "snwave",
  "code_pays": "sn"
}`}
                  language="json"
                  id="webhook-payload-en"
                />
              </div>
            </div>
          ),
        },
      },
    };

    const sectionContent = contents[activeSection];
    if (!sectionContent) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Section non disponible
          </h2>
          <p className="text-gray-600">
            Cette section sera bientôt disponible.
          </p>
        </div>
      );
    }

    const langContent = sectionContent[language] || sectionContent.fr;
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {langContent.title}
        </h1>
        {langContent.content}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-sm text-gray-600">{t.subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#642448] to-[#AE3D7D] text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{t.switchLang}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24">
              <div className="p-6">
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.title}</span>
                        </div>
                        {item.children &&
                          (expandedSections.has(item.id) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          ))}
                      </button>
                      {item.children && expandedSections.has(item.id) && (
                        <div className="pl-6 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => setActiveSection(child.id)}
                              className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                activeSection === child.id
                                  ? "bg-gradient-to-r from-[#541f3d] to-[#AE3D7D] text-white font-semibold"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {child.icon}
                              <span className="ml-2">{child.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              {getContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
