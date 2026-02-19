import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/lib/i18n";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
