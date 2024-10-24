"use client";

import { phones } from "@/lib/data";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonTableProps {
  phoneIds: string[];
}

export function ComparisonTable({ phoneIds }: ComparisonTableProps) {
  const selectedPhones = phoneIds.map((id) => phones[id as keyof typeof phones]);

  const specs = [
    { key: "display", label: "Display" },
    { key: "processor", label: "Processor" },
    { key: "camera", label: "Camera" },
    { key: "battery", label: "Battery" },
    { key: "storage", label: "Storage" },
    { key: "os", label: "Operating System" },
  ];

  return (
    <div className="space-y-8">
      {/* Basic Info */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {selectedPhones.map((phone) => (
          <div key={phone.name} className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={phone.image}
                alt={phone.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{phone.name}</h2>
              <p className="text-xl font-bold text-blue-600 mt-2">{phone.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Specifications Comparison */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Specifications</TableHead>
              {selectedPhones.map((phone) => (
                <TableHead key={phone.name}>{phone.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {specs.map((spec) => (
              <TableRow key={spec.key}>
                <TableCell className="font-medium">{spec.label}</TableCell>
                {selectedPhones.map((phone) => (
                  <TableCell key={`${phone.name}-${spec.key}`}>
                    {phone.specs[spec.key as keyof typeof phone.specs]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pros and Cons */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold mb-4">Pros</h3>
          <Table>
            <TableBody>
              {selectedPhones.map((phone) => (
                <TableRow key={`${phone.name}-pros`}>
                  <TableCell className="font-medium w-[200px]">
                    {phone.name}
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-2">
                      {phone.pros.map((pro) => (
                        <li key={pro} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Cons</h3>
          <Table>
            <TableBody>
              {selectedPhones.map((phone) => (
                <TableRow key={`${phone.name}-cons`}>
                  <TableCell className="font-medium w-[200px]">
                    {phone.name}
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-2">
                      {phone.cons.map((con) => (
                        <li key={con} className="flex items-center">
                          <X className="h-4 w-4 text-red-500 mr-2" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}