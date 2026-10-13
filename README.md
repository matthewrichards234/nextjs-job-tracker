# NextJSJobTracker

A simple job application tracker built with Next.js that helps you organize your job search by tracking applications through different stages.

## Features

- **Create Job Applications** — Add a job's title, company, location, and posting URL.
- **Kanban Board** — Organize applications by status: Applied, Interview, Offer, and Rejected.
- **Drag and Drop** — Move job cards between statuses as your application progresses.
- **Job Details** — Click a job card to view its details, including application date and current status.
- **Delete Applications** — Remove job applications from the board.
- **Responsive Design** — View and manage your applications across different screen sizes.
- **Navigation** — Navigate between the Home and About pages.
- **GitHub Integration** — Visit the repository from the About page to star the project.

## Tech Stack

- **Next.js** — React framework for routing, layouts, and application structure.
- **React** — Component-based UI development and state management.
- **TypeScript** — Static typing for components, props, and job application data.
- **Tailwind CSS** — Utility-first styling for responsive layouts and UI components.
- **Flowbite React** — Modal components for displaying job details.
- **@dnd-kit/react** — Drag-and-drop functionality for moving job cards between application statuses.
- **Lucide React** — Icons used throughout the interface.
- **Bun** — JavaScript runtime and package manager.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Node.js](https://nodejs.org/) (if required by your environment)

### Installation

Clone the repository:

```bash
git clone https://github.com/matthewrichards234/nextjs-job-tracker.git
cd nextjs-job-tracker
```

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Goals

This project was built to practice and strengthen my understanding of Next.js, TypeScript, React state management, component composition, and drag-and-drop interactions while creating a practical tool for managing a job search.

## Future Improvements

- Persist job applications using browser `localStorage`.
- Add job application editing.
- Add search and filtering.
- Add application statistics and progress tracking.
- Improve accessibility and mobile interactions.
