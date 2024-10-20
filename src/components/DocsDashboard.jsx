// src/components/DocsDashboard.jsx
import { useState } from "react";
import DocumentationForm from "./DocumentationForm";

const DocsDashboard = () => {
    const [markdownContent, setMarkdownContent] = useState("");

    const handleGenerate = (content) => {
        setMarkdownContent(content);
    };

    return (
        <div className="p-4 space-y-8">
            <h2 className="text-2xl font-bold">Docs Dashboard</h2>

            <DocumentationForm onGenerate={handleGenerate} />

            {markdownContent && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold">Generated Documentation</h3>
                    <pre className="p-4 bg-gray-100 rounded">
                        {markdownContent}
                    </pre>
                    <button
                        onClick={() => {
                            const blob = new Blob([markdownContent], { type: "text/markdown" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "README.md";
                            a.click();
                            URL.revokeObjectURL(url);
                        }}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Download README.md
                    </button>
                </div>
            )}
        </div>
    );
};

export default DocsDashboard;
