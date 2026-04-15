# Digital Wayfinder's Guide: How Your Portfolio Works 🛶✨

E komo mai (Welcome)! This guide is your "map" to understanding how this portfolio is built. We've used a theme called **"Hoku Navigation"**—named after you (Hoku means "Star")—to blend your Hawaiian roots with your technical skills.

---

## 1. The Big Picture: Three Parts of Your Ship

Think of your portfolio like a traditional Hawaiian voyaging canoe (a *Waʻa*).

### 🛠️ The Hull: React (Components)
*   **What it is:** The physical structure of the site.
*   **How it works:** Everything you see (the buttons, the headers, the sections) is a "Component."
*   **Location:** Look in `src/pages` (for the big pages) and `src/features` (for the smaller pieces).
*   **Example:** `Home.tsx` is the deck of your ship where people first board.

### 🧭 The Compass: Redux (State Management)
*   **What it is:** The logic that keeps track of where you are and what data you have.
*   **How it works:** Instead of every page having its own "memory," we have one big "Logbook" (the Store). If you add a project, it goes into the logbook, and every page can read from it.
*   **Location:** Look in `src/features/projects/projectSlice.ts`.
*   **Mentor Tip:** This is like a global "Source of Truth."

### 🗺️ The Map: React Router (Navigation)
*   **What it is:** The paths that tell the site which "Component" to show based on the URL.
*   **How it works:** When someone clicks "THE FLEET," the Map tells the ship to swap the Home component for the Projects component.
*   **Location:** Look in `src/App.tsx`.

---

## 2. The "Hoku Navigation" Theme

We didn't just make a resume; we built a story.

*   **The Voyage (About Me):** Your journey from professional kitchens and maintenance to being an award-winning engineer at Nordstrom. It shows your grit!
*   **The Fleet (Projects):** Your technical "vessels"—the apps and systems you've built.
*   **The Compass (Community/Ohana):** What drives you. It shows recruiters that you care about *why* you build, not just *what* you build.
*   **Talk Story (Contact):** A warmer way to say "Contact Me." It invites a genuine conversation.

---

## 3. Step-by-Step: How to Add a New Project 🚀

When you build something new (like a new app), here is how you "add it to the fleet":

1.  **Open the Logbook:** Go to `src/features/projects/projectSlice.ts`.
2.  **Add the Data:** Find the `initialState` array. Copy one of the existing project blocks and paste it at the bottom.
3.  **Update the Details:** Change the `id`, `title`, and `description` to match your new project.
4.  **Save & Refresh:** The "Fleet" page will automatically update because it's "listening" to that slice of data!

---

## 4. The Flow: Your Daily Dev Journey

When you sit down to code, the "Wayfinder Flow" usually looks like this:

1.  **Check the Stars:** Look at your task (what am I building today?).
2.  **Build the Hull:** Create a new React component or edit an existing one.
3.  **Update the Compass:** If you need new data, update your Redux "Slice."
4.  **Check the Currents:** Run your code and make sure it looks good (the CSS).
5.  **Mahalo:** Double-check that it works on mobile and desktop, then you're done!

---

## 🎓 Mentor's Final Note
You have a unique story. You aren't just an engineer; you are a **Digital Wayfinder**. Use this portfolio to show people how you navigate complexity with an "Aloha-driven heart."

**Ready to chart a new course? Go ahead and add a new project to `projectSlice.ts`!**
