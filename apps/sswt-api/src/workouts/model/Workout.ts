export class Workout {
  constructor(
    private _id: number | null,
    private _name: string,
    private readonly _date: Date,
    private readonly _userId: number
  ) {}

  get id(): number | null {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get date(): Date {
    return this._date;
  }

  get userId(): number {
    return this._userId;
  }
}
