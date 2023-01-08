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
        tags: ["Workouts"],
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
        tags: ["Exercises"],
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
                name: "Bench Press",
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
    "/workouts/{workoutId}/exercises/{exerciseId}": {
      put: {
        description: "Update an exercise in a workout",
        required: true,
        tags: ["Exercises"],
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
                name: "Bench Press",
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
      delete: {
        description: "Remove an exercise from a workout including all sets",
        required: true,
        tags: ["Exercises"],
        parameters: [
          {
            name: "workoutId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "exerciseId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Success",
          },
        },
      },
    },
    "/workouts/{workoutId}/exercises/{exerciseId}/sets": {
      post: {
        description: "Add a set to an exercise of a workout",
        required: true,
        tags: ["Sets"],
        parameters: [
          {
            name: "workoutId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "exerciseId",
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
                $ref: "#/components/schemas/Set",
              },
              example: {
                weight: 8025,
                reps: 5,
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
    "/workouts/{workoutId}/exercises/{exerciseId}/sets/{setId}": {
      put: {
        description: "Update a set",
        required: true,
        tags: ["Sets"],
        parameters: [
          {
            name: "workoutId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "exerciseId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "setId",
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
                $ref: "#/components/schemas/Set",
              },
              example: {
                weight: 8025,
                reps: 5,
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
      delete: {
        description: "Remove a set from an exercise of a workout",
        required: true,
        tags: ["Sets"],
        parameters: [
          {
            name: "workoutId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "exerciseId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
          {
            name: "setId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
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
      Exercise: {
        type: "object",
        description: "A JSON object containing exercise information",
        properties: {
          name: {
            type: "string",
          },
        },
      },
      Set: {
        type: "object",
        description: "A JSON object containing set information",
        properties: {
          weight: {
            type: "number",
          },
          reps: {
            type: "number",
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
  tags: [
    {
      name: "Workouts",
      description: "Workout related operations",
    },
    {
      name: "Exercises",
      description: "Exercise related operations",
    },
    {
      name: "Sets",
      description: "Set related operations",
    },
  ],
};
