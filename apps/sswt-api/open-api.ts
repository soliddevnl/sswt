export default {
  openapi: "3.0.0",
  info: {
    title: "Super Simple Workout Tracker API",
    description: "Super Simple Workout Tracker API",
    version: "1.0",
  },
  servers: [
    {
      url: "http://localhost:8000/api/v1",
    },
  ],
  produces: ["application/json"],
  basePath: "/api/v1",
  paths: {
    "/workouts": {
      post: {
        description: "Create a workout",
        required: true,
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Workout",
              },
              example: {
                name: "My Workout",
                date: "2021-01-01 00:00:00",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Success",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Workout: {
        type: "object",
        description: "A JSON object containing workout information",
        properties: {
          name: {
            type: "string",
          },
          date: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};
