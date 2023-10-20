import { useState } from "react";
import { useNavigate } from "react-router";

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
 * App -> RoutesList -> UploadImageForm
 */

function UploadImageForm({ handleUpload }) {
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
        <div className="UploadImageForm">
            <h1>Upload an Image to Pix.ly</h1>
            <form className="UploadImageForm-form" onSubmit={handleSubmit}>
                <div>
                    <label>Selected Image:
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                            required />
                    </label>
                </div>
                <div>
                    <label>Caption:
                        <input
                            type="text"
                            name="caption"
                            value={formData.caption}
                            onChange={handleChange}
                            pattern="^[^\s]+(\s+[^\s]+)*$"
                            required />
                    </label>
                </div>

                {formErrors && <p>Errors: {formErrors}</p>}

                <button type="submit" className="UploadImageForm-uploadButton">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UploadImageForm;
