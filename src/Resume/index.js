import React, { useState, useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import ResumeDocument from "./Document";
import "./styles.css";

function Resume() {
  const [renderResumeView, setRenderResumeView] = useState(false);

  useEffect(() => {
    // waiting for custom font to be registered
    window.setTimeout(() => {
      setRenderResumeView(true);
    }, 500);
  }, []);
  return (
    renderResumeView && (
      <div className="resume-view-container">
        <PDFViewer height="100%" width="100%">
          <ResumeDocument />
        </PDFViewer>
      </div>
    )
  );
}

export default Resume;
