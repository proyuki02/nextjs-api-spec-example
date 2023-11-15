import { type InferGetStaticPropsType, type GetStaticProps } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import { API } from "@stoplight/elements";
import "@stoplight/elements/styles.min.css";
import { useEffect, useState } from "react";

export default function StoplightElementsExample({
  spec,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => setClientSide(true), []);
  if (!clientSide) {
    return null;
  }

  return (
    <API
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      apiDescriptionDocument={spec}
      router="hash"
      layout="sidebar"
    />
  );
}

export const getStaticProps: GetStaticProps = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: "src/pages/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
    },
  });
  return {
    props: {
      spec,
    },
  };
};
