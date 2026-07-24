const db = require("../config/db");

// GET semua contact
exports.getContacts = (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// POST contact
exports.createContact = (req, res) => {
  const { name, email, message } = req.body;

  db.query(
    "INSERT INTO contacts(name,email,message) VALUES (?,?,?)",
    [name, email, message],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Pesan berhasil dikirim"
      });
    }
  );
};

// DELETE contact
exports.deleteContact = (req, res) => {
  db.query(
    "DELETE FROM contacts WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Pesan berhasil dihapus"
      });
    }
  );
};