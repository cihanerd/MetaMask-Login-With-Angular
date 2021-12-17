import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import detectEthereumProvider from "@metamask/detect-provider";


@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient) {
        
    }
     ethereum:any;
    login() {
        
        
        return from(detectEthereumProvider()).pipe(
            // Step 1: Request (limited) access to users ethereum account
            switchMap(async (provider) => {
              if (!provider) {
                throw new Error('Please install MetaMask');
              }
              this.ethereum = provider;
              return await this.ethereum.request({ method: 'eth_requestAccounts' });
            }),
            
            
            );
      
    }
    logout(){
        
    }

    private toHex(stringToConvert: string) {
        return stringToConvert
          .split('')
          .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
          .join('');
      }

}
interface NonceResponse {
    nonce: string;
}
interface VerifyResponse {
    token: string;
}

