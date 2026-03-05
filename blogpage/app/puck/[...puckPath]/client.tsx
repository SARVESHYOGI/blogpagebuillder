"use client";

import type { Data } from "@puckeditor/core";
import { createAiPlugin } from "@puckeditor/plugin-ai";
import { Puck, Config, DropZone, Overrides } from "@puckeditor/core";
import config from "../../../puck.config";
import { useEffect } from "react";

const aiPlugin = createAiPlugin();

const overrides: Partial<Overrides> = {
  iframe: ({ children, document }) => {
    useEffect(() => {
      if (document) {
        const script = document.createElement("script");
        script.src = "https://cdn.tailwindcss.com";
        document.head.appendChild(script);
      }
    }, [document]);

    return <>{children}</>;
  },
};

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <Puck
      overrides={overrides}
      iframe={{}}
      plugins={[aiPlugin]}
      config={config}
      data={data}
      onPublish={async (data) => {
        await fetch("/api/pages", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
