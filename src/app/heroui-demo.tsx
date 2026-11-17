"use client";

import { Button, Chip } from "@heroui/react";

export function HeroUIDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button color="primary">HeroUI is ready</Button>
      <Chip color="success" variant="flat">
        Tailwind v4
      </Chip>
    </div>
  );
}
