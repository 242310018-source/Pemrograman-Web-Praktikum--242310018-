import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contacts", form);

      alert("Pesan berhasil dikirim!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Gagal mengirim pesan.");
    }
  };

  return (
    <section id="contact" className="section dark">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Pesan"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Kirim</button>
      </form>
    </section>
  );
}

export default Contact;