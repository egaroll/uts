import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Tentang({ styles, currentTheme }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div style={styles.section}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            overflow: "hidden",
            border: `4px solid ${currentTheme.primary}`,
            transform: isLoaded
              ? "scale(1) rotate(0deg)"
              : "scale(0.5) rotate(-10deg)",
            opacity: isLoaded ? 1 : 0,
            transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src="/foto.jpg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            priority
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>

        <div
          style={{
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            opacity: isLoaded ? 1 : 0,
            transition:
              "transform 0.6s ease-out 0.3s, opacity 0.6s ease-out 0.3s",
          }}
        >
          <h1 style={{ marginBottom: "8px" }}>Helga Puspa C.A</h1>
          <p
            style={{
              fontSize: "18px",
              color: currentTheme.secondary || "#666",
              fontWeight: "500",
            }}
          >
            Mahasiswa Universitas Ma`soem
          </p>
        </div>
      </div>

      <h2
        style={{
          color: currentTheme.primary,
          borderBottom: `2px solid ${currentTheme.primary}`,
          paddingBottom: "10px",
          marginBottom: "20px",
          transform: isLoaded ? "translateX(0)" : "translateX(-20px)",
          opacity: isLoaded ? 1 : 0,
          transition:
            "transform 0.6s ease-out 0.5s, opacity 0.6s ease-out 0.5s",
        }}
      >
        Tentang Saya
      </h2>

      <p
        style={{
          lineHeight: "1.6",
          fontSize: "16px",
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
          opacity: isLoaded ? 1 : 0,
          transition:
            "transform 0.6s ease-out 0.7s, opacity 0.6s ease-out 0.7s",
        }}
      >
        Saya adalah mahasiswa semester 4 jurusan Sistem Informasi yang memiliki
        minat besar dalam pengembangan teknologi dan solusi berbasis sistem
        informasi. Saat ini, saya tengah memperdalam pemahaman tentang analisis
        dan desain sistem, pemrograman, serta manajemen proyek TI. Selain itu,
        saya juga aktif mengikuti berbagai kegiatan organisasi kampus untuk
        mengasah keterampilan komunikasi dan kepemimpinan. Dengan semangat untuk
        terus belajar dan beradaptasi dengan perkembangan teknologi, saya
        berharap dapat berkontribusi dalam menciptakan sistem yang inovatif dan
        bermanfaat di masa depan.
      </p>
    </div>
  );
}
