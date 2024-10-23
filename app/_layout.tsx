import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{headerShown:false}} name="index" />
      <Stack.Screen options={{headerShown:false}} name="cadastro" />
      <Stack.Screen options={{headerShown:false}} name="menu" />
      <Stack.Screen options={{headerShown:false}} name="admin" />
      <Stack.Screen options={{headerShown:false}} name="volei" />
      <Stack.Screen options={{headerShown:false}} name="futsal" />
      <Stack.Screen options={{headerShown:false}} name="basquete" />
      <Stack.Screen options={{headerShown:false}} name="bale" />
      <Stack.Screen options={{headerShown:false}} name="judo" />
      <Stack.Screen options={{headerShown:false}} name="natacao" />
      <Stack.Screen options={{ headerShown: false }} name="redefinirsenha" />
      
    </Stack>
  );
}
