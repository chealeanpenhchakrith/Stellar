# 🚀 NASA APOD Viewer

A simple web app built with **React**, **TypeScript**, and **Tailwind CSS** that fetches and displays NASA’s *Astronomy Picture of the Day (APOD)*.  
Each day, you’ll see a new image (or video) from NASA’s API, along with its title, description, author and date.

---
## 📷 Screenshots

![Stellar](https://github.com/user-attachments/assets/87a70ef8-64d9-4f60-969b-cacd44db38c3)

![Stellar](https://github.com/user-attachments/assets/253167ca-2db3-43cd-a9cd-938feb15b6a8)

---

## ✨ Features

- Fetches APOD data from NASA’s official API  
- Displays title, image/video, and explanation  
- Fully responsive UI styled with Tailwind CSS  
- Built with TypeScript for better developer experience  

---

## 🧰 Tech Stack

- **React** (with Vite or CRA)  
- **TypeScript**  
- **Tailwind CSS**
- **Axios**
- **NASA APOD API** ([Docs](https://api.nasa.gov/))  

---

## ⚙️ Installation

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/Stellar.git

# 2️⃣ Navigate to the project directory
cd Stellar

# 3️⃣ Install dependencies
npm install
# or
yarn install

# 4️⃣ Create an .env file and add your NASA API key
echo "VITE_API_KEY=your_api_key_here" > .env

# 5️⃣ Run the development server
npm run dev
```

---

## 🔑 Environment Variables

You need a NASA API key to access the APOD endpoint.  
You can get one for free from [api.nasa.gov](https://api.nasa.gov/).

In your `.env` file:

```bash
VITE_NASA_API_KEY=your_api_key_here
```

---
