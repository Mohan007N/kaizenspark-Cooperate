export interface Product {
  id: string;
  category: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  tech: string[];
  color: string;
  glow: string;
}

export const productsData: Product[] = [
  // ==========================================
  // BUSINESS SOFTWARE
  // ==========================================
  {
    id: "billing-software",
    category: "Business Software",
    categorySlug: "business-software",
    title: "Billing Software",
    subtitle: "Enterprise-Grade Automated Receivables, Multi-Tenant GST Accounting, & Smart Dunning Engine",
    desc: "An institutional billing platform engineered to streamline capital cycles, eliminate billing leaks, and automate complex tax reconciliations. Built with a high-throughput double-entry transactional database, it supports multi-branch operations, real-time GST tax calculations, automated Whatsapp/Email payment dunning campaigns, and direct government e-invoice (IRN) generation.",
    features: [
      "Dynamic multi-state GST engines with automatic HSN/SAC code syncing",
      "Automated dunning drip campaigns via integrated WhatsApp Business API and SMTP",
      "Cryptographically signed PDF invoices featuring customized brand layouts",
      "Direct API integrations with E-Way Bill and government e-Invoicing (IRN) systems",
      "Comprehensive customer ledgers with immutable SOC2 audit trail logs"
    ],
    tech: ["React.js", "Node.js (NestJS)", "MongoDB Atlas", "Puppeteer API", "WhatsApp Business APIs"],
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    id: "custom-crm-solutions",
    category: "Business Software",
    categorySlug: "business-software",
    title: "Custom CRM Solutions",
    subtitle: "Unified Sales Pipeline Management, Omni-Channel Messaging Integration, & Performance Analytics",
    desc: "A custom-engineered relationship suite built to match your unique enterprise sales funnels. Seamlessly compile leads from scattered digital ad channels (Meta Lead Forms, Google Ads, Landing Pages), manage pipelines via collaborative Kanban interfaces, schedule automated follow-ups, and auto-track sales team performance commissions.",
    features: [
      "Real-time drag-and-drop sales pipeline visualizers with custom workflows",
      "Direct Webhook integrations with Meta & Google Ad campaigns",
      "Multi-agent WhatsApp Business shared inbox and agent routing schemes",
      "Automated sales agent commissions engine based on customized targets",
      "Comprehensive interaction history with high-performance timeline indexes"
    ],
    tech: ["Next.js (App Router)", "Express", "PostgreSQL", "Meta Lead API", "Socket.io WebSockets"],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(99,102,241,0.15)"
  },
  {
    id: "erp-systems",
    category: "Business Software",
    categorySlug: "business-software",
    title: "ERP Systems",
    subtitle: "Material Requirements Planning (MRP II), Corporate Asset Depots, & Strategic Financial Workflows",
    desc: "A unified enterprise platform that acts as the single source of truth for your business operations. Seamlessly manage inventory requisition logs, coordinate detailed material requirements planning (MRP II), track corporate assets with automated depreciation calculators, and enforce multi-stage manager approval schemes.",
    features: [
      "Comprehensive purchase request workflows with automated manager notifications",
      "Multi-stage digital signatures using cryptographically sealed document tokens",
      "Fixed asset tracking with automated linear and double-declining depreciation calculators",
      "Interactive material planning visualizer with bill-of-materials (BOM) trackers",
      "Strict double-entry financial ledger compliant with international auditing protocols"
    ],
    tech: ["NestJS", "Next.js", "PostgreSQL", "Redis Enterprise", "BullMQ Tasks"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.15)"
  },
  {
    id: "inventory-management-tools",
    category: "Business Software",
    categorySlug: "business-software",
    title: "Inventory Management Tools",
    subtitle: "Raw Material Ledgers, Mobile Barcode/QR Scanning, & Predictive Replenishment Workflows",
    desc: "Maximize inventory turnover and optimize stock level assets. Manage raw material logs across multiple warehouses, scan material barcodes directly using standard mobile cameras, set automatic replenishment orders, and audit current warehouse valuation logs in real-time.",
    features: [
      "Real-time multi-warehouse stock ledgers with batch and serial number tracking",
      "Low stock warning systems triggering automated supplier purchase requisition requests",
      "Web-native camera barcode and QR scanning interfaces requiring no hardware",
      "Interactive inventory valuations using FIFO, LIFO, and WAC methods",
      "Inter-warehouse stock transfer approvals with detailed quarantine logs"
    ],
    tech: ["React PWA", "Node.js", "MongoDB", "Zxing Mobile Scanner SDKs"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.15)"
  },
  {
    id: "point-of-sale-systems",
    category: "Business Software",
    categorySlug: "business-software",
    title: "Point of Sale Systems",
    subtitle: "High-Speed Touch Checkouts, Offline SQLite Buffering, & Thermal Printer SDK Integrations",
    desc: "Keep retail lanes moving without interruptions. Features a fast touchscreen interface, automated transaction buffering during network outages, secure local SQLite databases, and direct thermal printer SDK integrations.",
    features: [
      "High-speed, touch-optimized register layouts with quick-tap category grids",
      "Robust offline operations buffering transactions locally with auto-sync when online",
      "Direct driver compatibility with standard Epson, Star, and Citizen thermal printers",
      "Flexible split-payment splitting options supporting cash, UPI, cards, and reward points",
      "Live terminal manager portal with strict shift opening/closing cash-drop verifications"
    ],
    tech: ["Electron", "React", "SQLite Local", "Node-USB Communication", "WebSockets"],
    color: "from-rose-500 to-amber-500",
    glow: "rgba(244,63,94,0.15)"
  },
  {
    id: "accounting-software",
    category: "Business Software",
    categorySlug: "business-software",
    title: "Accounting Software",
    subtitle: "Double-Entry Bookkeeping, Open Banking API Reconciliations, & GST Return Exports",
    desc: "Automate financial audits and maintain clean books. Sync transactions directly using secure Open Banking integrations, reconcile statements automatically using pattern-matching algorithms, and export tax reports in one click.",
    features: [
      "Rigid double-entry ledger bookkeeping with automated transaction validation rules",
      "Direct Open Banking API integrations for real-time transaction statement syncing",
      "One-click exports for standard government tax filing (GSTR JSON templates)",
      "Multi-currency exchange rate calculation modules updated daily via central banks",
      "Dynamic cash flow, profit & loss, and balance sheet engines with comparative analysis"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "OpenBanking APIs", "Celery Task Runners"],
    color: "from-amber-500 to-emerald-500",
    glow: "rgba(245,158,11,0.15)"
  },

  // ==========================================
  // EDUCATION
  // ==========================================
  {
    id: "learning-management-systems-lms-",
    category: "Education",
    categorySlug: "education",
    title: "Learning Management Systems (LMS)",
    subtitle: "Collaborative E-Learning Frameworks, Automated Grading Systems, & Secure Streaming Solutions",
    desc: "An educational platform designed for immersive digital learning. Build structured multimedia courses, manage interactive student progress trackers, stream live lectures, and check submissions using AI plagiarism verifications.",
    features: [
      "Multimedia course builders with drag-and-drop support for SCORM and xAPI files",
      "Encrypted live classes featuring digital whiteboards and collaborative screen sharing",
      "Dynamic gradebooks with custom rubric criteria configurations",
      "Integrated similarity check detectors analyzing text segments for duplicate sources",
      "Custom digital certificate generator engines with secure blockchain validations"
    ],
    tech: ["Next.js", "Express", "Node.js", "AWS Elemental Medialive", "HLS Streaming"],
    color: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.15)"
  },
  {
    id: "school-management-software",
    category: "Education",
    categorySlug: "education",
    title: "School Management Software",
    subtitle: "Administrative Hub, Real-time Fee Collection Ledgers, & Live GPS Fleet Trackers",
    desc: "The administrative center for modern institutions. Oversee admissions, manage fee collections with dynamic payment links, track student transport locations, and coordinate faculty payroll schedules.",
    features: [
      "Automated fee collection ledgers with automated WhatsApp reminder triggers",
      "Real-time GPS vehicle tracking with dynamic route stop ETA notifications",
      "Facilitated biometric integrations for student and staff attendance logs",
      "Automated academic report card generator compiling grades from distinct classes",
      "Asset and inventory management tools for school laboratory and sporting supplies"
    ],
    tech: ["React", "Express", "PostgreSQL", "Firebase Cloud Messaging", "GPS Protocol Adapters"],
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    id: "online-examination-systems",
    category: "Education",
    categorySlug: "education",
    title: "Online Examination Systems",
    subtitle: "Biometric AI Proctoring, Secure Fullscreen Lockdown Browser, & Evaluation Workflows",
    desc: "Secure remote evaluations at scale. Mitigate exam malpractice using browser-lock interfaces, utilize real-time webcam gaze tracking algorithms, and auto-grade objectives instantly.",
    features: [
      "Webcam-native gaze detection AI checking for unauthorized gaze deviations",
      "Strict browser-lock fullscreen sandboxing to prevent student tab navigation",
      "Dynamic question shuffling pools to prevent neighbor-to-neighbor test copying",
      "AI semantic text checking assistants for faster subjective answer analysis",
      "Comprehensive student exam audit logs capturing background processes"
    ],
    tech: ["Next.js", "Python Fast API", "TensorFlow.js Web models", "MongoDB Atlas"],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(99,102,241,0.15)"
  },
  {
    id: "e-library-solutions",
    category: "Education",
    categorySlug: "education",
    title: "E-Library Solutions",
    subtitle: "DRM Digital Repositories, Elasticsearch Catalogs, & Automated Rentals Scheduler",
    desc: "A high-performance portal for digital reading resources. Index massive documents, coordinate rent schedules, enforce DRM copy protections, and audit physical catalogs using mobile scanners.",
    features: [
      "High-speed book search indexing using Elasticsearch cluster databases",
      "Web-native PDF reading components with strict DRM protection keys to block copying",
      "Automated email notifications alerting students of rental return dates",
      "Physical catalog barcode scanner setups for rapid physical checkouts",
      "Personal digital bookcases enabling students to highlight text and add bookmarks"
    ],
    tech: ["React", "Express", "Elasticsearch Clusters", "AWS S3 DRM Encryption"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.15)"
  },
  {
    id: "student-portal-systems",
    category: "Education",
    categorySlug: "education",
    title: "Student Portal Systems",
    subtitle: "Student Hub, Integrated Payment Gateways, & Administrative Helpdesk Queues",
    desc: "A personalized academic interface connecting students, faculty, and administrative staff. Let students track timetables, remit tuition fees, view progress records, and request assistance via support tickets.",
    features: [
      "Personal student dashboard presenting real-time semester schedules and timetables",
      "Integrated Razorpay fee portal with immediate secure receipts download",
      "Official academic transcript and semester grade card exports",
      "Integrated helpdesk ticket system routing support queries to administrative queues",
      "Encrypted group discussion channels with dedicated course advisors"
    ],
    tech: ["React", "NestJS", "PostgreSQL", "Razorpay Payment SDKs"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.15)"
  },

  // ==========================================
  // INDUSTRY SOLUTIONS
  // ==========================================
  {
    id: "healthcare-management",
    category: "Industry Solutions",
    categorySlug: "industry-solutions",
    title: "Healthcare Management Solutions",
    subtitle: "Unified EHR Infrastructure, Patient OPD/IPD Queues, & HIPAA-Compliant Operations",
    desc: "An all-in-one hospital operations suite built to increase clinic throughput. Coordinates patient registrations, manages patient records, audits pharmacy stocks, and automates multi-party insurance claims.",
    features: [
      "Digital OPD/IPD patient registration desk with live slot schedulers",
      "Fully secure Electronic Health Records (EHR) compliant with HIPAA and DPDPA mandates",
      "Automated lab report compilers with instant WhatsApp PDF delivery APIs",
      "Real-time pharmacy stock auditing with batch expiration alert logs",
      "Integrated multi-party insurance claim billing modules with audit logging"
    ],
    tech: ["Next.js", "Express", "PostgreSQL", "AWS HIPAA-compliant S3", "Twilio WhatsApp API"],
    color: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.15)"
  },
  {
    id: "restaurant-management",
    category: "Industry Solutions",
    categorySlug: "industry-solutions",
    title: "Restaurant Management Solutions",
    subtitle: "Kitchen Display Systems (KDS), Table QR Menus, & Ingredient Recipe Costing",
    desc: "Accelerate food preparations and eliminate ordering errors. Seamlessly route table orders to visual kitchen display screens, collect mobile QR payments, and audit ingredient margins.",
    features: [
      "Interactive Kitchen Display Screens (KDS) updating kitchen staff in real-time",
      "Contactless QR table menus with direct payment collections via integrated UPI APIs",
      "Recipe costing modules tracking raw stock deductions on every menu checkout",
      "Integrated delivery aggregators (Swiggy, Zomato API synchronization models)",
      "Multi-terminal thermal printer setups routing specific items to kitchen printers"
    ],
    tech: ["React PWA", "Node.js", "MongoDB", "Socket.io", "EPSON POS SDKs"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    id: "real-estate-solutions",
    category: "Industry Solutions",
    categorySlug: "industry-solutions",
    title: "Real Estate Solutions",
    subtitle: "Property Catalogs, Buyer Installment Ledgers, & WhatsApp Lead CRM Platforms",
    desc: "Empower your real estate sales force. Manage gorgeous high-definition property catalogs, track buyer installments, automate follow-ups, and track sales commissions.",
    features: [
      "High-definition property catalogs with interactive visual search filters",
      "Automated buyer installment schedulers calculating EMI milestones",
      "Lead scoring workflows synced with automated WhatsApp drip systems",
      "Digital tenancy and sale agreement templates with digital signature setups",
      "Multi-agent commissions tracker reflecting dynamic milestones achieved"
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS S3 Assets Bucket", "DocuSign integrations"],
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(5,150,136,0.15)"
  },
  {
    id: "hotel-management",
    category: "Industry Solutions",
    categorySlug: "industry-solutions",
    title: "Hotel Management Solutions",
    subtitle: "Visual Reservation Calendars, OTA Channel Managers, & Housekeeping Dashboards",
    desc: "Coordinate bookings across online channels. Manage visual reservation calendars, assign room tasks to mobile tablets, and consolidate billing reports.",
    features: [
      "OTA Channel Manager syncing rates and calendars (Booking.com, Agoda, MakeMyTrip)",
      "Interactive visual calendar grid with booking adjusters",
      "Housekeeping workflow tracking on mobile devices",
      "Consolidated invoicing routing restaurant and bar orders to guest rooms",
      "Split billing ledger checkouts supporting various currency methods"
    ],
    tech: ["React Native Mobile", "Next.js", "Node.js", "PostgreSQL", "Redis Cache"],
    color: "from-teal-500 to-emerald-500",
    glow: "rgba(20,184,166,0.15)"
  },
  {
    id: "retail-management",
    category: "Industry Solutions",
    categorySlug: "industry-solutions",
    title: "Retail Management Solutions",
    subtitle: "Multi-Store Inventories, Automated Supplier PO Workflows, & Analytics",
    desc: "Scale your retail enterprise. Oversee stocks across multiple branches, manage raw supplier purchases, design customer loyalty campaigns, and review sales charts.",
    features: [
      "Multi-branch visual stock inventory and transfer ledgers",
      "Real-time transfer order trackers highlighting stock in transit",
      "Dynamic customer loyalty point tiers and campaigns",
      "Supplier PO lifecycle tracking and approval gates",
      "Interactive sales and profit analytic chart metrics"
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis Databases"],
    color: "from-emerald-500 to-amber-500",
    glow: "rgba(16,185,129,0.15)"
  },

  // ==========================================
  // AI & AUTOMATION
  // ==========================================
  {
    id: "ai-chatbot-solutions",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    title: "AI Chatbot Solutions",
    subtitle: "RAG Vector Conversational Agents, WhatsApp Sync, & CRM Handoffs",
    desc: "Deploy intelligent customer support agents trained on your organization's knowledge base. Resolves questions, captures leads, and routes complex requests to staff.",
    features: [
      "Retrieval-Augmented Generation (RAG) training on custom PDF and Web docs",
      "Multi-channel deployments (WhatsApp, Web, Slack, Telegram)",
      "Automated custom CRM lead sync pipelines",
      "Intelligent human agent routing conditions based on sentiment analysis",
      "Detailed conversation metrics and visual analysis"
    ],
    tech: ["Next.js", "Python Fast API", "LangChain Framework", "Pinecone VectorDB"],
    color: "from-purple-500 to-indigo-500",
    glow: "rgba(168,85,247,0.15)"
  },
  {
    id: "business-process-automation",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    title: "Business Process Automation",
    subtitle: "Visual Workflow Planners, Multi-System Webhook Nodes, & Scheduled Runs",
    desc: "Eliminate manual back-office tasks. Build workflow graphs to move data across disparate software packages, schedule recurring actions, and set alert policies.",
    features: [
      "Visual drag-and-drop workflow planner grids",
      "Omnichannel custom REST and GraphQL webhook triggers",
      "Scheduled execution nodes with robust retry rules",
      "Advanced error reporting with instant Slack alerts",
      "Multi-tenant data isolation and protection keys"
    ],
    tech: ["React.js UI", "Express", "Node.js Engine", "Redis BullMQ Queue"],
    color: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.15)"
  },
  {
    id: "data-analytics-platforms",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    title: "Data Analytics Platforms",
    subtitle: "Predictive Analytics, Custom Charts Builders, & Automated Reports Schedules",
    desc: "Translate tabular rows into growth strategies. Generate visual analytics charts, build SQL aggregations, forecast customer demands, and schedule PDF updates.",
    features: [
      "Real-time visual data graphs & drag-and-drop metrics",
      "Algorithmic forecasting models (Prophet, Scikit-learn)",
      "Custom SQL builder engines with visual UI grids",
      "Automated scheduled PDF report generator sheets",
      "Instant multi-role dashboard user permissions"
    ],
    tech: ["Next.js UI", "Django Backend", "PostgreSQL", "Google BigQuery Data Warehouse"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    id: "document-management",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    title: "Document Management Solutions",
    subtitle: "Intelligent OCR Text Parsers, Multi-Format Files Sorters, & Compliant Repositories",
    desc: "Zero-effort paper digitizations. Extract structured key-value data parameters from unstructured paper logs, organize document flows, and index resources.",
    features: [
      "Advanced OCR text parsers with deep-learning AI tools",
      "Multi-format paper log parsers (PDF, DOCX, PNG, JPG)",
      "Dynamic index generation and custom vector search fields",
      "AWS Textract sync engines with strict HIPAA gates",
      "Scheduled backup processes to cold-storage archives"
    ],
    tech: ["Next.js", "Python Scripts", "OpenCV Libs", "Tesseract Library", "AWS Textract Engine"],
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.15)"
  },
  {
    id: "workflow-automation-tools",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    title: "Workflow Automation Tools",
    subtitle: "Trigger Receivers, REST webhook Listeners, & Execution Audit Feeds",
    desc: "Synchronize applications. Establish trigger adapters to capture webhooks, translate values using visual variables, and update external databases.",
    features: [
      "Instant API triggers from inbound REST payload bodies",
      "Automated email notification routing triggers",
      "Multi-channel webhook receiver endpoints with API authentication keys",
      "Dynamic webhook parameter mapping schemas",
      "Comprehensive success/failure execution logs"
    ],
    tech: ["React Front-End", "Express API", "Node.js Workers", "RabbitMQ Message Queues", "MongoDB"],
    color: "from-teal-500 to-rose-500",
    glow: "rgba(20,184,166,0.15)"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(p => p.id === id);
};
