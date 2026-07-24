import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

function Admin() {
  const [projects, setProjects] = useState([]);

  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await axios.get(API_URL);

        if (mounted) {
          setProjects(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const refreshData = async () => {
    try {
      const res = await axios.get(API_URL);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setId(null);
    setTitle("");
    setDescription("");
    setGithub("");
    setImage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      github,
      image,
    };

    try {
      if (id === null) {
        await axios.post(API_URL, data);
        alert("Project berhasil ditambahkan");
      } else {
        await axios.put(`${API_URL}/${id}`, data);
        alert("Project berhasil diupdate");
      }

      resetForm();
      refreshData();
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    }
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm("Yakin ingin menghapus project?")) return;

    try {
      await axios.delete(`${API_URL}/${projectId}`);
      refreshData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setGithub(project.github);
    setImage(project.image);
  };

return (
<section className="admin-section">

<h2>Admin Project</h2>

<form className="admin-form" onSubmit={handleSubmit}>

<input
type="text"
placeholder="Judul Project"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<textarea
placeholder="Deskripsi"
value={description}
onChange={(e)=>setDescription(e.target.value)}
required
/>

<input
type="text"
placeholder="Github"
value={github}
onChange={(e)=>setGithub(e.target.value)}
required
/>

<input
type="text"
placeholder="Image"
value={image}
onChange={(e)=>setImage(e.target.value)}
required
/>

<button type="submit">
{id===null?"Tambah Project":"Update Project"}
</button>

</form>

<table className="admin-table">

<thead>

<tr>
<th>ID</th>
<th>Judul</th>
<th>Github</th>
<th>Aksi</th>
</tr>

</thead>

<tbody>

{projects.map((project)=>(

<tr key={project.id}>

<td>{project.id}</td>

<td>{project.title}</td>

<td>{project.github}</td>

<td>

<button
className="btn-edit"
onClick={()=>handleEdit(project)}
>
Edit
</button>

<button
className="btn-delete"
onClick={()=>handleDelete(project.id)}
>
Hapus
</button>

</td>

</tr>

))}

</tbody>

</table>

</section>
);

}

export default Admin;