"use client";

import { useState } from "react";

import { Qualification } from "./Qualification";
import List from "../../ui/List";
import type { AboutValue } from "./AboutMe";

export function Benefits({ values }: { values: AboutValue[] }) {
  const [showText, setShowText] = useState<number | null>(null);

  return (
    <List
      title="Why I'm a Great Fit"
      item="benefits"
      data={values}
      renderItem={(value, index) => (
        <Qualification
          key={index}
          index={index}
          value={value}
          showText={showText}
          setShowText={setShowText}
        />
      )}
    ></List>
  );
}
