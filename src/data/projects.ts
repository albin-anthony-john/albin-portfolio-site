/**
 * Content for the Projects section (rendered by components/Projects.tsx).
 * Screenshots are served from the CDN; add new ones there, then list them here.
 */
import { CDN_BASE } from "../config/portfolio";

/** One project card. */
export interface Project {
  /** Card heading. Must be unique (used as the React key). */
  title: string;
  /** Screenshot URL (1536 × 1024, see PROJECT_IMAGE_SIZE). */
  image: string;
  /** Where the card links to. Defaults to the full-size screenshot. */
  href?: string;
  /** One-line summary of what the project is (shown emphasised). */
  problem: string;
  /** Longer description of what it does and why. */
  outcome: string;
  /** Technologies used, shown as tags. */
  stack: string[];
}

/** Intrinsic size of every project screenshot on the CDN (prevents layout shift). */
export const PROJECT_IMAGE_SIZE = { width: 1536, height: 1024 } as const;

/** Builds the CDN URL of a screenshot from its file name. */
const image = (file: string) => `${CDN_BASE}/images/${file}`;

/** Intro paragraph shown under the section heading. */
export const projectsIntro =
  "Seven systems and One Custom Nuget Package I designed and built: a password vault, an RDBMS migration studio, an ecommerce backend, and S3-style object storage.";

/** Project cards, in display order. */
export const projects: Project[] = [
  {
    title: "Cipher Vault",
    image: image("cipher-vault-web.png"),
    problem:
      "A Bitwarden-style central password manager — one vault for logins, secrets, and sensitive notes.",
    outcome:
      "Cipher Vault stores credentials in a zero-knowledge model: data is encrypted on the client, the master password never leaves the device, and only you can unlock the vault. Built for people who need a shared, safe place for secrets without trusting a plaintext database.",
    stack: [".NET", "MVC", "AES-256", "Argon2", "Zero-knowledge vault"],
  },
  {
    title: "Migration Studio",
    image: image("migration-studio.png"),
    problem:
      "A high-speed, performance-first tool for moving database objects — same engine or cross-database, RDBMS only.",
    outcome:
      "Migration Studio copies tables, views, procedures, and related objects from one relational database to another. It is built for one-to-one and cross-DB moves (for example SQL Server to PostgreSQL or MySQL), not NoSQL. The goal is simple: keep the business running while the schema and data land complete, fast, and without a one-off script.",
    stack: [".NET", "Blazor", "RDBMS", "Cross-database migration", "SQL objects"],
  },
  {
    title: "Olympus Backend",
    image: image("olympus-backend.png"),
    problem:
      "A complete Amazon-style ecommerce backend, designed from the first request for raw speed, scale, and security.",
    outcome:
      "Olympus is the server side of a high-volume store: catalog, cart, checkout, and order flows behind APIs that stay fast under load. The design follows the same hard rules used at Amazon, Netflix, Uber, Google, Microsoft, and GitHub — clear service boundaries, performance-first data access, and security as a default, not a later patch.",
    stack: [".NET", "Ecommerce APIs", "Microservices", "Docker", "Kubernetes", "Kafka", "Hangfire", "High-performance SQL", "Valkey", "GitHub Actions"],
  },
  {
    title: "Educacion Pro",
    image: image("educacion-app.png"),
    problem:
      "A multi-tenant school management system built specifically for Indian schools, bringing academics, administration, fees, attendance, communication, and daily operations into one platform.",
    outcome:
      "Educacion Pro provides a complete digital platform for managing multiple schools from a single system, with multilingual support, role-based access, academic and examination management, fee collection, transport, library, staff management, communication, reports, and more. The focus is simple UX, high performance, and practical support for the way Indian schools actually operate.",
    stack: [".NET", "React", "Multi-tenant", "Multilingual", "School Management"],
  },
  {
    title: "Open Object Storage",
    image: image("open-storage-object.png"),
    problem:
      "An S3-inspired object storage platform for storing and managing files of any type — from documents and images to backups and large-scale application data.",
    outcome:
      "Open Object Storage provides bucket-based storage with public and private access, scalable object management, secure policies, and high-performance file I/O. It gives applications an S3-style storage layer without depending entirely on a single cloud provider, making objects available through simple APIs while keeping storage scalable and organized.",
    stack: [".NET", "S3-style API", "Object Storage", "Scalable I/O", "Access Policies"],
  },
  {
    title: "Albin.Export",
    image: image("albin-export.png"),
    problem:
      "A reusable, fully customizable open-source .NET export library for generating high-quality reports, analytics, receipts, invoices, and business documents.",
    outcome:
      "Albin.Export provides a unified export architecture for PDF, Excel, CSV, Word, ZIP, PNG, SVG, and HTML. It is built around extensible interfaces, configurable properties, templates, styling, layouts, charts, and export-specific options, allowing developers to generate professional documents and reports without building a separate export implementation for every project.",
    stack: [".NET", "NuGet", "Open Source", "Custom Exporters", "Reports & Analytics"],
  },
  {
    title: "Unity Chat",
    image: image("unity-chat-app.png"),
    problem:
      "A lightweight, high-speed team communication platform designed for direct conversations and low-to-medium sized group chats without the complexity of a large enterprise collaboration suite.",
    outcome:
      "Unity Chat delivers real-time messaging for individuals and teams with group conversations, file sharing, reactions, notifications, presence, and voice/video communication. The platform focuses on fast communication, a simple user experience, and efficient real-time infrastructure for teams that need a focused alternative to heavier collaboration platforms.",
    stack: [".NET", "React", "SignalR", "Real-time Chat", "WebSockets"],
  },
  {
    title: "Ticket Management System",
    image: image("ticket-management-system.png"),
    problem:
      "A multi-tenant project and ticket management platform inspired by tools like Jira, allowing organizations to manage multiple projects, teams, and work items from one central system.",
    outcome:
      "The platform lets organizations register and manage their workspace, create unlimited projects, and organize work through project-specific Kanban boards. Teams can create, assign, prioritize, track, and complete tickets with statuses, labels, sprints, collaboration, and project-level visibility — providing a focused and lightweight alternative for structured software and business workflows.",
    stack: [".NET", "React", "Multi-tenant", "Kanban", "Ticket Management"],
  },
];
