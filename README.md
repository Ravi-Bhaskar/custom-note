# Custom Note App

## Setup & run steps

```bash
npm install
npm run dev

# Why? – Design Decisions

## Storage Strategy 
### Why localStorage?
> localStorage is ideal for small-scale, client-only persistence. It doesn’t require backend APIs, is easy to use, and fits the project's constraints (no remote backend).

### Why use a utility file (storage.js)?
> A dedicated file encapsulates read/write logic and helps avoid code duplication across components.

### Why use a unique key?
> Prefixing keys like "myapp-notes" helps avoid key collisions and keeps localStorage organized.

## Component Design
### Why separate AddNote and NotesList components?
> Keeps concerns isolated. AddNote handles form logic; NotesList focuses on rendering.

### Why a Navigation component?
> Allows flexible tab-like routing while keeping the app single-page (no full reloads).

### Why keep components functional + hooks?
> Simpler syntax and React’s recommended approach for new code.

## State Management
### Why useState for form inputs and notes?
> useState gives straightforward control of input fields and is perfect for small-scale local state.

##  Navigation
### Why button-based nav + conditional rendering?
> Lightweight, doesn’t require react-router-dom, and is easy to implement for toggling between views.
