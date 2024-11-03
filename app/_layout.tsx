import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{headerShown:false}} name="index" />
      <Stack.Screen options={{headerShown:false}} name="cadastro" />
      <Stack.Screen options={{headerShown:false}} name="menu" />
      <Stack.Screen options={{headerShown:false}} name="admin" />
      <Stack.Screen options={{headerShown:false}} name="CadastroProf" />
      <Stack.Screen options={{headerShown:false}} name="tabelaProfessores" />
      <Stack.Screen options={{headerShown:false}} name="tabelaAlunos" />
    </Stack>
  );
}