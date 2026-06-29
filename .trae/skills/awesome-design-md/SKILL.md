---
name: "awesome-design-md"
description: "Apply professional DESIGN.md design systems from 73+ real-world brands (Vercel, Stripe, Notion, Apple, etc.) to generate visually consistent, production-grade UI. Invoke when user wants to build UI with a specific brand aesthetic, apply a design system, or create pages that look like a known website."
---

# Awesome DESIGN.md

A curated skill that brings 73+ professionally extracted design systems from real-world websites into your TRAE workflow. Based on the [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) open-source project.

## What is DESIGN.md?

DESIGN.md is a plain-text design system document that AI agents read to generate consistent UI. It was introduced by Google Stitch. Each file contains:

1. **Visual Theme & Atmosphere** - Mood, density, design philosophy
2. **Color Palette & Roles** - Semantic name + hex + functional role
3. **Typography Rules** - Font families, full hierarchy table
4. **Component Stylings** - Buttons, cards, inputs, navigation with states
5. **Layout Principles** - Spacing scale, grid, whitespace philosophy
6. **Depth & Elevation** - Shadow system, surface hierarchy
7. **Do's and Don'ts** - Design guardrails and anti-patterns
8. **Responsive Behavior** - Breakpoints, touch targets, collapsing strategy
9. **Agent Prompt Guide** - Quick color reference, ready-to-use prompts

## How to Use This Skill

### Method 1: Use `npx getdesign` (Recommended)

Run from the project root to install a DESIGN.md directly:

```bash
npx getdesign@latest add <brand-name>
```

For example:
```bash
npx getdesign@latest add vercel
npx getdesign@latest add stripe
npx getdesign@latest add apple
npx getdesign@latest add linear
```

This installs both `DESIGN.md` and preview HTML files into your project.

### Method 2: Manual Fetch

If `npx getdesign` is not available, fetch the DESIGN.md from the web:

1. Go to `https://getdesign.md/<brand-name>/design-md`
2. Copy the DESIGN.md content into the project root

### After Installation

Once DESIGN.md is in the project root, tell the AI agent to follow it:

> "Use DESIGN.md to build a landing page with a hero section, feature cards, and pricing table."

The agent will read the design tokens and generate UI that matches the specified brand aesthetic.

## Available Design Systems

### AI & LLM Platforms
| Brand | Style | Link |
|-------|-------|------|
| Claude | Warm terracotta accent, clean editorial layout | `npx getdesign@latest add claude` |
| Cohere | Vibrant gradients, data-rich dashboard aesthetic | `npx getdesign@latest add cohere` |
| ElevenLabs | Dark cinematic UI, audio-waveform aesthetics | `npx getdesign@latest add elevenlabs` |
| Minimax | Bold dark interface with neon accents | `npx getdesign@latest add minimax` |
| Mistral AI | French-engineered minimalism, purple-toned | `npx getdesign@latest add mistral.ai` |
| Ollama | Terminal-first, monochrome simplicity | `npx getdesign@latest add ollama` |
| OpenCode AI | Developer-centric dark theme | `npx getdesign@latest add opencode.ai` |
| Replicate | Clean white canvas, code-forward | `npx getdesign@latest add replicate` |
| Runway | Cinematic dark heroes, paper-white reading bands | `npx getdesign@latest add runwayml` |
| Together AI | Technical, blueprint-style design | `npx getdesign@latest add together.ai` |
| VoltAgent | Void-black canvas, emerald accent, terminal-native | `npx getdesign@latest add voltagent` |
| xAI | Stark monochrome, futuristic minimalism | `npx getdesign@latest add x.ai` |

### Developer Tools & IDEs
| Brand | Style | Link |
|-------|-------|------|
| Cursor | Sleek dark interface, gradient accents | `npx getdesign@latest add cursor` |
| Expo | Dark theme, tight letter-spacing, code-centric | `npx getdesign@latest add expo` |
| Lovable | Playful gradients, friendly dev aesthetic | `npx getdesign@latest add lovable` |
| Raycast | Sleek dark chrome, vibrant gradient accents | `npx getdesign@latest add raycast` |
| Superhuman | Premium dark UI, keyboard-first, purple glow | `npx getdesign@latest add superhuman` |
| Vercel | Black and white precision, Geist font | `npx getdesign@latest add vercel` |
| Warp | Dark IDE-like interface, block-based command UI | `npx getdesign@latest add warp` |

### Backend, Database & DevOps
| Brand | Style | Link |
|-------|-------|------|
| ClickHouse | Yellow-accented, technical documentation style | `npx getdesign@latest add clickhouse` |
| Composio | Modern dark with colorful integration icons | `npx getdesign@latest add composio` |
| HashiCorp | Enterprise-clean, black and white | `npx getdesign@latest add hashicorp` |
| MongoDB | Green leaf branding, developer documentation focus | `npx getdesign@latest add mongodb` |
| PostHog | Playful hedgehog branding, developer-friendly dark UI | `npx getdesign@latest add posthog` |
| Sanity | Dark-first editorial marketing surface, coral-red accent | `npx getdesign@latest add sanity` |
| Sentry | Dark dashboard, data-dense, pink-purple accent | `npx getdesign@latest add sentry` |
| Supabase | Dark emerald theme, code-first | `npx getdesign@latest add supabase` |

### Productivity & SaaS
| Brand | Style | Link |
|-------|-------|------|
| Cal.com | Clean neutral UI, developer-oriented simplicity | `npx getdesign@latest add cal` |
| Intercom | Friendly blue palette, conversational UI patterns | `npx getdesign@latest add intercom` |
| Linear | Ultra-minimal, precise, purple accent | `npx getdesign@latest add linear.app` |
| Mintlify | Clean, green-accented, reading-optimized | `npx getdesign@latest add mintlify` |
| Notion | Warm minimalism, serif headings, soft surfaces | `npx getdesign@latest add notion` |
| Resend | Minimal dark theme, monospace accents | `npx getdesign@latest add resend` |
| Zapier | Warm orange, friendly illustration-driven | `npx getdesign@latest add zapier` |

### Design & Creative Tools
| Brand | Style | Link |
|-------|-------|------|
| Airtable | Colorful, friendly, structured data aesthetic | `npx getdesign@latest add airtable` |
| Clay | Organic shapes, soft gradients, art-directed layout | `npx getdesign@latest add clay` |
| Figma | Vibrant multi-color, playful yet professional | `npx getdesign@latest add figma` |
| Framer | Bold black and blue, motion-first, design-forward | `npx getdesign@latest add framer` |
| Miro | Bright yellow accent, infinite canvas aesthetic | `npx getdesign@latest add miro` |
| Webflow | Blue-accented, polished marketing site aesthetic | `npx getdesign@latest add webflow` |

### Fintech & Crypto
| Brand | Style | Link |
|-------|-------|------|
| Binance | Bold Binance Yellow on monochrome | `npx getdesign@latest add binance` |
| Coinbase | Clean blue identity, trust-focused | `npx getdesign@latest add coinbase` |
| Kraken | Purple-accented dark UI, data-dense dashboards | `npx getdesign@latest add kraken` |
| Mastercard | Warm cream canvas, orbital pill shapes | `npx getdesign@latest add mastercard` |
| Revolut | Sleek dark interface, gradient cards | `npx getdesign@latest add revolut` |
| Stripe | Signature purple gradients, weight-300 elegance | `npx getdesign@latest add stripe` |
| Wise | Bright green accent, friendly and clear | `npx getdesign@latest add wise` |

### E-commerce & Retail
| Brand | Style | Link |
|-------|-------|------|
| Airbnb | Warm coral accent, photography-driven, rounded UI | `npx getdesign@latest add airbnb` |
| Meta | Photography-first, binary light/dark surfaces | `npx getdesign@latest add meta` |
| Nike | Monochrome UI, massive uppercase Futura | `npx getdesign@latest add nike` |
| Shopify | Dark-first cinematic, neon green accent | `npx getdesign@latest add shopify` |
| Starbucks | Four-tier earth-green system, warm cream canvas | `npx getdesign@latest add starbucks` |

### Media & Consumer Tech
| Brand | Style | Link |
|-------|-------|------|
| Apple | Premium white space, SF Pro, cinematic imagery | `npx getdesign@latest add apple` |
| HP | Pure white canvas, HP Electric Blue signal CTA | `npx getdesign@latest add hp` |
| IBM | Carbon design system, structured blue palette | `npx getdesign@latest add ibm` |
| NVIDIA | Green-black energy, technical power aesthetic | `npx getdesign@latest add nvidia` |
| Pinterest | Red accent, masonry grid, image-first | `npx getdesign@latest add pinterest` |
| PlayStation | Three-surface channel layout, cyan hover-scale | `npx getdesign@latest add playstation` |
| SpaceX | Stark black and white, full-bleed imagery | `npx getdesign@latest add spacex` |
| Spotify | Vibrant green on dark, bold type, album-art-driven | `npx getdesign@latest add spotify` |
| The Verge | Acid-mint and ultraviolet accents | `npx getdesign@latest add theverge` |
| Uber | Bold black and white, tight type, urban energy | `npx getdesign@latest add uber` |
| Vodafone | Monumental uppercase display, Vodafone Red | `npx getdesign@latest add vodafone` |
| WIRED | Paper-white broadsheet density, custom serif | `npx getdesign@latest add wired` |

### Automotive
| Brand | Style | Link |
|-------|-------|------|
| BMW | Dark premium surfaces, precise German engineering aesthetic | `npx getdesign@latest add bmw` |
| BMW M | Motorsport-inspired contrast, M color accents | `npx getdesign@latest add bmw-m` |
| Bugatti | Cinema-black canvas, monochrome austerity | `npx getdesign@latest add bugatti` |
| Ferrari | Chiaroscuro black-white editorial | `npx getdesign@latest add ferrari` |
| Lamborghini | True black cathedral, gold accent | `npx getdesign@latest add lamborghini` |
| Renault | Vivid aurora gradients, zero-radius buttons | `npx getdesign@latest add renault` |
| Tesla | Radical subtraction, cinematic full-viewport photography | `npx getdesign@latest add tesla` |

### Retro Web (Nostalgia)
| Brand | Style | Link |
|-------|-------|------|
| Dell (1996) | Catalog-era enterprise web, flat color-block cards | `npx getdesign@latest add dell-1996` |
| Nintendo (2001) | Y2K console chrome, brushed-metal panels | `npx getdesign@latest add nintendo-2001` |

## DESIGN.md File Structure Reference

Each DESIGN.md follows the Google Stitch format with YAML frontmatter and markdown sections:

```yaml
---
version: alpha
name: <brand-name>-design-analysis
description: <brief description of the brand's design language>
colors:
  primary: "#hex"
  on-primary: "#hex"
  ink: "#hex"
  body: "#hex"
  # ... more semantic color tokens
typography:
  display-xl:
    fontFamily: "Font Name, fallback, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.4px
  # ... full type hierarchy
rounded:
  none: 0px
  sm: 6px
  md: 8px
  pill: 100px
  # ... spacing scale
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  # ... spacing scale
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    # ... component specs
---
## Overview
<narrative description of the design system>

## Colors
### Brand & Accent
<detailed color descriptions with hex values and usage guidance>

## Typography
<font family details, hierarchy, and usage rules>

## Components
<buttons, cards, inputs, navigation specs>

## Layout
<grid, spacing, whitespace philosophy>

## Do's and Don'ts
<design guardrails>
```

## Trigger Conditions

This skill should be activated when:
- User asks to build UI with a specific brand aesthetic (e.g., "make it look like Stripe")
- User mentions DESIGN.md or design systems
- User wants to apply a professional design language to generated UI
- User asks to create pages/components that match a known website's visual style
- User wants to explore or browse available design systems

## Workflow

1. **Identify the brand** the user wants to emulate, or recommend one based on the project type
2. **Install the DESIGN.md** using `npx getdesign@latest add <brand>` or fetch it manually
3. **Read the installed DESIGN.md** to understand the design tokens and rules
4. **Generate UI** that strictly follows the design system's colors, typography, spacing, and components
5. **Validate** the output against the DESIGN.md's Do's and Don'ts section

## Source & Credits

- Repository: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- DESIGN.md Spec: [Google Stitch DESIGN.md Specification](https://stitch.withgoogle.com/docs/design-md/specification/)
- Browse all designs: [https://getdesign.md](https://getdesign.md)
- License: MIT
