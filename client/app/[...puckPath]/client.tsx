"use client";
import { Puck, Data, Render, Button } from "@puckeditor/core";
import headingAnalyzer from "@puckeditor/plugin-heading-analyzer";
import { Framework } from "../Framework";
import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export function Client({
  path,
  isEdit,
  framework,
}: {
  path: string;
  isEdit: boolean;
  framework: Framework;
}) {
  const config = require(`../configs/${framework}/`).default;
  const initialData = require(`../configs/${framework}/`).initialData || {};

  const key = `puck-demo:${framework}:${path}`;

  const [data] = useState<Data>(() => {
    if (isBrowser) {
      const dataStr = localStorage.getItem(key);

      if (dataStr) {
        return JSON.parse(dataStr);
      }

      return initialData[path] || undefined;
    }
  });

  useEffect(() => {
    if (!isEdit) {
      document.title = data?.root?.title || "";
    }
  }, [data, isEdit]);

  if (isEdit) {
    return (
      <div>
        <Puck
          config={config}
          data={data}
          onPublish={async (data: Data) => {
            localStorage.setItem(key, JSON.stringify(data));
          }}
          plugins={[headingAnalyzer]}
          headerPath={path}
          renderHeaderActions={() => (
            <>
              <Button href={path} newTab variant="secondary">
                View page
              </Button>
            </>
          )}
        />
      </div>
    );
  }

  if (data) {
    return <Render config={config} data={data} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;
