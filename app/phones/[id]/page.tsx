import { PhoneDetails } from "@/components/phone-details";
import { phones } from "@/lib/data";

// Required for static site generation with `output: export`
export function generateStaticParams() {
  return Object.keys(phones).map((id) => ({
    id: id,
  }));
}

export default function PhonePage({ params }: { params: { id: string } }) {
  return <PhoneDetails id={params.id} />;
}