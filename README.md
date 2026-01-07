# FloryderBot 5.0

FloryderBot 5.0 is a Discord-focused NBA analytics and learning tool designed to analyze games, players, and trends using structured logic and historical data.

> ⚠️ This tool is educational and analytical — not betting advice. FloryderBot 5.0 helps users understand trends, probabilities, and context. It does not guarantee outcomes.

## Table of contents
- What FloryderBot Is
- Core Philosophy
- Supported Sport (V1)
- Main Commands
- Pick Modes
- Confidence & Color System
- How the Bot Thinks
- Explanations & Insights
- Learning / Feedback System
- Cooldown System
- Data Sources
- Development Approach
- Safety & Responsible Use
- Current Status & Next Steps

---

## 1. What FloryderBot Is
FloryderBot 5.0 is a Discord-based NBA analytics tool that:
- Analyzes games, players and trends using explainable, confidence-weighted logic
- Prioritizes transparency, explainability, and risk awareness
- Learns from outcomes and user feedback

Purpose: analysis, learning, clarity. Tone: honest, informative, transparent.

---

## 2. Core Philosophy
FloryderBot does not:
- Randomly generate picks
- Chase odds blindly
- Promise guaranteed results

Instead, it:
- Breaks data into understandable signals
- Weighs multiple factors and labels risk
- Shows why picks were selected
- Learns and adjusts when wrong

---

## 3. Supported Sport (V1)
- ✅ NBA only
- Future plans: NFL, Tennis, Live/In-game analysis

---

## 4. Main Commands

### /parlay
Generates a multi-leg analytical parlay. User-selectable options:
- Number of legs
- Mode: Safe / Normal / Moonshot
- Markets: player points, rebounds, assists, combined stats, team spreads, team totals
- Game Time: 1st Quarter / Halftime / Full Game
- Trend Window: last 5 games / last 10 games / 15-game average

The user can select multiple markets and windows simultaneously.

### /pickoftheday
Returns top-ranked picks of the day:
- NBA-only
- Ranked by confidence
- Odds no worse than -200
- Filterable by mode and trend window
- Returns Top 5 picks with confidence color, trend score, explanation, and risk label

---

## 5. Pick Modes Explained

- Safe (🟢)
  - Strong historical trends, minimal conflicting signals, consistency-focused
- Normal (🟠)
  - Solid trends, moderate variance, more emphasis on recent form
- Moonshot (🔴 / 🚀)
  - Carefully constructed high-risk parlays combining Safe/Normal picks with one or two high-variance selections; clearly labeled as risky

---

## 6. Confidence & Color System

Trend windows and color mapping:
- Last 5 / 10 Games:
  - 1–3 hits → 🔴 Red
  - 4–6 hits → 🟠 Orange
  - 7–10 hits → 🟢 Green
- 15-Game Average:
  - 1–5 → 🔴 Red
  - 6–10 → 🟠 Orange
  - 11–15 → 🟢 Green

Visual language:
- 🟢 Green = Strong / Safe
- 🟠 Orange = Moderate
- 🔴 Red = Risky
- 🚀 = Moonshot

Inline color-coding (e.g., “4/5 games — 🟢”) shows confidence at-a-glance.

---

## 7. How the Bot Thinks (High-Level)
The bot analyzes context, not only raw numbers. Example signals:
- Player performance when teammates or a star are inactive
- Team performance by venue (home/away, specific stadiums)
- Matchup history
- Recent form vs long-term averages
- Role changes (usage, minutes)
- Consistency vs volatility

Signals are combined as confidence-weighted results instead of binary outputs.

---

## 8. Explanations & Insights (Mandatory)
Every pick must include human-readable reasoning:
- “Over 18.5 points — hit in 4 of last 5 games”
- “Team hit total in 7 of last 10”
- “Player usage increases when X is inactive”
- “This team lost 4 of last 5 in this stadium”

No pick is shown without an explanation.

---

## 9. Learning From Results (Feedback System)
Users can mark outcomes:
- ✅ Hit
- ❌ Miss

Bot logs:
- Market type
- Mode
- Confidence
- Outcome

Over time this log is used to:
- Identify weak assumptions
- Reweight signals
- Reduce repeated mistakes
- Improve future recommendations

This is learning for better analysis, not to optimize gambling.

---

## 10. Cooldown System
- Default: 60-second cooldown per user to prevent spam
- Optional admin/dev bypass for testing

---

## 11. Data Sources
Initial focus: free, public sources
- Official league stats, box scores, schedules, public injury reports

Planned later additions:
- SofaScore, StatMuse, odds comparison, projections, live data

---

## 12. Terminal-First Development
- Develop and test core logic locally in terminal
- Simulate Discord commands for faster iteration
- Deploy to Discord once logic is robust

---

## 13. Safety & Responsibility
- Display disclaimers
- Avoid guaranteed language
- Clearly label risk
- Encourage understanding, not chasing

Reminder: “This is a tool, not advice.”

---

## 14. Identity
- Name: FloryderBot 5.0
- Platform: Discord (for now)
- Purpose: Analysis, learning, clarity

---

## Current Status
- Concept finalized
- Commands defined
- Risk framework built
- Confidence system locked
- Learning system planned
- GitHub repo created
- Ready for architecture & coding

---

## Next Logical Steps
1. Convert this README into a docs folder split for clarity
2. Design terminal command flow & mock CLI
3. Build the thinking engine (signal weighting, data ingestion)
4. Add Discord integration once logic is solid

---

## How I can help next
- Convert README into /docs/* files and create a docs site structure
- Scaffold a repository (project structure, initial files)
- Produce terminal command mockups and a CLI simulator
- Start implementing the thinking engine (data models, simple rule engine)
- Create issues and task lists for development and milestones

Tell me which of the above you want me to do next and provide repo details if you want changes pushed or a PR opened.
