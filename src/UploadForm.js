import { useState } from "react";
import { useNavigate } from "react-router";
import "./UploadForm.css";

/**
 * UploadImageForm Component
 *
 * A form for users to upload an image with caption.
 *
 * Props:
 *  - handleUpload: Function called with the formData upon form submission.
 *
 * State:
 *  - formData: Data input by the user. Contains file and caption.
 *  - formErrors: Any errors that occurred during form submission.
 *
 * App -> RoutesList -> UploadForm
 */

function UploadForm({ handleUpload }) {
    const [formData, setFormData] = useState({
        file: null,
        caption: ""
    });
    const [formErrors, setFormErrors] = useState(null);
    const navigate = useNavigate();

    /** Handle form submission */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            formData.caption = formData.caption.trim();
            await handleUpload(formData);
            navigate("/gallery");
        } catch (err) {
            setFormErrors(err.message || err);
        }
    }

    /** Update form data as user interacts with the form */
    function handleChange(evt) {
        const { name, value } = evt.target;

        if (name === "file") {
            setFormData(f => ({ ...f, file: evt.target.files[0] }));
        } else {
            setFormData(f => ({ ...f, [name]: value }));
        }
    }

    return (
        <div className="UploadForm">
            <h1>Upload an image</h1>
            <form className="UploadForm-form" onSubmit={handleSubmit}>
                <div>
                    <label>Select Image: </label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <label>Caption: </label>
                    <input
                        name="caption"
                        value={formData.caption}
                        onChange={handleChange}
                        pattern="^[^\s]+(\s+[^\s]+)*$"
                        required />
                </div>

                {formErrors && <p>Errors: {formErrors}</p>}

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UploadForm;
