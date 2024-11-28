import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  // サンプル画像のパス
  const [images, setImages] = useState([
    "/image1.png",
    "/image2.png",
    "/image3.png",
    // 必要に応じて追加
  ]);

  return (
    <>
      <Head>
        <title>My Dark Portfolio</title>
        <meta name="description" content="おしゃれなダークテーマのポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>My Portfolio</h1>
        <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {images.map((src, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <Image src={src} alt={`Image ${index + 1}`} width={300} height={200} />
            </div>
          ))}
        </section>

        {/* ソーシャルメディアウィジェット */}
        <footer style={{ marginTop: "50px" }}>
          <h2>Follow Me</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} color="#1DA1F2" />
            </a>
            <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} color="#E1306C" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
