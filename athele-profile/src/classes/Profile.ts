import type Sport from "./Sports";

export interface IProfile {
  id: number,
  firstName: string,
  lastName: string,
  sports: Sport[],
  team: string,
  aboutMe: string,
  gender: string,
  hobbies: string[],
  profileImage: string,
  dateOfBirth: Date,
}

export default class Profile implements IProfile {
  constructor(
    public id: number = 0,
    public firstName: string = "",
    public lastName: string = "",
    public sports: Sport[] = [],
    public team: string = "",
    public aboutMe: string = "",
    public gender: string = "",
    public hobbies: string[] = [],
    public profileImage: string = "",
    public dateOfBirth: Date = new Date()
  ) { }
}