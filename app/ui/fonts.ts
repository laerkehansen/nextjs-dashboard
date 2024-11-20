import { Inter, Lusitana } from "next/font/google"; //her henter man sine fonts, tænk på det som props, derfor vi opdeler med komma

export const inter = Inter({ subsets: ["latin"] }); //her er hvilket "stil" den bliver hentet i

export const lusitana = Lusitana({
  weight: ["400", "700"], //med denne font skal den kunne hente to "weights"
  subsets: ["latin"],
});
