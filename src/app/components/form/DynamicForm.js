import React from "react";
import { Form } from "react-bootstrap";
import LinkActionComponent from "@/app/components/LinkActionComponent";

const DynamicForm = ({ forms, formData, handleChange,handleSave, children }) => {
  return (
    <Form onSubmit={handleSave}>
      {forms.map((f) => {
        const { controlID, label, formType, required } = f;

        // Pilih jenis input berdasarkan formType.type
        switch (formType.type) {
          case "text":
            return (
              <Form.Group className="mb-3" controlId={controlID} key={controlID}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type="text"
                  value={formData[controlID] || ""}
                  onChange={(e) => handleChange(controlID, e.target.value)}
                  required={required}
                  placeholder={`Masukan ${label}`}
                />
              </Form.Group>
            );

          case "file":
            return (
              <Form.Group className="mb-3" controlId={controlID} key={controlID}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type="file"
                  accept={formType.accept}
                  onChange={(e) => handleChange(controlID, e.target.files[0])}
                  required={required}
                />
              </Form.Group>
            );

          case "select":
            return (
              <Form.Group className="mb-3" controlId={controlID} key={controlID}>
                <Form.Label>{label}</Form.Label>
                <Form.Select
                  value={formData[controlID] || ""}
                  onChange={(e) => handleChange(controlID, e.target.value)}
                  required={required}
                >
                  <option value="">-- Pilih {label} --</option>
                  {formType.options.map((opt) => (
                    <option key={opt[formType.key]} value={opt[formType.key]}>
                      {opt[formType.val]}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            );

          default:
            return null;
        }
      })}

        {children}
    </Form>
  );
};

export default DynamicForm;
