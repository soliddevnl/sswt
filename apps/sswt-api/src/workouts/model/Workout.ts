export class Workout {
  constructor(private _name: string, private _date: Date, private _userId: number) {}

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
