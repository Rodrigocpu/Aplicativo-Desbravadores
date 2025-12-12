import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import api from "../api/api";
import colors from "../../../app/constants/colors";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, senha });
      Alert.alert("Bem-vindo!", `Olá, ${res.data.user.nome}`);
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Erro", error.response?.data?.message || "Falha no login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.background },
  title: { fontSize: 28, color: colors.primary, fontWeight: "bold", marginBottom: 24 },
  input: { width: "80%", height: 48, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 16, marginVertical: 8, borderWidth: 1, borderColor: "#ccc" },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 10, width: "80%", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
  link: { marginTop: 15, color: colors.secondary },
});
