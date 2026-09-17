"use client";

import { useEffect, useState } from "react";

const pdfHref = "/documents/VNHHC_Face_to_Face_.pdf";
const linkClassName = "w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold text-[4vw] sm:text-[2vw] px-6 py-3 rounded-md";

export default function ReferPatientLink() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(/iPhone|iPod/.test(navigator.userAgent));
  }, []);

  async function handleShareClick () {
    try {
      const response = await fetch(pdfHref);
      const blob = await response.blob();
      const file = new File([blob], "VNHHC_Face_to_Face_.pdf", {
        type: "application/pdf",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "VNHHC Face to Face Referral",
        });
      } else {
        window.open(pdfHref, "_blank");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        window.open(pdfHref, "_blank");
      }
    }
  };

  if (isIOS) {
    return (
      <button type="button" onClick={handleShareClick} className={linkClassName}>
        Refer a Patient
      </button>
    );
  }

  return (
    <a href={pdfHref} download className={linkClassName}>
      Refer a Patient
    </a>
  );
}
