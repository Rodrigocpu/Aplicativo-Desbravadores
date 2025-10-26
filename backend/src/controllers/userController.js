import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-senha");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar perfil" });
  }
};
