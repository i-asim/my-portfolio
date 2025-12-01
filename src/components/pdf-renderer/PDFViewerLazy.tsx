"use client";

import { DocumentProps } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

// Dynamically import the PDFViewer with no SSR
const PDFViewerDynamic = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full w-full border border-dashed border-border/60 rounded-lg p-8">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  }
);

interface PdfViewerProps {
  children: React.ReactElement<DocumentProps>;
}

const PdfViewerLazy = ({ children }: PdfViewerProps) => {
  return (
    <PDFViewerDynamic
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "0.5rem",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </PDFViewerDynamic>
  );
};

export default PdfViewerLazy;