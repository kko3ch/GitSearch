export class User {
  constructor(
    public id: number,
    public followers: number,
    public following: number, 
    public userName: string, 
    public name: string,
    public userAvatar: string,
    public url: string, 
    public bio: string, 
    public public_repos: number,
    public repoLink: string){
  }
}