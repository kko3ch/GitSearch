import { Injectable } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User
  userName: string
  apiKey: string  
  constructor(private http: HttpClient) {
    this.apiKey = environment.myApiKey;
    this.userName = 'Ko3ch'
    this.user = new User(0,'','','','',0,'')
  }
  
  getUser(){
    
    interface ApiResponse{
      id: number;
      login: string;
      avatar_url: string;
      repos_url: string;
      bio: string;
      public_repos: number;
      html_url: string;
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName + '?access_token=&' + this.apiKey).toPromise().then(response=>{
        this.user.id = response.id
        this.user.userAvatar = response.avatar_url
        this.user.userName = response.login
        this.user.repoLink = response.repos_url
        this.user.bio = response.bio
        this.user.public_repos = response.public_repos
        this.user.url = response.html_url
        
        resolve();
      },
      error=>{
        this.user.userName = 'An errror occured!!'
        
        reject(error);
        
      })
    })
    return promise;
  } 
  repos: Repository[]
  getUserRepos(){
    
    interface ApiResponse{
      repos: any[]
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName + '/repos?access_token=&' + this.apiKey).toPromise().then(response=>{
        this.repos = response.repos
        
        console.log(this.repos)
        
        resolve();
      },
      error=>{
        this.user.userName = 'An errror occured!!'
        
        reject(error)
      })
    })
    return promise;
  }  
}
