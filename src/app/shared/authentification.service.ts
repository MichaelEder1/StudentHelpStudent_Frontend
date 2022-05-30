import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

interface Token {
  exp: number;
  user: {
    id: string;
    role:string;
    photo:string;
  };
}

@Injectable()
export class AuthenticationService {
  private api: string = "http://shs.s1910456008.student.kwmhgb.at/api/auth";

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }

  public isTutor() {
    return Number.parseInt(<string>sessionStorage.getItem("role")) == 1;
  }

  public getPhoto() {
    return <string>sessionStorage.getItem("photo");
  }

  public setSessionStorage(token: string) {
    //console.log("Storing token");
    //console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("role", decodedToken.user.role);
    sessionStorage.setItem("photo", decodedToken.user.photo);
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("photo");
    this.router.navigateByUrl("/");
    //console.log("logged out");
  }

  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = <string>sessionStorage.getItem("token");
      //console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        //console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
