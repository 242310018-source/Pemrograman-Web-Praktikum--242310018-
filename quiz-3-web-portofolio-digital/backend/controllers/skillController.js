const db = require("../config/db");

// GET semua skill
exports.getSkills = (req, res) => {
  db.query("SELECT * FROM skills", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// POST skill
exports.createSkill = (req, res) => {
  const { name, level } = req.body;

  db.query(
    "INSERT INTO skills(name, level) VALUES (?, ?)",
    [name, level],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Skill berhasil ditambahkan",
      });
    }
  );
};

// UPDATE skill
exports.updateSkill = (req, res) => {
  const { id } = req.params;
  const { name, level } = req.body;

  db.query(
    "UPDATE skills SET name=?, level=? WHERE id=?",
    [name, level, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Skill berhasil diupdate",
      });
    }
  );
};

// DELETE skill
exports.deleteSkill = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM skills WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Skill berhasil dihapus",
      });
    }
  );
};