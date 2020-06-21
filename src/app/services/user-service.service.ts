import { Injectable} from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  user: User
  repos: any
  userName: string

  constructor(private http: HttpClient) {
    this.userName = 'Ko3ch'
    this.user = new User(0,0,0,'','','','','',0,'')
  }

  upDateProfile(username: string){
    this.userName = username
  }
  
  getUser(){
    
    interface ApiResponse{
      id: number
      login: string
      name: string
      avatar_url: string
      repos_url: string
      bio: string
      public_repos: number
      html_url: string
      followers: number
      following: number
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName + '?access_token=&' + environment.myApiKey).toPromise().then(response=>{
        this.user.id = response.id
        this.user.userAvatar = response.avatar_url
        this.user.userName = response.login
        this.user.repoLink = response.repos_url
        this.user.bio = response.bio
        this.user.public_repos = response.public_repos
        this.user.url = response.html_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.name = response.name
        
        resolve();
      },
      error=>{
        this.user.userName = 'Check username again!!';
        reject(error);
        
      }),
      this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName + '/repos?access_token=&' + environment.myApiKey).toPromise().then(response=>{
        this.repos = response
      })
    })
    return promise;
  }   
  
}
