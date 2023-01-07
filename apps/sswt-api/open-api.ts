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
    "/workouts/{workoutId}/exercises": {
      post: {
        description: "Add an exercise to a workout",
        required: true,
        parameters: [
          {
            name: "workoutId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Exercise",
              },
              example: {
                name: "Bech Press",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Created",
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
      Exercise: {
        type: "object",
        description: "A JSON object containing exercise information",
        properties: {
          name: {
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
