# BONDHU Showcase

BONDHU is a fullscreen React/Vite exhibition billboard for an autonomous elderly-care companion robot.

It is designed for the Samsung Galaxy Tab S10 FE in landscape mode and runs continuously without navigation, scrolling, forms, or user interaction.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

Run the production checks:

```bash
npm run lint
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Replace images

Images are stored in:

```text
src/assets/images/
```

All imported media is centralized in:

```text
src/data/assets.js
```

### Steps

1. Add the new image to `src/assets/images/`.
2. Use a simple filename without spaces, for example `hero-robot-new.jpg`.
3. Update the import in `src/data/assets.js`.
4. Keep the existing export name when possible.
5. Run `npm run lint` and `npm run build`.

Example:

```js
import heroRobot from "../assets/images/hero-robot-new.jpg";
```

Current image exports:

```js
export {
  heroRobot,
  bondhuRoom,
  awarenessRobot,
  robotFront,
  robotAngle,
  trackingVideo,
};
```

Current image usage:

| Asset | Usage |
|---|---|
| `bondhu-room.jpg` | Hero scene |
| `hero-robot.jpg` | Closing Vision scene |
| `aware.jpeg` | Available awareness image |
| `robot-front.jpg` | Available product image |
| `robot-angle.jpg` | Available product image |

Images are rendered through `ImageFrame` and use Vite imports, so production URLs are generated automatically.

## Replace the tracking video

Videos are stored in:

```text
src/assets/videos/
```

The current video is:

```text
src/assets/videos/tracking.mp4
```

### Steps

1. Add the replacement video to `src/assets/videos/`.
2. Use a simple filename, for example `human-following.mp4`.
3. Update the import in `src/data/assets.js`:

   ```js
   import trackingVideo from "../assets/videos/human-following.mp4";
   ```

4. Keep the export name `trackingVideo`.
5. Run:

   ```bash
   npm run lint
   npm run build
   ```

The video is rendered through:

```text
src/components/common/TrackingVideo.jsx
src/components/common/VideoFrame.jsx
```

Playback is configured for exhibition use:

- Autoplay
- Muted
- Looping
- `playsInline`
- No browser controls
- Metadata preload

The Following scene is displayed for 20 seconds.

## Change which asset a scene uses

### Hero scene

File:

```text
src/scenes/Hero/HeroScene.jsx
```

Current image:

```jsx
import { bondhuRoom } from "../../data/assets";
```

To use another exported image:

```jsx
import { robotFront } from "../../data/assets";
```

Then update the component:

```jsx
<ImageFrame
  src={robotFront}
  alt="Bondhu robot front view"
  className="hero-robot hero-robot--portrait"
  priority
  animateOnMount={false}
/>
```

### Closing scene

File:

```text
src/scenes/Closing/ClosingScene.jsx
```

The Closing scene currently uses `heroRobot`. Replace that imported asset if a different product image is preferred.

## Important Vite asset rule

Do not render an imported URL directly as JSX text:

```jsx
// Incorrect
{heroRobot}
```

Pass it to a media component:

```jsx
// Correct
<ImageFrame src={heroRobot} alt="Bondhu robot" />
```

For video:

```jsx
<TrackingVideo src={trackingVideo} />
```

## Scene order and timing

Scene configuration is in:

```text
src/components/layout/Billboard.jsx
```

| Scene | Duration |
|---|---:|
| Hero | 5 seconds |
| Need | 5 seconds |
| Following | 20 seconds |
| Awareness | 6 seconds |
| Bengali AI | 6 seconds |
| Emergency | 5 seconds |
| Care Ecosystem | 5 seconds |
| Closing Vision | 8 seconds |

Durations use milliseconds:

```js
{
  id: "following",
  component: FollowingScene,
  duration: 20000,
}
```

The billboard loops automatically from the Closing scene to the Hero scene.

## Deploy to Vercel

### Vercel dashboard

1. Push the project to GitHub.
2. Open [Vercel](https://vercel.com/).
3. Select **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:

   ```text
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

6. Select **Deploy**.

No environment variables are required.

### Vercel CLI

Install the CLI:

```bash
npm install -g vercel
```

From the project root:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

## Vercel media notes

Vite bundles imported images and videos as static assets during the production build.

For reliable tablet playback:

- Keep the video in MP4 format.
- Prefer H.264 encoding.
- Avoid unnecessarily high video bitrates.
- Test the deployed URL on the Samsung tablet.
- Confirm autoplay works with the video muted.
- Keep the tablet connected to power during the exhibition.

## Landscape behavior

The showcase is landscape-only.

If the device is rotated to portrait mode:

- The billboard is hidden.
- A `Please rotate device` prompt appears.
- The billboard returns automatically in landscape mode.

This behavior is implemented in:

```text
src/components/common/LandscapePrompt.jsx
src/styles/layout.css
```

## Project structure

```text
src/
├── assets/
│   ├── images/
│   └── videos/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── data/
│   └── assets.js
├── scenes/
│   ├── Awareness/
│   ├── BengaliAI/
│   ├── CareEcosystem/
│   ├── Closing/
│   ├── Emergency/
│   ├── Following/
│   ├── Hero/
│   └── Need/
└── styles/
```

## Pre-exhibition checklist

```bash
npm install
npm run lint
npm run build
```

Then test the deployed Vercel URL:

1. Open it on the Samsung Galaxy Tab S10 FE.
2. Put the tablet in landscape orientation.
3. Enable fullscreen mode if available.
4. Confirm the Hero scene starts automatically.
5. Confirm the tracking video plays during the Following scene.
6. Confirm the loop returns to the Hero scene.
7. Confirm there is no scrolling or browser-like navigation UI.
