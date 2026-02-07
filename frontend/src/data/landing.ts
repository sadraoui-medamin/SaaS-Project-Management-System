export type Feature = { title: string; copy: string };
export type WorkflowStep = { step: string; title: string; copy: string };
export type Stat = { label: string; value: string };
export type Testimonial = { name: string; role: string; quote: string };
export type PricingPlan = {
  name: string;
  price: string;
  note: string;
  features: string[];
  highlight?: boolean;
};
export type PageRole = { name: string; role: string; copy: string };
export type AccessRow = {
  feature: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
};

export const features: Feature[] = [
  {
    title: "Unified Workspaces",
    copy: "Keep teams, projects, and docs organized with clear ownership and goals.",
  },
  {
    title: "Agile at Speed",
    copy: "Plan sprints, manage backlogs, and track velocity with zero clutter.",
  },
  {
    title: "Live Collaboration",
    copy: "Presence, comments, and updates in real time across every board.",
  },
  {
    title: "Smart Reporting",
    copy: "Turn raw activity into stakeholder-ready reports in minutes.",
  },
  {
    title: "Secure by Design",
    copy: "Multi-tenant isolation, RBAC, and audit trails built in.",
  },
  {
    title: "Ready to Integrate",
    copy: "Connect to GitHub, Slack, and custom tools through APIs and webhooks.",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Plan",
    copy: "Capture ideas, define scope, and align on milestones with clarity.",
  },
  {
    step: "02",
    title: "Build",
    copy: "Ship tasks with momentum using boards, sprints, and dependencies.",
  },
  {
    step: "03",
    title: "Launch",
    copy: "Track progress, share updates, and celebrate outcomes in one place.",
  },
];

export const stats: Stat[] = [
  { label: "Active teams", value: "1.2k" },
  { label: "Tasks shipped", value: "48k" },
  { label: "Avg. weekly velocity", value: "+22%" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Leila Morgan",
    role: "Product Lead, Horizon",
    quote:
      "ProjectFlow gave our teams a single source of truth without losing the speed we need.",
  },
  {
    name: "Ravi Singh",
    role: "Engineering Manager, Brightline",
    quote:
      "The sprint dashboards and workload views keep our planning grounded in reality.",
  },
  {
    name: "Nina Alvarez",
    role: "COO, Northstar",
    quote: "We onboarded three new departments in a week and never looked back.",
  },
];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "$12",
    note: "per user / month",
    features: ["Core boards", "Unlimited tasks", "Basic reporting", "Community support"],
  },
  {
    name: "Growth",
    price: "$24",
    note: "per user / month",
    features: [
      "Everything in Starter",
      "Advanced permissions",
      "Sprint analytics",
      "Email + chat support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual billing",
    features: [
      "Dedicated workspace",
      "Custom SLAs",
      "Security reviews",
      "Priority integrations",
    ],
  },
];

export const pages: PageRole[] = [
  {
    name: "Dashboard",
    role: "Execs + team leads",
    copy: "Snapshot of health, velocity, risks, and focus areas.",
  },
  {
    name: "Projects",
    role: "Project managers",
    copy: "Plan milestones, scope, owners, and dependencies.",
  },
  {
    name: "Tasks",
    role: "Product + engineering",
    copy: "Track daily execution, priorities, and blockers.",
  },
  {
    name: "Sprints",
    role: "Agile teams",
    copy: "Backlog, capacity, burndown, and retrospectives.",
  },
  {
    name: "Reports",
    role: "Leadership + finance",
    copy: "Performance insights and stakeholder-ready exports.",
  },
  {
    name: "Admin",
    role: "IT + security",
    copy: "SSO, permissions, audit logs, and compliance.",
  },
];

export const accessMatrix: AccessRow[] = [
  {
    feature: "Boards + tasks",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Sprint analytics",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Custom roles",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Advanced reporting",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "SSO + audit logs",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Dedicated support",
    starter: false,
    growth: false,
    enterprise: true,
  },
];
