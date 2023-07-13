import { Box } from "@mui/material";
import { useState } from "react";
import "../styles/Model.css";

interface ModelProps {
  closeModel: () => void;
  onSubmit: (newRow: {
    page: string;
    description: string;
    status: string;
  }) => void;
  defaultValue?: {
    page: string;
    description: string;
    status: string;
  };
}

const Model: React.FC<ModelProps> = ({
  closeModel,
  onSubmit,
  defaultValue,
}) => {
  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      closeModel();
    }
  };

  const [fromState, setFromState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );

  const [error, setError] = useState("");

  const validateFrom = () => {
    if (fromState.page && fromState.description && fromState.status) {
      setError("");
      return true;
    } else {
      let errorField = [];
      for (const [key, value] of Object.entries(fromState)) {
        if (!value) {
          errorField.push(key);
        }
      }
      setError(errorField.join(", "));
      return false;
    }
  };

  const handelChange = (e: any) => {
    setFromState({
      ...fromState,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (!validateFrom()) return;
    onSubmit(fromState);

    closeModel();
  };

  return (
    <>
      <Box className="model-container" onClick={handleOutsideClick}>
        <Box className="model">
          <form>
            <div className="from-group">
              <label htmlFor="page">Page</label>
              <input
                type="text"
                name="page"
                value={fromState.page}
                onChange={handelChange}
              />
            </div>
            <div className="from-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={fromState.description}
                onChange={handelChange}
              />
            </div>
            <div className="from-group">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                value={fromState.status}
                onChange={handelChange}
              >
                <option value="live">Live</option>
                <option value="draft">Draft</option>
                <option value="error">Error</option>
              </select>
            </div>
            {error && <div className="error">{`Please include: ${error}`}</div>}

            <button type="submit" className="btn" onClick={handelSubmit}>
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Model;
