const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getContatti = async () => {
  const res = await fetch(`${API_URL}/api/contatti`);
  if (!res.ok) throw new Error("Errore nel recupero dei contatti");
  return res.json();
};
