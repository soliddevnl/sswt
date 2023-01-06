# Simple Workout Tracker Api

## Description

This project contains a simple REST api for the Simple Workout Tracker app. It is built using express and mongodb.

## Routes

### GET /api/workouts

Returns a list of all workouts.

### GET /api/workouts/:id

Returns a single workout by id.

### POST /api/workouts

Creates a new workout.

Request body:

```JSON
{
    "name": "Workout Name"
}
```

### PUT /api/workouts/:id

Updates a workout.

```JSON
{
    "name": "Workout Name"
}
```

### DELETE /api/workouts/:id

Deletes a workout.

### GET /api/workouts/:id/exercises

Returns a list of all exercises for a workout.

### GET /api/workouts/:id/exercises/:id

Returns a single exercise for a workout.

### POST /api/workouts/:id/exercises

Creates a new exercise for a workout.

```JSON
{
    "name": "Exercise Name",
    "sets": 3,
    "reps": 10,
    "weight": 100
}
```

### PUT /api/workouts/:id/exercises/:id

Updates an exercise for a workout.

```JSON
{
    "name": "Exercise Name",
    "sets": 3,
    "reps": 10,
    "weight": 100
}
```

### DELETE /api/workouts/:id/exercises/:id

Deletes an exercise for a workout.

### GET /api/workouts/:id/exercises/:id/sets

Returns a list of all sets for an exercise.

### GET /api/workouts/:id/exercises/:id/sets/:id

Returns a single set for an exercise.

### POST /api/workouts/:id/exercises/:id/sets

Creates a new set for an exercise.

```JSON
{
    "reps": 10,
    "weight": 100
}
```

### PUT /api/workouts/:id/exercises/:id/sets/:id

Updates a set for an exercise.

```JSON
{
    "reps": 10,
    "weight": 100
}
```

### DELETE /api/workouts/:id/exercises/:id/sets/:id

Deletes a set for an exercise.

## Running the app

To run the app, you will need to have mongodb installed and running. Then, run the following commands:

```bash
npm install
npm start
```
