import { type InferGetStaticPropsType, type GetStaticProps } from "next";
import SwaggerUI from "swagger-ui-react";
import { createSwaggerSpec } from "next-swagger-doc";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerUiExample({
  spec,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <SwaggerUI spec={spec} />;
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
