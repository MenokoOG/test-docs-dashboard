// src/components/DocumentationForm.jsx
import { useState } from "react";
import { generateMarkdownContent } from "../utils/template";

const DocumentationForm = ({ onGenerate }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        installation: "",
        usage: "",
        license: "MIT",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const markdownContent = generateMarkdownContent(formData);
        onGenerate(markdownContent); // Pass generated content to parent
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
            />
            <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                rows={4}
                required
            />
            <textarea
                name="installation"
                placeholder="Installation Instructions"
                value={formData.installation}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                rows={4}
                required
            />
            <textarea
                name="usage"
                placeholder="Usage Example"
                value={formData.usage}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                rows={4}
                required
            />
            <select
                name="license"
                value={formData.license}
                onChange={handleChange}
                className="p-2 border rounded w-full"
            >
                <option value="MIT">MIT</option>
                <option value="GPL-3.0">GPL-3.0</option>
                <option value="Apache-2.0">Apache-2.0</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Generate Documentation
            </button>
        </form>
    );
};

export default DocumentationForm;
