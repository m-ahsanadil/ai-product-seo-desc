# AI Product Description Generator

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ahsanadil9s-projects/v0-ai-product-generator)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/v1qGySnlWo9)

## Overview

This project is a simple, AI-powered web application that generates catchy product descriptions and relevant SEO tags based on a product name provided by the user. It's designed to be a quick and efficient tool for freelancers and small e-commerce businesses looking to streamline their content creation process.

## Features

*   **Catchy Descriptions:** Generates engaging and persuasive product descriptions.
*   **SEO Tags:** Provides relevant, comma-separated SEO keywords to improve search visibility.
*   **Simple Web Form:** User-friendly interface for easy input and output.
*   **AI-Powered:** Leverages large language models for intelligent content generation.

## Perfect For

*   Freelancers
*   Small e-commerce businesses
*   Anyone needing quick product content

## Technologies Used

*   **Frontend:** Next.js (React)
*   **Backend:** Next.js API Routes (Node.js)
*   **AI Integration:** Vercel AI SDK with Groq (using Llama models for fast inference)
*   **Styling:** Tailwind CSS with shadcn/ui components

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   Node.js (v18.x or higher recommended)
*   pnpm (or npm/yarn)
*   Git

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/ahsanadil9s/product-seo-descriptions.git
cd product-seo-descriptions
```

### 2. Install Dependencies

Install the necessary Node.js packages:

```bash
pnpm install
# or npm install
# or yarn install
```

### 3. Configure Environment Variables

This project uses the Groq API for AI model inference. You need to obtain a `GROQ_API_KEY` from the [Groq website](https://console.groq.com/keys) and set it as an environment variable.

Create a `.env.local` file in the root of your project and add your API key:

```dotenv
GROQ_API_KEY="gsk_YOUR_GROQ_API_KEY_HERE"
```

**Important:** Replace `"gsk_YOUR_GROQ_API_KEY_HERE"` with your actual Groq API key. Do not commit your `.env.local` file to Git.

### 4. Run the Development Server

Start the Next.js development server:

```bash
pnpm dev
# or npm run dev
# or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for easy deployment to Vercel. If you've synced this repository with v0.dev, it will automatically deploy changes to Vercel.

Your project is live at:

**[https://vercel.com/ahsanadil9s-projects/v0-ai-product-generator](https://vercel.com/ahsanadil9s-projects/v0-ai-product-generator)**

Remember to set your `GROQ_API_KEY` environment variable in your Vercel project settings for the deployed version to work correctly.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests.
