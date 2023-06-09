"use client";

import { Card as Cards } from "flowbite-react";
import { ReactNode } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <Cards className={className}>{children}</Cards>;
}
