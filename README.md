# Instagram Video Downloader

An Instagram Video Downloader built with **Next.js** (App Router), **TypeScript**, **shadcn/ui**, **TailwindCSS**, and **RapidAPI**. This project allows users to download videos from Instagram by providing the video URL.

## Features

- **Next.js App Router** for advanced routing and server-side rendering.
- **TypeScript** for type safety and improved developer experience.
- **shadcn/ui** for reusable UI components.
- **TailwindCSS** for rapid styling and responsive design.
- **RapidAPI** for accessing Instagram video data.

## Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed (v16 or later).
- A RapidAPI account with access to an Instagram video downloader API.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yadusuryab/dlfast.git
cd dlfast
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:
```env
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key
```
Replace `your_rapidapi_key` with your RapidAPI credentials.

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
instagram-video-downloader/
├── app/               # Next.js App Router directory
│   ├── layout.tsx     # Root layout file
│   ├── page.tsx       # Home page
│   └── api/           # API routes
├── components/        # Reusable UI components
├── styles/            # TailwindCSS styles
├── utils/             # Utility functions
├── public/            # Static assets
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and dependencies
```

## Usage

1. Enter the Instagram video URL in the input field.
2. Click the "Download" button.
3. The app fetches the video data from RapidAPI and provides a downloadable link.

## Deployment

To deploy the app, follow the Next.js deployment guides:

- [Vercel](https://vercel.com/docs)
- [Other Hosting Platforms](https://nextjs.org/docs/deployment)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://github.com/shadcn/ui)
- [RapidAPI](https://rapidapi.com/)
