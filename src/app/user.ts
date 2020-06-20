export class User {
  constructor(
    public id: number, 
    public userName: string, 
    public userAvatar: string,
    public url: string, 
    public bio: string, 
    public public_repos: number,
    public repoLink: string){
  }

}