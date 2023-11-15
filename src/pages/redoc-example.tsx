import { type InferGetStaticPropsType, type GetStaticProps } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import { useState, useEffect } from "react";
import { RedocStandalone } from 'redoc';

export default function RedocExample({
  spec,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => setClientSide(true), []);
  if (!clientSide) {
    return null;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <RedocStandalone spec={spec} />;
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
