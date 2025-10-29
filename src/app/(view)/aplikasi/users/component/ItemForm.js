"use client";

import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ItemForm({
  fields = [],
  formData = {},
  onChange,
  onSubmit,
  onClose,
}) {
  // state lokal untuk masing-masing password field
  const [passwordStates, setPasswordStates] = React.useState({});

  // fungsi sederhana untuk menilai kekuatan password
  const evaluateStrength = (value) => {
    if (!value) return "";

    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSymbols = /[^A-Za-z0-9]/.test(value);
    const length = value.length;

    // hitung total jenis karakter yang digunakan
    const types =
      [hasLowercase, hasUppercase, hasNumbers, hasSymbols].filter(Boolean).length;

    if (length < 4) return "Terlalu pendek, password mudah diambil alih";
    if (length >= 14 && types >= 3) return "Sangat Kuat, password anda aman 💪";
    if (length >= 10 && types >= 3) return "Kuat, password sulit ditebak 🔐";
    if (length >= 6 && types >= 2) return "Sedang, tingkatkan dengan simbol atau huruf besar 🟠";
    return "Lemah, gunakan kombinasi angka, simbol, dan huruf 🔴";
  };


  // ubah state password (show/hide + strength per field)
  const handlePasswordChange = (e, controlID) => {
    onChange(e);
    const newStrength = evaluateStrength(e.target.value);
    setPasswordStates((prev) => ({
      ...prev,
      [controlID]: { ...prev[controlID], strength: newStrength },
    }));
  };

  const toggleShowPassword = (controlID) => {
    setPasswordStates((prev) => ({
      ...prev,
      [controlID]: {
        ...prev[controlID],
        show: !prev[controlID]?.show,
      },
    }));
  };

  return (
    <Form onSubmit={onSubmit}>
      {fields.map((field, index) => {
        const value = formData[field.controlID] ?? "";

        // 🔐 PASSWORD FIELD
        if (field.formType.type === "password") {
          const { show = false, strength = "" } =
            passwordStates[field.controlID] || {};

          return (
            <Form.Group className="mb-3" key={`${field.controlID}-${index}`}>
              <Form.Label>
                {field.label}{" "}
                {field.required && <span className="text-danger">*</span>}
              </Form.Label>

              <div className="position-relative">
                <Form.Control
                  type={show ? "text" : "password"}
                  name={field.controlID}
                  value={value}
                  onChange={(e) => handlePasswordChange(e, field.controlID)}
                  required={field.required}
                  placeholder={`Masukkan ${field.label}`}
                />
                <i
                  className={`bi ${
                    show ? "bi-eye-slash" : "bi-eye"
                  } position-absolute end-0 top-50 translate-middle-y me-3 text-muted`}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleShowPassword(field.controlID)}
                ></i>
              </div>

              {/* indikator kekuatan password */}
              {strength && (
                  <small
                    className={`mt-1 d-block fw-semibold ${
                      strength.includes("Sangat")
                        ? "text-primary"
                        : strength.includes("Kuat")
                        ? "text-success"
                        : strength.includes("Sedang")
                        ? "text-warning"
                        : "text-danger"
                    }`}
                  >
                    {strength}
                  </small>
                )}

            </Form.Group>
          );
        }

        // 🧾 SELECT FIELD
        if (field.formType.type === "select") {
          return (
            <Form.Group className="mb-3" key={`${field.controlID}-${index}`}>
              <Form.Label>
                {field.label}{" "}
                {field.required && <span className="text-danger">*</span>}
              </Form.Label>
              <Form.Select
                name={field.controlID}
                value={value}
                onChange={onChange}
                required={field.required}
              >
                <option value="">Pilih {field.label}</option>
                {field.formType.options?.map((opt, optIndex) => (
                  <option
                    key={`${field.controlID}-${opt[field.formType.key]}-${optIndex}`}
                    value={opt[field.formType.key]}
                  >
                    {opt[field.formType.val]}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          );
        }

        // ✏️ TEXT / NUMBER / EMAIL FIELD
        return (
          <Form.Group className="mb-3" key={`${field.controlID}-${index}`}>
            <Form.Label>
              {field.label}{" "}
              {field.required && <span className="text-danger">*</span>}
            </Form.Label>
            <Form.Control
              type={field.formType.type}
              name={field.controlID}
              value={value}
              onChange={onChange}
              required={field.required}
              placeholder={`Masukkan ${field.label}`}
            />
          </Form.Group>
        );
      })}

      <div className="mt-3 d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={onClose}>
          Batal
        </Button>
        <Button type="submit" variant="primary">
          Simpan Perubahan
        </Button>
      </div>
    </Form>
  );
}
