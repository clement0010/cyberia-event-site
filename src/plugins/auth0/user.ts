/* eslint-disable */
type Roles = "admin" | "crewmate"

interface Role { 
  [key:string]: Roles
}

export default class User {
  sub?: string

  names?: string

  nickname?: string

  picture?: string

  updatedAt?: string

  email?: string

  emailVerified?: boolean

  provider?: string

  id?: string

  givenName?: string

  familyName?: string

  locale?: string

  [key: string]: string | boolean | Role | any | undefined

  constructor(auth0User: { [key: string]: string | boolean | undefined }) {
    if (!auth0User) return;
    for (const key in auth0User) {
      this[key] = auth0User[key];
    }

    this.sub = auth0User.sub as string;
    this.provider = this.sub.split('|')[0];
    this.id = this.sub.split('|')[1];
  }
}
