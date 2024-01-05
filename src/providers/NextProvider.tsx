"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

interface NextProviderProps {
  children: React.ReactNode;
}

export function NextProvider({ children }: NextProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
