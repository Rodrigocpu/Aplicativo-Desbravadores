import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  unidade: { type: String, enum: ["Selva", "Oceanos", "Estrela", "Fogo"], required: true },
  idade: { type: Number },
  telefone: { type: String },
  foto: { type: String },
  atividadesConcluidas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Atividade" }],
}, { timestamps: true });

export default mongoose.model("User", userSchema);
