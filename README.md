FloryderBot 5.0

FloryderBot 5.0 is a Discord-focused NBA analytics and learning tool designed to analyze games, players, and trends using structured logic and historical data.

⚠️ This tool is educational and analytical — not betting advice. FloryderBot 5.0 helps users understand trends, probabilities, and context. It does not guarantee outcomes.

Table of contents
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

1. What FloryderBot Is
FloryderBot 5.0 is a Discord-based NBA analytics tool that:
- Analyzes games, players and trends using explainable, confidence-weighted logic
- Prioritizes transparency, explainability, and risk awareness
- Learns from outcomes and user feedback

Purpose: analysis, learning, clarity. Tone: honest, informative, transparent.

2. Core Philosophy
FloryderBot does not:
- Randomly generate picks
- Chase odds blindly
- Promise guaranteed results

Instead, it:
- Breaks data into understandable signals
- Weighs multiple factors and labels risk
- Shows why picks were selected
- Learns and adjusts when wrong

3. Supported Sport (V1)
- ✅ NBA only
- Future plans: NFL, Tennis, Live/In-game analysis

4. Main Commands
/parlay — Generates multi-leg analytical parlays with user-selected options.
/pickoftheday — Returns top-ranked picks of the day (Top 5) with confidence, rationale, and risk label.

5. Pick Modes Explained
- Safe (🟢): strong historical trends, minimal conflicting signals
- Normal (🟠): solid trends, moderate variance
- Moonshot (🔴 / 🚀): high-risk parlays combining safe/normal picks with a couple of high-variance legs

6. Confidence & Color System
See docs/confidence.md for full details.

7. How the Bot Thinks
Signals used include teammate availability, star inactivity, venue effects, matchup history, recent vs long-term form, role changes, and volatility. Outputs are confidence-weighted, not binary.

8. Explanations & Insights (Mandatory)
Every pick includes a human-readable explanation and data supporting the selection.

9. Learning From Results (Feedback System)
Users mark ✅ Hit or ❌ Miss and the bot logs market type, mode, confidence, and outcome to improve over time.

10. Cooldown System
Default 60s per user with optional admin/dev bypass for testing.

11. Data Sources
Start with free/public sources (official stats, box scores, schedules) with planned integrations for premium APIs later.

12. Terminal-First Development
Develop core logic locally with a CLI simulator before Discord deployment.

13. Safety & Responsibility
Clear disclaimers and no-guarantee language. This is a tool, not advice.

14. Identity
Bot name: FloryderBot 5.0 — Discord-focused NBA analytics & learning bot.

Next steps: see docs/ for a split of documentation and src/ for starter scaffolding.
