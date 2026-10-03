# Week 3 Report: Enhancing User Experience with Accessibility

## Project overview
**Project name:** Open Pages — Accessible Blog  
**Type:** Responsive blog / information portal  
**Files:** `index.html`, `styles.css`, `script.js`

## Objective
This project demonstrates accessibility improvements for a typical information portal. It focuses on semantic structure, keyboard navigation, visible focus, readable presentation, accessible interactive controls, and responsive layout.

## Accessibility review
A code-based manual review was performed against common WCAG 2.2 Level A/AA practices. This is not a formal certification or a claim that an automated audit has passed. To complete an external audit, open the page in a browser and run Lighthouse (Accessibility) and/or the WAVE browser extension, then record the results here.

### Review checklist
- [x] Document language and page title are defined.
- [x] A skip link lets keyboard users bypass repeated navigation.
- [x] Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks organize content.
- [x] Heading levels follow a logical hierarchy.
- [x] Search input has a visible, programmatically associated label.
- [x] Mobile navigation button exposes state using `aria-expanded` and references its controlled navigation with `aria-controls`.
- [x] Search result updates are announced with `role="status"` and `aria-live="polite"`.
- [x] Decorative article artwork is hidden from assistive technology with `aria-hidden="true"`.
- [x] Links have descriptive names; repeated “Read article” links include article-specific accessible labels.
- [x] Keyboard focus is visible for links, buttons, inputs, and disclosure summaries.
- [x] Native `<details>` and `<summary>` elements provide keyboard-operable article previews.
- [x] Color contrast was designed with dark text and strong backgrounds; verify exact ratios with a contrast checker before submission.
- [x] Layout adapts to narrow screens and supports the `prefers-reduced-motion` setting.
- [x] Search works without a mouse and provides a no-results message.

## Improvements and why they matter

| Improvement | Implementation | Accessibility benefit |
|---|---|---|
| Skip navigation | “Skip to main content” link | Reduces repeated keyboard navigation. |
| Semantic landmarks | HTML5 landmark elements and labelled navigation | Helps assistive-technology users understand and navigate page regions. |
| Clear headings | One main `h1`, followed by section `h2` and card `h3` headings | Provides a predictable document outline. |
| Keyboard visibility | `:focus-visible` outline styles | Makes the current keyboard target easier to locate. |
| Accessible mobile menu | Button with `aria-expanded` and `aria-controls` | Communicates menu state and the controlled region. |
| Search feedback | Labelled search field, live status, and empty-results message | Communicates updates without requiring users to inspect the whole page. |
| Native disclosure controls | `<details>` and `<summary>` | Provides built-in keyboard interaction without custom ARIA widgets. |
| Responsive and reduced motion | Responsive CSS and reduced-motion media query | Supports different viewport sizes and motion preferences. |

## Standards mapping
The implementation is intended to support these WCAG 2.2 principles and success criteria:
- **1.3.1 Info and Relationships:** semantic landmarks, headings, and labelled input.
- **1.4.3 Contrast (Minimum):** dark foregrounds and defined backgrounds; confirm measured ratios with a contrast checker.
- **1.4.10 Reflow:** responsive layout at narrow widths.
- **2.1.1 Keyboard:** native links, buttons, inputs, and disclosure controls are keyboard operable.
- **2.4.1 Bypass Blocks:** skip link.
- **2.4.3 Focus Order:** logical DOM order.
- **2.4.7 Focus Visible:** visible focus indicators.
- **2.4.6 Headings and Labels:** descriptive headings and search label.
- **3.3.2 Labels or Instructions:** visible label for search.
- **4.1.2 Name, Role, Value:** menu button state and native controls.
- **4.1.3 Status Messages:** search results announced through a polite status region.

This mapping indicates design intent; actual conformance should be validated with automated and manual testing. WCAG 2.2 has additional requirements that may apply depending on the final product and context.

## How to run
1. Extract `week3_accessibility_project.zip`.
2. Open `index.html` in a modern browser. No server or dependency installation is required.
3. Resize the browser to test the mobile navigation.
4. Use `Tab`, `Shift+Tab`, `Enter`, and `Space` to navigate and activate controls.
5. Type into “Search articles” to test filtering and the live status message.
6. Open each article preview using its summary control.

## Suggested audit procedure
1. Open the page in Chrome or Edge.
2. Open Developer Tools → **Lighthouse** → select **Accessibility** → generate a report.
3. Optionally install/use the **WAVE Web Accessibility Evaluation Tool** browser extension.
4. Check text/background combinations using a contrast checker.
5. Test the page with keyboard only and, if available, a screen reader.
6. Record the date, tool/version, findings, and fixes below.

### Audit results to fill after running tools
- **Lighthouse Accessibility score:** Not run as part of this packaged project.
- **WAVE findings:** Not run as part of this packaged project.
- **Manual keyboard test:** Designed for keyboard use; perform and record your own verification.
- **Contrast measurements:** Verify exact ratios with a contrast checker.

## Conclusion
Open Pages provides a reusable starting point for an accessible front-end interface. It uses semantic HTML, minimal ARIA where needed, visible keyboard focus, accessible search feedback, and responsive styling. Accessibility testing should continue throughout development, with automated tools complemented by manual keyboard and assistive-technology checks.
