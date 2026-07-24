const db = require("../config/db");

// GET semua project
exports.getProjects = (req, res) => {
    db.query("SELECT * FROM projects", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// POST project baru
exports.createProject = (req, res) => {
    const { title, description, image, github } = req.body;

    db.query(
        "INSERT INTO projects(title, description, image, github) VALUES (?, ?, ?, ?)",
        [title, description, image, github],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: "Project berhasil ditambahkan",
            });
        }
    );
};

// UPDATE project
exports.updateProject = (req, res) => {
    const { id } = req.params;
    const { title, description, image, github } = req.body;

    db.query(
        "UPDATE projects SET title=?, description=?, image=?, github=? WHERE id=?",
        [title, description, image, github, id],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Project berhasil diupdate",
            });
        }
    );
};

// DELETE project
exports.deleteProject = (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM projects WHERE id=?",
        [id],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Project berhasil dihapus",
            });
        }
    );
};