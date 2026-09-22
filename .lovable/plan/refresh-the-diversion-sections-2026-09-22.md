# Refresh the DIVERSiON sections

## Goal
Keep the opening homepage section unchanged while making the requested lower sections feel like one polished neon Kolkata game world.

## Changes
- Replace the unrelated lower-page backdrops with a consistent set of new rain-soaked Kolkata night-city scenes matching the opening image.
- Upgrade About DIVERSiON with a restrained typing sequence and circular **Enter DIVERSiON** / **Explore the city** actions.
- Rebuild **Choose your mission** as four image-led mission panels with stronger hierarchy, active feedback, and responsive layouts.
- Convert **The city never sleeps** into a looping, swipeable carousel using the existing event photography plus new matching images; retain the framed-photo treatment and captions beneath each image.
- Enhance **Partners** with a focused **Apply now to be a partner** call to action while preserving the current partner categories.
- Preserve existing content, navigation targets, registration behavior, color system, and the opening homepage section.

## Interaction and accessibility
- Pause automatic carousel motion while hovered, focused, dragged, or off-screen.
- Provide visible previous/next controls, slide count, keyboard access, useful image descriptions, and reduced-motion behavior.
- Keep circular controls readable and tappable on phones; stack dense layouts without clipping or overlap.

## Technical details
- Add focused React components for the mission selector and gallery carousel using the existing carousel foundation.
- Use the newly generated local image assets; no external image links.
- Extend the existing semantic design tokens and section styles rather than introducing a separate visual system.
- Validate the final result at desktop and mobile sizes and confirm the live build has no errors.
